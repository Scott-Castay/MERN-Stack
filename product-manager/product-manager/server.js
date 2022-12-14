const express = require('express');
const cors = require('cors');

// Environment vars
const port = 8000;

const { productRouter } = require('../product-manager/server/routes/product.routes');
const { urlencoded } = require('express');

// requiring / importing runs the file!
// This file doesn't need to export anything though, so we need a var.
require('../product-manager/server/config/mongoose.config');

// app is a function but it also has key value pairs on it like an object.
const app = express();

/* 
app.use is adding 'middleware':
stuff that happens in the middle of the the request and response.
*/

// avoid CORS error since our front-end is running on a different port
// so our requests are 'cross origin' port 3000 -> 8000
app.use(cors());

// req.body undefined without this!
app.use(express.json(), express.urlencoded({extended:true}));

app.use('/api/products', productRouter);

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`))
