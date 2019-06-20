import Car from "../../models/Car.js";


let _state = {
  cars: []
}

_state.cars.push( new Car({make:"Buick", model:"Century", year:1989, color:"Cherry"}))
_state.cars.push(new Car({make:"Lambo", model:"diablo", year:2006, color:"Canary Yellow"}))


let _subscribers = {
  cars: []
}


function setState(propName, data){
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class CarService{
  constructor(){
    console.log("car service works", this.Cars)
  }

  addSubscriber(propName, fn){
    _subscribers[propName].push(fn)
  }


  get Cars(){
    return _state.cars.map(car => new Car(car))
  }

  addCar(newCar){
    let temp = this.Cars
    temp.push(new Car(newCar))
    setState("cars", temp) 
  }

}