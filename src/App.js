import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Header />} >
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
