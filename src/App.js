import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import MovieDetails from './Component/MoviesDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/movie/:id' element={<MovieDetails/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
