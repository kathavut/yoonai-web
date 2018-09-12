var mongoose = require('mongoose')

// Define collection and schema for todo Item

var yoonai = new mongoose.Schema(
    {
        FirstName: { type: String },
        LastName: { type: String },
        Email: {type:String},
        Password:{type:String}
    },
    {
        collection: 'tuser'
    }
);

module.exports = mongoose.model('db', yoonai);