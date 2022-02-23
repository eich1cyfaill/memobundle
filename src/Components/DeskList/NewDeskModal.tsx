import React from 'react';
import cl from '../../Styles/NewDeskModal.module.sass'

const NewDeskModal = (props: any) => {
    return (
        <div className={cl.modalBackground} onClick={props.toggleNewDeskModal}>
            <div className={cl.contentWrapper} onClick={e => e.stopPropagation()}>
                <div className={cl.contentWrapper__title}>→ create new desk</div>
                <div className={cl.contentWrapper__input}><input type="text" placeholder="Type a new desk name"/></div>
                <div className={cl.contentWrapper__textarea}><textarea placeholder="Type a description"></textarea></div>
                <div className={cl.contentWrapper__input}><input type="text" placeholder="Add tags for desk"/></div>
                <button>→ create</button>
            </div>
        </div>
    );
};

export default NewDeskModal;