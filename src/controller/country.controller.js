const db = require("../config/db.js");
// import format from "pg-format";

export async function getCountry(req, res) {
  try {
    const result = await db.query("select region from country");
    res.json(result.rows);
  } catch (error) {
    res.status(400).send({ message: error.message });
    console.log(error.message);
  }
}

// export async function getCountryAll(req, res) {
//   try {
//     const board_id = req.params.id;
//     const result = await db.query(
//       `SELECT name, array_to_json(array_remove(array_agg(t), null)) as tasks from columns as c 
//       left JOIN
//       (SELECT tasks.title, description,status_id, coalesce((select count(id) from sub_tasks where task_id = tasks.id and completed = true group by task_id), 0) as completed, tasks.id, array_to_json(array_remove(array_agg(sub), null)) as sub_tasks FROM tasks left join sub_tasks sub on sub.task_id = tasks.id group by tasks.title, description, tasks.id, status_id) t ON t.status_id = c.id
//       where c.board_id = $1
//       group by name`,
//       [board_id]
//     );
//     res.json(result.rows);
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// }

// export async function editCountry(req, res) {
//   try {
//     const board_id = req.params.id;
//     const data = req.body;
//     await db.query("BEGIN");
//     await db.query("update boards set name = $1 where id = $2", [
//       data.name,
//       board_id,
//     ]);
//     const columns = req.body.columns;
//     if (columns) {
//       for (let z = 0; z < columns.length; z++) {
//         await db.query(
//           "insert into columns (id, name, board_id) values (coalesce($1, nextval(pg_get_serial_sequence('columns', 'id'))), $2, $3) on conflict (id)  do update set name = $2",
//           [columns[z].id || null, columns[z].name, board_id]
//         );
//       }
//     }

//     await db.query("COMMIT");
//     res.status(201).send({ message: "updated" });
//   } catch (error) {
//     await db.query("ROLLBACK");
//     res.status(400).send({ message: error.message });
//     console.log(error.message);
//   }
// }
