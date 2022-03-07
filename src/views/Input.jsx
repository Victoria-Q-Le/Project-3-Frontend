import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()




function Input() {

  const [newDescription, setNewDescription] = useState('')

  const [description, setDescription] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    axios
          .get( 'https://p3-note-it.herokuapp.com/notes')
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
            'https://p3-note-it.herokuapp.com/notes',
          {
            description:newDescription
          }
        )
        .then(
          toast('Thank you for your kind words'),
        )
  }



  return (

    <main>
        <section>
          <center>
            <h1 className='subtitle2'>Lets Send Some Positive Vibes</h1>

            <form className='form' onSubmit={handleNewDescriptionFormSubmit}>
                  Note: <input type='text' onChange={handleNewDescriptionChange}/><br/>
                  <input type='submit' className='btn' value='Send Love'/>
            </form>
          </center>
        </section>

    </main>


  );



}

export default Input;
