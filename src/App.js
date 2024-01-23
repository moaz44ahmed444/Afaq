import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Help from './components/Help/Help';
import Error from './components/Error/Error';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='AboutUs' element={<AboutUs />} /> 
            <Route path='Projects' element={<Projects />} /> 
            <Route path='Services' element={<Services />} /> 
            <Route path='Contact' element={<Contact />} /> 
            <Route path='Help' element={<Help />} /> 
            <Route path='*' element={<Error />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
