var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// blueprint for the model
var schema = new Schema({
    imgPath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
});
// export the model out
module.exports = mongoose.model('Product', schema);