import "./batchCard.css";
export const BatchCard = () => {
    return (
        <>
            <div className="Batch-Card-Container">
                <div className="batch-detail">
                    <div className="batch-general-detail">
                        <div>
                            <h1 className="batch-title">Foundation</h1>
                            <button className="shift-btn">Morning Batch</button>
                        </div>
                        <div className="Batch-Another-Detail">
                            <ul>
                                <li><span className="normal-weight">Start date:</span><span className="bold-weight">15-09-2023</span></li>
                                <li><span className="normal-weight">Enrolment end Date:</span><span className="bold-weight">15-10-2023</span></li>
                                <li><span className="normal-weight">Days:</span><span className="bold-weight">mon</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="batch-price-detail">
                        <h2 className="discounted-price">₹48,585</h2>
                        <h6 className="price">₹50,000</h6>
                        <p className="Batch-Timing">11:30 Am to 2:00 Am</p>
                    </div>
                </div>

            </div>
        </>
    )
}