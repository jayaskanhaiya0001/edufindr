import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import { useNavigate } from 'react-router-dom';
const navigationItem = [{ name: "Home", url: "/" }, { name: "courses", url: "/course" }, { name: "test series", url: "/testseries" }, { name: "freebies", url: "/freebeis" }, { name: "blog", url: "/freebeis/blog" }]
export const Header = () => {
    const navigate=useNavigate();
    const [sidebarVisible, setSidebarVisible] = useState(false)
    const [search, setSearch] = useState("")
    const location = useLocation();
    return (
        <>
            <header>
                <nav className="navigation_bar flexbox">
                    <div className="logo_box flexbox">
                        <Link to={'/'}>
                        <img src="/images/edufindr.svg" alt="logo" className="logo_icon" />
                        </Link>
                    </div>
                    <ul className={sidebarVisible ? "displaySidebar flexbox" : "nav_items flexbox"} >
                        {
                            navigationItem.map((item, index) => {
                                return (
                                    <>
                                        <li id={index} className="nav_title" ><Link to={item.url} style={location.pathname === `${item.url}` ? { color: "#722E60" } : { color: "#000" }}>{item.name}</Link></li>
                                    </>
                                )
                            })
                        }
                    </ul>
                    <div className="search_bar_box flexbox">
                        <input onChange={(e)=>{setSearch(e.target.value)}}value={search} className="search_bar" placeholder="Search" />
                        <img onClick={()=>{navigate(`/course?search=${search}&category=${""}`)}} src="/images/search.svg" alt="search_icon" />
                    </div>
                    <button className="get_started_btn">
                        get started
                    </button>
                    <img src="/images/Hamburger.svg" className="hamburger" onClick={() => { setSidebarVisible(!sidebarVisible) }} />
                </nav>
            </header>
        </>
    )
}