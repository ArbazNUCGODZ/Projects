const express = require('express')
const connectDB=require('./config/db.js')
const app = express()
const cors = require('cors');
require('dotenv').config();

connectDB();

app.use(cors());
app.use(express.json());

app.set('view engine','ejs');


//Routes=======
app.use('/api/user', require('./routes/userRoutes'));
app.get('/', (req, res) => {
  res.send('hello world')
})




app.listen(5000,()=>{
  console.log("Connected to the Port , 5000");
  
});