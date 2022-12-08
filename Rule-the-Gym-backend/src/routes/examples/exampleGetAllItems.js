import { db } from "../../database";

export const exampleGetAllItemsRoute = {
    method: 'GET',
    path: '/api/example',
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * FROM example_table'
        );
        return results.rows;
    }
}