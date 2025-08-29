export interface Class<T> {
  new (...args: unknown[]): T;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export interface Abstract<T> extends Function {
  prototype: T;
}

export type ProviderToken<T> = Class<T> | Abstract<T> | string;

interface BaseProvider<T = unknown> {
  provide: ProviderToken<T>;
}

interface UseClass<T> extends BaseProvider<T> {
  useClass: Class<T>;
  scope?: 'singleton' | 'transient';
}

interface UseValue<T> extends BaseProvider<T> {
  useValue: T;
}

interface UseFactory<T> extends BaseProvider<T> {
  useFactory: () => T;
  scope?: 'singleton' | 'transient';
}

export type Provider<T = unknown> = Class<T> | UseClass<T> | UseValue<T> | UseFactory<T>;

let __container: Container | undefined;

export class Container {
  private readonly providers = new Map<ProviderToken<unknown>, Provider>();
  private readonly singletons = new Map<ProviderToken<unknown>, unknown>();
  private readonly building = new Set<ProviderToken<unknown>>();

  private constructor() {}

  public static configure(providers: ReadonlyArray<Provider>): Container {
    const container = new Container();

    for (const provider of providers) {
      const token = typeof provider === 'function' ? provider : provider.provide;
      container.providers.set(token, provider);
    }

    __container = container;
    return container;
  }

  public get<T>(token: ProviderToken<T>): T {
    const provider = this.providers.get(token);
    if (!provider) {
      throw new Error(`Provider for token "${describe(token)}" not found`);
    }

    const singleton = this.singletons.get(token);
    if (singleton) {
      return singleton as T;
    }

    if ('useValue' in provider) {
      return provider.useValue as T;
    }

    if (this.building.has(token)) {
      throw new Error('Circular dependency detected');
    }

    try {
      this.building.add(token);
      if ('useFactory' in provider) {
        const instance = provider.useFactory();
        const scope = provider.scope ?? 'singleton';
        if (scope === 'singleton') {
          this.singletons.set(token, instance);
        }
        return instance as T;
      }

      const scope = typeof provider === 'function' ? 'singleton' : (provider.scope ?? 'singleton');
      const classConstructor = typeof provider === 'function' ? provider : provider.useClass;
      const instance = new classConstructor();
      if (scope === 'singleton') {
        this.singletons.set(token, instance);
      }

      return instance as T;
    } finally {
      this.building.delete(token);
    }
  }
}

export function describe<T>(token: ProviderToken<T>): string {
  if (typeof token === 'string') {
    return token;
  }
  return token.name;
}

export function inject<T>(token: ProviderToken<T>): T {
  if (!__container) {
    throw new Error('DI Container was not configured.');
  }

  return __container.get(token);
}
