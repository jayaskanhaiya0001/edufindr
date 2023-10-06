import "./highlight.css";
export const Highlight = ({ hightlightListItems , heading , color}) => {
    console.log(hightlightListItems,"ehhh")
    return (
        <>
            <div className="highlight-container">
                <h2 style={{color: color}}>{heading}</h2>
                <ul className="highlight-ul-list">
                    {
                        hightlightListItems?.map((items, index) => {
                            console.log(items?.highlight,"loop")
                            return (
                                <>
                                <li key={index} >{(items?.highlight!=undefined )?items?.highlight:items?.description}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}