import "./highlight.css";
export const Highlight = ({ hightlightListItems , heading}) => {
    return (
        <>
            <div className="highlight-container">
                <h2>{heading}</h2>
                <ul className="highlight-ul-list">
                    {
                        hightlightListItems.map((items, index) => {
                            return (
                                <>
                                <li key={index} >{items}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}