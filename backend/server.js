const express = require('express'); 
const app = express();
const cors = require('cors');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const port = 8080;
const {authenticateSession, userSession, userSessionRouter} = require('./routes/userSession.js');
const usernameRouter = require('./routes/usernameRoute');

app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:3000/',
    credentials: true
  }));
app.use('/reset-username-form', usernameRouter)
app.use('/user-session', userSessionRouter)
app.use(userSession)

app.post('/sign-in', async (request, response) => { // Sign in route, get the users data to login
    const { email, password } = request.body;
    try {
        const user = await prisma.user.findUnique({
            where: {email}
        });
        if (!user) {
            return response.status(404).json({message: "user not found"}) 
        }
        request.session.user = user.id
        try {
            const session = await prisma.session.create ({
                data: {
                    id: user.id,
                    sid: request.session.id,
                    expiresAt: request.session.cookie.expires
                }
            });

        } catch (err) {
            console.error(err)
        }
        return response.status(200).json({message: "signed in successfully"})
    } catch (err) {
        if (err.response) {
            if (err.response.data.status === 404) {
                return err.response.data.message
            }
        }
        console.error(err)
        return response.status(400).json({err, message: "bad request"});
    }
});



app.get('/', authenticateSession, async (request, response) => { 
    // response.send ('my roots?');
    return response.status(200).json({userID: request.session.user})
});

app.post('/sign-up', (request,response) => { // Sign up route, get the new user data 
    const { email, password, confPass } = request.body;
    /* TODO logic */
})

app.listen(port, () =>{
    console.log('Server is listening on port', port);
})

module.exports = app;
