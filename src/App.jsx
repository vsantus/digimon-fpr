import './scss/global.scss'
import { Routes, Route, } from 'react-router-dom';
import HomePage from './pages/Home/index.jsx';
import DigimonLista from './pages/DigimonPAge/index.jsx';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/digimons" element={<DigimonLista />} />
      </Routes>
    </>
  )
}

export default App
