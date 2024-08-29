if (process.env.NODE_ENV !== 'production') { // can load .env file while server isn't in production mode
    require('dotenv').config();
}
const express = require('express'); 
const path = require('path');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const port = 8080;
// const {authenticateSession, userSession, userSessionRouter} = require('./routes/userSession.js');
const usernameRouter = require('./routes/usernameRoute');
const authHelper = require('./authHelper')
// const {searchBarRouter} = require('./routes/searchUsers.js');

app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
app.use('/reset-username-form', usernameRouter)
// app.use('/user-session', userSessionRouter)
// app.use('/search-bar', searchBarRouter)
// app.use(userSession)

app.post('/sign-in', async (request, response) => { // Sign in route, get the users data to login
    const { email, password } = request.body;

    if(!email || !password) return response.status(400).send('Username and password are missing');

    try {
        const user = await prisma.user.findUnique({
            where: {email}
        });
        if (user) {
            const passwordMatch = await bcrypt.compare(password, currentUser.password)
    
           if (passwordMatch) {
                /* TODO */
                request.session.user = user.id
           }
           else {
                return response.status(400).send('invalid email or password')
           }
        }else {
            return response.status(404).json({message: "user not found"}) 
        }
        
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



// app.get('/', authenticateSession, async (request, response) => { 
//     // response.send ('my roots?');
//     return response.status(200).json({userID: request.session.user})
// });

// app.post('/sign-up', async (request,response) => { 
//     const { email, password, confPass } = request.body;

//     if(!email || !password) {
//         return response.status(400).send('username or password are missing') // do something prettier w UI
//     }

//     const currentUser = await prisma.user.findFirst({
//         where: {
//             email
//         },
//     })

//     if(currentUser){
//         return response.status(400).send('user already exists')
//     }

//     if(confPass!=password) return response.status(401).send('passwords are not matching');
    
//     if(!authHelper.isPasswordSecure(password)){
//         return response.status(400).send('password is not secure')
//     }

//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(password, salt)

//     const user = await prisma.user.create({
//         data: { 
//             email: email,
//             password: hashedPassword,
//             username: email
//         }
//     })
//     /* TODO */
//     return response.status(200).send('sign up successful') 
// })

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => {
    console.log('Server is listening on port', port);
})

module.exports = app;
