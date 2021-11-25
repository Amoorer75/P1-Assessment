// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];
let sCar = carBrands.filter(obb => obb.type == 'sedan')
console.log(sCar)

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
function reverseString(str){
  let backward = ""
  for(i = str.length - 1; i >=0 ;i--){
    backward += str[i]
  }
  console.log(backward)
}
reverseString('creape')

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array
function largestString(array){

  let currLong = 0;
  let longest
   
  for(i = 0;i < array.length;i++){
    if(array[i].length > currLong){
       currLong = array[i].length
      longest = array[i]

    }
  }
  console.log(longest)
}
largestString(['hat','gattlengun','moon','crate'])

// 4.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];
function shop(arr) {

  let totalPrice = arr.reduce((acc,crr) => acc + crr.price,0)
  console.log(totalPrice)
}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

//recusion is a problem that does not stop or solve itself till it reaches its base case 

function countDown(number){

  //display the current number
  console.log(number)

  //reduce the number value by 1
  const newNumber = number - 1

  //the is the base case
  //this will tell the function when to stop
  if (newNumber > 0){

    //this is calling the function again with a new value each time
    //untill it is not greater than 0
    return countDown(newNumber)
  }
}
countDown(5)

//6. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

//inheritance is when the child obj takes on the same properties as the parent


/*  7.
 * flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */
const flipBool = (arr) => {

  let opposite = arr.map(function(arr){
    if (arr === true){
     return arr = false;
    }else if(arr ===false){
      return arr = true;
    }
  })
  console.log(opposite)
};
flipBool([true,true,false,true])

// 8.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

function animalFood(animal,food){
  let firstA = animal.slice(0,1)
  let lastA = animal.slice(animal.length - 1)
  let firstF = food.slice(0,1)
  let lastF = food.slice(food.length-1)

 //console.log(firstA,lastA,firstF,lastF)

  if (firstA === firstF && lastA ===lastF){

  console.log(`${firstA + lastF}`)

  }else{
    console.log(false)
  }

}
animalFood("great blue heron", "garlic naan")