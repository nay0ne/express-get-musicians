const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { Band } = require("../models/index")
const { db } = require("../db/connection")

// const port = 3000;
// app.use(express.json());
app.use(express.urlencoded({extended:true}));
//TODO: Create a GET /musicians route to return ALL musicians 
app.get('/musicians', async (req, res) => {
    const musicians = await Musician.findAll({});
    res.json(musicians);
});
// GET specific musician route
app.get('/musicians/:id', async (req, res) => {
    const id = req.params.id;
    gimme = await Musician.findByPk(id);
    res.json(gimme);
});

// GET bands route to return ALL bands
app.get('/bands', async (req, res) => {
    const bands = await Band.findAll({});
    res.json(bands);
});
// GET specific band route
app.get('/bands/:id', async (req, res) => {
    const id = req.params.id;
    gimme = await Band.findByPk(id);
    res.json(gimme);
});

//  post request
app.post('/musicians', async (req, res) => {
   try { 
        const { name, instrument } = req.body;
        await Musician.create(req.body);
        res.send("New musician added");
    } catch(error) {
        next(error);
    }
})




module.exports = app;