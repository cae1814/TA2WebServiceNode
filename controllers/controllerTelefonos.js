import { db } from "../db/conexion.js";

const getTelefono = async (req, res) => {
    
    var id_persona = req.query.id_persona;
    var sql = 'SELECT * FROM telefono WHERE id_persona = '+id_persona;
    const result = await db.query(sql);
    
    return res.json(result);
}

const postTelefono = async (req, res) => {
    const { numero_telefono, id_persona } = req.body;
    const data = [numero_telefono, id_persona];

    const sql = 'INSERT INTO telefono (numero_telefono, id_persona) VALUES ($1, $2) returning id, numero_telefono, id_persona';
    const result = await db.query(sql, data);

    return res.json({ mensaje: "INSERT Success", obj_creado: result });
}

const putTelefono = async (req, res) => {
    const { id } = req.params;
    const {numero_telefono} = req.body;
    const data = [numero_telefono, id];

    const sql = 'UPDATE telefono SET numero_telefono = $1 WHERE id = $2 returning id, numero_telefono, id_persona';
    const result = await db.query(sql, data);

    return res.json({ mensaje: "UPDATE success", obj_creado: result });    
}

const deleteTelefono = async (req, res) => {
    const { id } = req.params;
    const data = [id];
    
    const sql = 'DELETE FROM telefono WHERE id = $1 returning id, numero_telefono, id_persona';
    const result = await db.query(sql, data);

    return res.json({ mensaje: "DELETE success", obj_creado: result });
}

export {
    getTelefono,
    postTelefono,
    putTelefono,
    deleteTelefono
}