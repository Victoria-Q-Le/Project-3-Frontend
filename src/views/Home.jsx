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

console.log(description)


  return (
    <main>
        <h1>Noted</h1>
          <section>
            <h2>Send a positive messege to a stranger</h2>
            <form onSubmit={handleNewDescriptionFormSubmit}>
                  User: <input type='text' /><br/>
                  Note: <input type='text' onChange={hanldeNewDescriptionChange}/><br/>
                  <input type='submit' className='btn' value='Send Love'/>
            </form>
          </section>
        <section>
            <h1 key={description._id}> Message from a strangers: {description[displayDescription(description)]?.description}
            <button onClick={(event)=> {handleDelete(description)}}>Delete Note</button></h1>
        </section>

    </main>
  );
}

export default Home;
