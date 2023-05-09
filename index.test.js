// install dependencies

const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');
const { it, expect, describe } = require("@jest/globals");
const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const { Band } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");
const seedBand = require("./seedData");

// test musicians endpoint
describe('./musicians endpoint', () => {
    // Write your tests here
    it("test musicians endpoint", async () => {
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
        expect(response.body[0]).toHaveProperty("name");
        expect(response.body[0]).toHaveProperty("instrument");
    })
    it("returns musician array", async () => {
        const response = await request(app).get("/musicians");
        expect(Array.isArray(response.body)).toBe(true);
    });
    
});

// test bands endpoint
describe('./bands endpoint', () => {
    // Write your tests here
    it("test bands endpoint", async () => {
        const response = await request(app).get("/bands");
        expect(response.statusCode).toBe(200);
        expect(response.body[0]).toHaveProperty("name");
        expect(response.body[0]).toHaveProperty("genre");
    })
    it("returns band array", async () => {
        const response = await request(app).get("/bands");
        expect(Array.isArray(response.body)).toBe(true);
    });
    
});
