import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
