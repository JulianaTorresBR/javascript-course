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




//const person2 = {
 // name: 'Juliana',
 // shirt: 'black'
//}

//console.log(person2)
//console.log(person2.name)
//console.log(person2.shirt)

//arrow function (2 arguments)
//object
//template literals

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 50000,
    //netWorth deve ser uma função pq se colocar a operação de subtração diretamente ele não consegue pegar os valor de assets e liabilities, vai dar erro como se não tivesse sido declarado ainda já que estão sendo declaradas ao mesmo tempo
    netWorth: function (){
      return this.assets - this.liabilities
    }
  }

  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()} USD`

  return intro
}

// console.log(introducer('Juliana','black'))

//LOOPS

const fruits = ['bananas', 'apples', 'oranges', 'pear','bananas', 'apples', 'oranges', 'pear']
//console.log(fruits[0])
//console.log(fruits[1])
//console.log(fruits[2])
//console.log(fruits[3])

//for (let i=0; i < fruits.length; i++){
//  console.log(i ,fruits[i])
//}

//for(const fruit of fruits) {
//  console.log(fruit)
//}






