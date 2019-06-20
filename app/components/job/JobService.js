import Job from "../../models/Job.js";

let _jobs = [
  new Job({title:"" , salary: "", company:"", location: ""})
]


export default class JobService{
  constructor(){
    console.log("Job service works!")
  }
addJob(newJob){
  let temp = this.Jobs
  temp.push(new Job(newJob))
  setState("jobs", temp)
}
}