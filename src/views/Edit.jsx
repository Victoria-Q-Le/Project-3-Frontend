import {useParams} from 'react-router-dom'

export default function Edit() {
    const {id} = useParams()
    console.log(id);
  return (
    <div>Edit
            <h1 className='msg'>{description[displayDescription(description)]?.description}</h1>



    </div>
    
  )
}
