import { Link, navigate, Router} from '@reach/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PetForm = (props) => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDesc, setPetDesc] = useState("");
    const [petSkill1, setPetSkill1] = useState("");
    const [petSkill2, setPetSkill2] = useState("");
    const [petSkill3, setPetSkill3] = useState("");
    const [errors, setErrors] = useState([]);

    const addPet = (e) => {
        e.preventDefault();
        const newpet = {petName, petType, petDesc, petSkill1, petSkill2, petSkill3};
        axios.post("http://localhost:8000/api/pets", newpet)

            .then(res =>{console.log(res);
                    navigate("/");
                })
                .catch(err=>{
                    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    // Set Errors
                    setErrors(errorArr);
                })
        }
    return(
        <div>
        <div>
                    Know a pet needing a home?
                    &nbsp;
                    <Link to="/">back to home</Link>
        </div>
        <fieldset>
            <form onSubmit={addPet} >
            {errors.map((err, i) => (
            <p key={i}>
                {err}
            </p>
            ))}
                <div>
                    
                    <div>
                        <div>
                            <label>Name:</label>
                            <input type="text"  name="petName" onChange={e => setPetName(e.target.value)} />
                        </div>
                        
                        <div>
                            <label>Pet Type:</label>
                            <input type="text" onChange={e => setPetType(e.target.value)} />
                        </div>

                        <div>
                            <label>Pet Description:</label>
                            <input onChange={e => setPetDesc(e.target.value)} />
                        </div>

                        <div>
                            <label>Pet Skill 1</label>
                            <input type="text" onChange={e => setPetSkill1(e.target.value)} />
                        </div>

                        <div>
                            <label>Pet Skill 2</label>
                            <input type="text" onChange={e => setPetSkill2(e.target.value)} />
                        </div>

                        <div>
                            <label>Pet Skill 3</label>
                            <input type="text" onChange={e => setPetSkill3(e.target.value)} />
                        </div>

                    </div>
                    <input type="submit" value="Add Pet" />

                </div>
                
            </form>
            </fieldset>
        </div>
    )

}
export default PetForm;