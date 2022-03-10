import React, { useRef } from 'react';
import cl from '../../Styles/NewCardModal.module.sass'
import {useActions} from "../../Hooks/useActions";

const NewCardModal = (props: any) => {
    const wordRef = useRef<HTMLInputElement | null>(null)
    const answerRef = useRef<HTMLInputElement | null>(null)

    const {cardsReducerAddNewCard} = useActions()

    const addNewCard = () => {
        if(wordRef.current?.value && answerRef.current?.value){
            cardsReducerAddNewCard(props.deskId, wordRef.current.value, answerRef.current.value)
            props.toggleNewCardModal()
        } else {
            if(!wordRef.current?.value && wordRef.current){
                wordRef.current.placeholder = "This field is required"
                wordRef.current.style.background = "#fbdfdf"
            }
            if(!answerRef.current?.value && answerRef.current){
                answerRef.current.placeholder = "YThis field is required"
                answerRef.current.style.background = "#fbdfdf"
            }
        }
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