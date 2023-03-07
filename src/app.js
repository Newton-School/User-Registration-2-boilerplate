const express = require('express');
const fs = require("fs");
const app = express();
var users   =require("../models/user.js");



//Router Middlewares
app.use(express.json());

app.post("/user_register",async function(req,res){

    var name = req.body.name;
    var email  = req.body.email;
    var password = req.body.password;
    var DOB = req.body.DOB;

    var newuser = {
        "name":name,
        "email":email,
        "password": password,
        "DOB": DOB,
    };

    // console.log(newuser);

    users.create(newuser).then((user) => {
        res.send(user._id);
    })
    .catch((error) => {
        res.status(404).send(error.message);
    });

});


module.exports = app;