import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar/>
        <LandingPage/>
      </main>
    </BrowserRouter>
  );
}
