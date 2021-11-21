// Methods, Constructors, Inheritance, Super, modifiers
class Vehicle {
  // public drive(): void {
  //   console.log('chiching cha')
  // }
  // color: string
  constructor(public color: string) {}
  protected honk(): void {
    console.log('Unnecessary honking is bad')
  }
}

const vehicle = new Vehicle('green')
console.log(vehicle.color)

class Car extends Vehicle {
  // public drive(): void {
  //   console.log('vroooom')
  // }
  constructor(public wheels: number, color: string) {
    super(color)
  }
  private drive(): void {
    //Whenever we want to restrict access to a method/function
    console.log('vroooom')
  }
  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const car = new Car(4, 'green')
car.startDrivingProcess()
