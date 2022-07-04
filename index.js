
const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const mongoose= require('mongoose')
const socketIO=require('socket.io');
const http=require('http')
let server = http.createServer(app);
var io=socketIO(server);
const morgan = require('morgan');



io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', `${msg}`);
  })
});





// const PORT = 9090;
// mongoose.connect("mongodb://localhost:27017/arti",{useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=>{
//         console.log("Database connected");
//     })
//     .catch((ex)=>{
//         console.log(ex);
//         console.log("Unable to connect to database");
//     })


 require('dotenv').config()



//Connecting DataBase
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Test-DB',
  
})
.then(()=> {
  console.log('DATABASE CONNECTED')
})
.catch((err) => {
  console.log(err)
})

app.use(morgan('dev'))
const PORT = process.env.PORT || 9090




app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("cors")());
app.use(express.static("uploads"))
app.use('/uploads', express.static(__dirname +'/uploads'));





  



app.use("/users", require("./routes/user.route"));



server.listen(PORT, ()=>{
  console.log("Server is running on port ", 9090);
})














