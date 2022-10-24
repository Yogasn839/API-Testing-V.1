const express = require("express");
const rentalmobil_newRoutes = require("./src/rentalmobil/routes");

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome To Rental Mobil");
});

app.use("/api/rentalmobil", rentalmobil_newRoutes); //API untuk database rental mobil

app.listen(port, () => console.log("aplikasi running di port ${port}"));
