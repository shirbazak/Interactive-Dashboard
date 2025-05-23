import React, { useState, useEffect } from 'react';
import TrafficForm from '../components/TrafficForm';
import TrafficTable from '../components/TrafficTable';
import TrafficChart from '../components/TrafficChart';

const mockData = [
  { id: '1', date: '2025-03-01', visits: 120 },
  { id: '2', date: '2025-03-02', visits: 140 },
  { id: '3', date: '2025-03-03', visits: 98 },
  { id: '4', date: '2025-03-04', visits: 132 },
];

const Dashboard = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);

  useEffect(() => {
    setTrafficData(mockData);
  }, []);

  const handleDelete = (id) => {
    setTrafficData(prev => prev.filter(entry => entry.id !== id));
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
  };

  const handleFormSubmit = (entry) => {
    if (editingEntry) {
      setTrafficData(prev =>
        prev.map(item => item.id === editingEntry.id ? { ...entry, id: editingEntry.id } : item)
      );
    } else {
      const newId = Date.now().toString();
      setTrafficData(prev => [...prev, { ...entry, id: newId }]);
    }
    setEditingEntry(null);
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">User Traffic Dashboard</h1>
      <TrafficForm onSubmit={handleFormSubmit} editingEntry={editingEntry} />
      <TrafficTable data={trafficData} onDelete={handleDelete} onEdit={handleEdit} />
      <div className="my-4">
        <TrafficChart data={trafficData} />
      </div>
    </div>
  );
};

export default Dashboard;
