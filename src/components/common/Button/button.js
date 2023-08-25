import "./button.css";
export const Button = ({ value, background, txtColor, border, borderRadius, width, margin, padding, display }) => {
    return (
        <>
            <button style={{ background: background, color: txtColor, border: border, borderRadius: borderRadius, width: width, margin: margin, padding: padding, display: display }} className="common_btn">{value}</button>
        </>
    )
}