const { Client } = require('pg');

const client = new Client({
    host: "ec2-52-72-155-37.compute-1.amazonaws.com",
    user: "fhstasprlmrmhx",
    port: 5432,
    password: "61d84aa413d1fca531c5e963b2ab596cb44661c6dc810102a8436c5567e8ee0c",
    database: "d8gsrlu8d2euco"
});



export function addUserToDB(email, name, status = "user"){
    if (chekUserInDB(email, name) === true)
        insertUserToDB(email, name, status);
        
}

function chekUserInDB(email, name){
    client.connect();

    client.query(`Select * from users where (email = ${email}) AND (name = ${name})`, (err, res) => {
        if(!err){
            return (res.rows ? false : true);
        } else {
            console.log(err.message);
        }
    });

    client.end();
}

function insertUserToDB(email, name, status){
    client.connect();

    client.query(`insert into users (name, email, status) values (${name}, ${email}, ${status})`, (err, res) => {
        if(err) console.log(err.message);
    });

    client.end();
}