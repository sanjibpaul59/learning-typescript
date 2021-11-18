const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]
const carsByMake = [['f150'], ['corolla'], ['camaro']]

// Help with inference when extracting values

const myCar = carMakers[0]
const oneCar = carMakers.pop()

// Prevent incompatible values
// carMakers.push(100)

// Help with Array Methods

carMakers.map((car: string): string => {
  return car.toUpperCase()
})

//Flexible types
const importantDates: (
  | number
  | Date
  | string
  | { name: string; age: number }
)[] = [new Date(), '2050-2-8', { name: 'Alex', age: 24 }]

importantDates.push(100)
