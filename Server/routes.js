const express = require ('express')
const  credsRouter = express.Router().get('/', (req, res) => {
    console.log("test")
    res.sendStatus(200)
});
module.exports={credsRouter}