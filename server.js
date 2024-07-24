const express = require("express");
const app = express();
const path = require("path")
const {logger} = require("./middleware/logger")
const errorHandler = require("./middleware/errorHandler")
const PORT =  process.env.PORT || 3500;

app.use(logger);

app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/', require('./routes/root'))

app.all('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.use(errorHandler);

app.listen (PORT, ()=> console.log(`server running on ${PORT}`))