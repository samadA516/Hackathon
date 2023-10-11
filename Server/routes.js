const express = require ('express')
require('dotenv').config();
const { MongoClient } = require("mongodb");

const uri = process.env.API_MONGDB_URI;
const client = new MongoClient(uri);

const  credsRouter = express.Router().get('/', (req, res) => {
    console.log("test")
    res.sendStatus(200)
});


async function run() {
  try {
    const database = client.db('HackathonDB');
    const movies = database.collection('Credentials');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.find().toArray();

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

module.exports={credsRouter}

