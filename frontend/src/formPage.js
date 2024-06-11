import './form.css';
import {Link} from 'react-router-dom';
export function SidebarBtn({size, name, path}) {
    return (
        <Link to = {path}>
            <button
                className = "sidebar_btn"
                height = {size}
                width = {size}>
                {name}    
            </button>
        </Link>
    )
}
export default function FormPage() {
    return (
        <div className = "border">
            <div className = "side_bar">
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