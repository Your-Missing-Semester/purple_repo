const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function checkPasswordHandler(req, res) {
    const { password } = req.body;
    try {
        const findPassword = await prisma.user.findUnique({
            where: { password }
        });

        if (findPassword !== null) {
            res.status(200).json({ message: "Password exists", exists: true });
        } else {
            res.status(404).json({ message: "Password not found", exists: false });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

async function resetPasswordHandler(req, res) {
    const { currentPassword, newPassword } = req.body;

    try {
        const findPassword = await prisma.user.findUnique({
            where: { password: currentPassword }
        });

        if (findPassword !== null) {
            await prisma.user.update({
                where: {
                    password: currentPassword
                },
                data: {
                    password: newPassword
                }
            });
            res.status(200).json({ message: "Password updated successfully", success: true });
        } else {
            res.status(404).json({ message: "Current password not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

module.exports = {
    checkPasswordHandler,
    resetPasswordHandler
};
