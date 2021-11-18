let apples = 11
let speed: string = 'fast'
let hasName: boolean = false

let nothing: null = null
let nothingAtAll: undefined = undefined

//Built in objects
let now: Date = new Date()

//Array
let colors: string[] = ['red', 'blue', 'green']

//Classes

class Car {
  brand: string = 'Ford'
}

let car: Car = new Car()
console.log(car.brand)

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 15,
}

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// When to use annotations

// 1) Function that returns the 'any' type

const json = '{"x": 10, "y":15 }'
const coordinates = JSON.parse(json)
console.log(coordinates)

// 2) When we declare variable on one line
// and initialize later

let words = ['vini', 'vedi', 'vici']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'vedi') {
    foundWord = true
  }
}

// 3) Variable whose type can't be inferred clearly

let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
