import { db } from "../db/conexion.js";

const getPersonas = async (req, res) => {
    const sql = 'SELECT * FROM personas';
    const result = await db.query(sql);

    return res.json(result);
};

const postPersonas = async (req, res) => {
    const { nombre, apellido } = req.body;
    const data = [nombre, apellido];

    const sql = 'INSERT INTO personas (nombre, apellido) VALUES ($1, $2) returning id, nombre, apellido, fecha';
    const result = await db.query(sql, data);

    return res.json({ mensaje: "INSERT Success", obj_creado: result });
}

const putPersona = async (req, res) => {
    const { id } = req.params;
    const {nombre, apellido} = req.body;
    const data = [nombre, apellido, id];

    const sql = 'UPDATE personas SET nombre = $1, apellido = $2 WHERE id = $3 returning id, nombre, apellido, fecha';
    const result = await db.query(sql, data);

    return res.json({ mensaje: "UPDATE success", obj_creado: result });
}

const deletePersona = async (req, res) => {
    const { id } = req.params;
    const data = [id];

    const sql = 'DELETE FROM personas WHERE id = $1 returning id, nombre, apellido, fecha';
    const result = await db.query(sql, data);

    return res.json({ mensaje: "DELETE success", obj_creado: result });
}

export {
    getPersonas,
    postPersonas,
    putPersona,
    deletePersona
}