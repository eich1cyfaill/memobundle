export enum CardsReducerActionTypes {
    SET_NEW_DESK = "SET_NEW_DESK",
    GET_CUSTOM_DESK = "GET_CUSTOM_DESK"
}

interface cardInDesk {
    id: number
    title: string
    answer: string
    known: boolean
    hard: boolean
    normal: boolean
    easy: boolean
}

export interface DeskArray {
    id: number
    name: string,
    tag: string | null
    description: string | null
    cardCount: number
    wordsLearned: number
    wordsLearning: number
    wordsUnknown: number,
    toReview: number,
    cards: cardInDesk[]
}

export interface ICardsReducerIniState {
    desks: DeskArray[],
    customDesks: DeskArray[]
}

