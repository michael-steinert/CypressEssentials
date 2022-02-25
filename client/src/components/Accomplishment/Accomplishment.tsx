import React, {useState} from "react";
import "./Accomplishment.css"
import ClipLoader from "react-spinners/ClipLoader";
import confetti from "../../svg/confetti.svg"

function Accomplishment() {
    const [title, setTitle] = useState("")
    const [accomplishment, setAccomplishment] = useState("")
    const [valid, setValid] = useState(false);
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubmit = () => {
        if (!title || !accomplishment || !valid) {
            return setShowError(true);
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowSuccess(true);
        }, 3000);
    }

    return (
        <div className={"Accomplishment"}>
            <div className={"Accomplishment__heading-container"}>
                <h2 className={"Accomplishment-header"}>Accomplishment</h2>
            </div>
            <div className={"Accomplishment-cards-container"}>
                {
                    (!loading && !showSuccess) && (
                        <React.Fragment>
                            <input
                                className={"Accomplishment-input"}
                                placeholder={"Title"}
                                value={title}
                                onChange={(event) => {
                                    setTitle(event.target.value);
                                }}
                                data-cy={"accomplishment-title-input"}
                            />
                            <textarea
                                className={"Accomplishment-textarea"}
                                placeholder={"Accomplishment"}
                                value={accomplishment}
                                onChange={(event) => {
                                    setAccomplishment(event.target.value);
                                }}
                                data-cy={"accomplishment-input"}
                            />
                            <div className={"Accomplishment-checkbox-container"}>
                                <input
                                    type={"checkbox"}
                                    checked={valid}
                                    onChange={(event) => {
                                        setValid(event.target.checked);
                                    }}
                                    data-cy={"accomplishment-checkbox"}
                                />
                                <p>This Accomplishment is valid</p>
                            </div>
                            {
                                showError && (
                                    <div className={"Accomplishment-error-container"}>
                                        <p>Complete the Items above to continue</p>
                                    </div>
                                )
                            }
                            <button
                                className={"Accomplishment-btn"}
                                onClick={handleSubmit}
                            >
                                Submit Accomplishment
                            </button>
                        </React.Fragment>
                    )
                }
                {
                    (loading) && (
                        <div className={"Accomplishment-spinner-container"}>
                            <ClipLoader size={150}/>
                        </div>
                    )
                }
                {
                    (showSuccess) && (
                        <div>
                            <div className={"Accomplishment-spinner-container"}>
                                <img
                                    src={confetti}
                                    className={"Accomplishment-img"}
                                    alt={"Accomplishment"}
                                />
                                <h1>This Accomplishment was successfully submitted</h1>
                            </div>
                            <button
                                className={"Accomplishment-btn"}
                                onClick={() => {
                                    setShowSuccess(false);
                                    setTitle("");
                                    setAccomplishment("");
                                    setValid(false);
                                    setShowError(false);
                                }}
                            >
                                Go back
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Accomplishment;
