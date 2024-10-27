import Link from 'next/link'
import React from 'react'
 import style from "./NavBar.module.css"
const NavBar = () => {
  return (
    <div className={style.container} >
      <h1 className={style.heading}>NavBar</h1>
      
        <ul className={style.list}>
          <li>
            <Link className={style.list} href="/" > Home </Link>
          </li>
          <li>
            <Link  className={style.list} href="/About" > About </Link>
          </li>
          <li>
            <Link  className={style.list} href="/Contact" > Contact us </Link>
          </li>
        </ul>
        
    </div>
  )
}

export default NavBar
