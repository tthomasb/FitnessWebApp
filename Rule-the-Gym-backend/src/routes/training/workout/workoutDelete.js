import { db } from "../../../database";

export const workoutDelete = {
  method: "DELETE",
  path: "/api/workout/delete/{workout_id}",
  handler: async (req, h) => {
    let message = { message: "success!" };
    const { workout_id } = req.params;
    console.log("workout_id");
    await db
      .query("DELETE FROM workout WHERE workout_id=$1", [workout_id])
      .catch((e) => {
        message.message = e;
        return message;
      });
    return { message: "Success!" };
  },
};
