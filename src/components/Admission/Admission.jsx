// import React, { useState } from "react";

// function Admission() {
//     const data = { firstname: "", lastname:"", email: "", phonenumber: "", DateOfBirth:"" , Options:""};
//     const [inputData, setInputData] = useState(data)
//     const [flag, setFlag] = useState(false);
   

//     function handleData(e) {
//         setInputData({ ...inputData, [e.target.name]: e.target.value })
//         console.log(inputData);

//     }
//     function handleSubmit(e) {
//         e.preventDefault();
//         if (!inputData.firstname || !inputData.lastname ||  !inputData.email || !inputData.phonenumber || !inputData.DateOfBirth) {
//             alert("All feilds are mandatory");
//         }
//         else {
//             setFlag(true)
//         }
//     }
//     return (
//         <div>
           
//             <form className="container" onSubmit={handleSubmit}>
//                 <div className="header">
//                     <h1> Admission Form</h1>
//                 </div>
//                 <div>
//                     <input type="text" placeholder="Enter your first name"
//                         name="firstname" value={inputData.firstname} onChange={handleData}></input>
//                 </div>
//                 <div>
//                     <input type="text" placeholder="Enter your last name"
//                         name="lastname" value={inputData.lastname} onChange={handleData}></input>
//                 </div>
//                 <div>
//                     <input type="text" placeholder="Enter your email"
//                         name="email" value={inputData.email} onChange={handleData}></input>
//                 </div>
//                 <div>
//                     <input type="number" placeholder="Enter your phonenumber"
//                         name="phonenumber" value={inputData.phonenumber} onChange={handleData}></input>
//                 </div>
//                 <div>
//                     <input type="date" placeholder="Enter your date of birth"
//                         name="birthdate" value={inputData.birthdate} onChange={handleData}></input>
//                 </div>
//                 <div>
//                 <label for="cars">Choose an options:</label>

//                         <select id="options">
//                         <option value="student">Student</option>
//                         <option value="admission">Admission</option>
//                         </select>

//                 </div>
//                 <div>
//                     <button type="submit"> Submit </button>
//                 </div>
//             </form>
//         </div>
//     )
// }
// export default Admission;

import React, { useState } from "react";

function Admission() {
  const data = { name: "", email: "", phonenumber: "" };
  const [inputData, setInputData] = useState(data);
  const [admission, setAdmission] = useState([]);

  const handleSubmit = () => {
    setAdmission([...admission, inputData]);
    localStorage.setItem('formValues', JSON.stringify(inputData));
  };
 
  console.log(Admission);
   

  return (
    <div>
      <form className="container">
        <div className="header">
          <h1> Admission Form</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your full name"
            name="name"
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
           type="date"
           placeholder="Enter your date of birth"
            name="birthdate"
           onChange={(e) => 
                setInputData({ ...inputData, birthdate:e.target.value})
          }
           ></input>
        </div>
        <div>
                <label for="cars">Choose an options:</label>

                        <select id="options">
                        <option value="student">Student</option>
                        <option value="admission">Admission</option>
                        </select>

        </div>
                
        <div>
          <button type="button" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>

        <table border={1} cellPadding={20} width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Birth Date</th>


        </tr>
      </thead>
      <tbody>
        {
          admission.map(
            (info , id) => {
              return(
                <tr key={id}>
                  <td> {info.name} </td>
                  <td> {info.email} </td>
                  <td> {info.phonenumber} </td>
                  <td> {info.birthdate} </td>

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
export default Admission;
