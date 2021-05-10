//stored procedure
const pool = require ("./db");
const sql = 'SELECT * FROM language;';

pool.query(sql,(err,res)=>{
try {
    console.log(res.rows);
} catch (err) {
    console.log(err.message);
}
});

pool.end();
