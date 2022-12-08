import Boom from "@hapi/boom";
import { db } from "../../../database";

export const exerciseGetAll = {
  method: "GET",
  path: "/api/exercise/all",
  handler: async (req, h) => {
    const { results } = await db.query("SELECT * FROM exercise");
    return results.rows;
  },
};
