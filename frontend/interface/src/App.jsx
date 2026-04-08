import React from "react";
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";
import { Routes, Route, Link } from "react-router-dom";

export default function Main() {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1920&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100vw',
    color: 'white',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column' // Keeps nav at top and content below
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center', // This puts buttons in the middle
    alignItems: 'center',
    gap: '20px',             // Space between buttons
    padding: '30px 0',       // Padding at the top
    width: '100%'
  };

  const btnStyle = {
    padding: '12px 24px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.3)',
    cursor: 'pointer',
    background: 'rgba(255, 255, 255, 0.1)', // Glass effect
    backdropFilter: 'blur(5px)',
    transition: '0.3s'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem'
  };

  return (
    <div style={bgStyle}>
      {/* NAVIGATION BAR - TOP MIDDLE */}
      <nav style={navStyle}>
        <div style={btnStyle}>
          <Link to='/' style={linkStyle}>Home</Link>
        </div>
        <div style={btnStyle}>
          <Link to='/a' style={linkStyle}>History</Link>
        </div>
        <div style={btnStyle}>
          <Link to='/b' style={linkStyle}>Post Data</Link>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Routes>
          <Route path='/' element={
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Master Your Day</h1><br />
              <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                Small habits lead to big results. Track your daily status and build a routine that lasts.
              </p>
            </div>
          } />
          <Route path='/a' element={<Comp1 />} />
          <Route path="/b" element={<Comp2 />} />
        </Routes>
      </div>
    </div>
  );
}