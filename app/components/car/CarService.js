import Car from "../../models/Car.js";


let _cars = [new Car("Buick", "Century", 1989, "Cherry")]


export default class CarService{
  constructor(){
    console.log("car service works", _cars)
  }
}