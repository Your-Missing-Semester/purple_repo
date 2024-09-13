const express = require("express");
const session = require('express-session');
const {PrismaSessionStore} = require('@quixo3/prisma-session-store')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const userSessionRouter = express.Router();

const userSession = (session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 30
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
    if (!req.session) {
        return res.status(401).json({message: "not logged in"})
    }
    if (req.session.cookie.expires && req.session.cookie.expires < Date.now()) {
        req.session.destroy((err) => {
            if (err) {
                console.error('error updating session')
            }
        });
        return res.status(401).json({message: 'session expired'})
    }
    if (!req.session.user) {
        return res.status(401).json({message: "not authenticated"})
    }
    const userID = req.session.user;
    try {
        try {
            const session = await prisma.session.findUnique({
                where: {id: userID}
            });
            if (!session) {
                return res.status(404).json({message: 'session not found'});
            }
        } catch (err) {
            if (err.res) {
                return err.res.data.message;
            }
            console.error(err)
            return res.json({message: "error checking session"});
        }
        const user = await prisma.user.findUnique({
            where: {id: userID}
        });
        if (!user) {
            return res.status(404).json({message: 'user not found'})
        }
        next();
    } catch (err) {
        if (err.res) {
            return err.res.data.message;
        } else {
            console.error(err)
            return res.status(400).json('error authenticating request');
        }
    }
});

module.exports = {
    authenticateSession, 
    userSession, 
    userSessionRouter
};