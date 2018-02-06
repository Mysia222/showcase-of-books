
const Book = require('../models/book');

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


module.exports = (router) => {

    router.post('/', function (req, res) {
        let imgPath = "./src/assets/img/" + req.body.image;

            const book = new Book({
                title: req.body.title,
                description: req.body.description,
                image: req.body.image,
                price: req.body.price,
                publicationDate: req.body.publicationDate,
                authors: req.body.authors


            });
            /*book.img.data = fs.readFileSync(imgPath);
            book.img.contentType = book.image.split('.')[1];
*/
console.log(book)
            book.save((err) => {

                if(err) {
                    console.log(err);
                }
                res.json({ success: true, message: 'Book added!' });
    
            });
    });

    router.get('/', function (req, res) {

        Book.find({}, (err, books) => {
            console.log(books)
            if (err) {
                res.json({ success: false, message: err });
            } else {

                if (!books) {
                    res.json({ success: false, message: 'No books found.' });
                } else {
                    res.json(books);
                }
            }
        }).sort({ '_id': -1 });
});


router.delete('/:id', function (req, res) {

    Book.deleteOne({ _id: req.params.id }, (err, book) => {

            if (!book) {
                res.json({ success: false, message: 'Book not found.' });
            } else {
                res.json({ success: true, message: 'Book deleted' });
            }
        });
  
}); 

router.get('/:id', function (req, res) {

    Book.findOne({ _id: req.params.id }, (err, book) => {

            if (!book) {
                res.json({ success: false, message: 'Book not found.' });
            } else {
                res.json(book);
            }
        });
  
}); 

router.put('/:id', function (req, res) {
console.log(req.body);
        Book.update({_id: req.params.id}, req.body, function (err, book) {
            if (err) return res.status(500).send("There was a problem updating the user.");
            res.json(book);
        });
  
}); 

    return router;
};

