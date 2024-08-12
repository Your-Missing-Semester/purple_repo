const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const updateUser = ( async (req, res) => {
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

module.exports = {
    updateUser
}