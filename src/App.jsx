import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Main from './components/Main'
import JoinPage from './components/JoinPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App