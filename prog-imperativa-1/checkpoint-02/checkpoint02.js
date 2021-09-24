let produtos = [
    {
        nome: 'iPhone 13',
        valor: 799,
        qualidade: 8,
        status: true, 
    },
    {
        nome: 'iPad Air',
        valor: 599,
        qualidade: 8,
        status: true, 
    },
    {
        nome: 'iMac M1',
        valor: 1699,
        qualidade: 10,
        status: true,
    },
    {
        nome: 'Watch 7',
        valor: 399,
        qualidade: 10,
        status: false, 
    }
];

let filtro = produtos.filter(produto => {
    return produto.valor >= 482 && 
    produto.valor <= 1600 && 
    produto.qualidade > 6 && 
    produto.status == true;  
});

let carrinho = filtro.map(produto => {
    return `${produto.nome}: US$ ${produto.valor}`
});

console.log(carrinho);

let valorTotal = filtro.reduce((soma, produto) => {
    return soma + produto.valor;
}, 0);

console.log(`O valor de sua compra é de US$ ${valorTotal}`);


