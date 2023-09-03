import "./batchCard.css";
export const BatchCard = ({item,price,enrollmentEndDate,days,batchStarting , keyId}) => {
    return (
        <>
            <div className="Batch-Card-Container" key={keyId}>
                <div className="batch-detail">
                    <div className="batch-general-detail">
                        <div>
                            <h1 className="batch-title">Foundation</h1>
                            <button className="shift-btn">{item?.description}</button>
                        </div>
                        <div className="Batch-Another-Detail">
                            <ul>
                                <li><span className="normal-weight">Start date:</span><span className="bold-weight">{batchStarting.slice(0,10)}</span></li>
                                <li><span className="normal-weight">Enrolment end Date:</span><span className="bold-weight">{enrollmentEndDate.slice(0,10)}</span></li>
                                <li><span className="normal-weight">Days:</span><span className="bold-weight">{days?.map(item=>{
                                    return item?.day +","
                                })}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="batch-price-detail">
                        <h2 className="discounted-price">₹{price}</h2>
                        <h6 className="price">₹50,000</h6>
                        <p className="Batch-Timing">11:30 Am to 2:00 Am</p>
                    </div>
                </div>

            </div>
        </>
    )
}