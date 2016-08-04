var lista = [
    {"desc":"Rice","amount":"1","value":"5.40"},
    {"desc":"Beer","amount":"12","value":"1.99"},
    {"desc":"Meat","amount":"1","value":"15.00"}
];

function getTotal(lista){
    var total = 0;
    for(var key in lista){
        total += lista[key].value * lista[key].amount;
    }
    return total;
}

console.log(getTotal(lista));