import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Note from '../Note/Note'
import notes from '../../../notes'

function App() {
  return (
    <>
    <Header />
    {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
          />
    ))}
    <Footer />
    </>
  )
}

export default App
