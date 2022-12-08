import { db } from "../../../database";

export const exerciseDelete = {
    method: 'DELETE',
    path: '/api/exercise/id/{e_id}',
    handler: async (req, h) => {
        const { e_id } = req.params;
        await db.query(
            'DELETE FROM exercise WHERE e_id=$1',
            [e_id],
        );
        return { message: 'Success!' };
    }
}