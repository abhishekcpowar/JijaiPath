import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ImagePopupModal from './components/ImagePopupModal';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ImagePopupModal />
    <Header />
    <App />
    <Footer />
  </BrowserRouter>
);
