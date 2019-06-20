import JobService from "./JobService.js";

let _jobService = new JobService()
export default class JobController{
  constructor(){
    console.log("Job controller works!")
  }
}