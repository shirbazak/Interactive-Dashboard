const model = require("../models/userModel");

exports.login = async (req, res) => {
  const { idToken } = req.body;

  const result = await model.handleLogin(idToken);

  if (result.error) {
    return res.status(401).json({ error: result.error, details: result.details });
  }

  res.status(200).json(result);
};

exports.logout = async (req, res) => {
  const { uid } = req.body;

  const result = await model.handleLogout(uid);

  if (result.error) {
    return res.status(500).json({ error: result.error, details: result.details });
  }

  res.status(200).json(result);
};
