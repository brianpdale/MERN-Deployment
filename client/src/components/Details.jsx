import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


export default props => {

    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + props._id)
            .then(res => setPet(res.data))
    }, [])

    const adoptPet = (_id) => {
        axios.delete(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                axios.get("http://localhost:8000/api/pets")
                    .then( res => {
                        setPet(res.data);
                        navigate("/")
                    })
                    .catch(err => console.log(err));
            })
    }

    return(
        <div>
        <div>
                    Details about: { pet.petName } 
                    &nbsp;
                    <Link to="/">back to home</Link>
        </div>
        <fieldset>
            
            <div>
                
                <div>
                    <p>Type: { pet.petType }</p>
                    <p>Description: { pet.petDesc }</p>
                    <p>Skills: 
                        <tr>{pet.petSkill1}</tr>
                        <tr>{pet.petSkill2}</tr>
                        <tr>{pet.petSkill3}</tr>
                    </p>
                </div>

                <Link to={"/pets/" + pet._id + "/edit"}>Edit</Link>
                &nbsp;
                <button onClick={(e)=>{adoptPet(pet._id)}}>Adopt {pet.petName}!</button>

            </div>  
        </fieldset>
        </div>

    )
}