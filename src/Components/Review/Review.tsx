import React, { useEffect } from 'react'
import cl from '../../Styles/Review.module.sass'
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../Hooks/useActions';


const Review = () => {
    const {desks, customDesks} = useTypedSelector(state => state.cardsReducer)
    const navigate = useNavigate()
    const {cardsReducerRemoveDesk} = useActions()

    const throwDeskToEdit = async(id: number, event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        await navigate(`/edit/${id}`)
    }

    const throwDeckToReview = async(deckId: number) => {
        await navigate(`/session/${deckId}`)
    }

    return (
        <section className={cl.reviewWrapper}>
            <div className={cl.reviewWrapper__title}> → review</div>

            <div className={cl.reviewWrapper__basicWrapper}>
                <div className={cl.reviewWrapper__basicWrapper_title}>basic</div>
                <div className={cl.reviewWrapper__deskWrapper}>
                    {desks.map((desk: any) =>
                        <div className={cl.desk} key={desk.name+desk.toReview+desk.id} onClick={() => throwDeckToReview(desk.id)}>
                            <div className={cl.desk__titleInfo}>
                                <div className={cl.desk__title}>{desk.name.slice(0, 20)}</div>
                                <div className={cl.desk__description}>{desk.description?.slice(0, 20)}</div>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            <div className={cl.reviewWrapper__basicWrapper}>
                <div className={cl.reviewWrapper__basicWrapper_title}>custom</div>
                <div className={cl.reviewWrapper__deskWrapper}>
                    {customDesks.map((desk: any) =>
                        <div className={cl.desk} key={desk.name+desk.toReview+desk.id} onClick={() => throwDeckToReview(desk.id)}>
                            <div className={cl.desk__titleInfo}>
                                <div className={cl.desk__title}>{desk.name.slice(0, 20)}</div>
                                <div className={cl.desk__description}>{desk.description?.slice(0, 20)}</div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Review;