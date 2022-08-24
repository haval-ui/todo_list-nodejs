const express = require('express');
const app = express();
var bodyParser = require('body-parser')
let ejs = require('ejs');
const Date = require(__dirname+"/date.js")

let newItems =[];

const port = 3000



app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static('public'));






app.get('/', (req, res) =>{
    let formatedDate=Date.getday() 
    res.render('index', {today : formatedDate , newItem : newItems })
})
app.post('/', function (req, res) {
    let newtask =req.body.add
    newItems.push(newtask)
    console.log(newItems)    
    res.redirect('/')
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))