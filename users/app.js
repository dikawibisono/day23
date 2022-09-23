const express = require('express');
const app = express();

app.use(express.json())

const port = 3000;


//list of users
const users = {}



//api home
app.get('/', (req, res) => {
    res.send("Welcome home");
});


//api for get list of users
app.get('/user', (req, res) => {
    res.send(users)
})


//api for create new user
app.post('/user', (req, res) => {
    let newUser = req.body
    let index = Object.keys(users).length + 1
    users[index] = newUser
    res.send("data terkirim")
    
});

app.listen(port, () => {
    console.log("listening on port " + port);
});