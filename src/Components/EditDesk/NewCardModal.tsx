import React, { useRef } from 'react';
import cl from '../../Styles/NewCardModal.module.sass'
import {useActions} from "../../Hooks/useActions";

const NewCardModal = (props: any) => {
    const wordRef = useRef<HTMLInputElement | null>(null)
    const answerRef = useRef<HTMLInputElement | null>(null)

    const {cardsReducerAddNewCard} = useActions()

    const addNewCard = () => {
        if(wordRef.current && answerRef.current){
            cardsReducerAddNewCard(props.deskId, wordRef.current.value, answerRef.current.value)
        }
        props.toggleNewCardModal()
    }

    return (
        <div className={cl.newCardModal} onMouseDown={() => props.toggleNewCardModal()}>
            <div className={cl.newCardModal__wrapper} onMouseDown={e => e.stopPropagation()}>
                <input ref={wordRef} type="text" placeholder="Type a word will be learned"/>
                <input ref={answerRef} type="text" placeholder="Type an answer of word above"/>
                <button onClick={addNewCard}>add</button>
            </div>
        </div>
    );
};

export default NewCardModal;