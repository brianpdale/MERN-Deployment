import React from 'react';
import { Link, Router, Redirect } from '@reach/router';
import Dashboard from './components/Dashboard';
import PetForm from './components/PetForm';
import EditPet from './components/EditPet';
import Details from './components/Details';

function App() {
  return (
    <div>
      <h1>Pet Shelter</h1>
      <Router>
        <Dashboard path="/"/>
        <PetForm path="/pets/new"/>
        <EditPet path="/pets/:_id/edit"/>
        <Details path="/pets/:_id"/>
      </Router>
      
    </div>
  );
}

export default App;