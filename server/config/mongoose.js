var path = require('path');
var fs = require('fs')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/petshelter',{useNewUrlParser: true, useUnifiedTopology: true}); 
let models_path = path.join(__dirname, './../models');
mongoose.set('useCreateIndex', true);

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(models_path + '/' + file);
    }
});