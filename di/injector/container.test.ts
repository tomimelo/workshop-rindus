import {describe, it} from 'node:test';
import assert from 'node:assert';
import {Container, inject} from './container.ts';

describe(Container.name, () => {
  class ServiceA {}

  class ServiceB {
    public A = inject(ServiceA);
  }

  it('should throw an error if provider is not defined', () => {
    const container = Container.configure([]);
    assert.throws(() => container.get(ServiceA), /provider .* not found/i);
  });

  it('should support useClass provider', () => {
    const container = Container.configure([{provide: ServiceA, useClass: ServiceA}]);
    const service = container.get(ServiceA);
    assert.ok(service instanceof ServiceA);
  });

  it('should allow nested dependencies', () => {
    const container = Container.configure([ServiceA, ServiceB]);
    const serviceA = container.get(ServiceA);
    const serviceB = container.get(ServiceB);
    assert.strictEqual(serviceA, serviceB.A);
  });

  it('should be singleton instance for "singleton" scope', () => {
    const container = Container.configure([ServiceA]);
    const a1 = container.get(ServiceA);
    const a2 = container.get(ServiceA);
    assert.strictEqual(a1, a2);
  });

  it('should support useValue provider', () => {
    const myValue = {test: 'ok'};
    const container = Container.configure([{provide: 'VALUE', useValue: myValue}]);
    const value = container.get('VALUE');
    assert.strictEqual(value, myValue);
  });

  it('should support useFactory provider', () => {
    const factoryValue = {test: 'ok'};
    const container = Container.configure([{provide: 'FACTORY', useFactory: () => factoryValue}]);
    const value = container.get('FACTORY');
    assert.strictEqual(value, factoryValue);
  });

  it('should support class provided alone', () => {
    const container = Container.configure([ServiceA]);
    const service = container.get(ServiceA);
    assert.ok(service instanceof ServiceA);
  });

  it('should prevent circular dependencies', {timeout: 200}, () => {
    class CircularA {
      public B = inject(CircularB);
    }

    class CircularB {
      public A = inject(CircularA);
    }

    const container = Container.configure([CircularA, CircularB]);

    assert.throws(() => container.get(CircularA), /circular/i);
  });

  it('should support transient scope', () => {
    const container = Container.configure([{provide: ServiceA, useClass: ServiceA, scope: 'transient'}]);
    const a1 = container.get(ServiceA);
    const a2 = container.get(ServiceA);
    assert.notStrictEqual(a1, a2);
  });
});
