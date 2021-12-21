// require dependencies
const express = require('express')
const { get } = require('express/lib/response')
const port = 3000
// initialize the express app
const app = express()

// configure server settings

// configure a data source

// mount middleware

// mount routes
app.get("/GitPub", (req, res) => {
  res.send("Welcome to the GitPub App")
})

// tell the app to listen for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})