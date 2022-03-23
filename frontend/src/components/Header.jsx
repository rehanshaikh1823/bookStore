import React, { useState } from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    const [searchValue, setSearchValue] = useState('')
    const handleSearchBox = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue);
    }
    return (
        <div className="header">
            <Link to='/'>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3532/3532091.png"
                    alt=""
                    className="header__icon"
                />
            </Link>
            <div className="header__center">
                <input type="text" onChange={handleSearchBox} />
                <SearchIcon />
            </div>
            <div className="header__right">

                <Button variant="contained">Login</Button>
            </div>
        </div>
    );
};

export default Header;
