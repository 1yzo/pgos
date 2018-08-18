const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: String,
    brewMethod: String,
    shipDate: Number,
    cases: Number,
    packetsPerCase: Number,
    notes: String,
    priority: Boolean
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;