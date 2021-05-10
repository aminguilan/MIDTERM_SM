const pool = require ("./db");
const sql = 'SELECT * FROM midterm_total_films_per_category;';

pool.query(sql,(err,res)=>{
try {
    console.log(res.rows);
} catch (err) {
    console.log(err.message);
}
});

pool.end();
