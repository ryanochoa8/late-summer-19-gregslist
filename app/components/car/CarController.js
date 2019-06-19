import CarService from "./CarService.js";


let _carService = new CarService()

function drawCars(){
  let carsElem = document.querySelector("#cars")
  let template = ''
  let cars = _carService.Cars
  cars.forEach(car => {
    template += car.Template
  })
  carsElem.innerHTML = template

}

export default class CarController{
  constructor(){
    console.log("car controller works")
    drawCars()
  }
}