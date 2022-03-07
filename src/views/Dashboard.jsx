import {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../components/Header.jsx'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  const [notes, setNotes] = useState([])

  useEffect(()=>{
      axios
          .get('https://p3-note-it.herokuapp.com/notes')
          .then((response)=>{
              setNotes(response.data)
          })
  },[])

  const handleDelete = (noteData) => {
    axios
      .delete(`https://p3-note-it.herokuapp.com/notes${noteData._id}`)
      .then (() => {
        axios
        .get('https://p3-note-it.herokuapp.com/notes')
        .then((response) => {
          setNotes(response.data)
        })
      })
  }

  return <>
    <Header />
    <section>
      <h2>Notes List</h2>
      <div className='container'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {notes.map((note) => {
          return <div className='col' key={note._id}>
            <div className ='card-body'>
            <h5 className ='card-title'>{note?.description}</h5>
              <button className='btn btn-danger btn-sm' onClick={(event) => {handleDelete(note)}}>Delete</button>
              <button className ='btn btn-primary btn-sm'><Link to={`/editNotes/${note._id}`}>Edit Notes</Link></button>
            </div>
            </div>
        })}
        </div>
      </div>
    </section>
  </>
}
 export default Dashboard
