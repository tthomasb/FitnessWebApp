import { db } from "../../../database";

export const workoutDelete = {
    method: 'DELETE',
    path: '/api/workout/{workout_id}',
    handler: async (req, h) => {
        const { workout_id } = req.params;
        await db.query(
            'DELETE FROM workout WHERE workout_id=$1',
            [workout_id],
        );
        return { message: 'Success!' };
    }
}