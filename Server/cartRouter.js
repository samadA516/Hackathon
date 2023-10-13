const express = require('express')
require('dotenv').config();
const { MongoClient } = require("mongodb");

const uri = process.env.API_MONGDB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
      await client.connect();
      console.log("Connected to the database");
    } catch (err) {
      console.error("Database connection error:", err);
    }
  }

async function getAllItems() {
  try {
    const database = client.db('HackathonDB');
    const movies = database.collection('Cart');

    const items = await movies.find().toArray();
console.log(items);
    return items;
  } catch (err) {
    console.log("Error fetching items:", err);
    return[];
  }
}

const cartRouter = express.Router();
cartRouter.get('/', async (req, res) => {
    const items = await getAllItems();
    res.send(items);
    });
  module.exports = {cartRouter}