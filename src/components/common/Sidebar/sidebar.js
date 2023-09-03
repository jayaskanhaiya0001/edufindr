import { Fragment, useState } from "react";
import "./sidebar.css";
const options = ['History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History']
export const Sidebar = ({ width, data ,handleExam}) => {
 
    const [selectItem, setSelectItem] = useState(0);
    return (
        <>
            <aside className="Common-Sidebar" style={{ width: width }}>
                <div className="sidebar-container">
                    <ul>
                        {
                            data?.map((item, index) => {
                                return (
                                    <Fragment key={index}>

                                        <li id={index} onClick={() => {setSelectItem(index); handleExam(item)}} style={selectItem === index ? { backgroundColor: "#722E60" , cursor: "pointer", color: "#fff" } : {}} key={index}>{item}</li>
                                    </Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
            </aside>
        </>
    )
}