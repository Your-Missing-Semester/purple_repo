const express = require('express'); 
const app = express();
const port = 8080;
const fs = require('fs');
app.use(express.json()); 

app.get('/', (request, response) => { 
    response.send ('my roots?');
});

app.post('/signup', (request,response) => { // Sign up route, get the new user data 
    const email = request.body.email; 
    const pass = request.body.password;
    const confPass = request.body.confPass;

    /* TODO logic */
    console.log(email);
    console.log(pass);
    console.log(confPass);
})

app.post('/signin', (request, response) => { // Sign in route, get the users data to login
    const email = request.body.email;
    const pass = request.body.password;

    /* TODO logic */
    console.log(email);
    console.log(pass);
})
    

app.listen(port, () =>{
    console.log("Server is listening on port 8080");
})

module.exports = app;