console.log('hello da');
// alert('hey prabu u did it, good luck my boy')
// commente line do not read 

// variable 

// var x ='smoothie';
// console.log(x);
// var y = 200;
// console.log(y);

// var age= prompt('what is your age now ?');
// document.getElementById('someText').innerHTML=age;

/////////////////////////////////////////////////////

console.log(5*10);
console.log(5/10);
console.log(5+10);
console.log(5-10);

var num2 = 500;
num2= num2+124;
console.log( num2);   

var num1=200;
// increment by 1
num1++;
console.log(num1);
// Decrement by 1
num1--;
console.log(num1);

// increment or decrement by any number
num1+=10;
console.log(num1);

num1-=54;
console.log(num1);

// Divide /, Multiply *, Remainder %,
var num4 = 10;

num3 = num4 % 6;
console.log(num3);

num3 = num4 * 5;
console.log(num3);

num3 = num4 / 5;
console.log(num3);

/////////////////////////////////////////////////////////////

// function sayHi(){
//     console.log("hi");
// }

// // sayHi();

// function Greeting() {
//     var name = prompt ('what is your name?');
//     var resault = 'Hello'+' '+name;
//     resault = document.getElementById('someText').innerHTML;
// } 
// // Greeting();

// function sumNumber(num1, num2, num3) {
//     var sum = num1 + num2;
//     console.log(sum);
//     var dec = num1 - num2;
//     console.log(dec);
//     var mul = num1 * num2;
//     console.log(mul);
//     var div = num1 / num2 /num3;
//     console.log(div);
// }
// // sumNumber(50,10,20);
// sumNumber('prabu ','raj')


// function greeting(yourName) {
//     var resault= ' Hello '+yourName;
//     console.log(resault);
// }
// var User= prompt('hey, What is your name?');
// greeting(User);


// function test(t1,t2) {
//     var rt= t1+t2;
//     console.log(rt);
// }
// var bname='kugan';
// var aname='prabu';
// test(aname,bname);

//////////////////////////////////////////////////////////////////

// var num = 5 ;
// while (num < 200) {
//     num = num + 20;
//     console.log(num);
// }
// console.log('finish');


// for (let num = 0; num <=100; num++) {
//     console.log(num);
    
// }

// let number = 14;
// let string = 'prabu';
// let object = {first:'one', last:'sec'};
// let boolean = false;
// let array = ['apple','mango', 'orenge'];
// let undefined;
// let valueNull = null;

/*

// strings

let fruit = 'banana';
let moreFruits = 'banana\napple\nmango';
let splitFruits = 'banana,apple,nmango';
// console.log(moreFruits);

console.log( 'fruit = ',fruit);
console.log( 'fruit.lenght = ',fruit.length, '// count of string charractor');
console.log( 'fruit.indexOf() = ',fruit.indexOf('na'), '// Find something in that string, if it true get start index num, if it false we get - value');
console.log( 'fruit.slice(2,5) = ',fruit.slice(2,5),'//like a cake thundu, ithula iruththu athukulla vetti edu');
console.log( 'fruit.replace() = ',fruit.replace('ban','123'),'//athukku pathila itha matru');
console.log( 'fruit.toUpperCase() = ',fruit.toUpperCase(),'// change charactor to cap');
console.log( 'fruit.toLowerCase() = ',fruit.toLowerCase(),'// change charactor to lowercase');
console.log( 'fruit.charAt() = ',fruit.charAt(2)),'// index 3rd at charactor';
console.log( 'fruit.split() = ',fruit.split(''), '// split by charactors');
console.log( 'splitFruits.split() = ',splitFruits.split(''), '// split by charactors');
console.log( 'splitFruits.split() = ',splitFruits.split(','), '// split by comma');

//  Array

let fruits = ['banana','apple','orange'];
let athorWay = new Array('banana','apple','mango');

console.log('fruits = ', fruits);
console.log('athorWay = ', athorWay);

console.log('fruits[2] => ', fruits[2],'// acceses 2nd index of array');

fruits[0]='pear';
console.log('fruits[0] = `pear` => ',fruits,'// newly replasing the pear on that fruits array');

console.log(fruits.length);
for (let i = 0; i < fruits.length; i++) {
        console.log('for loop = ', fruits[i]);    
}

// Array common Methods
console.log('///////array common methods///////////');

console.log('fruits.toString() = ',fruits.toString(),' // the array convete to string');
console.log('fruits.join(`_`) = ',fruits.join('_'),'// array item joining with underscot');

console.log('fruits.pop() = ',fruits.pop(),'// removing last item in the array ');
console.log('fruits = ', fruits);
//push
console.log('fruits.push(`blackberry`,`mangoosh`) = ',fruits.push('blackberry','mangoosh'),'// Adding new last item in the array ');
console.log('fruits = ', fruits);

console.log(fruits[4]); // another way of push
fruits[7]='newfruit';
console.log(fruits[7]);
console.log('fruits = ', fruits);

                    // another way of push

fruits[fruits.length]='newmengo'; // in here its last index < length
console.log('fruits = ', fruits);

console.log('fruits.shift() =>',fruits.shift(),'// removing firts element of the array');
console.log('fruits = ', fruits);

console.log('fruits.unshift() =>',fruits.unshift('kiwi'),'// Adding firts element of the array');
console.log('fruits = ', fruits);

console.log('fruits = ', fruits.concat(athorWay),'// concating tow arrey togather');

console.log('fruits = ', fruits.slice(1,3),'// including but not upto');

console.log('fruits = ', fruits.reverse(),'// the oder as been flipt');

console.log('fruits = ', fruits.sort(),'// sorting by alphabetically a-z');

// the number sorting

let someNumber = [5,22,33,14,2,5,6,22,44,153,541,5,6,8,42,9,6,7,214,56,54,23,27,1];
console.log('sort', someNumber.sort(function(a,b){return a-b}),'//assending');
console.log('sort', someNumber.sort(function(a,b){return b-a}),'//dssending');

// adding items in the array from with loop

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
        emptyArray.push(num);
}
console.log(emptyArray); 



// objects in javascript

// let student = { first:'rafeh', last:'Qazi'};
// console.log(student.first);

// right formating

let student = {
        first:'rafeh',
        last: ' Qazi',
        age: 25,
        Height:170,
};
console.log(student.first);
student.first='notRafeh'; // changing value
console.log(student.first);

console.log(student.age);
student.age++; //icrimenting with 1
console.log(student.age);
student.age+=20; //icrimenting with 20
console.log(student.age);

let student3 = {
        first:'rafeh',
        last: 'Qazi',
        age: 25,
        Height:170,
        student3Info: function () {
                return this.first+' '+this.last
        },
};
console.log(student3.student3Info());

 console.log(student3['Height']);

*/

// if else conditions and switch statements

// var age = prompt('Whtat is your age ?');

// if ((age>=18)&&(age<=35)) {
//         Status='Target demo';
//         console.log(Status);
// } else {
//         Status='not my audiance';
//         console.log(Status);
// };

switch (5) {
        case 0:
               text='weekend'; 
                break;
        case 5:
               text='weekend'; 
                break;
        case 6:
               text='weekend'; 
                break;

        default:
               text='week day'; 
                break;
};
console.log(text);
