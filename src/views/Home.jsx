import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Header from '../components/Header.jsx'




function Home() {

  const [newDescription, setNewDescription] = useState('')

  const [description, setDescription] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    axios
          .get( 'http://localhost:3000/notes')
          .then((response)=>{
          setDescription(response.data)
          })
  },[])

  const handleNewDescriptionChange = (event) => {
    setNewDescription(event.target.value)
  }

  const handleNewDescriptionFormSubmit = (event) => {
        event.preventDefault();
        axios
          .post(
            'http://localhost:3000/notes',
          {
            description:newDescription
          }
        )
        .then(
          navigate('/dashboard')
        )
  }




  const displayDescription = (params) => {
      return Math.floor(Math.random()  * params.length )
  }


  return (

    <main>

        <Header />
        <h2 className='subtitle'>Somone wrote this for you</h2>


        <section>
            <h1 className='msg'>{description[displayDescription(description)]?.description}</h1>
        </section>



        <section>
        <center><h1 className='subtitle2'>Send a positive messege to a stranger</h1>

           <form className='form' onSubmit={handleNewDescriptionFormSubmit}>
                  Note: <input type='text' onChange={handleNewDescriptionChange}/><br/>
                  <input type='submit' className='btn' value='Send Love'/>
            </form></center>
          </section>

    </main>


  );



}

export default Home;
