// Array
// const myArr = [1, 2, 3, 4, 5, 6]
// const myString = ["Likith", "Darshan", "Akash"]
// const myArr2 = new Array (1, 2, 3, 4)

// console.log(myArr2)

//Array methods
// myArr.push(5,6) // adds element at the end of the array
// console.log(myArr)

// myArr.pop() // delets an element at the end of the  array
// console.log(myArr)

// myArr.unshift(10) // adds an element at the start of the array
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(3))
// console.log(myArr.indexOf(4))

// const newArr = myArr.join() // copies the array to the new variable as string
// console.log(newArr)
// console.log(typeof newArr)

// console.log(myArr)
// const newArr = myArr.slice(1, 3) // cut the array into smaller parts. Includes the index and also it works on the copy of the array doesn't affect the original array
// console.log(newArr)

// const newArr1 = myArr.splice(1,3) // cut the array into smaller parts. Includes all the ranges and it also manipulates the original array
// console.log(newArr1)

// const marvelHeros = ["Ironman", "captain america", "thor"]
// const dcHeros = ["Superman", "Batman", "wonder women"]

// marvelHeros.push(dcHeros) // this didn't result in merging of the array but instead array was inserted at the 4th index
// console.log(marvelHeros)

// const allHeros = marvelHeros.concat(dcHeros) // for combining arrays use concat() method it resturns a new array and doesn't modify the existing arrays
// console.log(allHeros)

// const allHeros = [...marvelHeros, ...dcHeros] // Combining arrays using spread operator " ... " - easy approach
// console.log(allHeros)

// const num = [1, 2 , 3, [4, 5, 6]]
// const realNum = num.flat(Infinity) // gives a new array with all concatenated
// console.log(realNum)

console.log(Array.isArray([1,2,3,4,5])) // checks if the given input is array
console.log(Array.from("12345")) // converts anything into array 
console.log(Array.of(1,2,3)) // create a new array of the given elements
// when given a object we must mention which to consider whether key or values or else it returns empty array
