

//const express = require('express')
import express from "express";
console.log("hola holita")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({name:"Juansa2"})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

