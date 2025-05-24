const { admin } = require("../config/firebaseAdmin");

exports.verifyUser = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];
  if (!token) return res.status(401).send("Unauthorized");

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch {
    res.status(403).send("Invalid token");
  }
};

exports.checkEditor = (req, res, next) => {
  const allowedEditors = ["editor@example.com"];
  if (!allowedEditors.includes(req.user.email)) return res.status(403).send("Forbidden");
  next();
};
