// This is a server side file!
// An example of reading requests from the client and sending back the query results to the client.
const fs = require('fs');
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'ITEINERARY'
});

router.post('/', (req, res) => {
    // return res.end("ETST")
// connect to the MySQL database
    connection.connect((error) => {
        if (error) {
            console.error('Error connecting to MySQL database:', error);
        } else {
            // Sending this query results back to the client.
            connection.query(
                "SELECT * FROM Accommodations WHERE Stay = 'Hotel'",
                function (err, rows) {
                    if (rows === undefined) {

                    } else {
                        console.log(rows)
                        text = ""
                        for (let i = 0; i < rows.length; i++) {
                            text += rows[i].Accomm_ID + ","
                            text += rows[i].Plan_ID + ","
                            text += rows[i].Stay + ","
                            text += rows[i].name + ","
                            text += rows[i].Check_In_Date + ","
                            text += rows[i].Check_Out_Date + ","
                            text += rows[i].Address + ","
                            text += rows[i].images + ","
                            text += "\n";
                        }
                        return res.end(text);
                    }
                }
            )
        }
        console.log('Connected to MySQL database!');
    });
});

// close the MySQL connection
// connection.end();


module.exports = router;