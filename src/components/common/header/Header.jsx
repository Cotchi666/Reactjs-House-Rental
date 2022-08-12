import React, { useContext, useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import {Store} from "../../../Store" 
const Header = () => {
  const [navList, setNavList] = useState(false);
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <>
      <header>
        <div className="container flex">
          <Link to="/">
            <div className="logo">
              {/* <img src="./images/logo.png" alt="" /> */}
            </div>
          </Link>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <h4>
              {cart.cartItems.length > 0 && (
                <span>{cart.cartItems.length}</span>
                // <span>{cart.cartItems.reduce((a,c)=> a+ c.quantity,0)}</span>
              )}   
              <Link to='/cart'> My List</Link>
             
              
            </h4>
            <button className="btn1">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
