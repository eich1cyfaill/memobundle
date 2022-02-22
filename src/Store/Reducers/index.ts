import { combineReducers } from "redux";
import reviewReducer from './ReviewReducer'
import cardsReducer from "./CardsReducer";

export const rootReducer = combineReducers({
    reviewReducer,
    cardsReducer
})

export type rootState = ReturnType<typeof rootReducer>