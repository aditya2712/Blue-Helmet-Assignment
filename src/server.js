require("dotenv").config();
const express = require("express");

// Database Connection
require("./db_connection.js");

app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
