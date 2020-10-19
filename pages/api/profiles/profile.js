const db = require("../../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
  if (req.method == "GET") {
    const [profile] = await db.query(escape`
      SELECT *
      FROM profiles
      WHERE id = ${req.query.id}
    `);
    res.status(200).json({ profile });
  } else if (req.method == "POST") {
  }
};
