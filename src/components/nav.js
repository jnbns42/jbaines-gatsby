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
        <button className={isVisible ? "c-nav__toggle active" : "c-nav__toggle"} onClick={toggleNav}></button>
        <nav className={isVisible ? "c-nav__menu active" : "c-nav__menu"}>
            <ul className="c-nav__menu__list">
                {YAMLData.nav.map((data, index) => {
                    return <li><AniLink cover bg="#FF209D" to={data.item.url} className="c-nav__menu__item">{data.item.name}</AniLink ></li>
                })}
            </ul>
        </nav>
    </div>
}
  
  export default Nav