import {CardsReducerActionTypes} from "../../Types/CardsReducerTypes";

export const cardsReducerSetNewDeskAC = (name: string, description: string = "", tag: string = "") => {
    return {type: CardsReducerActionTypes.SET_NEW_DESK, payload: {name, description, tag}}
}