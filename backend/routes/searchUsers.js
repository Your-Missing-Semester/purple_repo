const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get('/search', async (req, res) => {
    const {search_value} = req.body;
    search_value = search.value.toLowerCase();

    try {
        const search = await prisma.user.findMany({
            where: {
                OR: [
                    {
                        firstName: {
                            contains: {search_value},
                            mode: 'insensitive'
                        }
                    }, 
                    {
                        lastName: {
                            contains: {search_value},
                            mode: 'insensitive'
                        }
                    }
                ]
            }
        });
    } 
    catch (err) {
        if (err.res) {

        }
        console.error(err)
    }
});