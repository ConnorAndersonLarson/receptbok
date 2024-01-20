import Header from './Header/Header.js';
import Home from './Home/Home.js';
import Index from './Index/Index.js';
import './App.scss';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/index" element={<Index/>} />
      </Routes>
    </div>
  );
}

export default App;
