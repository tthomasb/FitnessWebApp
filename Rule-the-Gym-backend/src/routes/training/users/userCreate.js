import { db } from "../../../database";

export const userCreate = {
  method: "POST",
  path: "/api/user",
  handler: async (req, h) => {
    const {
      username = "",
      weight = "",
      height = "",
      birthdate = "",
    } = req.payload;

    await db.query(
      `
            INSERT INTO users (username, weight, height, birthdate)
              VALUES ($1, $2, $3, $4);
        `,
      [username, weight, height, birthdate]
    );

    return { username, weight, height, birthdate };
  },
};
