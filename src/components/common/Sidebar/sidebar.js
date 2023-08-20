import { useState } from "react";
import "./sidebar.css";
const options = ['History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History']
export const Sidebar = ({ width }) => {
    const [selectItem, setSelectItem] = useState(0);
    return (
        <>
            <aside className="Common-Sidebar" style={{ width: width }}>
                <div className="sidebar-container">
                    <ul>
                        {
                            options.map((item, index) => {
                                return (
                                    <>

                                        <li id={index} onClick={() => setSelectItem(index) } style={selectItem === index ? { backgroundColor: "#722E60" , cursor: "pointer", color: "#fff" } : {}}>{item}</li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </aside>
        </>
    )
}