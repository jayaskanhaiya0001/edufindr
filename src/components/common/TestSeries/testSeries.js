import { Nav } from "../Navigation/nav";
import { Sidebar } from "../Sidebar/sidebar";
import { Button } from "../Button/button";
import { TestSeriesCard } from "../TestSeriesCard/testSeries";
import "./testSeries.css";
export const TestSeriesNav = ({ NavItem, title , children}) => {
    return (
        <>
            <div className="exam-box">
                <div>
                    <Nav navList={NavItem}/>
                </div>
                <div className="Our-Course-Main-Container">
                    <Sidebar width={'292px'}/>
                    <div className="TestSeries-card-grid">
                        <TestSeriesCard/>
                        <TestSeriesCard/>
                        <TestSeriesCard/>
                        <TestSeriesCard/>
                        <TestSeriesCard/>
                        <TestSeriesCard/>
                    </div>
                </div>
                <Button value={'Get Started For Free'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} width={'fit-content'} margin={"0 auto"} />
            </div>
        </>
    )
}