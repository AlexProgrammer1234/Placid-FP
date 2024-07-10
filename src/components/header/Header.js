import { Paper } from "@mui/material";
import "./Header.css";
import { useState } from "react";
import UserMenu from "../userMenu/UserMenu";
import logo from "../img/Logo.svg";
import { NavLink } from "react-router-dom";

export default function Header({ user }) {
  const [isShowMenu, setIsShowMenu] = useState(false);
  function showMenu() {
    setIsShowMenu(!isShowMenu);
  }

  return (
    <>
      <Paper
        sx={{
          position: "absolute",
          top: "5px",
          left: "5px",
          right: "5px",
          height: "50px",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="siteLogoBox">
          <img className="headerLogo" src={logo} alt="Placid logo"></img>
          <NavLink className="homeLink" to={""}>
          <h1 className="siteName" data-text="Placid">
            Placid
          </h1>
          </NavLink>
        </div>
        <div>
          <img
            onClick={showMenu}
            className="userPhoto"
            src={user?.photoURL}
            alt="Account icon"
          />
        </div>
      </Paper>
      {isShowMenu && <UserMenu user={user} />}
    </>
  );
}
