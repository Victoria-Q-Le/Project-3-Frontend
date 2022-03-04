import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'




function Home() {

  const [newDescription, setNewDescription] = useState('')

  const [description, setDescription] = useState([])

  useEffect(()=>{
    axios
          .get( 'http://localhost:3000/notes')
          .then((response)=>{
          setDescription(response.data)
          })
  },[])

  const hanldeNewDescriptionChange = (event) =>{
    setNewDescription(event.target.value);
  }

  const handleNewDescriptionFormSubmit = (event) => {
        event.preventDefault();
        axios.post(
          'http://localhost:3000/notes',
          {
            description:newDescription
          }
        )
  }




  const displayDescription = (params) => {
      return Math.floor(Math.random()  * params.length )
  }



const handleDelete = (descriptionData)=>{
    axios
         .delete(`http://localhost:3000/notes/${descriptionData._id}`)
         .then(()=>{
              axios
                  .get('http://localhost:3000/notes')
                  .then((response)=>{
                      setDescription(response.data)
                  })
         })
}



console.log(description[displayDescription(description)]);
  return (

    <main>
        <h1 className='title'>Noted</h1>
        <h2 className='subtitle'>Somone wrote this for you</h2>


        <section>
            <h1 className='msg'>{description[displayDescription(description)]?.description}</h1>
            <center>
                <button className='btndlt' onClick={(event)=> {handleDelete(description[displayDescription(description)])}}>Delete Note</button></center><br/><br/><br/>
                {/* <button className='btnedt' onClick={(event)=> {handleEdit(description[displayDescription(description)])}}>edit note</button> */}
                <Link to={`/editNotes/${(description[displayDescription(description)])._id}`}>Edit Notes</Link>
        </section>



        <section>
        <center><h1 className='subtitle2'>Send a positive messege to a stranger</h1>

           <form className='form' onSubmit={handleNewDescriptionFormSubmit}>
                  User: <input type='text' /><br/>
                  Note: <input type='text' onChange={hanldeNewDescriptionChange}/><br/>
                  <input type='submit' className='btn' value='Send Love'/>
            </form></center>
          </section>



    </main>


  );



}

export default Home;
