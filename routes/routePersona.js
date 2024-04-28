import express from 'express';
const persona = express();

import { getPersonas, 
         postPersonas, 
         putPersona, 
         deletePersona } from '../controllers/controllerPersonas.js'; 

// SELECT Personas 
persona.get('/', getPersonas);

// CREATE personas 
persona.post('/', postPersonas);

// UPDATE Persona
persona.put('/:id', putPersona);

//DELETE persona
persona.delete('/:id', deletePersona );

export {
    persona
}