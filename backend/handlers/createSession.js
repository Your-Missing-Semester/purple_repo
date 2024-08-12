const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createSession = ( async (request, response) => {
    const { email, password } = request.body;

    if(!email || !password) return response.status(400).send('Username and password are missing');

    try {
        const user = await prisma.user.findUnique({
            where: {email}
        });
        if (!user) {
            return response.status(404).json({message: "user not found"}) 
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
    
        if (passwordMatch) {
            request.session.user = user.id
        }
        else {
            return response.status(400).send('invalid email or password')
        }
        
        const session = await prisma.session.create ({
            data: {
                id: user.id,
                sid: request.session.id,
                expiresAt: request.session.cookie.expires
            }
        });
        return response.status(200).json({message: "signed in successfully"})

    } catch (err) {
        if (err.response) {
            return err.response.data.message
        }
        return response.status(400).json({err, message: "bad request"});
    }
});

module.exports = {
    createSession
}
