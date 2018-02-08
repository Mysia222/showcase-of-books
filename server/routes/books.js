const Book = require('../models/book');
const config = require('../config/config');

module.exports = (router) => {

    router.post('/', function(req, res) {
        
        const book = new Book({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category,
            publicationDate: req.body.publicationDate,
            authors: req.body.authors
        });

        book.save((err) => {
            if (err) {
                config.sendJSONresponse(res, err.response.status, err);
            }
            config.sendJSONresponse(res, 200, {
                success: true,
                message: 'Book added!'
            });
        });
    });

    router.get('/', function(req, res) {

        Book.find({}, (err, books) => {
            if (err) {
                config.sendJSONresponse(res, err.response.status, err);
            } else {

                if (!books) {
                    config.sendJSONresponse(res, err.response.status, err);
                } else {
                    config.sendJSONresponse(res, 200, books);
                }
            }
        }).sort({
            '_id': -1
        });
    });


    router.delete('/:id', function(req, res) {

        Book.deleteOne({
            _id: req.params.id
        }, (err, book) => {

            if (!book) {
                config.sendJSONresponse(res, err.response.status, err);
            } else {
                config.sendJSONresponse(res, 200, {
                    success: true,
                    message: 'Book deleted!'
                });
            }
        });
    });

    router.get('/:id', function(req, res) {

        Book.findOne({
            _id: req.params.id
        }, (err, book) => {

            if (!book) {
                config.sendJSONresponse(res, 401, {
                    success: false,
                    message: 'Book not found.'
                })
            } else {
                config.sendJSONresponse(res, 200, book);
            }
        });

    });

    router.put('/:id', function(req, res) {
        Book.update({
            _id: req.params.id
        }, req.body, function(err, book) {
            if (err)
                return config.sendJSONresponse(res, 500, {
                    success: false,
                    message: "There was a problem updating the user."
                });
            config.sendJSONresponse(res, 200, book);
        });
    });

    return router;
};