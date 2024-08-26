const express = require("express")
const app = express()

app.use(express.json())

const soal4C = require("../controller/soal4C")

app.post("/bmi", soal4C.bmi)

module.exports = app