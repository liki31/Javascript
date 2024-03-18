const accountId = 101 // This is how you store constants i.e, Value doesn't change
let accountType = "Savings" // Re-assignment is allowed but Re-declaration is not allowed
var accountName = "Likith" // var has no scope. Re-assignmemt and Re-declaration is allowed which causes lot of problems and data integrity issues as well
accountCity = "Hassan" // this is can be done but never do this

//never use var

console.table([accountId, accountType, accountName, accountCity]) // displays output in a table manner, key-value pair

console.log(typeof accountId) // typeof - gives the type of datatype of the variable
console.log(typeof accountType)
console.log(typeof accountName)
console.log(typeof accountCity)