import { getClient } from "./utils";

async function insertRecords() {
    const client = await getClient();
    const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
    const userValues = ['sameehaUser2@gmail.com', '1234'];

    let response = await client.query(insertUserText, userValues);
    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = ['Complete assignment', 'execute sql commands', response.rows[0].id, false];
    await client.query(insertTodoText, todoValues);

    console.log("Records created!");
}



insertRecords();