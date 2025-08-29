export interface Class<T> {
  new (...args: unknown[]): T;
}

export type ProviderToken<T> = Class<T>;

export interface Provider<T = unknown> {
  provide: ProviderToken<T>;
  useClass: Class<T>;
}

export interface Container {
  configure(providers: ReadonlyArray<Provider>): void;
  get<T>(token: ProviderToken<T>): T;
}

export function inject<T>(token: ProviderToken<T>): T {
  throw new Error('Not implemented');
}
