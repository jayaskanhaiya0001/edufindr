import "./call.css";
export const GetCallBack = ({succesAlert}) => {
    return (
        <>
            <div className="Get-Call-Back-Popup-Container" style={succesAlert && {left: "10%" , transition: "3s"}} id={succesAlert && 'hideMe'}>
                <div className="Get-Call-Back-Popup-Content">
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SuccessOutlinedIcon"><path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path></svg>
                    <div className="Popup-Text">
                        <h3>Success</h3>
                        <p>
                            This is a success alert — check it out!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}