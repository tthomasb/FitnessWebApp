import { db } from "../../../database";

export const exerciseDelete = {
  method: "DELETE",
  path: "/api/exercise/{exercise_id}",
  handler: async (req, h) => {
    const { exercise_id } = req.params;
    await db
      .query("DELETE FROM exercise WHERE exercise_id=$1", [exercise_id])
      .catch((e) => {
        message.message = e;
        return message;
      });
    return { message: "Success!" };
  },
};
