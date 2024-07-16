
import axios from 'axios';

const handleSubmit = async (e, email, username, newUsername, message) => {
    e.preventDefault();
    setMessage('');
    if (!email || !username || !newUsername) {
        setMessage('fill in all required information')
        return;
    }
    const usernameExists = await checkUsername();
    if (usernameExists) {
        setMessage("username already exists")
        return;
    }
    try {
        const res = await axios.put(`http://localhost:8080/reset-username-form/update-user/`, {
            email: email,
            newUsername: newUsername
        });
        if (res.data.success) {
            setMessage('updated username successfully');
            setUsername(newUsername);
            setNewUsername('');
            setUsername('');
            setEmail('');
        } 
        else {
            setMessage('failed updating username');
        }
    } catch (err) {
        const {message} = err.response.data;
        setMessage(message);
        console.error('error updating username', err)
    }

}

module.exports = handleSubmit