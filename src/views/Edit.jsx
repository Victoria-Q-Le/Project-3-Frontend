import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react';
import axios from 'axios';


export default function Edit() {
    const {id} = useParams()
    console.log(id);
    const [description, setDescription] = useState([])
    const [newDescription, setNewDescription] = useState('')


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

    const hanldeNewDescriptionChange = (event) =>{
        setNewDescription(event.target.value);
      }

    const handleEdit = (descriptionData)=>{
        axios
            .put(
                `http://localhost:3000/notes/${descriptionData._id}`,
                {
                    description:descriptionData?.description,
                }
            )
            .then(()=>{
                axios
                    .get('http://localhost:3000/notes')
                    .then((response)=>{
                        setDescription(response.data)
                        console.log(response.data);
                    })
            })
    }

  return(
    <div>
    Edit
            <h1 className='msg'>{description[displayDescription(description)]?.description}</h1>

            <section>
              <form className='form' onSubmit={handleEdit(description[displayDescription(description)])}>
                        User: <input type='text' /><br/>
                        Note: <input type='text' onChange={hanldeNewDescriptionChange}/><br/>
                        <input type='submit' className='btn' value='Send Love'/>
              </form>
            </section>

    </div>
)}
