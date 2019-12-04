let numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filtered
filtered = numbers.filter(function evenNumbers (number) {
    return number % 2 === 0
})

//miloszćs doprmspdhgdjfgejd
const isEven = function evenNumbers (number) {
    return number % 2 === 0
}
//hint arrow functions
filtered = numbers.filter(isEven)
console.log(filtered)
