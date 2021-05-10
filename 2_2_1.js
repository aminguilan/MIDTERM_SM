const pool = require ("./db");
const sql = 'SELECT * FROM midterm_list_of_films;';

pool.query(sql,(err,res)=>{
try {
    console.log(res.rows);
} catch (err) {
    console.log(err.message);
}
});

pool.end();
