const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return ALL musicians 
app.get('/musicians', async (req, res) => {
    const musicians = await Musician.findAll({});
    res.json(musicians);
});
// GET 1st musician route
app.get('/musicians/1', async (req, res) => {
    const musician1 = await Musician.findAll({});
    res.json(musician1[0]);
});
// GET 2nd musician route
app.get('/musicians/2', async (req, res) => {
    const musician2 = await Musician.findAll({});
    res.json(musician2[1]);
});
// GET 3rd musician route
app.get('/musicians/3', async (req, res) => {
    const musician3 = await Musician.findAll({});
    res.json(musician3[2]);
});
// GET bands route to return ALL bands
app.get('/bands', async (req, res) => {
    const bands = await Band.findAll({});
    res.json(bands);
});
// GET 1st band route
app.get('/bands/1', async (req, res) => {
    const band1 = await Band.findAll({});
    res.json(band1[0]);
});
// GET 2nd band route
app.get('/bands/2', async (req, res) => {
    const band2 = await Band.findAll({});
    res.json(band2[1]);
});
// GET 3rd band route
app.get('/bands/3', async (req, res) => {
    const band3 = await Band.findAll({});
    res.json(band3[2]);
});

//  part 2 route params- maybe update into above musicnas routes once complete
// app.get('/musicians/:id', async (req, res) => {

// })



module.exports = app;