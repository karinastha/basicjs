import React, { useState } from "react";
import axios from 'axios';
function Student() {
  // const data = { title: "", description: "", image:""};
  // const [inputData, setInputData] = useState(data);
  // const [student, setStudent] = useState([]);
  const [file, setFile] = useState();
  const data = new FormData();


  const handleSubmit = () => {
    // setStudent([...student, inputData]);

    // const storedValues = localStorage.setItem('formValues', JSON.stringify(inputData));

  //   if (storedValues) {
  //     setStudent(JSON.parse(storedValues));
  //   }
  // };
  console.log(data);
  axios.post("https://backend.kushallalshrestha.com.np/posts", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  };

   

  return (
    <div>
      <form className="container" method="post" enctype="multipart/form-data" >
        <div className="header">
          <h1> Student Form</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your full name"
            name="name"
            onChange={(e) =>
              data.append("title", e.target.value)}
              
            
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={(e) =>
              data.append("description", e.target.value)
            }
          ></input>
        </div>
        {/* <div>
          <input
            type="number"
            placeholder="Enter your phonenumber"
            name="phonenumber"
            onChange={(e) =>
              setInputData({ ...inputData, phonenumber: e.target.value })
            } 
          ></input>
        </div> */}
        <div>
          <input type="file"
           onChange={(e) =>
            data.append("image", e.target.files[0])
          }  />
        </div>
        <div>
          <button type="button" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>

      <table border={1} cellPadding={20} width="80%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>

        </tr>
      </thead>
    </table>
    </form>
    </div>

    
  );
}
export default Student;
