import CarService from "./CarService.js";


let _carService = new CarService()

export default class CarController{
  constructor(){
    console.log("car controller works")
  }
}