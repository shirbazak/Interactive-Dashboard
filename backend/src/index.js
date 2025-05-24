const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const trafficRoutes = require("./src/routes/trafficRoutes");
const authRoutes = require("./src/routes/authRoutes");
const userRouters = require("./src/routes/userRoutes");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.use("/traffic", trafficRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRouters);
exports.api = functions.https.onRequest(app);
