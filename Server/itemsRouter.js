const express = require('express')
require('dotenv').config();
const { MongoClient } = require("mongodb");

const uri = process.env.API_MONGDB_URI;
const client = new MongoClient(uri);

async function getAllItems() {
  try {
    const database = client.db('HackathonDB');
    const movies = database.collection('Items');

    const movie = await movies.find().toArray();

    return movie;
  } catch (err) {
    console.log(err);
  }
}

async function getItem(item) {
  try {
    const database = client.db('HackathonDB');
    const movies = database.collection('Items');

    const movie = await movies.findOne({item: item});

    return movie;
  } catch (err) {
    console.log(err);
  }
}


const itemsRouter = express.Router().get('/', async (req, res) => {
  items = await getAllItems();
  res.json(items)
});

const itemRouter = express.Router({mergeParams: true}).get('/', async (req, res) => {
  item = await getItem(req.params.item);
  res.json(item)
});



module.exports = { itemsRouter, itemRouter }