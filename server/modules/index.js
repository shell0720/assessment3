var express = require("express");
var router = express.Router();
var path = require("path");
var Heroes = require("../models/hero");

router.get("/hero", function(req, res){
  Heroes.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/hero", function(req,res){
  var addedHero = new Heroes({
    "alias": req.body.alias,
    "first_name": req.body.first_name,
    "last_name":req.body.last_name,
    "city": req.body.city,
    "power_name": req.body.power_name,
  });
  addedHero.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/hero/:id', function(req,res){
  console.log(req.params);
  Heroes.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

router.get("/*", function(req,res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public", file ));
});

module.exports = router;
