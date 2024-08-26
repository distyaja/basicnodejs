const express = require("express") // memanggil library express js 
const bodyParser = require("body-parser")  
const cors = require("cors") 

const app = express()
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: true})) 

app.use(cors())

const soal1R = require("./routers/soal1R")
const soal2R = require("./routers/soal2R")
const soal3R = require("./routers/soal3R")
const soal4R = require("./routers/soal4R")

// implementasi routes
app.use("/soal1R", soal1R)
app.use("/soal2R", soal2R)
app.use("/soal3R", soal3R)
app.use("/soal4R", soal4R)


app.listen(4000, () => { 
    console.log("Server run on port 4000"); 
    })