const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}
// Type alias
type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 23]
const sprite: Drink = ['clear', true, 36]

// Why we do not use tuples very much
const carSpecs: [number, number] = [400, 3354]
const carStats = {
  hp: 400,
  weight: 3354,
}
