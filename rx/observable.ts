export type TeardownLogic = () => void;

export interface Observer<T> {
  next: (value: T) => void;
  error: (err: unknown) => void;
  complete: () => void;
}

export interface Subscription {
  unsubscribe(): void;
}

export class Observable<T> {
  public constructor(private readonly subscriber: (observer: Observer<T>) => TeardownLogic | void) {}
  public subscribe(observer: Partial<Observer<T>>): Subscription {
    let teardownLogic: TeardownLogic | void;
    let closed = false;

    const unsubscribe = () => {
      closed = true;
      teardownLogic?.();
      teardownLogic = undefined;
    };

    teardownLogic = this.subscriber({
      next: (value) => {
        if (!closed) {
          observer.next?.(value);
        }
      },
      error: (err) => {
        if (!closed) {
          observer.error?.(err);
          unsubscribe();
        }
      },
      complete: () => {
        if (!closed) {
          observer.complete?.();
          unsubscribe();
        }
      },
    });

    if (closed) {
      unsubscribe();
    }

    return {
      unsubscribe,
    };
  }
}

export function of<T>(...values: ReadonlyArray<T>): Observable<T> {
  return new Observable((observer) => {
    for (const value of values) {
      observer.next(value);
    }
    observer.complete();
  });
}

export function fromPromise<T>(promise: Promise<T>): Observable<T> {
  return new Observable((observer) => {
    promise
      .then((value) => {
        observer.next(value);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      });
  });
}
