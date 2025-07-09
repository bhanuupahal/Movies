import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
