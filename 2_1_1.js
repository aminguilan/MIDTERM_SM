const pool = require ("./db");
const sql = 'SELECT COUNT(film_id) FROM film;';

pool.query(sql,(err,res)=>{
try {
    console.log(res.rows);
} catch (err) {
    console.log(err.message);
}
});

pool.end();
