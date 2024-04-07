import { getClient } from "./utils";

async function dropTable(tableName: string) {
    const client = await getClient();

    const dropTableText = `DROP TABLE ${tableName}`;
    await client.query(dropTableText);

    console.log(`${tableName} dropped`);
}

const tableName = 'test';
dropTable(tableName);