import { useState } from 'react'
import './App.css'

const name = "Lorenzo";
const luckyNumber = 12;

const date = new Date();
const hour = date.getHours();

let timeOfDay;
let timeOfDayColor;

getTImeOfDay(hour);

const timeOfDayStyle = {
  color: timeOfDayColor,
}





function App() {
  return (
    <>
    <div>
      <h1 className="heading" style={timeOfDayStyle}>Good {timeOfDay}, {name}!</h1>
      <a>Your lucky number is {luckyNumber}</a>
      <div>
        
      </div>
    </div>
    </>
  )
}

export default App

function getTImeOfDay(hour) {
  if (hour >= 12 && hour < 18) {

    timeOfDay = "afternoon";
    timeOfDayColor = "green"
  
  } else if (hour >= 18 || hour < 6) {
  
    timeOfDay = "evening";
    timeOfDayColor = "blue"
  
  } else {
  
    timeOfDay = "morning";
    timeOfDayColor = "red"
  
  }
}