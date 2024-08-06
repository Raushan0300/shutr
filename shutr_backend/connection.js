const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

mongoose.connect(URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));