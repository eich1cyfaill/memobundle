import React, {useEffect} from 'react';
import './App.sass';
import Navside from './Components/Navside/Navside';
import { Routes, Route } from 'react-router-dom';
import Review from './Components/Review/Review';
import Desklist from './Components/DeskList/Desklist';
import {useActions} from "./Hooks/useActions";

function App() {
    const {cardsReducerGetCustomDesksAC} = useActions()

    cardsReducerGetCustomDesksAC()


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
