if (process.env.NODE_ENV !== 'production') { // can load .env file while server isn't in production mode
    require('dotenv').config();
}

const express = require('express'); 
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const port = 8080;
const {authenticateSession, userSession, userSessionRouter} = require('./routes/userSession.js');
const usernameRouter = require('./routes/usernameRoute');
const authHelper = require('./authHelper')
const cookieParser = require('cookie-parser')
const {loginHandler} = require('./handlers/createSession.js');

app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

app.use('/reset-username-form', usernameRouter);
app.use('/user-session', userSessionRouter);
app.use(userSession);
app.use(cookieParser(process.env.SESSION_SECRET));

app.get('/test',authenticateSession, async (req, res) => {
    return res.json({message: "checked cookie, all clear"})
})

app.post('/sign-in', loginHandler);

app.get('/', authenticateSession, async (request, response) => { 
    // response.send ('my roots?');
    return response.status(200).json({cookie})
});

app.post('/sign-up', async (request,response) => { 
    const { email, password, confPass } = request.body;

    if(!email || !password) {
        return response.status(400).send('username or password are missing') // do something prettier w UI
    }

    const currentUser = await prisma.user.findFirst({
        where: {
            email
        },
    })

    if(currentUser){
        return response.status(400).send('user already exists')
    }

    if(confPass!=password) return response.status(401).send('passwords are not matching');
    
    if(!authHelper.isPasswordSecure(password)){
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
    return response.status(200).send('sign up successful') 
})

app.listen(port, () =>{
    console.log('Server is listening on port', port);
})

module.exports = app;
