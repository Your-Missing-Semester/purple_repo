import { useState } from "react";
import axios from "axios";
import searchCSS from "./search_bar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/fontawesome-free-solid";
import { Search } from "lucide-react";

function Dropdown({ results }) {
  return (
    <div className={searchCSS.dropdown_container}>
      {results.map((result, id) => {
        return (
          <div
            className={searchCSS.dropdown_profile_container}
            key={result.id || id}
            >
            <div className={searchCSS.user_name}>
              {[result.firstName, result.lastName].join(" ")}
            </div>
            <p className={searchCSS.profile_tag}>tags</p>
          </div>
        );
      })}
    </div>
  );
}

//remember to add hyperlink to profile banners to go to actual profiles
function SearchedProfiles({ results }) {
  return (
    <div id={searchCSS.results}>
      {results.map((result, id) => {
        return (
          <div className={searchCSS.card_container} key={result.id || id}>
            <div className={searchCSS.img_container}>
              <p>img goes here</p>
            </div>
            <div id={searchCSS.card_content}>
              <div id={searchCSS.card_name}>
                {[result.firstName, result.lastName].join(" ")}
              </div>

              <div id={searchCSS.card_text_container}>
                <p className={searchCSS.card_text}>headline goes here</p>
                <p className={searchCSS.card_text}>location goes here</p>
              </div>
              <p className={searchCSS.results_tag}>tags</p>
            </div>
            <div id={searchCSS.card_btn_container}>
              <FontAwesomeIcon icon={faThumbtack} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function InputBar({ search, handleSubmit, handleSearch }) {
  return (
    <div className={searchCSS.input_container}>
      <form>
        <div className={searchCSS.search_bar}>
          <input
            value={search}
            placeholder="Search..."
            type="search"
            onChange={handleSearch}
            className={searchCSS.input_field}
          />
          <Search />
        </div>
        <input onClick={handleSubmit} type="submit" hidden />
      </form>
    </div>
  );
}

function SearchBar() {
  const [search, set_search] = useState("");
  const [results, set_results] = useState([]);
  const [final_results, set_final_results] = useState([]);

  const handleSearch = async (e) => {
    const search_value = e.target.value;
    set_search(search_value);

    if (search_value.trim() === "") {
      set_results([]);
      return;
    }
    try {
      const users = await axios.get("http://localhost:8080/search-bar/search/");
      const filtered_users = users.data.filter((user) => {
         const fullName = user.firstName.concat("", user.lastName).toLowerCase().replaceAll(' ','')
        return (
            fullName.includes(search_value.toLowerCase().replaceAll(' ', ''))
        );
      });
      set_results(filtered_users);
      console.log(results)
    } catch (err) {
      if (err.res) {
        return err.res.data.message;
      }
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    set_final_results(results);
    set_results([]);
    e.preventDefault();
  };

  return (
    <div id = {searchCSS.body}>
      <div className={searchCSS.header_container}>
        <InputBar
          search={search}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
        />
        {search !== "" && results.length > 0 && <Dropdown results={results} />}
      </div>

      {final_results && <SearchedProfiles results={final_results} />}
    </div>
  );
}
export default SearchBar;
