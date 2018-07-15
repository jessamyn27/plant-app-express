const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/plantdb');

mongoose.connect('mongodb://localhost:27017/local',function(err){
    console.log("some kinda connection made"); 
    if(err)
    {
        console.log("err: "+err);
    }
});

// listeners
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, ' Mongoose failed to connect')
});

mongoose.connection.on('disconnected', () => {
  console.log(' Mongoose is disconnected')
});
