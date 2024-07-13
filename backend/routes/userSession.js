require('dotenv').config()

const session = require('express-session');
const { PrismaClient } = require("@prisma/client");
const {PrismaSessionStore} = require('@quixo3/prisma-session-store')
const prisma = new PrismaClient();
const prismaSessionStore = new PrismaSessionStore();

const express = require("express");
const router = express.Router();

router.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 1000 * 60 * 30,
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

router.post('/', async (req, res) => {
    //login route
    //check if credentials are correct
    const updateUser = await prisma.user.update({
        where: {
            email
        },
        data: {
            username: newUsername
        }

    })
});

router.use((req, res, next) => {
    if (!req.session || req.session.clientId) {
        const err = new Error('unauthorized')
        err.statusCode = 401;
        return next(err)
    }
    next();
})

module.exports = router;