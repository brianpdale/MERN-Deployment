import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


const EditPet = (props) => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDesc, setPetDesc] = useState("");
    const [petSkill1, setPetSkill1] = useState("");
    const [petSkill2, setPetSkill2] = useState("");
    const [petSkill3, setPetSkill3] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                console.log(res);
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDesc(res.data.petDesc);
                setPetSkill1(res.data.petSkill1);
                setPetSkill2(res.data.petSkill2);
                setPetSkill3(res.data.petSkill3);
            }).catch(errors => console.log(errors));
    }, [props._id]);

    const editPet = (e) => {
        e.preventDefault();
        const updatedpet = {petName, petType, petDesc, petSkill1, petSkill2, petSkill3};
        axios.put(`http://localhost:8000/api/pets/${props._id}`, updatedpet)

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
                    Edit: {petName}
                    &nbsp;
                    <Link to="/">back to home</Link>
        </div>
        <fieldset>
            <form onSubmit={editPet} >
            {errors.map((err, i) => (
            <p key={i}>
            {err}
            </p>
            ))}
                <div>
                    <div>
                        <div>
                            <label>Name:</label>
                            <input type="text"  onChange={e => setPetName(e.target.value)} value={petName}/>

                        </div>
                        <div>
                            <label>Pet Type:</label>
                            <input type="text" onChange={e => setPetType(e.target.value)} value={petType}/>
                        </div>

                        <div>
                            <label>Pet Description:</label>
                            <input onChange={e => setPetDesc(e.target.value)} value={petDesc}/>


                        </div>
                        <div>
                            <label>Pet Skill 1</label>
                            <input type="text" onChange={e => setPetSkill1(e.target.value)} value={petSkill1} />
                        </div>

                        <div>
                            <label>Pet Skill 2</label>
                            <input type="text" onChange={e => setPetSkill2(e.target.value)} value={petSkill2}/>
                        </div>

                        <div>
                            <label>Pet Skill 3</label>
                            <input type="text" onChange={e => setPetSkill3(e.target.value)} value={petSkill3}/>
                        </div>
                    </div>
                    <input type="submit" value="Edit Pet" />

                </div>
            </form>
            </fieldset>
        </div>
    )

}
export default EditPet;
