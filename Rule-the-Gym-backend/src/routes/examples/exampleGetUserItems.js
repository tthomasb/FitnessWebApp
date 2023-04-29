import { db } from "../../database";

export const exampleGetUserItemsRoute = {
    method: 'GET',
    path: '/api/example/users/{userId}/items',
    handler: async (req, h) => {
        const userId = req.params.userId;

        const { results } = await db.query(
            'SELECT * FROM example_table WHERE user_id=$1',
            [userId],
        );

        return results.rows;
    }
}