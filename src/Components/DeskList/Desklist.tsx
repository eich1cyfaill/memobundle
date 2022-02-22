import React from 'react'
import { useTypedSelector } from '../../Hooks/useTypedSelector'
import cl from '../../Styles/Desklist.module.sass'

const Desklist: React.FC = () => {
    const {desks, customDesks} = useTypedSelector(state => state.cardsReducer)
    const allDesks = [...desks, ...customDesks].sort((a: any, b: any) => a.name.localeCompare(b.name))

    console.log(allDesks)

    return (
        <div className={cl.desklistWrapper}>
            <div className={cl.desklistWrapper__title}> → desklist</div>
            <div className={cl.desklistWrapper__createNewDesk}>+ create new desk</div>
            <div className={cl.desklistWrapper__allDeskWrapper}>
                {allDesks.map(el =>
                    <div key={el.name + el.id + el.toReview}>
                        {el.name}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Desklist