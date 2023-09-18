import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Menu from "./Menu";

export default function Navbar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  console.log(windowSize);

  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      {windowSize <= 916 ? (
        !isMenuActive ? (
          <FaBars
            onClick={() => {
              setIsMenuActive((prev) => !prev);
            }}
          />
        ) : (
          <aside>
            <span
              onClick={() => {
                setIsMenuActive((prev) => !prev);
              }}
            >
              <FaTimes />
            </span>
            <Menu />
          </aside>
        )
      ) : (
        <Menu />
      )}
    </nav>
  );
}
