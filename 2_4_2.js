//function
const pool = require ("./db");
const sql = 'SELECT * FROM find_customer_address(2);';

pool.query(sql,(err,res)=>{
try {
    console.log(res.rows);
} catch (err) {
    console.log(err.message);
}
});

pool.end();
