const express = require("express");
const app = express();

// get port number from environment settings
require('dotenv').config();
const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const cors = require("cors");
const productRoute = require('./routes/product.route');
const categoryRoute = require("./routes/category.route");
const userRoute = require("./routes/user.route");

app.use('/images', express.static('images'));
// CORS cross origin resource sharing
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// match GET localhost:4000/
app.get("/", (req, res)=>{
  res.send("Sawasdee");
});

// ใช้ productRoute เมื่อ request ขึ้นต้นด้วย /products
app.use("/products", productRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute); 

app.listen(port, () => {
  console.log("App started at port: " + port);
});
