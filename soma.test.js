const soma = require('./soma')

test('Deve somar dois numeros', () => {
    const resultado = soma(5, 10);
    expect(resultado).toBe(15);
});