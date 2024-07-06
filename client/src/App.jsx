import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Register />
    </div>
  );
}

export default App
