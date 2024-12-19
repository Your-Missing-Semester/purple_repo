const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

async function resetPasswordHandler(req, res) {
    const { currentPassword, newPassword } = req.body;
    const userId = req.session.userId; 

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (user !== null) {
            const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

            if (isPasswordValid) {
                const hashedNewPassword = await bcrypt.hash(newPassword, 10);

                await prisma.user.update({
                    where: { id: userId },
                    data: { password: hashedNewPassword }
                });

                res.status(200).json({ message: "Password updated successfully", success: true });
            } else {
                res.status(401).json({ message: "Current password is incorrect", success: false });
            }
        } else {
            res.status(404).json({ message: "User not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

module.exports = {
    resetPasswordHandler
};

