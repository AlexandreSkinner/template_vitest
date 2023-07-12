import { describe, test, expect } from 'vitest';
import Person from '@/index';

describe('teste operacoes aritmeticas', () => {
  test('testa soma', () => {
    expect(1 + 2).toBe(3);
  });
  test('testa subtração', () => {
    expect(3 - 2).toBe(1);
  });
  test('testa multiplicação', () => {
    expect(3 * 2).toBe(6);
  });
});

describe('teste operacoes Pessoa', () => {
  test('testa Pessoa', () => {
    const person = new Person();
    expect(person.sayName()).toBe('Skinner');
  });
});
