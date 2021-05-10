const pool = require ("./db");
const sql = 'SELECT c.name, f.film_id FROM category c INNER JOIN film_category f ON c.category_id = f.category_id;';

pool.query(sql,(err,res)=>{
try {
    console.log(res.rows);
} catch (err) {
    console.log(err.message);
}
});

pool.end();
