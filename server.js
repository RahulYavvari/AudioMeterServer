const express = require("express");
const homeRoute = require("./routes/homeRoute");
const inputRoute = require("./routes/inputRoute");
const testRoute = require("./routes/testRoute");
const reportsRoute = require("./routes/reportsRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/home', homeRoute);
app.use('/input', inputRoute);
app.use('/test', testRoute);
app.use('/reports', reportsRoute);

//404 Error Block
app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(PORT, () => {
    console.log(`[LOG] Connected and Listening on [PORT]: ${PORT}`);
});