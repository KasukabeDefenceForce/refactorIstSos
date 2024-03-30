import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Ensure correct imports
import './App.css';
import IconTray from './components/IconTray.tsx';
import Navbar from "./components/Navbar.tsx";
import About from './components/util/About.tsx';
import Database from './components/util/Database.tsx';
import ServiceProvider from './components/util/ServiceProvider.tsx';
import ServiceIdentification from './components/util/ServiceIdentification.tsx';

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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
