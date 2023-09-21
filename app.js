const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs')
const Users = require('./models/Users');
const bodyParser= require('body-parser')
const port = process.env.port || 3000;
const app = express();
require('dotenv').config()

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/Public'));



const uri = `mongodb+srv://kkelle832:${process.env.PASSWORD}@cluster0.ebsnw8y.mongodb.net/Registration-test`;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(uri).then(()=>{
     console.log('Connected')
}).catch(err=>{
 /// console.log(err)
})

app.get('/NewUser',(req,res)=>{
    res.render('NewUser',{})
});

app.get('/Login',(req,res)=>{
  res.render('Login',{})
});

app.get('/',(req,res)=>{
  res.render('index',{})
});


app.get('/Delete/:id',async(req,res)=>{
  var idUser = req.params.id;
    await Users.findByIdAndDelete(idUser);
    
   res.redirect('/')
});


app.post('/NewUser',async(req,res)=>{
  var NewUser = req.body;

  const FoundUser = await Users.findOne({Email:NewUser.Email});

  if(FoundUser !== null){
    res.redirect('/NewUser');
    return;
  }



  const User = new Users(NewUser);
  await User.save();

  res.redirect('./Login')

})

app.post('/Home',async(req,res)=>{
    var credentials = req.body;
    const User = await Users.findOne({Email:credentials.Email});
    if(User === null || User.Password !== credentials.Password){
      res.redirect('./Login');
      return;
    }   
   res.render('Home',{User:User}) /// undefiend 
})

app.get('/Edit/:id',async(req,res)=>{
  var User = await Users.findById(req.params.id);
  if(!User){
    res.redirect('/')
    return;
  }
  res.render('edit',{User:User})
})

app.post('/FinishEdit/:id',async(req,res)=>{
  var User = await Users.findByIdAndUpdate(req.params.id,req.body);
  var UpdatedUser = await Users.findById(req.params.id)
  res.render('Home',{User:UpdatedUser});
})




app.listen(port,()=>{
    console.log('Started on http://localhost:3000/')
})