const express = require("express");
const session = require('express-session');
const {PrismaSessionStore} = require('@quixo3/prisma-session-store')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const userSessionRouter = express.Router();

const ONE_DAY = 86400000;
const userSession = (session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: ONE_DAY
    },
    store: new PrismaSessionStore(
        prisma,
        {
            checkPeriod: 2 * 60 * 1000,  // 2 mins
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        },
    )
}));

const authenticateSession = ( async (req, res, next) => {
    if (!req.session || !req.session.user) {
        return res.status(401).json({message: "please login"})
    }

    const id = req.session.user;
    const user = await prisma.user.findUnique({
        where: {id}
    });

    const sid = req.signedCookies['connect.sid']
    if (!sid || sid !== req.session.id || !user) {
        return res.status(404).json({message: "unauthenticated"});
    }
    next()
});

module.exports = {
    authenticateSession, 
    userSession, 
    userSessionRouter
};