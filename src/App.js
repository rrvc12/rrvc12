import './App.scss';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/index.js';
import About from './components/About';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
