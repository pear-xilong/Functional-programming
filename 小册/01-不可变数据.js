// 将 hr 的需求实现为函数 dynamicCreateJob()
function dynamicCreateJob(baseJob) {
  let newJob = { ...baseJob }
  // 判断当前是否需要增加一个高管职位
  if (isHighPosition()) {
    // 针对高管职位，调整level信息
    newJob.level = 10
  }
  return newJob
}

function isHighPosition() {
  return true
}

const JOB_INFO_001 = {
  level: 7,
  workTime: 2,
  type: 'engineer',
  city: 'New York',
}
// 这里以 001 为例，对函数进行测试
const dynamicJob = dynamicCreateJob(JOB_INFO_001)
console.log(JOB_INFO_001)
console.log(JOB_INFO_001 === dynamicJob)
