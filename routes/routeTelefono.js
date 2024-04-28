import express from 'express';
const telefono = express();
import {
    getTelefono,
    postTelefono,
    putTelefono,
    deleteTelefono
} from '../controllers/controllerTelefonos.js';

// SELECT telefonos
telefono.get('/', getTelefono);

// INSERT telefonos
telefono.post('/', postTelefono)

// UPDATE telefonos
telefono.put('/:id', putTelefono)

// DELETE telefonos
telefono.delete('/:id', deleteTelefono);

export {
    telefono
}