import "./highlight.css";
export const Highlight = ({ hightlightListItems , heading , color}) => {
    return (
        <>
            <div className="highlight-container">
                <h2 style={{color: color}}>{heading}</h2>
                <ul className="highlight-ul-list">
                    {
                        hightlightListItems?.map((items, index) => {
                            return (
                                <>
                                <li key={index} >{items.highlight}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}