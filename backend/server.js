const express = require('express'); 
const app = express();
const port = 8080;
app.use(express.json()); 

app.get('/', (request, response) => { 
    response.send ('my roots?');
});

app.post('/sign-up', (request,response) => { // Sign up route, get the new user data 
    const { email, password, confPass } = request.body;
    /* TODO logic */
    console.log(email);
    console.log(password);
    console.log(confPass);
})

app.post('/sign-in', (request, response) => { // Sign in route, get the users data to login
    const { email, password } = request.body;
    /* TODO logic */
    console.log(email);
    console.log(password);
})
    

app.listen(port, () =>{
    console.log("Server is listening on port 8080");
})

module.exports = app;
