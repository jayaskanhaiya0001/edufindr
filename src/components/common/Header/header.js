import { useState } from "react";
import "./header.css";
const navigationItem = ['Home', "courses", 'test series', 'freebies', 'blog']
export const Header = () => {
    const [sidebarVisible , setSidebarVisible] = useState(false)
    return (
        <>
            <header>
                <nav className="navigation_bar flexbox">
                    <div className="logo_box flexbox">
                            <img src="/images/edufindr.svg" alt="logo" className="logo_icon"/>
                    </div>
                    <ul className= {sidebarVisible ?  "displaySidebar flexbox": "nav_items flexbox"  } >
                        {
                            navigationItem.map((item, index) => {
                                return (
                                    <>
                                        <li id={index} className="nav_title">{item}</li>
                                    </>
                                )
                            })
                        }
                    </ul>
                    <div className="search_bar_box flexbox">
                        <input className="search_bar" placeholder="Search"/>
                        <img src="/images/search.svg" alt="search_icon" />
                    </div>
                    <button className="get_started_btn"> 
                        get started
                    </button>
                    <img src="/images/Hamburger.svg" className="hamburger" onClick={() => {setSidebarVisible(!sidebarVisible)}}/>
                </nav>
            </header>
        </>
    )
}