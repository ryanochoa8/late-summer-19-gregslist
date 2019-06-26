import JobService from "./JobService.js";


let _jobService = new JobService()

function drawJobs() {
  let jobsElem = document.querySelector("#jobs")
  let template = ''
  let jobs = _jobService.Jobs
  jobs.forEach(job => {
    template += job.Template
  })
  jobsElem.innerHTML = template
}

function drawMyJobs() {
  let myJobElem = document.querySelector("#my-jobs")
  let myJobs = _jobService.MyJob
  let template = ''
  myJobs.forEach(j => {
    template += j.Template
  })
  myJobElem.innerHTML = template
}


export default class JobController {
  constructor() {
    console.log("Job controller works!")
    _jobService.addSubscriber("jobs", drawJobs)
    _jobService.addSubscriber("myJobs", drawMyJobs)
    _jobService.getJobs()
  }

  addJob(e) {
    e.preventDefault()
    let form = e.target

    let newJob = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _jobService.addJob(newJob)
    form.reset()
  }

  deleteJobs(id) {
    _jobService.deleteJobs(id)
  }
}