import React, { useEffect, useState } from 'react';

export default function Comp1() {
  const [history, sethistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/apiroutine/');
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      sethistory(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchdata(); }, []);

  return (
    <div style={{ padding: '40px' }}>
      <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '20px', borderRadius: '10px' }}>
        <h2>Routine History</h2>
        {loading ? <p>Loading...</p> : (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid white' }}>
                <th style={{ padding: '10px' }}>ID</th>
                <th style={{ padding: '10px' }}>Date</th>
                <th style={{ padding: '10px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((p) => (
                <tr key={p.id} style={{ textAlign: 'center', borderBottom: '0.5px solid rgba(255,255,255,0.2)' }}>
                  <td style={{ padding: '10px' }}>{p.id}</td>
                  <td style={{ padding: '10px' }}>{p.day}</td>
                  <td style={{ padding: '10px' }}>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}