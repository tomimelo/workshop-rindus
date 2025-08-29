import {describe, it} from 'node:test';
import assert from 'node:assert';
import {fromPromise, Observable, of} from './observable.ts';

describe(Observable.name, () => {
  it('teardown logic', async () => {
    let teardownCount = 0;

    const teardownLogic = () => {
      teardownCount++;
    };

    const EMPTY = new Observable((observer) => {
      observer.complete();
      return teardownLogic;
    });
    assert.deepStrictEqual(await consumeSource(EMPTY), []);
    assert.strictEqual(teardownCount, 1);
    assert.deepStrictEqual(await consumeSource(EMPTY), []);
    assert.strictEqual(teardownCount, 2);

    const NEVER = new Observable(() => {
      return teardownLogic;
    });
    const sub = NEVER.subscribe({});
    assert.strictEqual(teardownCount, 2);
    sub.unsubscribe();
    assert.strictEqual(teardownCount, 3);
    sub.unsubscribe();
    assert.strictEqual(teardownCount, 3);

    const overEmittingSource = new Observable((observer) => {
      observer.next(1);
      observer.complete();
      observer.next(2);
      observer.error(new Error('Oops!'));
      return teardownLogic;
    });
    assert.deepStrictEqual(await consumeSource(overEmittingSource), [1]);
    assert.strictEqual(teardownCount, 4);

    const expectedError = new Error('Oops!');
    const errorObservable = new Observable((observer) => {
      observer.error(expectedError);
      return teardownLogic;
    });

    await consumeSource(errorObservable)
      .then(() => {
        assert.fail('Expected source to error but it emitted successfully');
      })
      .catch((err) => {
        assert.strictEqual(err, expectedError);
        assert.strictEqual(teardownCount, 5);
      });
  });

  it('of', async () => {
    const source = of(1, 2, 3);
    assert.deepStrictEqual(await consumeSource(source), [1, 2, 3]);
  });

  it('fromPromise', async () => {
    const source = fromPromise(Promise.resolve('some-value'));
    assert.deepStrictEqual(await consumeSource(source), ['some-value']);
  });

  async function consumeSource<T>(source: Observable<T>): Promise<ReadonlyArray<T>> {
    return new Promise<ReadonlyArray<T>>((resolve, reject) => {
      const values: Array<T> = [];
      source.subscribe({
        next: (value) => {
          values.push(value);
        },
        error: (err) => {
          reject(err);
        },
        complete: () => {
          resolve(values);
        },
      });
    });
  }
});
