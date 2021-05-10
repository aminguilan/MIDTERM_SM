const express = require ("express");
const app = express();
const cors = require ("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.send('SabandoMinguilan-WEBDEV_MIDTERM');
});

//2.1.1 Get the total number of films
app.get('/SabandoMinguilan-2.1.1' , async(req,res) => {
    try {
        const sql = 'SELECT COUNT(film_id) FROM film;';
        const query_res = await pool.query(sql);
        res.json(query_res.rows);
    } catch (error) {
        console.error(error);
        res.json({message: error.message});
    }
});
//2.1.2 Calculate the total length of films grouped by film’s rating
app.get('/SabandoMinguilan-2.1.2' , async(req,res) => {
    try {
        const sql = 'SELECT rating AS "rating", SUM(length) AS "sum"  FROM film GROUP BY rating ORDER BY rating;';
        const query_res = await pool.query(sql);
        res.json(query_res.rows);
    } catch (error) {
        console.error(error);
        res.json({message: error.message});
    }
});
//2.1.3 Get the films that have the maximum replacement cost
app.get('/SabandoMinguilan-2.1.3' , async(req,res) => {
    try {
        const sql = 'SELECT film_id, title FROM film WHERE replacement_cost =(SELECT MAX (replacement_cost) FROM film);';
        const query_res = await pool.query(sql);
        res.json(query_res.rows);
    } catch (error) {
        console.error(error);
        res.json({message: error.message});
    }
});


//2.2 Views
//2.2.1 Display the list of films (View name: midterm_list_of_films)
app.get('/SabandoMinguilan-2.2.1' , async(req,res) => {
    try {
        const sql = 'SELECT * FROM midterm_list_of_films;';
        const query_res = await pool.query(sql);
        res.json(query_res.rows);
    } catch (error) {
        console.error(error);
        res.json({message: error.message});
    }
});
//2.2.2 Display total number of films per category
app.get('/SabandoMinguilan-2.2.2' , async(req,res) => {
    try {
        const sql = 'SELECT * FROM midterm_total_films_per_category;';
        const query_res = await pool.query(sql);
        res.json(query_res.rows);
    } catch (error) {
        console.error(error);
        res.json({message: error.message});
    }
});


//2.3 Relational Data Model Operations (Union, Except, Intersect, Joins)
//2.3.1 Create your own query and describe it.
app.get('/SabandoMinguilan-2.3.1' , async(req,res) => {
    try {
        const sql = 'SELECT E.city_id , E.city , E.country_id , D.country FROM city E JOIN country D ON E.country_id = D.country_id;';
        const query_res = await pool.query(sql);
        res.json(query_res.rows);
    } catch (error) {
        console.error(error);
        res.json({message: error.message});
    }
});
//2.3.2 Create your own query and describe it.
app.get('/SabandoMinguilan-2.3.2' , async(req,res) => {
    try {
        const sql = 'SELECT c.name, f.film_id FROM category c INNER JOIN film_category f ON c.category_id = f.category_id;';
        const query_res = await pool.query(sql);
        res.json(query_res.rows);
    } catch (error) {
        console.error(error);
        res.json({message: error.message});
    }
});

//2.4 Functions and Stored Procedures
//2.4.1 Create your own query and describe it. PROCEDURE
app.post('/SabandoMinguilan-2.4.1' , async(req,res) => {
    try {
        const data = req.body;
        const sql = 'call insert_lang($1)';
        const query_res = await pool.query(sql,[data.lang]);
        res.send("Successfully Added = " + data.lang)
    } catch (error) {
        console.error(error);
        res.json({message: error.message});
    }
});


//2.4.2 Create your own query and describe it.FUNCTION
app.post('/SabandoMinguilan-2.4.2' , async(req,res) => {
    try {
        const data = req.body;
        const sql = 'SELECT find_customer_address($1);';
        const query_res = await pool.query(sql,[data.cust]);
        res.json(query_res.rows);
    } catch (error) {
        console.error(error);
        res.json({message: error.message});
    }
});


app.listen(5000, ()=> {
    console.log('server has started on port')});