import React, {useState} from "react"


const Duties = () => {

    const myDuties = ["school", "lunch"] 

    const myActivities = ["gym", "tennis", "visit a doctor", "work", "shopping"]
    const myTime = ["09.00", "12.00"]

    const [duties, newDuty] = useState(myDuties)
    const [activities] = useState(myActivities)
    const [time, changeTime] = useState(myTime)
  
    
    const [newTime, setTime] = useState("")
  
    const addTo = (index) => {
        newDuty ([...duties, activities[index]])
    }


    const addToDuty = (evt) => {
        evt.preventDefault() 
        changeTime ([...time, newTime]) 
    }   
   
    const changeTm = (evt) => {
        setTime(evt.target.value)
        
    }

    
    const removeDuty = (index) => {
        const kopiA= [...duties]
        kopiA.splice(index, 1)
        newDuty(kopiA)
        const kopiT= [...time]
        kopiT.splice(index, 1)
        changeTime(kopiT)
    
    }  
        
    return(
      <div className="myWeek">
            <div>  
                 <ul className ="weekActTime">
                    <li className="actList">
                    {
                     duties.map( (d, index) => <li key= {index}>{d}
                     </li>)
                  }</li>
                  
                  <li className="timeList">
                      {
                          time.map((t, index) => <li key={index}>{t}
                          <button className="deleteBtn" onClick = {() => removeDuty (index)} >Delete</button></li>)}
                    </li> 
                </ul> 
                <hr/>
             </div> 
             <div className ="pickAct">
                <div className ="pickActList">
                    <p> pick up an activity: </p>
                        <div>
                            {
                              activities.map( (activ, index) => 
                              <div key ={index}><h6 onClick={() => addTo(index) }>{activ}</h6></div> )
                            
                            }  
                        </div>
                </div>
                   
                <div className ="chooseTime">
                    <p> choose the time: </p>
                    <form  onSubmit={addToDuty}>
                        <input className ="myForm" type="time" value ={newTime} onChange={changeTm}/>
                
                        <button className="myForm" type = "submit"> Add </button> 
                     </form> 
                </div>
             </div> 
       </div> 
    )
}

export default Duties