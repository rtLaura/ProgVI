let carrinhos = [ 
    { produto: "Coxinha", preco: 6.5 },
    { produto: "Suco", preco: 4 },
    { produto: "Chocolate", preco: 3.5 },
    { produto: "Combo Lanche", preco: 12 },
    ];

let carrinhoFilter = carrinho.filter(function (elem) {
    return elem.preco < 5;
});

carrinhoFilter.map((elem) => 
    console.log("Produto: " + elem.produto + " Valor: R$" + elem.preco),
);