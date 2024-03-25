import React from 'react'
import myLogo from "../assets/logo2.svg"
import {NavLink, Outlet} from "react-router-dom"

function Logo() {
  return (
    <div>
            <img src={myLogo} alt="" />
    </div>
  )
}

export default Logo
