import {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../components/Header.jsx'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  const [notes, setNotes] = useState([])

  useEffect(()=>{
      axios
          .get('http://localhost:3000/notes')
          .then((response)=>{
              setNotes(response.data)
          })
  },[])

  const handleDelete = (noteData) => {
    axios
      .delete(`http://localhost:3000/notes/${noteData._id}`)
      .then (() => {
        axios
        .get('http://localhost:3000/notes')
        .then((response) => {
          setNotes(response.data)
        })
      })
  }

  return <>
    <Header />
    <h1>Dashboard</h1>
    <section>
      <h2>Notes List</h2>
      <ul>
        {notes.map((note) => {
          return <li key={note._id}>
            {note?.description}
            <button className='btn btndlt' onClick={(event) => {handleDelete(note)}}>Delete</button>
            <button className ='btn btndlt'><Link to={`/editNotes/${note._id}`}>Edit Notes</Link></button>
          </li>
        })}
      </ul>
    </section>
  </>
}
 export default Dashboard
