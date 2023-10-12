const express = require ('express')
require('dotenv').config();
const { MongoClient } = require("mongodb");

const uri = process.env.API_MONGDB_URI;
const client = new MongoClient(uri);

async function run() {
    try {
      const database = client.db('HackathonDB');
      const movies = database.collection('Items');
  
      const movie = await movies.find().toArray();
      
      return movie;
    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }
}

const itemsRouter = express.Router().get('/', async (req, res) => {
    items = await run();
    res.json(items)
});

  
  module.exports={itemsRouter}