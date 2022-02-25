import {CardsReducerActionTypes, DeskArray} from "../../Types/CardsReducerTypes";

export const cardsReducerSetNewDeskAC = (name: string="", description: string = "", tag: string = "") => {
    return {type: CardsReducerActionTypes.SET_NEW_DESK, payload:  {name, description, tag, cardCount: 0, cards: [], id: Math.random(), toReview: 0,  wordsLearned: 0, wordsLearning: 0, wordsUnknown: 0}}
}

export const cardsReducerGetCustomDesksAC = () => {
    return {type: CardsReducerActionTypes.GET_CUSTOM_DESK}
}