const express = require('express');
const router = express.Router();

router.get('/:username', (req, res) => {
    console.log(req.session);
    console.log(req.session.id)
    const {username} = req.params;
    const exists = username in users;
    res.json({exists});
})

router.put('/:currentUsername', (req, res) => {
    const {currentUsername} = req.params;
    const {email, username} = req.body;

    if (!(currentUsername in users)) {
        return res.status(404).json({success: false, message: "user not found"})
    }
    else if (users[currentUsername].email !== email) {
        return res.status(400).json({success: false, message: "invalid email"})
    }

    const userData = users[currentUsername];
    delete users[currentUsername];
    users[username] = {...userData, username: username, email}
    res.json({success: true, message: "username updated successfully"});
});

module.exports = router;