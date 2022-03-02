import React, {useRef} from 'react';
import cl from '../../Styles/NewDeskModal.module.sass'
import {useActions} from "../../Hooks/useActions";

const NewDeskModal = (props: any) => {

    const titleRef = useRef<HTMLInputElement | null>(null)
    const descRef = useRef<HTMLTextAreaElement | null>(null)
    const tagRef = useRef<HTMLInputElement | null>(null)


    const {cardsReducerSetNewDeskAC} = useActions()

    const createNewDesk = () => {
        if(titleRef.current && descRef.current && tagRef.current){
            cardsReducerSetNewDeskAC(titleRef.current.value, descRef.current.value, tagRef.current.value)
        }
        props.toggleNewDeskModal()
    }

    return (
        <div className={cl.modalBackground} onMouseDown={props.toggleNewDeskModal}>
            <div className={cl.contentWrapper} onMouseDown={e => e.stopPropagation()}>
                <div className={cl.contentWrapper__title}>→ create new desk</div>
                <div className={cl.contentWrapper__input}><input ref={titleRef} type="text" placeholder="Type a new desk name"/></div>
                <div className={cl.contentWrapper__textarea}><textarea ref={descRef} placeholder="Type a description"></textarea></div>
                <div className={cl.contentWrapper__input}><input ref={tagRef} type="text" placeholder="Add tags for desk"/></div>
                <button onClick={createNewDesk}>→ create</button>
            </div>
        </div>
    );
};

export default NewDeskModal;