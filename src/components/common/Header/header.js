import "./header.css";
const navigationItem = ['Home', 'test series', 'freebies', 'blog']
export const Header = () => {
    return (
        <>
            <header>
                <nav className="navigation_bar flexbox">
                    <div className="logo_box flexbox">
                            <img src="./images/edufindr.svg" alt="logo" className="logo_icon"/>
                            {/* <div className="logo_name_box">
                                <span>edufinder</span>
                                <p>your pathway to excellence</p>
                            </div> */}
                    </div>
                    <ul className="nav_items flexbox">
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
                        <span>search</span>
                        <input className="search_bar" />
                        <img src="./images/search.svg" alt="search_icon" />
                    </div>
                    <button className="get_started_btn"> 
                        get started
                    </button>
                    <img src="/images/Hamburger.svg" className="hamburger"/>
                </nav>
            </header>
        </>
    )
}