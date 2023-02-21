import React from 'react';
import axios from 'axios';


export default function Card() {
    const data = { title: "" , description: "", image:""};
    console.log(data);

    const handleSubmit = () => {
        // setCard([...Card, ])
        axios.post("https://backend.kushallalshrestha.com.np/posts", data, {
    headers: {
      "Content-Type": "multipart/form-data",
            },
         });
    };

  return (
    <div>
        <form className='form_data' method='post' enctype='multipart/form-data'>
            <div className="header">
                <h1> Card </h1>
            </div>
            <div>
                <input 
                type="text"
                placeholder='Enter a title..'
                name="name"
                onChange = {(e) =>
                        data.append("title", e.target.value)
                }/>
            </div>

            <div>
                <input
                type="text"
                placceholder="Enter a description"
                name="email"
                onChange= {(e) => 
                        data.append("description", e.target.value)}
                />
            </div>

            <div>
                 <input type="file"
                    onChange={(e) =>
                     data.append("image", e.target.files[0])
                    }  
                />
            </div>

             <div>
             <button type="button" onClick={() => handleSubmit()}>
                 Submit</button>
             </div>
        </form>
    </div>
  )
}
