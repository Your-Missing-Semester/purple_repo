const express = require('express');
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


router.post('/check-username',  async (req, res) => {
    const {username} = req.body;
    const findUser = await prisma.user.findUnique({
        where: {username}
    })

    const exists = findUser !== null
    res.json({exists});
})

router.put('/', async (req, res) => {
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