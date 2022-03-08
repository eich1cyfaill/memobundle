import React, {useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import cl from '../../Styles/EditDesk.module.sass'
import { cardInDesk } from '../../Types/CardsReducerTypes';
import NewCardModal from "./NewCardModal";
import {useActions} from "../../Hooks/useActions";
import DeleteConfirm from "./DeleteConfirm";

const EditDesk = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [modalVisibility, setModalVisibility] = useState(false)
    const [selectedDesk, setSelectedDesk]: any = useState(null)
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const {desks, customDesks} = useTypedSelector(state => state.cardsReducer)
    const allDesks = [...desks, ...customDesks]
    const {cardsReducerRemoveCard, cardsReducerRemoveDesk} = useActions()


    const toggleNewCardModal = (basic: boolean) => {
        if(basic){
            return
        }
        setModalVisibility((prevState: boolean) => !prevState)
    }

    const throwCardToDelete = (cardId: number, deskId: number) => {
        cardsReducerRemoveCard(cardId, deskId)
    }

    const throwDeskToDelete = async(deckId: number) => {
        cardsReducerRemoveDesk(deckId)
        await navigate(`/desklist`)
    }

    const countReviewCards = () => {
        let returnedLength = []
        selectedDesk.cards.forEach((el: any) => {
            if(el.hard || el.normal){
                returnedLength.push(el)
            }
        })
        return returnedLength.length
    }

    const iterateInDeckUnknown = (method: string) => {
        let returnedLength = []
        selectedDesk.cards.forEach((el: any) => {
            if(el[method] == false){
                returnedLength.push(el)
            }
        })
        return returnedLength.length
    }

    const iterateInDeck = (method: string) => {
        let returnedLength = []
        selectedDesk.cards.forEach((el: any) => {
            if(el[method] == true){
                returnedLength.push(el)
            }
        })
        return returnedLength.length
    }

    useEffect(() => {
        allDesks.forEach(el => {
            if(el.id == params.deckId){
                setSelectedDesk(el)
            }
        })
    }, [])


        return (
            <section className={cl.editDesk__wrapper}>
                {modalVisibility ? <NewCardModal deskId={selectedDesk.id} toggleNewCardModal={toggleNewCardModal}/> : null}
                {deleteConfirm ? <DeleteConfirm toggleModal={() => setDeleteConfirm(false)} throwDeckToDelete={throwDeskToDelete} id={selectedDesk.id}/> : null}
                <div className={cl.editDesk__title}>→ {selectedDesk ? selectedDesk.name : null}</div>
                <div className={cl.editDesk__desc}>{selectedDesk ? selectedDesk.description : null}</div>
                <button className={cl.editDesk__deskDelete} onClick={()=>setDeleteConfirm(true)}>Delete Desk</button>
                <div className={cl.editDesk__cardsInfo}>
                    <div>Cards Count: {selectedDesk ? selectedDesk.cards.length : null}</div>
                    <div>Cards to review: {selectedDesk ? countReviewCards() : null}</div>
                </div>
                <div className={cl.editDesk__wordsInfo}>
                    <div>Learned Words: {selectedDesk ? iterateInDeck("easy") : null}</div>
                    <div>Words Learning: {selectedDesk ? iterateInDeck("hard") : null}</div>
                    <div>Unknown Words: {selectedDesk ? iterateInDeckUnknown("known") : null}</div>
                </div>

                <section className={cl.editDesk__cards}>
                    <div className={cl.editDesk__cards_title}>
                        <h2>→ cards</h2>
                        <button onClick={() => toggleNewCardModal(selectedDesk.basic)}>+ add</button>
                    </div>
                    <div className={cl.editDesk__cards_wrapper}>
                        {selectedDesk ? selectedDesk.cards.map((card: cardInDesk, index: number) =>
                            <div className={cl.editDesk__cards_item} key={card.id}>
                                <div className={cl.editDesk__cards_index}>{index + 1}</div>
                                <div>{card.title}</div>
                                <div>{card.answer}</div>
                                {card.known ? null : <div>Unknown</div>}
                                {card.easy ? <div>Easy</div> : null}
                                {card.normal ? <div>Normal</div> : null}
                                {card.hard ? <div>Hard</div> : null}
                                <div className={cl.editDesk__cards_delete} onClick={() => throwCardToDelete(card.id, card.deskId)}>Delete</div>
                            </div>
                        ): null}
                    </div>
                </section>
            </section>
        );



};

export default EditDesk;