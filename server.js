const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/TFC'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/TFC/index.html'));
});
console.log(__dirname)

app.listen(process.env.PORT || 8080);