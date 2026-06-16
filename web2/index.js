console.log("Hello world!");
let a=10;
let b=20;
let sum=a+b;
console.log("SOMA " + sum);
//typeof
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (sum));
a="Olá";
console.log(typeof (a));

console.log("Tipo de variaveis em JS");
//tipos de variaveis em JS
//Tipos primitivos do JS
let number = 42; // tipo number
let numberdecimal = 3.14; //tipo number
let string = "Hello, world"; // tipo string
let boolean = true; //tipo boolean
let nullValue = null; //tipo null
let undefinedValue;
let bla;
// tipo objeto
let object = { name: " Alice ", age: 20};
let object2 = { name: "Felipe", age: 19};
console.log("Nome: "+object.name);
console.log("Idade: " + object2.age);

//tipo array JS
let array = [1, 2, 3, 4, 5];
let array2 = ["apple", "banana", "cherry"];
let nomes=[];
nomes.push("Felipe");
nomes.push("Maria");
nomes.push("João");
console.log(nomes);

//formas de definição de varaiveis em JS
// var, let, const
var xGlobal = "Sou uma variavel global";
if(true){
    let xLocal = "Sou uma variavel local";
    console.log(xGlobal);
    console.log(xLocal);
}
console.log(xGlobal);
//console.log(xLocal); Erroc: xLocal is not defined
const PI = 3.14; // constante, não pode ser reatribuida

//função em JS
function soma(a,b){
    return a+b;
}

console.log("A soma de 5 e 10 é: " + soma(5,10));
console.log("A soma de 3.55 e 2.5 é: " + soma("2", "3"));

//função anônima
()=>{
    console.log("Sou uma função anônima");
}

//classes em JS number, math, strings, array, date, json

let meuNumber = Number("42");
console.log(meuNumber);

Math.sqrt(16); // raiz quadrada
Math.pow(2,3); // potencia
Math.random(); // numero aleatorio entre 0 e 1
let min=1; max=100;
let random=Math.random()*(max-min) + min;