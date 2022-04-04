import React, {useState} from 'react';
import './App.css';

function App() {

  const [activities, setActivities] = useState(
    ["Buy shopping", "Clean bathroom", "Car's MOT"]
  );

  const activityNodes = activities.map((activity) => {
    return(
          <li>
            <span>{activity}</span>
      
          </li>
  )})

  const saveNewActivity = (event) =>{
    event.preventDefault();
    const copyActivities = [...activities];
    copyActivities.push(newActivity);
    setActivities(copyActivities);
    setNewActivity('');
  }



  const [newActivity, setNewActivity] = useState('');


  const handleActivityInput = (event) => {
    setNewActivity(event.target.value);}

  return (
    <div className="App">


    <h1>To Do List</h1>
    <hr></hr>
    <form onSubmit ={saveNewActivity}>
        <label htmlFor = 'new-activity'>Save activity:</label>
        {/* <input type="radio" id="high" name="high_priority" value="high_priority"/>
        <label for="html">High</label>
        <input type="radio" id="low" name="low_priority" value="low_priority"/>
        <label for="html">Low</label> */}
        <input id = "new-activity" type = 'text' value = {newActivity} onChange = {handleActivityInput}/>
        <input type = 'submit' value = 'Save New Activity'/>

      </form>
    <ul>
      <li>{activityNodes}</li>
    </ul>
    </div>
    



  );
}

export default App;
