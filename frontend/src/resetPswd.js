import './form.css';
function FormButton({size, display_name}) {
    return (
        <button
            className = "form_btn"
            height = {size}
            width = {size}
        >{display_name}</button>
    );
}

function Logo({size}) {
    return (
        <div>
        <img 
            src = './careerConnectLogo.png' 
            alt = "logo"
            width = {size}
            height = {size}
        />
        </div>
    );
}

function Textbox({name, type, display_name}) {
    return (
        <div className = "textbox">
            <input type = {type} name = {name} id = {name} placeholder = {display_name}/>    
        </div>
    );
}

export default function ResetPasswordForm() {
    return (
        <div className = "border">
            <div className = "left_side">
                <form>
                    <Logo
                        size = {200}
                    />
                    <Textbox
                        name = {"old_password"}
                        type = {"password"}
                        display_name = {"Old Password:"}
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


