const model = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    const { uid, email, name } = req.body;

    if (!uid || !email) {
      return res.status(400).json({ error: "uid and email are required" });
    }

    const userData = {
      uid,
      email,
    };

    const result = await model.register(userData);

    if (result.error) {
      return res.status(400).json({ error: result.error, details: result.details });
    }

    res.status(201).json(result);
  } catch (error) {
    console.error("Register controller error:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
