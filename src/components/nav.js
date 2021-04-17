import React, { useState } from "react"
import { Link } from "gatsby"
import YAMLData from "../content/nav.yaml"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Nav = (props) => {

    const [isVisible, setToggleExpansion] = useState(false)

    function toggleNav() {
        setToggleExpansion(!isVisible);
    }
      
    return <div className="c-nav">
        <button className={isVisible ? "c-nav__toggle active" : "c-nav__toggle"} onClick={toggleNav}>
            <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
            </svg>
        </button>
        <nav className={isVisible ? "c-nav__menu active" : "c-nav__menu"}>
            <ul className="c-nav__menu__list">
                {YAMLData.nav.map((data, index) => {
                    return <li key={index}><AniLink paintDrip hex="#FA4D56" to={data.item.url} className="c-nav__menu__item">{data.item.name}</AniLink ></li>
                })}
            </ul>
        </nav>
    </div>
}
  
export default Nav