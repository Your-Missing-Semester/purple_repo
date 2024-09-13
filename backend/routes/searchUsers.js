const express = require('express');
const searchBarRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

searchBarRouter.get('/search', async (req, res) => {
    try {
        const search = await prisma.user.findMany({
            select: {
                firstName: true,
                lastName: true
            }
        });
        return res.send(search)
    } 
    catch (err) {
        if (err.res) {
            return err.res.data.message
        }
        console.error(err)
        return res.status(400).json({message: 'no users found'})
    }
});

module.exports = {
    searchBarRouter
}