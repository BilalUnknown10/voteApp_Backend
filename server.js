const express = require('express');
 require('dotenv').config();
// const bodyParser = require('body-parser')
const cookie = require('cookie-parser');
const connection = require('./src/db/Conn.js');
const router = require('./src/routes/Voter.routes.js');
const cors = require('cors')


const app = express()

const port = process.env.PORT || 4000;


app.use(express.json());
app.use(express.urlencoded({extended : true}));


const corsOptions = {
    origin : ["https://vote-app-pi.vercel.app/"],
    methods : ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials : true
}

app.use(cors(corsOptions));
app.use(cookie());
// app.use(bodyParser);

connection();

app.use('/voter',router)

app.listen(port, () => {
    console.log(`Server started on ${port} port`);
}); 
