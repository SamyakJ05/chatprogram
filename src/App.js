// Create a React component that inputs a textarea message then performs a fetch request to localhost:3001 gets back a response as a data.message and displays that message in a box below the textarea.

import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const port = process.env.PORT || 3001;
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:' + port, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message })
    })
      .then(res => res.json())
      .then(data => setResponse(data.message))
  };

  return (
    <div className="App">
      <h1>Chat Program</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          placeholder='Enter message here'
          onChange={(e) => setMessage(e.target.value)}
          ></textarea>

        <button type="submit">Submit</button>
      </form>
      {response && <div><b>A: </b> {response}</div>}
    </div>
  );
}

export default App