import React, { useState } from 'react';

export default function Comp2() {
  const [day, setday] = useState('');
  const [stat, setstat] = useState('');

  const handlesubmit = async (e) => {
    e.preventDefault();
    const payload = { day: day, status: parseInt(stat) }; // 'status' matches Django field

    try {
      const response = await fetch('http://127.0.0.1:8000/apiroutine/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Success!");
        setday(''); setstat('');
      } else {
        const errorMsg = await response.json();
        alert("Server Error: " + JSON.stringify(errorMsg));
      }
    } catch (error) {
      alert("Error: Database not connected");
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '500px' }}>
      <div style={{ background: 'white', color: 'black', padding: '30px', borderRadius: '15px' }}>
        <h2 style={{ marginTop: 0 }}>Add Entry</h2>
        <form onSubmit={handlesubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block' }}>Date</label>
            <input type="date" value={day} onChange={(e) => setday(e.target.value)} required 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block' }}>Status (Number)</label>
            <input type="number" value={stat} onChange={(e) => setstat(e.target.value)} required 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', background: '#10b981', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Save Routine
          </button>
        </form>
      </div>
    </div>
  );
}