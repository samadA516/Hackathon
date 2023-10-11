const express = require("express");
const app = express();
const port = 3000;
const routers = require("./routes");

app.use ("/api/creds", routers.credsRouter)
app.listen(port, () => {
    console.log('Listening on port', port);
});