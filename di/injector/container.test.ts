import {describe, it} from 'node:test';
import assert from 'node:assert';
import {Container} from './container.ts';

describe(Container.name, () => {
  describe('when token has no association', () => {
    it('should throw an exception', () => {
      const container = new Container();
      assert.throws(() => container.get('TOKEN'), Error);
    });
  });

  it('should allow associating a token with a specific value', () => {
    const token = 'TOKEN';
    const value = 'value';
    const container = new Container();
    container.register({token, useValue: value});
    assert.strictEqual(container.get(token), value);
  });

  describe('when configuring a token association with a class', () => {
    class TestClass {}

    it('should return an instance of that class when token is requested', () => {
      const token = 'TOKEN';
      const container = new Container();
      container.register({token, useClass: TestClass});
      const instance = container.get(token);
      assert.ok(instance instanceof TestClass);
    });

    describe('with nested dependencies', () => {
      it('should return an instance of that class when token is requested', () => {
        class DepA {
          public constructor(public depB: DepB) {}
        }

        class DepB {
          public constructor(public depValue: string) {}
        }

        const depValue = 'dep-value';

        const depAToken = 'DEP_A';
        const depBToken = 'DEP_B';
        const depValueToken = 'DEP_VALUE';
        const container = new Container();
        container.register({token: depAToken, useClass: DepA, dependencies: [depBToken]});
        container.register({token: depBToken, useClass: DepB, dependencies: [depValueToken]});
        container.register({token: depValueToken, useValue: depValue});
        const depA = container.get(depAToken) as DepA;
        assert.ok(depA.depB instanceof DepB);
        assert.strictEqual(depA.depB.depValue, depValue);
      });

      it('should throw an exception if there is a circular dependency', () => {
        class CircularA {
          public constructor(public circularB: CircularB) {}
        }

        class CircularB {
          public constructor(public circularC: CircularC) {}
        }

        class CircularC {
          public constructor(public circularA: CircularA) {}
        }

        const depAToken = 'DEP_A';
        const depBToken = 'DEP_B';
        const depCToken = 'DEP_C';
        const container = new Container();
        container.register({token: depAToken, useClass: CircularA, dependencies: [depBToken]});
        container.register({token: depBToken, useClass: CircularB, dependencies: [depCToken]});
        container.register({token: depCToken, useClass: CircularC, dependencies: [depAToken]});

        assert.throws(() => container.validate(depAToken), /circular/i);
      });

      // it('should throw an exception if a nested dependency is missing', () => {});
    });
  });
});
