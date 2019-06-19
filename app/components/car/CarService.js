import Car from "../../models/Car.js";


let _cars = [
  new Car({make:"Buick", model:"Century", year:1989, color:"Cherry"}),
  new Car({make:"Lambo", model:"diablo", year:2006, color:"Canary Yellow"})
]


export default class CarService{
  constructor(){
    console.log("car service works", _cars)
  }

  get Cars(){
    return _cars.map(car => new Car(car))
  }

  addCar(newCar){
    _cars.push(new Car(newCar))
  }

}