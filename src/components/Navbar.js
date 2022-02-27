import React, { useEffect, useRef, useState } from "react";
import "./NavbarStyle.css";
import { RiMenu2Line } from "react-icons/ri";
import {
  MdOutlinePersonOutline,
  MdOutlineSearch,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { IconContext } from "react-icons";
export default function Navbar() {
  const focusRef = useRef();
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      focusRef.current.focus();
    }
  }, [clicked]);
  return (
    <div className="navbar">
      <button className="iconButton items">
        <IconContext.Provider value={{ size: "2em" }}>
          <RiMenu2Line></RiMenu2Line>
        </IconContext.Provider>
      </button>
      <div
        style={{
          flexGrow: 2,
          textAlign: "center",
          lineHeight: "9vh",
        }}
        className="items"
      >
        <form style={{ display: clicked ? "block" : "none" }}>
          <input type="text" placeholder="search nails" ref={focusRef}></input>
        </form>
        <a className="header" style={{ display: clicked ? "none" : "block" }}>
          THENAILSHOPBYSB
        </a>
      </div>
      <div className="items">
        <button className="iconButton items right">
          <IconContext.Provider value={{ size: "2em" }}>
            <MdOutlinePersonOutline></MdOutlinePersonOutline>
          </IconContext.Provider>
        </button>
        <button
          className="iconButton items right"
          onClick={() => setClicked(!clicked)}
        >
          <IconContext.Provider value={{ size: "2em" }}>
            <MdOutlineSearch></MdOutlineSearch>
          </IconContext.Provider>
        </button>
        <button className="iconButton items right">
          <IconContext.Provider value={{ size: "2em" }}>
            <MdOutlineShoppingBag></MdOutlineShoppingBag>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}
