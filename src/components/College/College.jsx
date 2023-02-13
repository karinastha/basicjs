import React, { useState } from "react";

function College() {
  const data = { fullname: "", email: "", phonenumber: "", faculty: "" };
  const [inputData, setInputData] = useState(data);
  const [college, setCollege] = useState([]);

  const handleSubmit = () => {
    setCollege([...college, inputData]);
    localStorage.setItem('formValues', JSON.stringify(inputData));
  };
 
  console.log(college);
   

  return (
    <div>
      <form className="container">
        <div className="header">
          <h1> College Form</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your full name"
            name="fullname"
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
          ></input>
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter your phonenumber"
            name="phonenumber"
            onChange={(e) =>
              setInputData({ ...inputData, phonenumber: e.target.value })
            }
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your faculty"
            name="faculty"
            onChange={(e) =>
              setInputData({ ...inputData, faculty: e.target.value })
            }
          ></input>
        </div>
        <div>
          <button type="button" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default College;
