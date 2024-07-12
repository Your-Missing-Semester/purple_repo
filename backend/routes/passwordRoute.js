const express = require('express');
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post('/check-password', async(req, res) => {
    const {password} = req.body;
    const findPassword = await prisma.user.findUnique({
        where: {password}
    })

    const exists = findPassword !== null
    res.json({exists});
})

router.put('/', async(req, res) => {
    const {currentPassword} = req.params;
    const {newPassword} = req.body;

    const updateUser = await prisma.user.update({
        where: {
            password
        },
        data: {
            password: newPassword
        }

    })
    res.json({success: true, message: "password updated successfully"});
});

module.exports = router;