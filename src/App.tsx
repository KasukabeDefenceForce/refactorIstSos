import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About.tsx';
import CoordinatesSystem from './components/Pages/CoordinatesSystem.tsx';
import Database from './components/Pages/Database.tsx';
import DeleteService from './components/Pages/DeleteService.tsx';
import MQTTPublisher from './components/Pages/MQTTPublisher.tsx';
import NewService from './components/Pages/NewService.tsx';
import ObservationConfig from './components/Pages/ObservationConfig.tsx';
import ProxyConfig from './components/Pages/ProxyConfig.tsx';
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
        <Route path="/mqtt" element={<MQTTPublisher/>} />
        <Route path="/observationconfig" element={<ObservationConfig/>} />
        <Route path="/proxyconfig" element={<ProxyConfig/>} />
        <Route path="/newservice" element={<NewService/>} />
        <Route path="/deleteservice" element={<DeleteService/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
