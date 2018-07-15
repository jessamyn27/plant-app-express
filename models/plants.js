const mongoose = require('mongoose');

//my Schema (model) for my data
const plantSchema = new mongoose.Schema
name: String,
color: String,
sunnySpot: Boolean
});

// calling my colleciton
module.exports = mongoose.model('Plant', plantSchema);
