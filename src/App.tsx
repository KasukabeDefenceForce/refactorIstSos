import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About.tsx';
import CoordinatesSystem from './components/Pages/CoordinatesSystem.tsx';
import Database from './components/Pages/Database.tsx';
import ServiceIdentification from './components/Pages/ServiceIdentification.tsx';
import ServiceProvider from './components/Pages/ServiceProvider.tsx';
import IconTray from './components/util/IconTray.tsx';
import Navbar from "./components/util/Navbar.tsx";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <IconTray /> 
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/database" element={<Database/>} />
        <Route path="/serviceprovider" element={<ServiceProvider/>} />
        <Route path="/serviceidentification" element={<ServiceIdentification/>} />
        <Route path="/coordinatessystem" element={<CoordinatesSystem/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
