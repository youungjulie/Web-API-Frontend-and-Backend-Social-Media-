// This require('mongoose') call above returns a Singleton object. 
// This means that every time you require('mongoose') in your application,
// you get the exact same mongoose object instance.

const mongoose = require('mongoose');

class Database {

    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect("mongodb+srv://admin:dbpassword@ee547projectcluster.v6asvhw.mongodb.net/?retryWrites=true&w=majority")
            .then(() => {
                console.log("Connected to MongoDB");
            })
            .catch((err) => {
                console.log(`Database Error: ${err}`);
            });
    }
}

module.exports = new Database();