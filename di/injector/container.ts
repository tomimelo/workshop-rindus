interface Class<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
}

export type InjectionToken = string;

interface BaseManifest {
  token: InjectionToken;
}

interface ValueManifest<T> extends BaseManifest {
  useValue: T;
}

interface ClassManifest<T> extends BaseManifest {
  useClass: Class<T>;
  dependencies?: Array<InjectionToken>;
}

export type Manifest<T> = ValueManifest<T> | ClassManifest<T>;

export class Container {
  private dependencies = new Map<InjectionToken, Manifest<unknown>>();

  public get<T>(token: InjectionToken): T {
    const manifest = this.dependencies.get(token);
    this.assertManifestExists(manifest, token);

    if ('useValue' in manifest) {
      return manifest.useValue as T;
    }

    const classConstructor = manifest.useClass;
    const dependencies = (manifest.dependencies ?? []).map((dep) => {
      return this.get(dep);
    });

    return new classConstructor(...dependencies) as T;
  }

  private assertManifestExists<T>(manifest: Manifest<T> | undefined, token: InjectionToken): asserts manifest is Manifest<T> {
    if (!manifest) {
      throw new Error(`No manifest found for token "${token}"`);
    }
  }

  public register<T>(manifest: Manifest<T>): void {
    this.dependencies.set(manifest.token, manifest);
  }

  public validate(token: InjectionToken): void {
    return this.validateTokenDependencies(token);
  }

  private validateTokenDependencies(token: string, dependenciesSeen: Set<InjectionToken> = new Set()): void {
    const manifest = this.dependencies.get(token);
    this.assertManifestExists(manifest, token);

    if ('useValue' in manifest) {
      return;
    }

    const dependencies = manifest.dependencies ?? [];

    if (!dependencies.length) {
      return;
    }

    dependencies.forEach((dep) => {
      if (dependenciesSeen.has(dep)) {
        throw new Error('Circular dependency detected');
      }
      const dependenciesSeenClone = new Set(dependenciesSeen);
      dependenciesSeenClone.add(dep);
      this.validateTokenDependencies(token, dependenciesSeenClone);
    });
  }
}
