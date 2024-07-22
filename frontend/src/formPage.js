import FormCSS from './form.module.css';
import {Link} from 'react-router-dom';
export function SidebarBtn({size, name, path}) {
    return (
        <Link to = {path}>
            <button
                className = {FormCSS.sidebar_btn}
                height = {size}
                width = {size}>
                {name}    
            </button>
        </Link>
    )
}
export default function FormPage() {
    return (
        <div className = {FormCSS.border}>
            <div className = {FormCSS.side_bar}>
                <SidebarBtn
                    size = {400}
                    name = {"Reset Password"}
                    path = {"/reset-password-form"}
                />
                <SidebarBtn
                    size = {400}
                    name = {"Reset Username"}
                    path = {"/reset-username-form"}
                />
                
            </div>    
        </div>
        

    )
}