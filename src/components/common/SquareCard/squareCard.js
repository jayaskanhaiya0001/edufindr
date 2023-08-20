import "./SquareCard.css";
export const SquareCard = ({ title, disc, backgroundColor , bgColor , src}) => {
    return (
        <>
            <div className="Square-Conatiner" style={{backgroundColor: backgroundColor}}>
                <div className="Square-Image-Box" style={{backgroundColor: bgColor}}>
                    <img src={src} alt="" />
                </div>
                <div>
                    <h2 className="Square-Box-Title">{title}</h2>
                    <p>{disc}</p>
                </div>
            </div>
        </>
    )
}