const pool = require ("./db");
const sql = 'SELECT film_id, title FROM film WHERE replacement_cost =(SELECT MAX (replacement_cost) FROM film);';

pool.query(sql,(err,res)=>{
try {
    console.log(res.rows);
} catch (err) {
    console.log(err.message);
}
});

pool.end();