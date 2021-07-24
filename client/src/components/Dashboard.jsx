import { Link, navigate, Router} from '@reach/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Dashboard = (props) => {
    const [pets, setPets] = useState([]);
    
    const getPets = () => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(res)
                setPets(res.data);
            })
            .catch(err => console.log(err));
    }
    useEffect( () => {
        getPets();
    }, []);
    return(
        <div>
        <div>
            
            These pets are looking for a good home
            &nbsp;
            <Link to="/pets/new">Add a pet to the shelter</Link>

        </div>
        <fieldset>
            
        <table>
            <thead>
                <tr>
                    <th><h1>Name</h1></th>
                    <th><h1>Type</h1></th>
                    <th><h1>Actions</h1></th>
                </tr>
            </thead>
            <tbody>
                {pets.map((pet, idx) => {
                    return (
                    <tr key={idx}>
                        <td>{pet.petName}</td>
                        <td>{pet.petType}</td>
                        <td>
                        <Link to={`/pets/${pet._id}/edit`}>Edit</Link>
                        &nbsp; | &nbsp;
                        <Link to={`/pets/${pet._id}`}>Details</Link>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        </fieldset>
    </div>
)
}
export default Dashboard;

