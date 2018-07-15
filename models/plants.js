const mongoose = require('mongoose');

//my Schema (model) for my data
const plantSchema = new mongoose.Schema({
name: String,
color: String,
sunnySpot: Boolean
});
//
// const plants = [
//     {
//         name:'indian paintbrush',
//         color: 'red',
//         sunnySpot: true
//
//     },
//     {
//         name:'dragons tounge',
//         color: 'verigated',
//         sunnySpot: false
//     },
//     {
//         name:'agave',
//         color: 'blue',
//         sunnySpot: true
//     }
// ];
//
// calling my colleciton
module.exports = mongoose.model('Plant', plantSchema);
