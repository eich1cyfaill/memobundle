import React from 'react';
import ReactDOM from 'react-dom';
import cl from '../../Styles/DeleteConfirm.module.sass'

const DeleteConfirm = (props: any) => {
    return ReactDOM.createPortal(
        <div onMouseDown={props.toggleModal} className={cl.deleteConfirm}>
             <main onMouseDown={e => e.stopPropagation()} className={cl.deleteConfirm__wrapper}>
                 <h2>Are you sure you want to delete this deck?</h2>
                 <div className={cl.wrapper__buttonsFamily}>
                     <button onClick={() => props.throwDeckToDelete(props.id)}>Yes</button>
                     <button onClick={props.toggleModal}>No</button>
                 </div>
             </main>
        </div>
    , document.body);
};

export default DeleteConfirm;