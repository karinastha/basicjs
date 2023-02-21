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
        <table border={1} cellPadding={30} width="100%">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Faculty</th>
          
        </tr>
      </thead>
      <tbody>
        {
          college.map(
            (info , id) => {
              return(
                <tr key={id}>
                  <td> {info.fullname} </td>
                  <td> {info.email} </td>
                  <td> {info.phonenumber} </td>
                  <td> {info.faculty} </td>

                 </tr>
              )
            }
          )
        }
      </tbody>
    </table>
      </form>
    </div>
  );
}
export default College;
