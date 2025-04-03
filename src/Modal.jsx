import { React } from "react";

const VoteModal = ({error, setError}) => {
    return (
        <div className="modal-container">
            <div className="modal-content">
                <p>{error}</p>
            </div>
            <button className="modal-button-close" onClick={()=>setError(null)}>Close</button>
        </div>
    )
}





//// suggestion for improved concision: combine SuccessfulSubmissionMessage and FailedSubmissionMessage into one function
const SuccessfulSubmissionMessage = ({setSubmissionSuccessful}) => {
    return (
        <div className="modal-container">
            <div className="modal-content">
                <p>Comment was successfully posted</p>
            </div>
            <button className="modal-button-close" onClick={()=>{setSubmissionSuccessful(false)}}>Close</button>
        </div>
    )
}

const FailedSubmissionMessage = ({setSubmissionFailed}) => {
    return (
        <div className="modal-container">
            <div className="modal-content">
                <p>Submission failed.  Please try again.</p>
            </div>
            <button className="modal-button-close" onClick={()=>{setSubmissionFailed(false)}}>Close</button>
        </div>
    )
}

export {VoteModal, SuccessfulSubmissionMessage, FailedSubmissionMessage}