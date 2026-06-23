const biblioteca = {
    livros: [],

    adicionarLivros(nome, preco, categoria, estoque) {
        const livro = {
            nome,
            preco,
            categoria,
            estoque
        };

        this.livros.push(livro);

        console.log("Produto adicionado:", livro.nome);
    },

    mostrarLivros() {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];
            console.log(`${p.nome} - ${p.preco}`);
        }
    }
};


biblioteca.adicionarLivros(
    "As 48 Leis do Poder",
    "R$ 89,90",
    "Negócios e Desenvolvimento Pessoal",
    210
);

biblioteca.mostrarLivros();