const express = require("express");
const cors = require("cors");
require("dotenv").config();  // Importing dotenv to load the .env file
const dbController = require("./controllers/dbController");

const app = express();
const port = process.env.PORT || 4041;

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN.split(","),
};

app.use(cors(corsOptions));

// Middleware for parsing requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//!Q2 I'm here creating 5 table using mysql software querey Requeset need to come from the clinet(browser)!

app.get("/", (req, res) => {
  res.send("Hello this your landing page");
});

app.get("/install", (req, res) => {
  const ProductsTable = `Create table if not exists ProductsTable(
Product_id int auto_increment,
product_url varchar(255) not null,
product_name varchar(255) not null,
PRIMARY KEY(Product_id)
) `;

  const ProductDescriptionTable = `Create table if not exists ProductDescriptionTable(
Description_id int auto_increment,
Product_id int not null,
Product_brief_description varChar(5000),
Product_description varChar(5000),
Product_img varChar(5000),                                                                                                                                                                                                                             
Product_link varChar(5000),
PRIMARY KEY(Description_id),
FOREIGN KEY (Product_id) REFERENCES ProductsTable(Product_id)
)`;

  const ProductPriceTable = `Create table if not exists ProductPriceTable(
Price_id int auto_increment,
Product_id int not null,
Starting_price varchar(255) not null,
Price_range varchar(255) not null,
PRIMARY KEY(Price_id),
FOREIGN  KEY (Product_id) REFERENCES ProductsTable(Product_id)
)`;
  const UserTable = `Create table if not exists UserTab                                                                           le(
user_id int auto_increment,
User_name varchar(25),
User_password varchar(255) not null,
PRIMARY KEY(user_id)

)`;
  const OrdersTable = `Create table if not exists OrdersTable(
order_id int auto_increment,
user_id int,
Product_id int,
PRIMARY KEY(order_id),
FOREIGN  KEY(user_id) REFERENCES UserTable(user_id),
FOREIGN  KEY (Product_id) REFERENCES ProductsTable(Product_id)


)`;

  conn.query(ProductsTable, (err, data) => {
    if (err) console.log("i have got err in ", err);
    // console.log(data);
  });
  conn.query(ProductDescriptionTable, (err, data) => {
    if (err) console.log("i have got err in ", err);
    // console.log(data);
  });

  conn.query(ProductPriceTable, (err, data) => {
    if (err) console.log("i have got err in ", err.message);
  });

  conn.query(UserTable, (err, data) => {
    if (err) console.log("i have got err in ", err);
    // console.log(data);
  });
  conn.query(OrdersTable, (err, data) => {
    if (err) console.log("i have got err in ", err);
    `1`;
  });

  res.send("Hello you have Created a table tho");
});

//Inserting data form iphone page
app.post("/addiPhone", (req, res) => {
  const {
    userName,
    pwd,
    iphone_imgLink: Url,
    iphoneTitle: Model,
    startingPrice,
    Price,
    iphoneDescribtion: Brief,
    fullDescribtion: Description,
  } = req.body;
  console.log(req.body);

  
  // console.log(Id);
  // console.log(img);
  // console.log(img);
  // console.log(Model);
  // console.log(Price);

  let insertProduct = `INSERT INTO 	productstable (product_url,product_name)VALUES(?,?)  `;
  let insertProductPrice = `INSERT INTO 	productpricetable (Product_id,Starting_price,Price_range)VALUES(?,?,?) `;
  let ProductDescription = `INSERT INTO 	productdescriptiontable (Product_id,Product_brief_description,Product_description,Product_img,Product_link)VALUES(?,?,?,?,?) `;

  let usertable = `INSERT INTO 	usertable (User_name	,User_password)VALUES(?,?) `;

  let orderstable = `INSERT INTO 	orderstable (user_id,Product_id	)VALUES(?,?) `;
  // let orderstableUser = `INSERT INTO 	orderstable (	 ;	)VALUES(?) `;

  conn.query(insertProduct, [Url, Model], (err, results) => {
    if (err) throw err;

    //! IN in here look key point we need to get PK we have data need to be insert but it has FK in this scope
    let product_Pk = results.insertId;

    conn.query(
      insertProductPrice,
      [product_Pk, startingPrice, Price],
      (err) => {
        if (err) throw err.message;
        console.log("I inserted data on price tabel");
      }
    );
    conn.query(ProductDescription, [product_Pk, Brief, Description], (err) => {
      if (err) throw err.message;
      // let Description_Pk = result.insertId;
      // console.log(Description_Pk);
      console.log("I inserted data on brief tabel");
    });
    //user info
    conn.query(usertable, [userName, pwd], (err, result) => {
      if (err) throw err.message;
      let user_Pk = result.insertId;
      conn.query(orderstable, [user_Pk, product_Pk], (err) => {
        if (err) throw err;
      });
    });
  });

  res.send(`Data inserted successfully 🎉🎉`);
});

//! Selecet query

// we need a  route to display our data
app.get("/iphone", (req, res) => {
  conn.query(
    `SELECT * from productstable  PT JOIN 	productpricetable PC JOIN productdescriptiontable PD JOIN 	orderstable OT JOIN usertable US on PT.Product_id= PC.Product_id AND PT.Product_id=OT.Product_id AND OT.user_id=US.user_id`,
    (err, results) => {

      const data={ prodcts:[]}
      data.prodcts=results
      const stringify=JSON.stringify(data)
      if (err) throw err;
      res.send(stringify);
    }
  );

   
  // ^For react calsss
  
// !!!!! for react class

  
  
  
});
app.get("/iphones", (req, res) => {
  conn.query(
    "SELECT * FROM productstable  JOIN productdescriptiontable  JOIN productpricetable ON productstable.product_id = productdescriptiontable.product_id AND productstable.product_id = productpricetable.product_id",
    (err, rows) => {
      let iphones = { products: [] };
      iphones.products = rows;
      var stringIphones = JSON.stringify(iphones);
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

//!Update Data

app.put("/updated", (req, res) => {
  const { Id, model, url } = req.body;
  console.log(Id);
});
