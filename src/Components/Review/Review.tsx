import React, { useEffect } from 'react'
import cl from '../../Styles/Review.module.sass'
import {useTypedSelector} from "../../Hooks/useTypedSelector";


const Review = () => {
    const {desks} = useTypedSelector(state => state.cardsReducer)



    return (
        <div className={cl.reviewWrapper}>
            <div className={cl.reviewWrapper__title}> → review</div>
            <div className={cl.reviewWrapper__basicWrapper}>
                <div className={cl.reviewWrapper__basicWrapper_title}>basic</div>
                <div className={cl.reviewWrapper__deskWrapper}>
                    {desks.map((desk) =>
                        <div className={cl.desk} key={desk.name+desk.toReview+desk.id}>
                            <div className={cl.desk__toReview}>{desk.toReview}</div>
                            <div className={cl.desk__titleInfo}>
                                <div className={cl.desk__title}>{desk.name}</div>
                                <div className={cl.desk__description}>{desk.description}</div>
                            </div>
                            <div className={cl.desk__edit}>E</div>
                            <div className={cl.desk__delete}>D</div>
                        </div>
                    )}
                </div>

            </div>

            <div className={cl.reviewWrapper__basicWrapper}>
                <div className={cl.reviewWrapper__basicWrapper_title}>custom</div>
                <div className={cl.reviewWrapper__deskWrapper}>
                </div>

            </div>
        </div>
    );
};

export default Review;