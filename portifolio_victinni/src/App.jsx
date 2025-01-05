import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home'; // Certifique-se de que o caminho está correto
// import NavBar from './components/layout/NavBar'; // Opcional: caso você tenha um NavBar

const App = () => {
  return (
    <Router>
      {/* Exibe o NavBar, se necessário */}
      {/* <NavBar /> */}
      {/* Define as rotas da aplicação */}
      <Routes>
        {/* Define a rota inicial para o componente Home */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
