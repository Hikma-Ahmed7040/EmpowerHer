import React from 'react'
import { Link } from 'react-router-dom'
import { BiCart } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import {
  GiClothes,
  GiNecklace,
  GiWoodenChair,
  GiSoap
} from 'react-icons/gi'
import classes from "./Header.module.css"

const navItems = [
  { icon: GiClothes, text: "Traditional Clothes" },
  { icon: GiNecklace, text: "Handmade Accessories" },
  { icon: GiWoodenChair, text: "Home Decor" },
  { icon: GiSoap, text: "Skincare Products" }
]

function Header() {
  return (
    <section className={classes.fixed}>
      <div className={classes.header__container}>
        {/* Logo */}
        <div className={classes.logo__container}>
          <Link to="/">
            <h1>EmpowerHer</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className={classes.nav__items}>
          {navItems.map((item, index) => (
            <li key={index} className={classes.nav__link}>
              <item.icon className={classes.nav__icon} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        

        {/* Auth & Cart */}
        <div className={classes.order__container}>
          <Link to="/auth">
            <div>
              <p>Hello, Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Header