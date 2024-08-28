import {useState} from 'react';
import axios from 'axios';
import searchCSS from './search_bar.module.css';
 

function Dropdown({results}) {
    return (
        <div className = {searchCSS.dropdown_container}>
            {
                results.map((result, id) => {

                    return (
                        <div className = {searchCSS.dropdown_profile_container} key = {result.id || id}>
                            <div className = {searchCSS.user_name}>{[result.firstName, result.lastName].join(" ")}</div>
                            <p className = {searchCSS.profile_tag}>tags</p>
                        </div>
                    )
                })
            }
        </div>
    )
}


//remember to add hyperlink to profile banners to go to actual profiles
function SearchedProfiles({results}) {
    return (
        <div>
            {
                results.map((result, id) => {

                    return (
                        <div className = {searchCSS.profile_container} key = {result.id || id}>
                            <div className = {searchCSS.img_container}> 
                                <p>img goes here</p>
                            </div>
                            <div id = {searchCSS.profile_content}>
                                <div id = {searchCSS.profile_name}>{[result.firstName, result.lastName].join(" ")}</div>
                                <div className = {searchCSS.sub_container}>
                                    <p className = {searchCSS.profile_text}>headline goes here</p>
                                    <p className = {searchCSS.profile_text}>location goes here</p>
                                    <p>tags go here</p>
                                </div>
                                
                            </div>
                            <p>buttons go here</p>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

function InputBar({search, handleSubmit, handleSearch}) {
    return (
        <div className = {searchCSS.input_container}>
            <form>
                <input 
                value = {search}
                type = "search"
                onChange = {handleSearch}
                className = {searchCSS.input_field}/>
                <input 
                type = "submit" 
                value = "Search"
                className = {searchCSS.search_btn}
                onClick = {handleSubmit}/>
            </form>
        </div>
    )
}

function SearchBar() {
    const [search, set_search] = useState('');
    const [results, set_results] = useState([]);
    const [final_results, set_final_results] = useState([]);

    const handleSearch = async (e) => {
        
        const search_value = e.target.value;
        set_search(search_value);

        if (search_value.trim() === '') {
            set_results([])
            return;
        }
            try {
                const users = await axios.get('http://localhost:8080/search-bar/search/');
                const filtered_users = users.data.filter((user) => {
                    return user.firstName.toLowerCase().includes(search_value) 
                    || user.lastName.toLowerCase().includes(search_value)

                });
                set_results(filtered_users)

            } catch (err) {
                if (err.res) {
                    return err.res.data.message
                }
                console.error(err)
            }
    }
    
    const handleSubmit = async (e) => {
        set_final_results(results);
        e.preventDefault();
    }

    return (
        <div>
            <div className = {searchCSS.header_container}>
                <InputBar search = {search} 
                handleSubmit = {handleSubmit} 
                handleSearch = {handleSearch}/>

                <Dropdown results = {results}/>
            </div>
            
            {final_results && <SearchedProfiles results = {final_results}/>}

        </div>
        
    )
}
export default SearchBar;
