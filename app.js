const express = require('express');
const app = express();
const port = 3000;
const middleware = require('./middleware');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('./database');
const session = require('express-session');


// create server
const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


// template engine: pug
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false })); // only contains key value pairs
// anything in the public folder is accessible (static files)
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: "prevent session hijacking",
    resave: true,
    saveUninitialized: false
}));

// Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');

app.use("/login", loginRoute);
app.use("/register", registerRoute);


app.get("/", middleware.requireLogin, (req, res, next) => {
    
    var payload = {
        pageTitle: "Home",
    }; 

    res.status(200).render("home", payload);
});

