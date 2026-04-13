import React from 'react';
import ReactDOM from 'react-dom/client';

// If you have existing JavaScript files, you can import them here
// For now, let's create a basic structure

function App() {
  return (
    <div className="App">
      <h1>Maleficient Project</h1>
      <p>Welcome to my website!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
