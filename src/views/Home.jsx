import {useState, useEffect} from 'react';
import axios from 'axios';




function Home() {

  const [newDescription, setNewDescription] = useState('')

  const [description, setDescription] = useState([])

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


  useEffect(()=>{
    axios
          .get( 'http://localhost:3000/notes')
          .then((response)=>{
          setDescription(response.data)
          })
  },[])

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

const handleToggleRead = (descriptionData)=>{
    axios
        .put(
            `http://localhost:3000/notes/${descriptionData._id}`,
            {
                description:descriptionData.description,
                complete:!descriptionData.complete
            }
        )
        .then(()=>{
            axios
                .get('http://localhost:3000/notes')
                .then((response)=>{
                    setDescription(response.data)
                })
        })
}

console.log(description)

  return (

    <main>
        <h1 className='title'>Noted</h1>
        <h2 className='subtitle'>Somone wrote this for you</h2>

        
        <section>
            <h1 className='msg' onClick={(event)=>{handleToggleRead(description)}}>{description[displayDescription(description)]?.description}</h1>
            <center><button className='btndlt' onClick={(event)=> {handleDelete(description)}}>Delete Note</button></center><br/><br/><br/>

        </section>
        <section>
        <center><h2 className='subtitle2'>Send a positive messege to a stranger</h2>

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
