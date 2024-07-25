require('dotenv').config()
const express = require("express");
const session = require('express-session');
const { PrismaClient } = require("@prisma/client");
const {PrismaSessionStore} = require('@quixo3/prisma-session-store')
const prisma = new PrismaClient();
const prismaSessionStore = new PrismaSessionStore();

const userSessionRouter = express.Router();



// session middleware that manages;
// Session Initialization: Creates a session for each user and assigns a unique session ID.
// Session Storage: Saves session data to a store (e.g., Redis, MemoryStore, etc.).
// Session Retrieval: Retrieves session data on subsequent requests using the session ID.
// Session Management: Handles session expiration, renewal, and destruction.
const userSession = (session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 1000 * 60 * 30
    },
    store: prismaSessionStore(
        prisma(),
        {
            checkPeriod: 2 * 60 * 1000,  //ms
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        }
    )
}));
//authentication middleware that checks for session and session id
//this is placed on every request
const authenticateSession = ((req, res, next) => {
    if (!req.session || !req.session.clientId) {
        res.status(401).json({messsage: "unauthorized"});
        // const err = new Error('unauthorized')
        // err.statusCode = 401;
        // return next(err)
        return;
    }
    console.log(req.session)
    next();
});

userSessionRouter.post('/auth', async (req, res) => {
    const {username, password} = req.body
    const user = await prisma.user.findUnique({
        where: {username}
    })
     //add validation for username and pass here
    req.session.user = user
});


module.exports = {authenticateSession, userSession};