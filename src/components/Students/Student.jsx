import React, { useState , useEffect} from "react";

function Student() {
    const data = { name: "", email: "", phonenumber: "" };
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
        if (!inputData.name || !inputData.email || !inputData.phonenumber) {
            alert("All feilds are mandatory");
        }
        else {
            setFlag(true)
        }
    }
    return (
        <div>
            <pre> {(flag) ? <h2 className="ui-define">helllo {inputData.name}, You have
                Registered sucessfuly </h2> : ""}</pre>
            <form className="container" onSubmit={handleSubmit}>
                <div className="header">
                    <h1> Student Form</h1>
                </div>
                <div>
                    <input type="text" placeholder="Enter your full name"
                        name="name" value={inputData.name} onChange={handleData}></input>
                </div>
                <div>
                    <input type="text" placeholder="Enter your email"
                        name="email" value={inputData.email} onChange={handleData}></input>
                </div>
                <div>
                    <input type="number" placeholder="Enter your phonenumber"
                        name="phonenumber" value={inputData.phonenumber} onChange={handleData}></input>
                </div>
                <div>
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}
export default Student;