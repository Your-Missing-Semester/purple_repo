const express = require('express'); 
const app = express();
const cors = require('cors');
const port = 8080;
const usernameRouter = require('./routes/usernameRoute');
app.use(express.json()); 
app.use(cors({ origin:'http://localhost:3000'}));

app.use('/reset-username-form', usernameRouter)

app.get('/', (request, response) => { 
    response.send ('my roots?');
});

app.post('/sign-up', (request,response) => { // Sign up route, get the new user data 
    const { email, password, confPass } = request.body;
    /* TODO logic */
})

app.post('/sign-in', (request, response) => { // Sign in route, get the users data to login
    const { email, password } = request.body;
    /* TODO logic */
})
    

app.listen(port, () =>{
    console.log('Server is listening on port', port);
})

module.exports = app;
