const { db, admin } = require("../config/firebaseAdmin");
const collection = db.collection("users");

exports.register = async (data) => {
  try {
    const existingUser = await collection.where("uid", "==", data.uid).limit(1).get();

    if (!existingUser.empty) {
      return {
        success: true,
        message: "User already exists",
        user: data
      };
    }

    const ref = await collection.add(data);

    return {
      success: true,
      message: "User registered successfully",
      user: { id: ref.id, ...data }
    };
  } catch (error) {
    console.error("Register error in model:", error);
    return {
      error: "Failed to register user",
      details: error.message || error
    };
  }
};

exports.handleLogin = async (idToken) => {
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);

    const userData = {
      uid: decoded.uid,
      email: decoded.email,
    };

    return {
      success: true,
      message: "Token verified",
      user: userData
    };
  } catch (error) {
    console.error("Login error in model:", error);
    return {
      error: "Failed to authenticate",
      details: error.message || error
    };
  }
};

exports.handleLogout = async (uid) => {
  try {
    await admin.auth().revokeRefreshTokens(uid);
    return { success: true, message: "User logged out" };
  } catch (error) {
    console.error("Logout error in model:", error);
    return {
      error: "Failed to log out",
      details: error.message || error
    };
  }
};
