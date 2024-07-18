const express = require('express');
const usernameRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

usernameRouter.use(express.json());

usernameRouter.post('/check-username',  async (req, res) => {
    const {username} = req.body;
    const findUser = await prisma.user.findUnique({
        where: {username}
    })
    let exists = true;
    if (!findUser) {
        exists = false;
        res.json({exists, message: 'username available'});
    }
    else {
        res.status(409).json({exists, message: 'username already exists'})
    }
})

usernameRouter.put('/update-user', async (req, res) => {
    const {email, username, newUsername} = req.body;
    
    const findUser = await prisma.user.findUnique({
        where: {email}
    })
    if (!findUser) {
        res.status(404).json({message: "user not found"})
        return;
    }
  
    else if (email !== findUser.email) {
        res.status(404).json({message: "wrong email"})
        return;
    }
    else if (username !== findUser.username) {
        res.status(404).json({message: "wrong username"})
        return;
    }

    try {
        const updateUser = await prisma.user.update({
            where: {
                email
            },
            data: {
                username: newUsername
            }
    
        })
        res.json({success: true, message: "username updated successfully"});
    } catch (error) {
        console.error("internal server error");
        res.status(500).json({message: "error updating username"});
    }
});

module.exports = usernameRouter;