import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import booksContext from './components/context';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

  const [booksState, setBooksState] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:9000/", {
      })
      const data = await response.json();
      setBooksState(data)
    })()
  }, [])


  return (
    <div className="App">
      <Header />

      <booksContext.Provider value={booksState}>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/:category" element={<Home />} />
          </Route>
        </Routes>
      </booksContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
