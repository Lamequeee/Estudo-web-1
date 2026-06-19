console.log("Hello world");

var nome = "João";

function soma(a,b){

}
if(true){
    let idade=19;
    console.log(idade);
    console.log(nome);
    console.log(soma(idade,1));
}

const PI = 3.14;
//PI = 3.1415; //isso vai gerar um erro, pois PI é constante
console.log(PI);
//Tipo de dado abstrato
let pessoa={
    nome: "Felipe",
    nascimento: 2007,
    cidade:"Blumenau"
    }

    console.log("Nome: "+pessoa.nome + ", Nascimento: "+pessoa.nacimento);
    console.log(`Nome: ${pessoa.nome}`);

    let array = [];
    array.push("Maça");
    array.push(1);
    array.push(true);

    console.log(array);
    array.pop()//retirar o ultimo valor do array
    //bollean
    let isStudent = true;
    console.log(isStudent);

    let nomeCompleto = "Maria"+"Silva";
    console.log(nomeCompleto);

    nomeCompleto=nomeCompleto.toLocaleUpperCase()
    console.log(nomeCompleto);
    //split regex separa string de dois em dois caracteries aabbccdd
    nomeCompleto=nomeCompleto.split("").reverse().join("");
    console.log(nomeCompleto);

    let min, max;
    min = 0;
    max = 100;
    random = Math.random();
    console.log(random) //Gera um numero aleatorio
    console.log(random*(max-min)+min);