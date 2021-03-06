var express=require("express");
var moment=require("moment");
var app=express();
app.get('/:datestring',function(req,res) {
     var myDate;
  if(/^\d{8,}$/.test(req.params.datestring)) {
    myDate = moment(req.params.datestring, "X");
  } else {
    myDate = moment(req.params.datestring, "MMMM D, YYYY");
  }

  if(myDate.isValid()) {
    res.json({
      unix: myDate.format("X"),
      natural: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }

    
})
var port = process.env.PORT || 3500;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});