if (process.env.NODE_ENV !== 'production') { // can load .env file while server isn't in production mode
    require('dotenv').config();
}

const prisma = require('./database/db')
const express = require('express') 
const app = express()
const port = 8080
const bcrypt = require('bcrypt')
const session = require('express-session')
const {PrismaSessionStore} = require('@quixo3/prisma-session-store')
const {PrismaClient} = require('@prisma/client')
 
// how are we taking care of sessions.


app.use(express.json()); 
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true},
    store: new PrismaSessionStore(
        new PrismaClient(),
        {
            checkPeriod: 2*60*1000,
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        }
    )
}))

app.get('/', (request, response) => { 
    response.send ('my roots?');
});

app.post('/sign-up', async (request,response) => { // Sign up route, get the new user data 
    const { email, password, confPass } = request.body;

    if(!email || !password) return response.status(400).send('Username and password are missing'); // do something prettier w UI

    const currentUser = await prisma.user.findFirst({
        where: {
            email: email
        },
    })

    if(currentUser){
        return response.status(400).send('user already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await prisma.user.create({
        data: { // confused what are we filling all the other values with?...
            email: email,
            password: hashedPassword,
            username: email
        }
    })
    // where do I go from here?
    // res.send(what?)
})

app.post('/sign-in', async (request, response) => { // Sign in route, get the users data to login
    const { email, password } = request.body;

    if(!email || !password) return response.status(400).send('Username and password are missing');

    const currentUser = await prisma.user.findFirst({
        where: {
            email: email,
        }
    })

    if(currentUser){
        const passwordMatch = await bcrypt.compare(password, currentUser.password)

       if(passwordMatch){
            // where are they redirected?
            // have a home page / landing page / user account page
            response.redirect('/') // how to redirect to home page
       }else{
            return response.status(400).send('incorrect password!')
            // how to handle this correctly. Display error prettier
       }
    }else{
        response.redirect('/sign-up')
    }
})
    

app.listen(port, () =>{
    console.log('Server is listening on port', port);
})

module.exports = app;
