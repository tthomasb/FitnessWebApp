import { db } from "../../../database";

export const workoutDelete = {
    method: 'DELETE',
    path: '/api/workout/id/{w_id}',
    handler: async (req, h) => {
        const { w_id } = req.params;
        await db.query(
            'DELETE FROM workouts WHERE w_id=$1',
            [w_id],
        );
        return { message: 'Success!' };
    }
}