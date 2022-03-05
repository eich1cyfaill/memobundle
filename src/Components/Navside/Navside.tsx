import React, {useEffect, useRef, useState} from 'react';
import cl from '../../Styles/Navside.module.sass'
import { Link } from 'react-router-dom';
import {throttling} from "../../Libs/throttling";

const Navside = () => {
    const [mobileWidth, setMobileWidth] = useState(false)
    const [navsideToggle, setNavsideToggle] = useState(true)
    const titleRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if(mobileWidth == true && titleRef.current){
            titleRef.current.addEventListener('click', toggleNavside)
        }
        if(mobileWidth == false && titleRef.current){
            titleRef.current.removeEventListener('click', toggleNavside)
        }
        if(window.screen.width > 768){
            setNavsideToggle(true)
        }

        return () => {
            if(titleRef.current){
                titleRef.current.removeEventListener('click', toggleNavside)
            }
        }
    }, [mobileWidth])

    useEffect(() => {
        if((window.screen.width <= 768) && titleRef.current){
            titleRef.current.addEventListener('click', toggleNavside)
        }
    }, [])

    const toggleNavside = () => {
        if(window.screen.width <= 768){
            setNavsideToggle(prev => !prev)
        }
    }


    const setMobileListeners: any = () => {

        if(window.screen.width <= 768){
            if(titleRef.current){
                setMobileWidth(true)
            }
        } else {
            setMobileWidth(false)
        }
    }

    window.addEventListener('resize', throttling(setMobileListeners, 1000))


    return (
        <nav className={cl.nav} style={navsideToggle ? {height: "100vh"} : {height: "10vh", boxShadow: "0px 10px 20px 10px rgba(0,0,0,0.1)"}}>
            <header>
                <div ref={titleRef}>memobundle</div>
            </header>
            <section style={navsideToggle ? {display: "block"} : {display: "none"}}>
                <ul>
                    <Link to="review"><li onClick={toggleNavside}>review →</li></Link>
                    <Link to="desklist"><li onClick={toggleNavside}>deсk →</li></Link>
                    <Link to="stats"><li onClick={toggleNavside}>stats →</li></Link>
                    <Link to="settings"><li onClick={toggleNavside}>settings →</li></Link>
                </ul>
            </section>
            <footer style={navsideToggle ? {display: "block"} : {display: "none"}}>you can checkout the source on github!</footer>
        </nav>
    );
};

export default Navside;