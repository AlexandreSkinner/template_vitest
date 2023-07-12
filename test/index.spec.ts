import { describe, test, expect } from 'vitest';
import { soma, subtracao, multiplicacao } from '@/one/two/operacoes';
import { Person } from '@/index';

describe('teste operacoes aritmeticas', () => {
  test('testa soma', () => {
    const resultado = soma(2, 1);
    const esperado = 3;
    expect(resultado).toBe(esperado);
  });
  test('testa subtração', () => {
    const resultado = subtracao(2, 1);
    const esperado = 1;
    expect(resultado).toBe(esperado);
  });
  test('testa multiplicação', () => {
    const resultado = multiplicacao(2, 3);
    const esperado = 6;
    expect(resultado).toBe(esperado);
  });
});

describe('teste operacoes Pessoa', () => {
  test('testa Pessoa', () => {
    const person = new Person();
    expect(person.sayName()).toBe('Alexandre Skinner');
  });
});
