import React, { useEffect } from 'react'
import cl from '../../Styles/Review.module.sass'
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import { useNavigate } from 'react-router-dom';


const Review = () => {
    const {desks, customDesks} = useTypedSelector(state => state.cardsReducer)
    const navigate = useNavigate()

    const throwDeskToEdit = async(id: number) => {
        await navigate(`/edit/${id}`)
    }


    return (
        <section className={cl.reviewWrapper}>
            <div className={cl.reviewWrapper__title}> → review</div>

            <div className={cl.reviewWrapper__basicWrapper}>
                <div className={cl.reviewWrapper__basicWrapper_title}>basic</div>
                <div className={cl.reviewWrapper__deskWrapper}>
                    {desks.map((desk) =>
                        <div className={cl.desk} key={desk.name+desk.toReview+desk.id}>
                            <div className={cl.desk__toReview}>{desk.toReview}</div>
                            <div className={cl.desk__titleInfo}>
                                <div className={cl.desk__title}>{desk.name.slice(0, 20)}</div>
                                <div className={cl.desk__description}>{desk.description?.slice(0, 20)}</div>
                            </div>
                            <div className={cl.desk__edit} onClick={() => throwDeskToEdit(desk.id)}>E</div>
                            <div className={cl.desk__delete}>D</div>
                        </div>
                    )}
                </div>

            </div>

            <div className={cl.reviewWrapper__basicWrapper}>
                <div className={cl.reviewWrapper__basicWrapper_title}>custom</div>
                <div className={cl.reviewWrapper__deskWrapper}>
                    {customDesks.map((desk) =>
                        <div className={cl.desk} key={desk.name+desk.toReview+desk.id}>
                            <div className={cl.desk__toReview}>{desk.toReview}</div>
                            <div className={cl.desk__titleInfo}>
                                <div className={cl.desk__title}>{desk.name.slice(0, 20)}</div>
                                <div className={cl.desk__description}>{desk.description?.slice(0, 20)}</div>
                            </div>
                            <div className={cl.desk__edit} onClick={() => throwDeskToEdit(desk.id)}>E</div>
                            <div className={cl.desk__delete}>D</div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Review;