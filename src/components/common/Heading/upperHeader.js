import "./Upperheader.css";
export const UpperHeader = ({ title, desc }) => {
    return (
        <>
            <div className="Common-Header-Box">
                <h2 className="Common-Header-title">{title}</h2>
                <p className="description">{desc}</p>
            </div>
        </>
    )
}