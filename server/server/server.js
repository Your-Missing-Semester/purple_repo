const prisma = require('./db/db')
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: `Email already exists: ${email}` });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
