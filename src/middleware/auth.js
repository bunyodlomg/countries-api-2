// import jwt from "jsonwebtoken";

// export function auth(req, res, next) {
//   const crediantials = req.headers.authorization;

//   if (!crediantials) {
//     return res.status(403).json({ error: "No credentials sent!" });
//   } else {
//     const token = crediantials.split(" ").at(-1);
//     try {
//       var decoded = jwt.verify(token, "secret");
//       req.user = decoded;
//     } catch (err) {
//       return res.status(403).send({ message: err.message });
//     }
//   }

//   next();
// }
