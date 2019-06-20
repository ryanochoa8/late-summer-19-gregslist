import JobService from "./JobService.js";

let _jobService = new JobService()
export default class JobController{
  constructor(){
    console.log("Job controller works!")

  }
  addJob(e){
    e.preventDefault()
  let form = e.target

  let newJob = {
    title: form.title.value,
    salary: form.salary.value,
    company: form.company.value,
    location: form.location.value
  }
  _jobService.addJob(newJob)
  form.reset()
  }
}