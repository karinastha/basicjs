import React, { useState , useEffect} from "react";

function College() {
    const data = { username: "", password: "", email: "" };
    const [inputData, setInputData] = useState(data)
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        console.log("Registered")
    }, [flag])

    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData);

    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!inputData.username || !inputData.password || !inputData.email) {
            alert("All feilds are mandatory");
        }
        else {
            setFlag(true)
        }
    }
    return (
        <div>
            <pre> {(flag) ? <h2 className="ui-define">helllo {inputData.username}, You have
                Registered sucessfuly </h2> : ""}</pre>
            <form className="container" onSubmit={handleSubmit}>
                <div className="header">
                    <h1> College Form</h1>
                </div>
                <div>
                    <input type="text" placeholder="Enter your full name"
                        name="name" value={inputData.username} onChange={handleData}></input>
                </div>
                <div>
                    <input type="text" placeholder="Enter your password"
                        name="password" value={inputData.password} onChange={handleData}></input>
                </div>
                <div>
                    <input type="text" placeholder="Enter your email"
                        name="email" value={inputData.email} onChange={handleData}></input>
                </div>
                <div>
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}
export default College;