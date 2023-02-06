import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import StudentForm from "./components/students/student";
import CollegeForm from "./components/college/college";
import AdmissionForm from "./components/admission/admission"



const App = () => {
    return (
        <div className="App">
            <StudentForm />
            <CollegeForm />
            <AdmissionForm />

        </div>
    );
};

export default App;
