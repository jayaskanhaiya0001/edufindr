import "./about.css";
export const About = ({ heading, about }) => {
    return (
        <>
            <div className="about-container">
                <h1>{heading}</h1>
                <p>{about}</p>
            </div>
        </>
    )
}