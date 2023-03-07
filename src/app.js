const express = require('express');
const fs = require("fs");
const app = express();
var users   =require("../models/user.js");



//Router Middlewares
app.use(express.json());

/*
Post request json file structure


    obj =  {
        "name":name,
        "email":email,
        "password": password,
        "DOB": DOB
    }

 */

//You need to complete the route of user register
//you need to register the user and return the id assign to the user.
//you will get error if user mail allready exist in that case you need to return 404 status with err message that you get.
//to look the user schema look ../models/user.js

app.post("/user_register",async function(req,res){

    //Write your Code here

});


module.exports = app;