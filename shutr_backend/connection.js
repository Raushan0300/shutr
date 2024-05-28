const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shutr';

mongoose.connect(URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));