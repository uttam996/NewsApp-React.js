import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navebar.css"

export default function Navbar() {
  const [search, setsearch] = useState("")
  const handleOnchane = (e) => {
    setsearch(e.target.value)
 
  }

  return (
    <div>
      <header>
        <div className="logo">
          Abc-News
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Sports</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <input type="search" onKeyPress={e => e.key==="Enter"?console.log("hhh"):console.log("no")} onChange={e => handleOnchane(e)} placeholder='search' /> </header>
    </div>
  )
}
