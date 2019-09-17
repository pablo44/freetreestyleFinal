const Sass = require('./sass');
const config = require('./config.json');
 
for(let conf of config.sass){
    new Sass(conf);
}
 

const express = require('express');
const app = express();
 
app.all('/json/*', (req,res) => {
  res.json({url: req.url, ok: true});
});
 
app.listen(3001);
