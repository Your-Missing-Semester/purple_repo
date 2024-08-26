const express = require("express");
const session = require('express-session');
const {PrismaSessionStore} = require('@quixo3/prisma-session-store')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const userSessionRouter = express.Router();

const ONE_MIN = 86400000 / 24 / 60 * 2;
const userSession = (session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: ONE_MIN
    },
    store: new PrismaSessionStore(
        prisma,
        {
            checkPeriod: 2 * 60 * 1000,  //ms
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        },
    )
}));

const authenticateSession = ( async (req, res, next) => {
    if (!req.session || !req.session.user) {
        return res.status(401).json({message: "please login"})
    }

    const sid = req.signedCookies['connect.sid']

    if (!sid) {
        return res.status(404).json({message: "unauthenticated"});
    }
    if (sid !== req.session.id) {
        return res.status(404).json({message: "unauthenticated"});
    }
    next()
});

module.exports = {
    authenticateSession, 
    userSession, 
    userSessionRouter
};