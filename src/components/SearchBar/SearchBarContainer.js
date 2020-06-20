// You do not need to change any code in this file
import React, { useState } from "react";
import dummyData from "../../dummy-data.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons'
import "./SearchBar.css";
import SearchResults from "./SearchResults";

const SearchBar = (props) => {
  
  const [searchData] = useState(dummyData);
  function onChangeHandler(event){
    props.updateData(searchData.filter(result => result.username.includes(event.target.value)))
    console.log(event.target.value)
  }
  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
        onChange={onChangeHandler}
          type="text"
          placeholder="Search"
        />
      </form>
      <div>
        {/* {searchData.filter(searchData => searchData.username.includes(("")).map(filteredSearch => (
          <li className="show">
          {filteredSearch}
          </li>
          )))} */}
      </div>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
