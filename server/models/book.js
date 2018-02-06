const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


// Book Model Definition
const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    price: {type: Number, required: true  },
    publicationDate: { type: Date, default: Date.now() },
    authors:  { type: String, required: true, required: true }, //???
    img: { data: Buffer, contentType: String },
    category: { type: String }  //????

});


module.exports = mongoose.model('Book', bookSchema);