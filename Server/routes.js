const express = require ('express')
require('dotenv').config();
const { MongoClient } = require("mongodb");

const uri = process.env.API_MONGDB_URI;
const client = new MongoClient(uri);

async function run () {
    try {
      const database = client.db('HackathonDB');
      const movies = database.collection('Credentials');
  
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'Back to the Future' };
      const movie = await movies.find().toArray();
      
      console.log(movie);
      return movie;
    
    } finally {
      // Ensures that the client will close when you finish/error
      //await client.close();
    }
  }

const  credsRouter = express.Router().get('/', async (req, res) => {
    let creds = await run();
    res.json(creds)
});





module.exports={credsRouter}

