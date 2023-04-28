import { db } from "../../../database";

export const userDelete = {
  method: "DELETE",
  path: "/api/user/{user_id}",
  handler: async (req, h) => {
    const { user_id } = req.params;
    await db
      .query("DELETE FROM users WHERE user_id=$1", [user_id])
      .catch((e) => {
        message.message = e;
        return message;
      });
    return { message: "Success!" };
  },
};
