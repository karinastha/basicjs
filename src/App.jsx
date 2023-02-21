
import './App.css';
import { useState } from 'react';
import Student from "./components/Students/Student";
import College from "./components/College/College";
import Admission from "./components/Admission/Admission";
import Card from "./components/Card/Card";

const App = () => {
    return (
        <div className="App">
            <Student />
            <div className="college-form">
                    <College />
                      <div className='admission-form'>
                        <Admission /> 
                        <div>
                          <Card />
                    </div>
                    
                    </div>
            </div>
      </div>
    );
};

export default App;
