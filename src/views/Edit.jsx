import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react';
import axios from 'axios';


export default function Edit() {
    const {id} = useParams()
    // console.log(id);
    const [description, setDescription] = useState([])
    const [newDescription, setNewDescription] = useState('')


    useEffect(()=>{
      axios
            .get( `http://localhost:3000/notes/${id}`)
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

    const handleEdit = (id)=>{
        axios
            .put(
                `http:localhost:3000/notes/${id}`,
                {
                    description:id?.description,
                }
            )
            .then(()=>{
                axios
                    .get('http://localhost:3000/notes')
                    .then((response)=>{
                        // setDescription(response.data)
                        console.log(response.data);
                    })
            })
    }
    console.log(description);
    console.log(id);
  return(
    <div>
    Edit



            <h1>{description.description}</h1>
            <section>
              <form className='form' onSubmit={handleEdit(id)}>
                        User: <input type='text' /><br/>
                        Note: <input type='text' onChange={hanldeNewDescriptionChange}/><br/>
                        <input type='submit' className='btn' value='Send Love'/>
              </form>
            </section>

    </div>
)}