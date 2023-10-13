const express = require("express");
const app = express();
const port = 3001;
const credsRouters = require("./routes");
const itemsRouters = require("./itemsRouter.js");
const cartRouters = require("./cartRouter")

app.use ("/api/items", itemsRouters.itemsRouter)
app.use ("/api/items/:item", itemsRouters.itemRouter)
app.use ("/api/creds", credsRouters.credsRouter)
app.use ("/api/cart", cartRouters.cartRouter)

app.listen(port, () => {
    console.log('Listening on port', port);
});