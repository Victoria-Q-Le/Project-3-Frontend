import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Header from '../components/Header.jsx'




function Home() {

  const [newNote, setNewNote] = useState('') //newDescription

  const [noteArray, setNoteArray] = useState([]) //description

  useEffect(()=>{
    axios
          .get( 'http://localhost:3000/notes')
          .then((response)=>{
            setNoteArray(response.data)
          })
  },[])

  const hanldeNewDescriptionChange = (event) =>{
    setNewNote(event.target.value);
  }

  const handleNewDescriptionFormSubmit = (event) => {
        event.preventDefault();
        axios
          .post(
            'http://localhost:3000/notes',
          {
            description:newNote
          })
          .then(() => {
            window.location.reload()
          })
  }




  const displayNote = (params) => {
      return Math.floor(Math.random()  * params.length )
  }



const handleDelete = (noteData)=>{
    axios
         .delete(`http://localhost:3000/notes/${noteData._id}`)
         .then(()=>{
              axios
                  .get('http://localhost:3000/notes')
                  .then((response)=>{
                      setNoteArray(response.data)
                  })
         })
}

  return (

    <main>

        <Header />
        <h2 className='subtitle'>Somone wrote this for you</h2>


        <section>
            <h1 className='msg'>{noteArray[displayNote(noteArray)]?.description}</h1>
            <center>
                <button className='btndlt' onClick={(event)=> {handleDelete(noteArray[displayNote(noteArray)])}}>Delete Note</button>
            </center>
        </section>



        <section>
          <center>
            <h1 className='subtitle2'>Send a positive messege to a stranger</h1>

            <form className='form'  onSubmit={handleNewDescriptionFormSubmit}>
                  Note: <input type='text' placeholder='Write Your Message Here' onChange={hanldeNewDescriptionChange}/><br/>
                  <input type='submit' className='btn' value='Send Love'/>
            </form>
          </center>
        </section>


    </main>


  );



}

export default Home;
