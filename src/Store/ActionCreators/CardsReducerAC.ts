import {CardsReducerActionTypes, DeskArray} from "../../Types/CardsReducerTypes";

export const cardsReducerSetNewDeskAC = (name: string="", description: string = "", tag: string = "") => {
    return {type: CardsReducerActionTypes.SET_NEW_DESK, payload:  {name, description, tag, cardCount: 0, cards: [], id: Math.random().toString().split('.').join(''), toReview: 0,  wordsLearned: 0, wordsLearning: 0, wordsUnknown: 0}}
}

export const cardsReducerGetCustomDesksAC = () => {
    return {type: CardsReducerActionTypes.GET_CUSTOM_DESK}
}

export const cardsReducerAddNewCard = (deskId: number, title: string, answer: string,) => {
    return {type: CardsReducerActionTypes.ADD_NEW_CARD, payload: {deskId, id: Math.random().toString().split('.').join(''), title, answer, known: false, hard: false, easy: false, normal: false}}
}

export const cardsReducerRemoveCard = (cardId: number, deskId: number) => {
    return {type: CardsReducerActionTypes.REMOVE_CARD_FROM_DESK, payload: {cardId, deskId}}
}