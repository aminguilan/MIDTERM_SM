const pool = require ("./db");
const sql = 'SELECT E.city_id , E.city , E.country_id , D.country FROM city E JOIN country D ON E.country_id = D.country_id;';

pool.query(sql,(err,res)=>{
try {
    console.log(res.rows);
} catch (err) {
    console.log(err.message);
}
});

pool.end();
