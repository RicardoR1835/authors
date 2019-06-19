var mongoose = require('mongoose');

//Below is example create a schema
var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Your name must be longer than 2 characters',
        trim: true,
        minlength: 2
    },

}, {
    timestamps: true
})

mongoose.model('Author', AuthorSchema);