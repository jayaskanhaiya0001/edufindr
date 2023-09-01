import { Nav } from "../Navigation/nav";
import { Sidebar } from "../Sidebar/sidebar";
import { Button } from "../Button/button";
import { useState } from "react";
import axios from "axios"
import { TestSeriesCard } from "../TestSeriesCard/testSeries";
import "./testSeries.css";
import { useEffect } from "react";
const NavItem = { 'SSC': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Teaching Exams': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'UPSC': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'civil service': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'GATE': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'AE & JE': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Goverment Exmas': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Bamnking & Insurance': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Degfence Exams': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Raleway': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Teaching': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"] };
export const TestSeriesNav = ({ title, children }) => {
    const [category, setCategory] = useState("SSC")
    const [testSeries, setTestSeries] = useState([])
    const [selectItem, setSelectItem] = useState(NavItem[category][0]);
    const handleCategory = (data) => {
        setCategory(data)
    }
    const testSeriesApi = () => {
        axios.get(`https://courseselling.onrender.com/api/v1/getAllTest?exam=${selectItem}&category=${category}`)
            .then(response => {
                console.log(response , "Response")
                setTestSeries(response.data.Tests);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    const handleSelectItem = (data) => {
        setSelectItem(data)
    }
    useEffect(() => {
        testSeriesApi();
    }, [category, selectItem]);
   
    return (
        <>
            {console.log(NavItem[category], "heellllohimanshu", category)}
            <div className="exam-box">
                <div>
                    <Nav navList={NavItem} handleCategory={handleCategory}  />
                </div>
                <div className="Our-Course-Main-Container">
                    <Sidebar width={'292px'} data={NavItem[category]}  selectItem={selectItem} handleSelectItem={handleSelectItem} />
                    <div className="TestSeries-card-grid">
                        {testSeries?.map((item) => {
                            <TestSeriesCard />
                        })}
                    </div>
                </div>
                <Button value={'Get Started For Free'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} width={'fit-content'} margin={"0 auto"} />
            </div>
        </>
    )
}