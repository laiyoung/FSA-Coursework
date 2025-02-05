// imports here for express and pg
const pg = require('pg');
const express = require('express');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/acme_ice_cream_db');
const app = express();
const path = require('path');


// static routes here (you only need these for deployment + front end)
app.use(express.static(path.join(__dirname, "../client/dist")));

// app routes here
app.get('/api/flavors', async(req, res, next) => {
        try{
            const SQL = `
            SELECT * FROM flavors
            `;
            const response = await client.query(SQL);
            res.send(response.rows);
    
        }catch(ex){ 
            next()
        }
    
    })
    app.get('/api/flavors/:id', async(req, res, next) => {
        try{
            const SQL = `
            SELECT * FROM flavors WHERE id = $1
            `;
            const response = await client.query(SQL, ([req.params.id]));
            res.send(response.rows);
    
        }catch(ex){ 
            next()
        }
    
    })

// create your init function
const init = async () => {
        await client.connect();
const SQL = `
DROP TABLE IF EXISTS flavors;
CREATE TABLE flavors(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
is_favorite BOOLEAN DEFAULT false,
created_at TIMESTAMP DEFAULT now(),
updated_at TIMESTAMP DEFAULT now()
);

INSERT INTO flavors(name, is_favorite) VALUES('vanilla', false), ('chocolate', true), ('strawberry', false)
`

await client.query(SQL)

console.log('data seeded')
app.listen(3000,() => console.log(`listening on port 3000`))

}
// init function invocation
init();