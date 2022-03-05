export enum CardsReducerActionTypes {
    SET_NEW_DESK = "SET_NEW_DESK",
    GET_CUSTOM_DESK = "GET_CUSTOM_DESK",
    ADD_NEW_CARD = "ADD_NEW_CARD",
    REMOVE_CARD_FROM_DESK = "REMOVE_CARD_FROM_DESK",
    REMOVE_DESK = "REMOVE_DESK"
}

export interface cardInDesk {
    id: number
    title: string
    deskId: number
    answer: string
    known: boolean
    hard: boolean
    normal: boolean
    easy: boolean
}

export interface DeskArray {
    id: number
    basic: boolean
    name: string
    tag: string | null
    description: string | null
    cards: cardInDesk[]
}

export interface ICardsReducerIniState {
    desks: DeskArray[],
    customDesks: DeskArray[]
}

