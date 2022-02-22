import React from 'react';
import './App.sass';
import Navside from './Components/Navside/Navside';
import { Routes, Route } from 'react-router-dom';
import Review from './Components/Review/Review';
import Desklist from './Components/DeskList/Desklist';

function App() {
    return (
        <div className="App">
          <Navside />
          <main>
            <Routes>
              <Route path="review" element={<Review />}/>
              <Route path="desklist" element={<Desklist />}/>
            </Routes>
          </main>
        </div>
    );
}

export default App;
