import Car from "../../models/Car.js";


// @ts-ignore
let _carApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/cars',
  timeout: 3000
})

let _state = {
  cars: []
}


let _subscribers = {
  cars: []
}


function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class CarService {
  constructor() {
    console.log("car service works", this.Cars)
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }


  get Cars() {
    return _state.cars.map(car => new Car(car))
  }

  addCar(newCar) {
    _carApi.post('', newCar)
      .then(res => {
        let serverCar = res.data.data
        let car = new Car(serverCar)
        let cars = this.Cars
        cars.unshift(car)
        setState('cars', cars)
      })
      .catch(e => console.error(e))
  }

  getCars() {
    _carApi.get('')
      .then(res => {
        let serverCars = res.data.data
        let cars = serverCars.map(c => new Car(c)).reverse()
        setState('cars', cars)
      })
      .catch(e => console.error(e))
  }

}