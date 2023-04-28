import { v4 as uuid } from "uuid";
import { db } from "../../database";

export const exampleCreateItemRoute = {
  method: "POST",
  path: "/api/example",
  handler: async (req, h) => {
    const id = uuid();
    const { name = "", description = "", price = 0 } = req.payload;
    const userId = "12345";

    await db.query(
      `
            INSERT INTO example_table (id, name, description, price, user_id)
              VALUES ($1, $2, $3, $4, $5);
        `,
      [id, name, description, price, userId]
    );

    return { id, name, description, price, user_id: userId };
  },
};
