import { getClient } from "./utils";

async function deleteTodo(todoId: number) {
    const client = await getClient();
    
    const deleteTodoText = 'DELETE FROM users WHERE id = $1';
    await client.query(deleteTodoText, [todoId]);
    
    console.log(`Todo with ID ${todoId} deleted!`);
}

const todoIdToDelete = 8;
deleteTodo(todoIdToDelete);
