import { React } from "react";

const Modal = ({error, setError}) => {


    return (
        <div className="modal-container">

            <div className="modal-content">
                <p>{error}</p>
            </div>
    
            <button className="modal-button-close" onClick={()=>setError(null)}>Close</button>

        </div>
    )
}

export {Modal}