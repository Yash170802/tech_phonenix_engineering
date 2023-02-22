import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Layouts/Main';
import Hero from './Layouts/Hero';
import About from './Layouts/About';
import Services from './Layouts/Services';
import Projects from './Layouts/Projects';
import Blog from './Layouts/Blog';
import Contact from './Layouts/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Hero />} />
          <Route path='*' element={<Hero />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
