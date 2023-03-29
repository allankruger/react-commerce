import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { NavbarContainer } from "./styles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="images/en.png"
              alt="Flags of the USA and GB combined in one"
            />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <Link to="/category/1">Women</Link>
          </div>

          <div className="item">
            <Link to="/category/2">Men</Link>
          </div>

          <div className="item">
            <Link to="/category/3">Children</Link>
          </div>
        </div>

        <div className="center">
          <Link to="/">React Commerce</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link to="/">Homepage</Link>
          </div>

          <div className="item">
            <Link to="/">About</Link>
          </div>

          <div className="item">
            <Link to="/">Contact</Link>
          </div>

          <div className="item">
            <Link to="/">Stores</Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />

            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};
