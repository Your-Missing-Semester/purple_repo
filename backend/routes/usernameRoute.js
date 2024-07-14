const express = require('express');
const usernameRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


usernameRouter.post('/check-username',  async (req, res) => {
    const {username} = req.body;
    const findUser = await prisma.user.findUnique({
        where: {username}
    })
    const exists = true;
    if (findUser === null) {
        res.status(404).json({message: 'user not found'});
        exists = null;
    }
    res.json(exists)
})

usernameRouter.put('/update-user', async (req, res) => {
    const {currentUsername} = req.params;
    const {email, newUsername} = req.body;

    const updateUser = await prisma.user.update({
        where: {
            email
        },
        data: {
            username: newUsername
        }

    })
    res.json({success: true, message: "username updated successfully"});
});

module.exports = router;