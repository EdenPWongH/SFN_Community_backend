const express = require("express");
const app = express();

// Set up mongoose connection
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/my-app", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const router = require("./router");

app.set("view engine", "ejs");

// Routes
app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
