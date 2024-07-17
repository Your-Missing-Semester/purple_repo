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

    if(!email || !password) return response.status(400).send('username or password are missing') // do something prettier w UI

    const currentUser = await prisma.user.findFirst({
        where: {
            email: email
        },
    })

    if(currentUser){
        return response.status(400).send('user already exists')
    }

    if(confPass!=password) return response.status(401).send('passwords are not matching');

    function isPasswordSecure(password) {
        const minLength = 8;  
        const hasUpperCase = /[A-Z]/.test(password);  
        const hasLowerCase = /[a-z]/.test(password); 
        const hasDigit = /\d/.test(password);  
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); 

        return (
            password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar
        );
    }
    
    if(!isPasswordSecure(password)){
        return response.status(400).send('password is not secure')
    }
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await prisma.user.create({
        data: { 
            email: email,
            password: hashedPassword,
            username: email
        }
    })
    /* TODO */
    response.redirect('/')
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
            /* TODO */
            response.redirect('/') 
       }else{
            return response.status(400).send('invalid email or password')
       }
    }else{
        return response.status(400).send('invalid email or password')
    }
})
    

app.listen(port, () =>{
    console.log('Server is listening on port', port);
})

module.exports = app;
