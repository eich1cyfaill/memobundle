import {CardsReducerActionTypes, ICardsReducerIniState} from "../../Types/CardsReducerTypes"

const initialState: ICardsReducerIniState = {
    desks: [{
        id: 0,
        cardCount: 0,
        description: 'Test DeskList',
        name: ' B Test DeskList Name',
        tag: 'test',
        wordsLearned: 0,
        wordsLearning: 0,
        wordsUnknown: 0,
        toReview: 0,
        cards: [{
            id: 0,
            title: 'Test card Title',
            answer: 'Test card Answer',
            known: false,
            hard: false,
            easy: false,
            normal: false}
            ]
        },



            {id: 0,
            cardCount: 0,
            description: 'Test DeskList 2',
            name: ' A Test DeskList Name 2',
            tag: 'test 2',
            wordsLearned: 0,
            wordsLearning: 0,
            wordsUnknown: 0,
                toReview: 0,
            cards: [{
                id: 0,
                title: 'Test Title 2',
                answer: 'Test Answer 2',
                known: false,
                hard: false,
                easy: false,
                normal: false}
        ]
    }],
    customDesks: []
}

const cardsReducer = (state = initialState, action: any) => {
    switch(action.type){
        case CardsReducerActionTypes.SET_NEW_DESK:
            localStorage.setItem('customDesks', `${[...state.customDesks]}`)
            return {...state, customDesks: [...state.customDesks, action.payload]}
        default:
            return state
    }
}

export default cardsReducer