import React from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

const Header = () => {
    return (
        <div className="header">
            <img
                src="https://cdn-icons-png.flaticon.com/512/3532/3532091.png"
                alt=""
                className="header__icon"
            />
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">

                <Button variant="contained">Login</Button>
            </div>
        </div>
    );
};

export default Header;
