import './scss/global.scss'
import { Routes, Route, } from 'react-router-dom';
import HomePage from './pages/Home/index.jsx';
import DigimonLista from './pages/DigimonPAge/index.jsx';

import { TemaProvider } from './context/TemaContext.jsx';
import { DigimonProvider } from './context/DigimonContext.jsx';


function App() {


  return (
    <DigimonProvider>
      <TemaProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/digimons" element={<DigimonLista />} />
        </Routes>
      </TemaProvider>
    </DigimonProvider>
  )
}

export default App;
