import FormCSS from './form.module.css';
export function FormButton({size, display_name}) {
    return (
        <button
            className = {FormCSS.form_btn}
            height = {size}
            width = {size}
        >{display_name}</button>
    );
}

export function Logo({size}) {
    return (
        <div>
        <img
            className = {FormCSS.logo}
            src = './careerConnectLogo.png' 
            alt = "logo"
            width = {size}
            height = {size}
        />
        </div>
    );
}

export function Textbox({name, type, display_name}) {
    return (
        <div className = {FormCSS.textbox}>
            <input type = {type} name = {name} id = {name} placeholder = {display_name}/>    
        </div>
    );
}

export default function ResetPasswordForm() {
    return (
        <div className = {FormCSS.border}>
            <div className = {FormCSS.left_side}>
                <form>
                    <Logo
                        size = {100}
                    />
                    <h1>Reset Password</h1>
                    <Textbox
                        name = {"email"}
                        type = {"email"}
                        display_name = {"Email:"}
                    />
                    <Textbox
                        name = {"new_password"}
                        type = {"password"}
                        display_name = {"New Password:"}
                    />
                    <Textbox
                        name = {"confirm_password"}
                        type = {"password"}
                        display_name = {"Confirm Password:"}
                    />
                    <FormButton
                        size = {100} 
                        display_name = {"Save Password"}
                    />
                </form>
            </div>

        </div>
    )
}


