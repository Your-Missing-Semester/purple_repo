import FormCSS from './form.module.css';
// import axios from 'axios';
import {useState} from 'react';



export function FormButton({size, display_name}) {

    
    // const save_pass = () => {
    //     axios.get('/reset-username-form/')
    //     .then(res => {
    //         console.log(res)
    //     }).catch(err => {
    //         console.log(err)
            
    //     })

    // }
    return (
        <button
           
            className = {FormCSS.form_btn}
            height = {size}
            width = {size}
            >{display_name}
        </button>
    );
}



export function Textbox({name, type, display_name}) {
    const [inputData, setInputData] = useState('');
    const handleChange = (e) => {
    setInputData(e.target.value);
};
    return (
        <div className = {FormCSS.textbox}>
            <input 
            type = {type}
            name = {name} 
            id = {name} 
            value = {inputData}
            onChange = {handleChange}
            placeholder = {display_name}
            />    
        </div>
    );
}

export default function ResetPasswordForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            email,
            password,
            newPassword
        );
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
                    <h1>Reset Password</h1>
                    <div className = {FormCSS.textbox}>
                        <input 
                            type = "email"
                            name = "email" 
                            id = "email" 
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
                            placeholder = "Email:"
                        />    
                    </div>
                    <div className = {FormCSS.textbox}>
                        <input 
                            type = "password"
                            name = "new_password" 
                            id = "password" 
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                            placeholder = "New Password:"
                        />    
                    </div>
                    <div className = {FormCSS.textbox}>
                        <input 
                            type = "password"
                            name = "confirm_password" 
                            id = "password" 
                            value = {newPassword}
                            onChange = {(e) => setNewPassword(e.target.value)}
                            placeholder = "Confirm Password:"
                        />    
                    </div>
                    <button
                        className = {FormCSS.form_btn}
                        onClick = {handleSubmit}
                        height = "100"
                        width = "100"
                        >Save Password
                    </button>
                </form>
            </div>

        </div>
    )
}


