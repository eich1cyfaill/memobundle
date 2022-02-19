import React, { useState } from 'react';
import cl from '../../Styles/WelcomeScreen.module.sass'


const WelcomeScreen = () => {

    localStorage.setItem('visited', "true")

    return (
        <div className={cl.welcomeScreen}>
            <div className={cl.block1}></div>
            <div className={cl.block2}></div>
            <main className={cl.titlesWrapper}>
                <div className={cl.titlesWrapper__welcome}>
                    <span>welcome to</span>
                </div>
                <div className={cl.titlesWrapper__memobundle}>
                    memobundle
                </div>
                <div className={cl.titlesWrapper__desc}>
                    application, to let you memorize easily
                </div>
                <div className={cl.titlesWrapper__start}>
                    <button onClick={async() => await window.location.reload()} className={cl.titlesWrapper__button}>start →</button>
                </div>
            </main>
        </div>

    );
};

export default WelcomeScreen