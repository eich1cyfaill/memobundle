import {CardsReducerActionTypes, ICardsReducerIniState} from "../../Types/CardsReducerTypes"

const initialState: ICardsReducerIniState = {
    desks: [{
        id: 0,
        basic: true,
        description: 'Basic Russian Deck',
        name: 'Russian',
        tag: 'rus',
        cards: [{
            id: 0,
            deskId: 0,
            title: 'Говорить',
            answer: 'Speak',
            known: false,
            hard: false,
            easy: false,
            normal: false},
            {
                id: 1,
                deskId: 0,
                title: 'Собака',
                answer: 'Dog',
                known: false,
                hard: false,
                easy: false,
                normal: false},
            {
                id: 2,
                deskId: 0,
                title: 'Червь',
                answer: 'Worm',
                known: false,
                hard: false,
                easy: false,
                normal: false},
            {
                id: 0,
                deskId: 0,
                title: 'Кошка',
                answer: 'Cat',
                known: false,
                hard: false,
                easy: false,
                normal: false},
            {
                id: 0,
                deskId: 0,
                title: 'Барабан',
                answer: 'Drum',
                known: false,
                hard: false,
                easy: false,
                normal: false},
            {
                id: 0,
                deskId: 0,
                title: 'Дерево',
                answer: 'Tree',
                known: false,
                hard: false,
                easy: false,
                normal: false}
            ],

        },



            {id: 1,

                basic: true,
            description: 'Basic Japanese Deck',
            name: '日本語',
            tag: 'test 2',
            cards: [{
                id: 0,
                deskId: 1,
                title: '私',
                answer: 'Me',
                known: false,
                hard: false,
                easy: false,
                normal: false},
                {
                    id: 0,
                    deskId: 1,
                    title: '勉強',
                    answer: 'Study',
                    known: false,
                    hard: false,
                    easy: false,
                    normal: false},

                {
                    id: 0,
                    deskId: 1,
                    title: '話す',
                    answer: 'Speak',
                    known: false,
                    hard: false,
                    easy: false,
                    normal: false},
                {
                    id: 0,
                    deskId: 1,
                    title: 'フランス',
                    answer: 'France',
                    known: false,
                    hard: false,
                    easy: false,
                    normal: false},
                {
                    id: 0,
                    deskId: 1,
                    title: '日本語',
                    answer: 'Japanese',
                    known: false,
                    hard: false,
                    easy: false,
                    normal: false},
            ]
    }],
    customDesks: []
}

const cardsReducer = (state = initialState, action: any) => {
    switch(action.type){
        case CardsReducerActionTypes.GET_CUSTOM_DESK:
            let customs = localStorage.getItem('customDesks')
            if(customs){
                customs = JSON.parse(customs)
                // @ts-ignore
                return {...state, customDesks: [...customs]}
            }
            return state
        case CardsReducerActionTypes.SET_NEW_DESK:
            localStorage.setItem('customDesks', JSON.stringify([...state.customDesks, action.payload]))
            return {...state, customDesks: [...state.customDesks, action.payload]}
        case CardsReducerActionTypes.ADD_NEW_CARD:
            let newCustomDesks = state.customDesks.map((desk) => {
                if(desk.id == action.payload.deskId){
                    desk.cards.push(action.payload)
                    return desk
                } else {
                    return desk
                }
            })
            localStorage.setItem('customDesks', JSON.stringify([...newCustomDesks]))
            return {...state, customDesks: newCustomDesks}
        case CardsReducerActionTypes.REMOVE_CARD_FROM_DESK:
            let removedCardCustoms = state.customDesks.map(desk => {
                if(desk.id == action.payload.deskId){
                    desk.cards.forEach(card => {
                        if(card.id == action.payload.cardId){
                            let cardIndex = desk.cards.indexOf(card)
                            desk.cards.splice(cardIndex, 1)
                        }
                    })
                    return desk
                } else {
                    return desk
                }
            })
            localStorage.setItem('customDesks', JSON.stringify([...removedCardCustoms]))
            return {...state, customDesks: removedCardCustoms}
        case CardsReducerActionTypes.REMOVE_DESK:
            let customsArrayCopy = JSON.parse(JSON.stringify(state.customDesks))
            let removedDeskCustoms = customsArrayCopy.map((desk: any) => {
                if(desk.id == action.payload.deskId){
                    let deskIndex = customsArrayCopy.indexOf(desk)
                    customsArrayCopy.splice(deskIndex, 1)
                } else {
                    return desk
                }
            })
            localStorage.setItem('customDesks', JSON.stringify([...customsArrayCopy]))
            return {...state, customDesks: customsArrayCopy}
        default:
            return state
    }
}

export default cardsReducer