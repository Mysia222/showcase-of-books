const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt-nodejs');



// User Model Definition
const userSchema = new Schema({  
    firstName: { type: String, required: true, lowercase: true },    
    lastName: { type: String, required: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true }
});

/*
userSchema.pre('save', function(next) {

    if (!this.isModified('password'))
        return next();

    // Apply encryption
    bcrypt.hash(this.password, null, null, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});

// methods to compare password to encrypted password upon login
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

*/
module.exports = mongoose.model('User', userSchema);