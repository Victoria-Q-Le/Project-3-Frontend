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

console.log(description);


  return (
    <main>
        <h1>Noted</h1>
          <section>
            <h2>Send a positive messege to a stranger</h2>
            <form onSubmit={handleNewDescriptionFormSubmit}>
                  User: <input type='text' /><br/>
                  Note: <input type='text' onChange={hanldeNewDescriptionChange}/><br/>
                  <input type='submit' class='btn' value='Send Love'/>
            </form>
          </section>
        <section>
            <h1>Message from a stranger: {description[displayDescription(description)]?.description}</h1>
        </section>
    </main>
  );
}

export default Home;
