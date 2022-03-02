import React, { useState } from 'react'
import { useTypedSelector } from '../../Hooks/useTypedSelector'
import cl from '../../Styles/Desklist.module.sass'
import NewDeskModal from "./NewDeskModal";
import { useNavigate } from 'react-router-dom';

const Desklist: React.FC = () => {
    const [newDeskModal, setNewDeskModal] = useState(false)
    const navigate = useNavigate()
    const {desks, customDesks} = useTypedSelector(state => state.cardsReducer)
    const allDesks = [...desks, ...customDesks].sort((a: any, b: any) => a.name.localeCompare(b.name))

    const throwToEditMode = async(id: number) => {
        await navigate(`/edit/${id}`)
    }
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
                    <div className={cl.desklistWrapper__item} key={el.name + el.id + el.toReview} onClick={() => throwToEditMode(el.id)}>
                        {el.name.slice(0, 20)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Desklist