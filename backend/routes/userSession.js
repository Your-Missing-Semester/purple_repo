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
            checkPeriod: 2 * 60 * 1000,  //ms
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        },
    )
}));

const authenticateSession = ( async (req, res, next) => {
    if (!req.session || !req.session.user) {
        return res.status(401).json({message: "not authenticated"})
    }
    if (req.session.cookie.expires && req.session.cookie.expires < Date.now()) {
        req.session.destroy()
        return res.status(401).json({message: 'session expired'})
    }

    const userID = req.session.user;
    try {
        const session = await prisma.session.findUnique({
            where: {id: userID}
        });
        const user = await prisma.user.findUnique({
            where: {id: userID}
        });
        if (!session || !user) {
            return res.status(404).json({message: 'unauthenticated'});
        }

        next();
    } catch (err) {
        if (err.res) {
            return err.res.data.message;
        } else {
            return res.status(400).json('error authenticating request');
        }
    }
});

module.exports = {
    authenticateSession, 
    userSession, 
    userSessionRouter
};