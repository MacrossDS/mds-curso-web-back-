const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./config/database')
const colors = require('colors')


// routes 
const productsRoutes = require('./routes/Products.routes')
const categoriesRoutes = require('./routes/Categories.routes')

require('dotenv').config();

database.connect();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());


// app.use(express.static(__dirname + '/public'));
// app.get('/', (req, res) =>{
//     res.status(200);
//     res.json({
//         msg: "Hola mundo",
//         extra: "extra"
//     });
// });


app.use(productsRoutes);
app.use(categoriesRoutes);

let port = process.env.PORT || 3001;

app.listen(port, "localhost", () =>{
    console.log(`servidor corriendo en el puerto ${port}`.yellow);
});

