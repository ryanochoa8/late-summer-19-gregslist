import Job from "../../models/Job.js";

new Job({title:"" , salary: "", company:"", location: ""})


export default class JobService{
  constructor(){
    console.log("Job service works!")
  }
}