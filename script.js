/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

//function add(a,b){
 // return a + b
//}

//console.log(add(2,3))

//Arrow Add

const add = (a,b) => a + b

//console.log(add(5,7))

//function sub(a,b){
//  return a - b
//}

//console.log(sub(9,3))

//Arrow sub
const sub = (a,b) => a-b
//console.log(sub(10,8))

//function div(){
//  function div(a,b){
//   return a/b
// }

// console.log(div(100,10))
//}

const div = (a,b) => a/b
//console.log(div(100,20))


//function mul(a,b){
//  return a*b
//}

//console.log(mul(5,5))

//Arrow mul

const mul = (a,b) => a*b




/* 
  TODO: create a function that console logs the result of any of the above operations.
*/
  

//function Any(a,b){
  //const add = a + b
 // const sub = a-b
 // const div = a/b
 // const mul = a*b
 // console.log(add, sub, div,mul)
//}


//Any(100,10)


//Arrays method

const groceries = ['banana','apple','oranges']
//console.log(groceries)

groceries.push('grapes')
//console.log(groceries)

groceries.push('wine')
//console.log(groceries)


groceries.push('bread')
//console.log(groceries)

//Array slice
//start from 0 INCLUSIVE and UP to 2 [0,1]

//console.log(groceries.slice(0,2))

//start from zero INCLUSIVE and UP to 6 [0,1,2,3,4,5]
//console.log(groceries.slice(2,6))

//console.log(groceries.slice(1,4))

//array methods (slice, push, indexOf, length)
//console.log(groceries.indexOf('oranges'))
//console.log(groceries.indexOf('wine'))
//console.log(groceries.length)

//OBJECTS {}
//key: value pairs

//const person = {
 // name: 'Leonardo', 
 // shirt: 'white'
//}


//acces objcets: dot notation vs. bracket notation
//dot notation
//console.log(person.name)
//console.log(person.shirt)

//bracket notation
//console.log(person['name'])
//console.log(person['shirt'])


//assign object
//person.phone = '1-222-333-4444'
//console.log(person.phone)



//person2
const person2 = {
  name: 'juliana',
  age: 31
}

console.log(person2.name)
console.log(person2.age)