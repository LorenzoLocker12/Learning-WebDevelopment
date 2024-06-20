import React from 'react'
import './App.css'
import Card from './Card'

function App() {
  return (
    <>
      <h1>My Contacts</h1>
      <Card 
        name="Beyonce" 
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
        tel="+123 456 789" 
        email="b@beyonce.com"
        />
      <Card 
        name="Chuck Norris" 
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" 
        tel="+918 372 574" 
        email="gmail@chucknorris.com"
        />
    </>
  )
}

export default App
