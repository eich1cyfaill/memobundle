import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import app from "../../App";
import {useParams} from "react-router-dom";

const ReviewScreen = (props: any) => {
    const params = useParams()
    const [currentDeck, setCurrentDeck] = useState(null)
    const {desks,customDesks} = useTypedSelector(state => state.cardsReducer)
    const allDecks = [...desks, ...customDesks]


    useEffect(() => {
        allDecks.forEach(deck => {
            if(deck.id === params.deckId){
                debugger
                setCurrentDeck(deck)
            }
        })
    }, [])

    return (
        <div>
            review
        </div>
    );
};

export default ReviewScreen;