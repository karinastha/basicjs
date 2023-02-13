// import React, { useState } from "react";

// function Student() {
//     const data = { name: "", email: "", phonenumber: "" };
//     const [inputData, setInputData] = useState(data)
   
//     useEffect(() => {
//         console.log("Registered")
//     }, [flag])

//     function handleData(e) {
//         setInputData({ ...inputData, [e.target.name]: e.target.value })
//         console.log(inputData);

//     }
//     function handleSubmit(e) {
//         e.preventDefault();
//         if (!inputData.name || !inputData.email || !inputData.phonenumber) {
//             alert("All feilds are mandatory");
//         }
//         else {
//             setFlag(true)
//         }
//     }
//     handleSubmit = event => {
//         event.preventDefault();
//         const name = event.target.name.value;
//         const email = event.target.email.value;
//         const phonenumber = event.target.phonenumber.value;
//         const formObject = { name, email, phonenumber };
//         setState(prevState => ({
//           formData: [...prevState.formData, formObject]
//         }));
//       };
    
//     return (
//         <div>
            
//             <form className="container" onSubmit={this.handleSubmit}>
//                 <div className="header">
//                     <h1> Student Form</h1>
//                 </div>
//                 <div>
//                     <input type="text" placeholder="Enter your full name"
//                         name="name" value={inputData.name} onChange={handleData}></input>
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
//                     <button type="submit"> Submit </button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Student;

import React, { useState } from "react";

function Student() {
  const data = { name: "", email: "", phonenumber: "" };
  const [inputData, setInputData] = useState(data);
  const [student, setStudent] = useState([]);

  const handleSubmit = () => {
    setStudent([...student, inputData]);
    localStorage.setItem('formValues', JSON.stringify(inputData));
  };
 
  console.log(student);
   

  return (
    <div>
      <form className="container">
        <div className="header">
          <h1> Student Form</h1>
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
          <button type="button" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default Student;
