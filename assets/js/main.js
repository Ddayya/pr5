'use strict';

let salaries = {
    John: 100,  
    Ann: 160,
    Pete: 130
}
let sum = salaries.John + salaries.Ann + salaries.Pete
alert(sum);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};  
function multiplyNumeric(menu){
    for(let key in menu){
      if(typeof menu[key]=== 'number'){
        menu[key]*=2;
      }
    }
}
multiplyNumeric(menu);
console.log(menu);


let calculator = {
    read(){
        this.a=Number(prompt('Введите первое число'));
        this.b=Number(prompt('Введите второе число'));
      },
      sum(){
        return this.a+this.b;
      },
      mul(){
        return this.a*this.b;
      }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());


let price = '$120';
function extractCurrencyValue(str){
    return + str.slice(1);
}
console.log(extractCurrencyValue(price));

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item=>item.name);
console.log(names);
alert( names );


let number = [
    {age: 3}, 
    {age: 4}, 
    {age: 5}, 
];
function getAverageAge(users){
    let sum = users.reduce((accum, item) => {
        return accum += item.age;
    }, 0);
    return sum/users.length;
};
alert(getAverageAge(number));
