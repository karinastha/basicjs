import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Student from "./components/students/student"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
        <Student />
        <College />
        <Admission />
    </div>
  );
};

export default App;
