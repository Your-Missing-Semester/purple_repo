import {useState, useEffect} from 'react';
import FormCSS from "./form.module.css";
import axios from 'axios';



export default function ResetUsernameForm() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [message, setMessage] = useState('');

    const checkUsername = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/reset-username-form/check-username`)
            return response.data.exists;
        } catch (err) {
            console.error('error checking username: ', err)
            return false;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        const usernameExists = await checkUsername();
        if (!email || !username || !newUsername) {
            setMessage('fill in all required fields')
            return;
        }
        if (usernameExists) {
            setMessage("username already exists")
            return;
        }
        try {
            const res = await axios.put(`http://localhost:8080/reset-username-form/update-user/`, {
                email: email,
                username: username,
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

    return (
        <div className = {FormCSS.border}>
            <div className = {FormCSS.left_side}>
                <form>
                    <div>
                    <img
                        className = {FormCSS.logo}
                        src = './careerConnectLogo.png' 
                        alt = "logo"
                        width = "100"
                        height = "100"
                    />
                    </div>
                    <h1>Change Username</h1>
                    <div className = {FormCSS.textbox}>
                        <input 
                            type = "email"
                            name = "email" 
                            id = "email" 
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
                            placeholder = "Email:"
                            required
                        />    
                    </div>
                    <div className = {FormCSS.textbox}>
                        <input 
                            type = "text"
                            name = "username" 
                            id = "username" 
                            value = {username}
                            onChange = {(e) => setUsername(e.target.value)}
                            placeholder = "Old Username: "
                            required
                        />    
                    </div>
                    <div className = {FormCSS.textbox}>
                        <input 
                            type = "text"
                            name = "confirm_username" 
                            id = "confirm_username" 
                            value = {newUsername}
                            onChange = {(e) => setNewUsername(e.target.value)}
                            placeholder = "New Username:"
                            required
                        />    
                    </div>
                    <button
                        className = {FormCSS.form_btn}
                        onClick = {handleSubmit}
                        height = "100"
                        width = "100"
                        >Save Changes
                    </button>
                    <p>{message}</p>
                </form>
            </div>
        </div>
    )
}


