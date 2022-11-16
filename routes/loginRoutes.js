const express = require('express');
const app = express();
const router = express.Router();


// template engine: pug
app.set("view engine", "pug");
app.set("views", "views");

router.get("/", (req, res, next) => {
    res.status(200).render("login");
});


module.exports = router;