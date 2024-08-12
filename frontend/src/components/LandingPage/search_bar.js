import {useState} from 'react';
import axios from 'axios';
import search_bar_css from './LandingPage.module.css'

function SearchBar() {
    const [search, set_search] = useState();
    const handleSearch = async (e) => {
        const search_value = e.target.value;
        set_search(search_value);
        const res = await axios.get ('https://localhost:8080/search/', {
            search_value: search_value
        });

        
        
    }

    return (
        <div>
            <form >
                <input 
                value = {search}
                type = "search"
                onChange = {handleSearch}/>
                <input type = "submit" value = "Search"/>
            </form>
        </div>
        
    )
}

export default SearchBar;
