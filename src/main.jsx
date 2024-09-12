import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Home from '../src/pages/home/Home.jsx';
import About from "./pages/about/about.jsx";
import Services from "./pages/services/Services.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Contact from "./pages/contact/Contact.jsx";
import './index.css';

function Main() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About setActiveSection={setActiveSection}/>;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <StrictMode>
      <section className="hero">
        <App setActiveSection={setActiveSection} />
        {renderActiveSection()}
      </section>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);
