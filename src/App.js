import Header from './Header/Header.js';
import Home from './Home/Home.js';
import './App.scss';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
