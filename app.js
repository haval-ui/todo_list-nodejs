const express = require('express');
const app = express();
var bodyParser = require('body-parser')
let ejs = require('ejs');
const port = 3000



app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');


let date = new Date();
let newItems =[];
let format ={
    weekday: 'short', 
    day: 'numeric',
    month: 'long', 
    year: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
    // second: 'numeric',
};
let formatedDate= date.toLocaleString('en-US',format )




app.get('/', (req, res) =>{ 
    res.render('index', {today : formatedDate , newItem : newItems })
})
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})







app.listen(port, () => console.log(`Example app listening on port ${port}!`))