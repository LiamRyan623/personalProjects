// Require in and use the .env
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const log = console.log;

// Controllers
;

// Middleware
app.use(express.json());

// Routes


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
