function asyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve('done')
    }, 2000)
  })
}

async function setup() {
  console.log('setup start')
  await asyncTask()
  console.log('setup done')
}

;(async () => {
  await setup()
})()
