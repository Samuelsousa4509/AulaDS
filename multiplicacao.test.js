const multiplicacao = require('./multiplicacao');
test ('Deve multiplicar dois numeros', () => {
    expect(multiplicacao(20, 3)).toBe(60);
});