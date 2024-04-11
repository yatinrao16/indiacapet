const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000;
const products = require("./products.json");
// var cors = require('cors')
// app.use(cors())
// app.use(express.static('dist'))

//** dist file unwanted and no use , it just practice */

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("<h1> Hello Login page</h1>");
});

app.get("/api/products", (req, res) => {
 
  return res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product=products.find((user)=>user.id===id);
  return res.json(product);
});
app.get("/api/jokes", (req, res) => {
  const joke = [
    {
      id: 1,
      name: "sachine",
      company: "namrata",
    },
    {
      id: 2,
      name: "pankaj",
      company: "namrata",
    },
    {
      id: 3,
      name: "nitish",
      company: "namrata",
    },
    {
      id: 4,
      name: "nitish",
      company: "namrata",
    },
    {
      id: 5,
      name: "nitish",
      company: "namrata",
    },
    {
      id: 6,
      name: "Opna Women's Short Sleeve Moisture",
      price: "7.95",
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      
    },
  ];

  res.send(joke);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
