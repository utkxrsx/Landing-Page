import React from 'react';
import './App.css'; // Make sure to import the CSS
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <LandingPage />
      </div>
      <footer className="footer">
        <p>© 2024 GigFloww. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
