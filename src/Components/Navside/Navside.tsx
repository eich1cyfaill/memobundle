import React from 'react';
import cl from '../../Styles/Navside.module.sass'

const Navside = () => {
    return (
        <nav className={cl.nav}>
            <header>memobundle</header>
            <section>
                <ul>
                    <li>review →</li>
                    <li>cards →</li>
                    <li>stats →</li>
                    <li>settings →</li>
                </ul>
            </section>
            <footer>you can checkout the source on github!</footer>
        </nav>
    );
};

export default Navside;