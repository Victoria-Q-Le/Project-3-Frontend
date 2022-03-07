import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react';
import axios from 'axios';


export default function Edit() {
    const {id} = useParams()
    const navigate = useNavigate ()
    const [note, setNote] = useState([])
    const [newDescription, setNewDescription] = useState('')


    useEffect(()=>{
      axios
            .get( `http://localhost:3000/notes/${id}`)
            .then((response)=>{
              setNote(response.data)
            })
    },[])



    const handleNewDescriptionChange = (event) =>{
        setNewDescription(event.target.value);
      }

    const handleEdit = (event) =>{
        event.preventDefault()
        axios
          .put(`http://localhost:3000/notes/${id}`,
            {
              description: newDescription
            }
          )
          .then(
            navigate('/dashboard')
          )
    }

  return(
    <div>
    Edit "{note.description}"  Message
            <section>
              <form className='form' onSubmit={handleEdit}>
                        Note: <input type='text' placeholder='Enter your message here' onChange={handleNewDescriptionChange}/><br/>
                        <input type='submit' className='btn' value='Send Love'/>
              </form>
            </section>

    </div>
)}
