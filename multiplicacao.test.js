const multiplicacao = require('./multiplicacao');


test ('Deve multiplicar dois numeros', () => {
    expect(multiplicacao(20, 3)).toBe(60);
});

test ('Deve multiplicar dois números negativos', () => {
    expect(multiplicacao(-5, -2)).toBe(10);
});

test ('Deve multiplicar um positivo e negativo', () => {
    expect(multiplicacao(-4, 6)).toBe(-24);
});

test ('Deve multiplicar dos numeros e falhar', () => {
    expect(multiplicacao(3, 2)).toBe(5);
});

