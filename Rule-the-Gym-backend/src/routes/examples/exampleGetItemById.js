import Boom from "@hapi/boom";
import { db } from "../../database";

export const exampleGetItemRoute = {
  method: "GET",
  path: "/api/example/{id}",
  handler: async (req, h) => {
    const id = req.params.id;

    const { results } = await db.query("SELECT * FROM example_table WHERE id = $1", [
      id,
    ]);
    const example_table = results.rows[0];
    if (!example_table) throw Boom.notFound(`Item does not exist with id ${id}`);
    return example_table;
  },
};