import Job from "../../models/Job.js";

// @ts-ignore
let _jobApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jobs',
  timeout: 3000
})

// @ts-ignore
let bcwApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/RyanO/gregslist'
})

let _state = {
  jobs: [],
  myJobs: []
}

let _subscribers = {
  jobs: [],
  myJobs: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}


export default class JobService {
  constructor() {
    console.log("Job service works!")
  }

  get MyJob() {
    return _state.myJobs.map(j => new Job(j))
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  deleteJobs(id) {
    bcwApi.delete(id)
      .then(res => {
        console.log(res.data.message)
        this.getMyJobs()
      })
      .catch(err => console.error(err))
  }

  saveJobs() {
    bcwApi.post('', this.getMyJobs)
      .then(res => {
        console.log(res.data.message)
        this.getMyJobs
      })
      .catch(err => console.error(err))
  }

  get Jobs() {
    return _state.jobs.map(job => new Job(job))
  }

  addJob(newJob) {
    _jobApi.post('', newJob)
      .then(res => {
        let serverJob = res.data.data
        let job = new Job(serverJob)
        let jobs = this.Jobs
        jobs.unshift(job)
        setState('jobs', jobs)
      })
      .catch(e => console.error(e))
  }

  getMyJobs() {
    bcwApi.get()
      .then(res => {
        console.log("gets my jobs", res.data.data)
        setState('myPokemon', res.data.data)
      })
      .catch(err => console.error(err))
  }

  getJobs() {
    _jobApi.get('')
      .then(res => {
        let serverJobs = res.data.data
        let jobs = serverJobs.map(j => new Job(j)).reverse()
        setState('jobs', jobs)
      })
      .catch(e => console.error(e))
  }
}