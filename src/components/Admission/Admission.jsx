import React, { useState , useEffect} from "react";

function Admission() {
    const data = { firstname: "", lastname:"", email: "", phonenumber: "", DateOfBirth:"" , Options:""};
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
        if (!inputData.firstname || !inputData.lastname ||  !inputData.email || !inputData.phonenumber || !inputData.DateOfBirth) {
            alert("All feilds are mandatory");
        }
        else {
            setFlag(true)
        }
    }
    return (
        <div>
            <pre> {(flag) ? <h2 className="ui-define">helllo {inputData.firstname}, You have
                Registered sucessfuly </h2> : ""}</pre>
            <form className="container" onSubmit={handleSubmit}>
                <div className="header">
                    <h1> Admission Form</h1>
                </div>
                <div>
                    <input type="text" placeholder="Enter your first name"
                        name="firstname" value={inputData.firstname} onChange={handleData}></input>
                </div>
                <div>
                    <input type="text" placeholder="Enter your last name"
                        name="lastname" value={inputData.lastname} onChange={handleData}></input>
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
                    <input type="date" placeholder="Enter your date of birth"
                        name="birthdate" value={inputData.birthdate} onChange={handleData}></input>
                </div>
                <div>
                <label for="cars">Choose an options:</label>

                        <select id="options">
                        <option value="student">Student</option>
                        <option value="admission">Admission</option>
                        </select>

                </div>
                <div>
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}
export default Admission;