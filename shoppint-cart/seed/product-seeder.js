var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shoppin');
var product_list = [
    new Product({
    imgPath: 'https://pbs.twimg.com/profile_images/710336790222278657/WBDahENp.jpg',
    title: "Wolf Cola",
    description: "Drink wolf cola",
    price: 5
}),
    new Product({
        imgPath: 'https://vignette.wikia.nocookie.net/en.futurama/images/8/80/Slurm-1-.jpg/revision/latest?cb=20060626052801',
        title: "Slurm Cola",
        description: "Party on dudes",
        price: 5
    }),
    new Product({
        imgPath: "http://www.thecooltshirt.com/wp-content/uploads/2015/12/drink.jpg",
        title: "Nuke-Cola",
        description: "Zap that thirst",
        price: 5
    })
];
// save each item in the array to the database
var done = 0;
for (var i = 0; i < product_list.length; i++){
    product_list[i].save(function(err,result){
        done++;
        if (done == product_list.length){
           exit(); 
        }
    });
}
function exit(){
    mongoose.disconnect();
}