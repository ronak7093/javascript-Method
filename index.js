// array methods
//  Q1) Create an array called fruits with the following elements: 
// "apple", "banana", "cherry", "date", "elderberry". 
// Use the push method to add the fruit "fig" to the end of the array.
let fruits = ["apple", 'banana', 'cherry', 'date', 'elderberry']
fruits.push("fig")
console.log(fruits, 'add new fruit end of  the array ');

// Use the pop method to remove the last element from the fruits array.
let popfruits = ["apple", 'banana', 'cherry', 'date', 'elderberry']
fruits.pop()
console.log(fruits, 'Remove last element of array using pop method');


// Use the unshift method to add the fruit "apricot" to the beginning of the fruits array.

let unshiftfruits = ["apple", 'banana', 'cherry', 'date', 'elderberry']
unshiftfruits.unshift('apricot')
console.log(unshiftfruits, 'add new fruit at the beginning of  the fruit array');

// Use the shift method to remove the first element from the fruits array.
let shiftfruits = ["apple", 'banana', 'cherry', 'date', 'elderberry']
shiftfruits.shift('apple')
console.log(shiftfruits, 'remove the first element from the array');

// Use the join method to join all the elements of the fruits array into a single string 
// separated by commas. Store the result in a variable called fruitsString.

let joinfruits = ["apple", 'banana', 'cherry', 'date', 'elderberry']
let fruitsString = joinfruits.join()
console.log(fruitsString, 'all the elements of the fruits array into a single string ');

// Use the indexOf method to find the index of the element "cherry" in the fruits array. 
// Store the result in a variable called cherryIndex.

let fruitsIndex = ["apple", 'banana', 'cherry', 'date', 'elderberry']
let cherryIndex = fruitsIndex.indexOf('cherry')
console.log(cherryIndex, 'index of the element');

// Use the slice method to create a new array called selectedFruits that contains the 
// elements from index 1 to 3 (inclusive) of the fruits array.

let slicefruits = ["apple", 'banana', 'cherry', 'date', 'elderberry']
let selectedFruits = slicefruits.slice(1, 4)
console.log(selectedFruits, 'slice of array');

// EXAMPLES:

// Given an array of numbers numbers = [4, 2, 9, 6, 5, 1],
//  use the map method to create a new array called squaredNumbers that contains 
//  the squares of each number.

let data = [4, 2, 9, 6, 5, 1]
let squaredNumbers = data.map(function (i) {
    return Math.sqrt(i)
})
console.log(squaredNumbers, 'squaredNumbers');


// Given an array of strings names = ['John', 'Jane', 'Alice', 'Bob'], 
// use the filter method to create a new array called longNames that contains 
// only the names with a length greater than 4.


let names = ['John', 'Jane', 'Alice', 'Bob']
let namedetail = names.filter(value => value.length > 4)
console.log(namedetail);

// Given an array of objects 
// use the reduce method to calculate the total age of all students.

let students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 19 }
]

const value = students.map(i=>i.age)
let result = value.reduce((accumlated, current)=>{
    return accumlated + current
},0)
console.log(result,'total age');

// Given an array of numbers 
// use the sort method to sort the numbers in ascending order.

let numbers = [1, 3, 2, 5, 4];
let datas = numbers.sort()
console.log(datas);

// Given an array of strings 
//  use the every method to check if all the fruits contain the letter 'a'.
let fruit  = ['apple', 'banana', 'cherry', 'date']
    let results = fruit.every(values =>  values.includes('a'))
    console.log(results);






