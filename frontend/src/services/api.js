// src/services/api.js

const BASE_URL = 'https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net';

export const getTrafficData = async () => {
  const res = await fetch(`${BASE_URL}/getTraffic`);
  return res.json();
};

export const addTrafficEntry = async (entry) => {
  const res = await fetch(`${BASE_URL}/addTraffic`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  });
  return res.json();
};

export const updateTrafficEntry = async (id, updatedEntry) => {
  const res = await fetch(`${BASE_URL}/updateTraffic?id=${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedEntry),
  });
  return res.json();
};

export const deleteTrafficEntry = async (id) => {
  const res = await fetch(`${BASE_URL}/deleteTraffic?id=${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
