import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
// import Projects from './Components/Projects';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;