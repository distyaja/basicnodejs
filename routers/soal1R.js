const express = require("express")
const app = express ();

app.use(express.json())

const soal1C = require ("../controller/soal1C");

app.post("/VL_kubus", soal1C.VL_kubus);
app.post("/VL_balok", soal1C.VL_balok);
app.post("/VL_bola", soal1C.VL_bola);
app.post("/VL_tabung", soal1C.VL_tabung);

module.exports = app;