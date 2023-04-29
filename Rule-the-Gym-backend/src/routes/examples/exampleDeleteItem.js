import { db } from "../../database";

export const exampleDeleteItemRoute = {
    method: 'DELETE',
    path: '/api/example/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        await db.query(
            'DELETE FROM example_table WHERE id=$1',
            [id],
        );
        return { message: 'Success!' };
    }
}