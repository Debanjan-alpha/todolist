//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

app.get("/", function(req, res){
  var today = new Date();
  var options = {
    weekday:"long",
    day:"numeric",
    month:"long"
    };
  var day=today.toLocaleDateString("en-US",options);



/*  if (currentDay==6 || currentDay==0){
    day="weekend";
  }
  else{
    day="weekday";
  }*/
    res.render("list", {kindofday: day, Newlistitems: items});
});

app.post("/", function(req, res){
  let item = req.body.NewItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
