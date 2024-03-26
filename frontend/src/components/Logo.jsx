import React from 'react'
import myLogo from "../assets/logo2.svg"
import {Link} from "react-router-dom"

function Logo() {
  return (
    <div>
      <Link to="/">
            <img src={myLogo} alt="" />
      
      </Link>
    </div>
  )
}

export default Logo
