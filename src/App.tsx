import React, {useEffect} from 'react';
import './App.sass';
import Navside from './Components/Navside/Navside';
import { Routes, Route } from 'react-router-dom';
import Review from './Components/Review/Review';
import Desklist from './Components/DeskList/Desklist';
import {useActions} from "./Hooks/useActions";
import EditDesk from "./Components/EditDesk/EditDesk";

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
              <Route path="edit/:deskId" element={<EditDesk />}/>
            </Routes>
          </main>
        </div>
    );
}

export default App;
