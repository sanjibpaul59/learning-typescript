const profile = {
  name: 'Alexander Supertramp',
  age: 23,
  coords: {
    lat: 0.5,
    lng: 23.8,
  },
  setAge(age: number): void {
    this.age = age - 1
  },
}

const { age }: { age: number } = profile

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile
