import { getClient } from "../utils";

async function getUserAndTodosWithJoin(userId: number) {
    const client = await getClient();

    const joinQuery = `
        SELECT users.*, todos.title, todos.description, todos.done
        FROM users
        FULL JOIN todos ON users.id = todos.user_id
        WHERE users.id = $1;
    `;
    //Join = Inner Join

    const res = await client.query(joinQuery, [userId]);
    const results = res.rows;

    console.log("User and Todos:", results);
}

getUserAndTodosWithJoin(1)