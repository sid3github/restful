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

//mongoose.model containing (model-name, schema-name, collection-name)
const Data = mongoose.model('ths',StudentSchema,'thsdata');

module.exports = Data;