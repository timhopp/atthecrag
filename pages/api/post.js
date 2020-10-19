const db = require("../../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
  if (req.method == "POST") {
    `INSERT INTO Posts (title, description) VALUES (@title, @description)`;
  }

  //   const [profile] = await db.query(escape`
  //     SELECT *
  //     FROM profiles
  //     WHERE id = ${req.query.id}
  //   `);
  //   res.status(200).json({ profile });
  // } else if (req.method == "POST") {
  // }
};
