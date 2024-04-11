import { useState } from 'react'
import './App.css'
import Notes from './components/Notes';
import { v4 as uuidv4 } from "uuid";


function App() {
  const [input, setInput]  = useState("");
  
  const [notes, setNotes]  = useState(
  [
    {
      id: 1,
      text: "Check the description for the Frontend task.",
    },
    {
      id: 2,
      text: "Submit your work by tomorrow.",
    },
  ]
  );
  const handleChange = (e) =>{
    
    setInput(e.target.value);
    

  }

  const handleAddNote = () =>{
    
    setNotes([...notes, {id:notes.length+1, text:input}]);
    setInput('');
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop:'20px' }}>
        <h1 >Task Manager</h1>
        <input type="text" placeholder="Add a new Note..."  onChange={handleChange}/>
        <button  onClick={handleAddNote}>Add Task</button>
      </div>
      
      <Notes notes={notes} setNotes={setNotes} />
     
        
    </div>
  )
}

export default App
