import { db } from "../../../database";

export const exerciseGetAll = {
  method: "GET",
  path: "/api/exercise",
  handler: async (req, h) => {
    const { results } = await db.query("SELECT * FROM exercise").catch((e) => {
      message.message = e;
      return message;
    });

    return results.rows;
  },
};
