import { Fragment} from "react";
import "./nav.css";
export const Nav = ({ navList, width, handleCategory, handleExam, category }) => {
    return (
        <Fragment>
            <nav className="Nav" style={{ width: width }}>
                <ul>
                    {
                        Object.keys(navList)?.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <li onClick={() => { handleCategory(item); handleExam("") }} className="Popular-Exam-Nav-Item"  style={category === item ? { borderBottom: "1px solid #722E60" , cursor: "pointer", color:"#722E60", fontWeight: "700"} : {cursor: "pointer"}} id={index} >{item}</li>
                                </Fragment>
                            )
                        })
                    }
                </ul>
            </nav>
        </Fragment>
    )
}