import React, { useState, useEffect } from 'react';
import '../styles/TrafficForm.css';

const TrafficForm = ({ onSubmit, editingEntry }) => {
  const [date, setDate] = useState('');
  const [visits, setVisits] = useState('');

  useEffect(() => {
    if (editingEntry) {
      setDate(editingEntry.date);
      setVisits(editingEntry.visits);
    } else {
      setDate('');
      setVisits('');
    }
  }, [editingEntry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !visits) return;
    onSubmit({ date, visits: Number(visits) });
  };

  return (
    <form className="traffic-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Visits</label>
          <input
            type="number"
            value={visits}
            onChange={(e) => setVisits(e.target.value)}
            required
            placeholder="Enter visits"
          />
        </div>
        <div className="form-group">
          <button type="submit">
            {editingEntry ? 'Update Entry' : 'Add Entry'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TrafficForm;
