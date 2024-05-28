const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

require('./connection');

app.get('/', (req, res)=>{
    res.send('Server is working fine');
});

const userRoute = require('./routes/UserRoute');

app.use('/',userRoute);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});