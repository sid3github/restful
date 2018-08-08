const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    }
});

const Data = mongoose.model('ths',StudentSchema,'thsdata');

module.exports = Data;