const express = require ('express')
const  credsRouter = express.Router().get('/', (req, res) => {
    res.status(200)
});
module.exports={credsRouter}