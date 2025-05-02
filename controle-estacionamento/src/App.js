import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastrarVagas from './pages/CadastrarVagas';
import VagasCadastradas from './pages/VagasCadastradas';
import VagasDisponiveis from './pages/VagasDisponiveis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CadastrarVagas" element={<CadastrarVagas />} />
        <Route path="/VagasCadastradas" element={<VagasCadastradas />} />
        <Route path="/VagasDisponiveis" element={<VagasDisponiveis />} />
      </Routes>
    </Router>
  );
}

export default App;
