const pool = require ("./db");
const sql = 'SELECT rating AS "rating", SUM(length) AS "sum"  FROM film GROUP BY rating ORDER BY rating;';

pool.query(sql,(err,res)=>{
try {
    console.log(res.rows);
} catch (err) {
    console.log(err.message);
}
});

pool.end();