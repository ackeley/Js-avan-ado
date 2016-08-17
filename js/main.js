var lista = [
    {"desc":"rice","amount":"1","value":"5.40"},
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

function setList(lista){
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>value</td><td>Action</td></tr></thead><tbody>';

    for(key in lista){
        table += '<tr><td>'+formatDesc(lista[key].desc)+'</td><td>'+lista[key].amount+'</td><td>'+formatValue(lista[key].value)+'</td><td><button class="btn btn-warning" onclick="setUpdate('+key+');">Editar</button> | Delete</td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

// Função para converter primeira em maiuscula
function formatDesc(desc){
   var str = desc.toLowerCase();
   str = str.charAt(0).toUpperCase() + str.slice('1');
   return str;
}

function formatValue(value){
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".",",");
    str = "R$ "+str;
    return str;
}

function adicionar(){
    var descricao   = document.getElementById('desc').value;
    var qtde        = document.getElementById('qtde').value;
    var valor       = document.getElementById('valor').value;

    lista.unshift({"desc":descricao,"amount":qtde, "value":valor});
    setList(lista);

}

function setUpdate(id){
    var obj = lista[id];
    document.getElementById('desc').value   = obj.desc;
    document.getElementById('qtde').value   = obj.qtde;
    document.getElementById('valor').value = obj.valor;

    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";
}

function resetForm(){
        document.getElementById('desc').value = "";
        document.getElementById('qtde').value = "";
        document.getElementById('valor').value= "";
        document.getElementById("btnAdd").style.display = "inline-block";
        document.getElementById("btnUpdate").style.display = "none";
}

setList(lista);
console.log(getTotal(lista));