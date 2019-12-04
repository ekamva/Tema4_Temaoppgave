import React, {useState} from 'react';
import './App.css';
import WNumber from "./components/WNumber"
import Duties from "./components/Duties"

const  App = () => {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] 
    const myNotes = []
    const[num, newWeek]=useState(1)

    const[notes, newNote] =useState(myNotes)
    const[newN, setNote] = useState("")

    const changeNote =(evt) => {
        setNote(evt.target.value)
    }

    const addNote = (evt) => {
      evt.preventDefault()
      const delNote = []
      newNote([delNote, newN])

    }

  return(
    <div className ="main">
        <h1 >Schedule for a week</h1>
        <div className ="weekNum">
          <WNumber number={num}/>
          <button className="weekBtn" onClick = {() => newWeek (num+1)}> Change the week number </button>
        <div>
          {
            notes.map( (n, index) => <p key={index}>{n}</p>)
          }
        </div>  
        <form className="note" onSubmit ={addNote }>
          <p>{myNotes}</p>
          <input className="weekInp" type="text" placeholder="write down a note" value={newN} onChange={changeNote} /> 
          <button className="noteBtn" type="submit">Note</button>
        </form>  
        </div>
        <div>
          
          {
            weekDays.map ( (days, index) => <h2 className="days" key = {index}> {days} <ul> <li> <Duties /> </li> </ul>  </h2> )} 
        
       
        
        </div>
    </div>
  )
}   


export default App;
