import { db } from "../../database";

export const exampleUpdateItemRoute = {
  method: "PUT",
  path: "/api/example/{id}",
  handler: async (req, h) => {
    const { id } = req.params;
    const { name, description, price } = req.payload;
    const userId = "12345";
    await db.query(
      `
            UPDATE example_table
                SET name=$1, description=$2, price=$3
                WHERE id=$4 AND user_id=$5
        `,
      [name, description, price, id, userId]
    );
    const { results } = await db.query(
      "SELECT * FROM example_table WHERE id=$1 AND user_id=$2",
      [id, userId]
    );
    return results.rows[0];
  },
};