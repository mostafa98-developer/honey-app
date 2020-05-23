const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    amount: { type: Number },
    price: { type: Number, required: true, index: true },
    name: {type: String,required: true, index: true},
    kind: {type: String, required: true, index: true},
    orderDate: {type: Date,required: true, index: true},
    orderRecivedDate: {type: Date, required: true, index: true},
    paid: {type: String, index: true},
    created: { type: Date, default: new Date() , index: true},
    note: {type: String, index: true},
    user_id : {type: mongoose.Schema.Types.ObjectId,required: true},
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


module.exports = mongoose.model('orderSchema', orderSchema);