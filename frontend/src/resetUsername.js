import {useState} from 'react';
import FormCSS from "./form.module.css";
import axios from 'axios';



export default function ResetUsernameForm() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        if (!email || !username || !newUsername) {
            setMessage('fill in all required fields')
            return;
        }
        try {
            const res = await axios.put(`http://localhost:8080/reset-username-form/update-user/`, {
                email: email,
                username: username,
                newUsername: newUsername
            });

            if (res.data.success === true) {
                setMessage('updated username successfully');
                setNewUsername('');
                setUsername('');
                setEmail('');
                return;
            }
        } catch (err) {
            if (err.response) {
                if (err.response.data.exists) {
                    setMessage("username already exists")
                    return;
                }
                else if (err.response.status === 400) {
                    setMessage('incorrect username entered')
                    return;
                }
                else if (err.response.status === 404)  {
                    setMessage('incorrect email entered')
                    return;
                }
            } else {
                setMessage('error updating username');
                console.error('error updating username', err.message)
            }
            
        };
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


