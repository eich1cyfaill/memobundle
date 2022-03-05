import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import cl from '../../Styles/ReviewScreen.module.sass'

const ReviewScreen = () => {
    const params = useParams()
    const [forceReload, setForceReload] = useState(false)
    const [currentDeck, setCurrentDeck] = useState<any>(null)
    const [currentCard, setCurrentCard] = useState<any>(null)
    const [answerShown, setAnswerShown] = useState(false)
    const {desks,customDesks} = useTypedSelector(state => state.cardsReducer)
    const allDecks = [...desks, ...customDesks]

    useEffect(() => {
        allDecks.forEach(deck => {
            if(deck.id == params.deckId){
                setCurrentDeck(deck)
            }
        })
    }, [])

    useEffect(() => {
        if(currentDeck){
            // @ts-ignore
            let randomElement = Math.floor(Math.random() * currentDeck.cards.length)
            setAnswerShown(false)
            // @ts-ignore
            setCurrentCard(currentDeck.cards[randomElement])
        }
    }, [currentDeck, forceReload])

    const showAnswer = () => {
        setAnswerShown(true)
    }
    const throwToForceReload = () => {
        setForceReload(prev => !prev)

    }

    if(answerShown){
        return (
            <div className={cl.reviewScreen__wrapper}>
                <div className={cl.reviewScreen__title}>→ {currentDeck?.name}</div>
                <section className={cl.reviewScreen__wordWrapper}>
                    <div className={cl.reviewScreen__word}>{currentCard?.title}</div>
                    <div className={cl.reviewScreen__answer}>{currentCard?.answer}</div>
                </section>
                <section className={cl.reviewScreen__showButtonWrapper}>
                    <button className={cl.reviewScreen__showButton} onClick={throwToForceReload}>easy</button>
                    <button className={cl.reviewScreen__showButton} onClick={throwToForceReload}>normal</button>
                    <button className={cl.reviewScreen__showButton} onClick={throwToForceReload}>hard</button>
                </section>
            </div>
        )
    }
    return (
        <main className={cl.reviewScreen__wrapper}>
            <div className={cl.reviewScreen__title}>→ {currentDeck?.name}</div>
            <section className={cl.reviewScreen__wordWrapper}>
                <div className={cl.reviewScreen__word}>{currentCard?.title}</div>
            </section>
            <section className={cl.reviewScreen__showButtonWrapper}>
                <button className={cl.reviewScreen__showButton} onClick={showAnswer}>show</button>
            </section>
        </main>
    );
};

export default ReviewScreen;