const { sumar, restar, multiplicar , dividir} = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(restar(5, 3)).toBe(2);
});

test ('Multiplica 2 * 3 y devuelve 6', () => {
    expect(multiplicar(2, 3)).toBe(6);
});

test ('Divide 6 / 3 y devuelve 2', () => {
    expect(dividir(6, 3)).toBe(2);
});