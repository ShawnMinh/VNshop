var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
    "productId": String,
    "productName": String,
    "salePrice": Number,
<<<<<<< HEAD
    "productImage": String,
    "productNum": String,
})

module.exports = mongoose.model("Goods", productSchema)
=======
    "productImage": String
})

module.exports = mongoose.model("goods", productSchema);
>>>>>>> 72fc288cdafa2463a6d296a6faf5b6406d02e14b
