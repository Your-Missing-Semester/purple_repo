const express = require('express');
const usernameRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {authenticateSession} = require('./userSession.js')

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

usernameRouter.put('/update-user', authenticateSession, checkUsernameExists, async (req, res) => {
    const {email, username, newUsername} = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {email}
        })
        if (!user) {
            return res.status(404).json({message: "wrong email"});
            
        }
      
        if (username !== user.username) {
            return res.status(400).json({message: "wrong username"});
            
        }
        const updateUser = await prisma.user.update({
            where: {
                email
            },
            data: {
                username: newUsername
            }
    
        })
        return res.json({success: true, message: "username updated successfully"});
    } catch (error) {
        console.error("internal server error");
        res.status(500).json({message: "error updating username", error: error.message});
    }
});

module.exports = usernameRouter;