import "./about.css";
export const About = ({ heading, about , color }) => {
    return (
        <>
            <div className="about-container">
                <h1  style={{color: color}}>{heading}</h1>
                <p>{about}</p>
            </div>
        </>
    )
}