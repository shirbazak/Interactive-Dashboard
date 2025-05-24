const { db } = require("../config/firebaseAdmin");
const collection = db.collection("trafficStats");

exports.getAll = async () => {
  try {
    const snapshot = await collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching traffic data:", error);
    throw new Error("Failed to fetch traffic data");
  }
};

exports.create = async (data) => {
  try {
    const ref = await collection.add(data);
    return { id: ref.id, ...data };
  } catch (error) {
    console.error("Error creating traffic entry:", error);
    throw new Error("Failed to create traffic entry");
  }
};

exports.update = async (id, data) => {
  try {
    await collection.doc(id).update(data);
  } catch (error) {
    console.error(`Error updating traffic entry with id ${id}:`, error);
    throw new Error("Failed to update traffic entry");
  }
};

exports.remove = async (id) => {
  try {
    await collection.doc(id).delete();
  } catch (error) {
    console.error(`Error deleting traffic entry with id ${id}:`, error);
    throw new Error("Failed to delete traffic entry");
  }
};

