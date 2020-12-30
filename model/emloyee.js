const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

//user model
const employee = new Schema({
    //user from input register form

    name: {
        type: String,
    },

    salary: {
        type: String,
    },
    age: {
        type: String,
    },
});

module.exports = Employee = mongoose.model("employee", employee);
