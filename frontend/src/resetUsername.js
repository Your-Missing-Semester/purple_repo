import {Logo, Textbox, FormButton} from "./resetPswd.js";
import "./form.css";

export default function ResetUsernameForm() {
    return (
        <div className = "border">
            <div className = "left_side">
                <form>
                    <Logo
                        size = {100}
                    />
                    <h1>Reset Username</h1>
                    <Textbox
                        name = {"email"}
                        type = {"email"}
                        display_name = {"Email:"}
                    />
                    <Textbox
                        name = {"new_username"}
                        type = {"text"}
                        display_name = {"New Username:"}
                    />
                    <Textbox
                        name = {"confirm_username"}
                        type = {"text"}
                        display_name = {"Confirm Username:"}
                    />
                    <FormButton
                        size = {100} 
                        display_name = {"Save Changes"}
                    />
                </form>
            </div>

        </div>
    )
}


