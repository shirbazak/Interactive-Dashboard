const model = require("../models/trafficModel");

exports.getTraffic = async (req, res) => {
  try {
    const data = await model.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addTraffic = async (req, res) => {
  try {
    const { date, visits } = req.body;
    const entry = await model.create({ date, visits });
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTraffic = async (req, res) => {
  try {
    const { id } = req.params;
    await model.update(id, req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTraffic = async (req, res) => {
  try {
    const { id } = req.params;
    await model.remove(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
