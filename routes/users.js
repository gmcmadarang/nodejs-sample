import express from 'express';
import connection from '../connection.js';

const router = express.Router();

router.get('/', (req, res) => {
    let query = "SELECT * FROM users";
  
    if (req.query.id) {
        query += ` WHERE id = ${req.query.id}`;
    }

    query += " ORDER BY first_name, last_name";

    connection.query(query,(err, results) => {
        if(!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(200).json(err);
        }
    })
});


export default router;