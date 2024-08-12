const express = require('express');
const usernameRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {authenticateSession} = require('./userSession.js')
import {updateUser} from '../handlers/updateUser.js';

const checkUsernameExists = async (req, res, next) => {
    const {newUsername} = req.body;
    try {
        const findUsername = await prisma.user.findUnique({
            where: {username: newUsername}
        });
        if (findUsername) {
            return res.status(409).json({exists: true, message: 'username already exists'});
        }
        next();
    } catch (error) {
        console.error("error checking if username exists", error);
        return res.status(500).json({message: "user not found", error: error.message});
    }
}

usernameRouter.put('/update-user', authenticateSession, checkUsernameExists, updateUser);

module.exports = usernameRouter;