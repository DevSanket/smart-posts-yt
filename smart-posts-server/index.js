const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require('cors');
const morgan = require("morgan"); 

//router variable
const PostRouter = require('./routes/post.routes');
const LoginRouter = require('./routes/auth.routes');

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.use('/post', PostRouter);
app.use('/login', LoginRouter);
// / -> /posts


//Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 4000, () => {
  console.log("Running on Port 4000");
});
