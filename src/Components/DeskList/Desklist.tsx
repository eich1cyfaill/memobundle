import React, { useState } from 'react'
import { useTypedSelector } from '../../Hooks/useTypedSelector'
import cl from '../../Styles/Desklist.module.sass'
import {useActions} from "../../Hooks/useActions";
import NewDeskModal from "./NewDeskModal";

const Desklist: React.FC = () => {
    const [newDeskModal, setNewDeskModal] = useState(false)

    const {desks, customDesks} = useTypedSelector(state => state.cardsReducer)
    const allDesks = [...desks, ...customDesks].sort((a: any, b: any) => a.name.localeCompare(b.name))

    const {cardsReducerSetNewDeskAC} = useActions()

    const toggleNewDeskModal = () => {
        setNewDeskModal(!newDeskModal)
    }

    console.log(allDesks)

    return (
        <div className={cl.desklistWrapper}>
            {newDeskModal ? <NewDeskModal toggleNewDeskModal={toggleNewDeskModal} /> : null}
            <div className={cl.desklistWrapper__title}> → desklist</div>
            <div className={cl.desklistWrapper__createNewDesk} onClick={toggleNewDeskModal}>+ create new desk</div>
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