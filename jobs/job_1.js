function situationScan (arg) {
  console.log(`Im In Worker ${process.pid}`)
}

exports.JobRunning = () => {
  setInterval(situationScan, 6000) //One Minutes
}