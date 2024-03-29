import React from 'react'
import './Services.css'
import HeartEmoji from "../../../img/heartemoji.png";
import Glasses from "../../../img/glasses.png";
import Humble from "../../../img/humble.png";
import Card from '../Card/Card';
import { themeContext } from "../../../Context";
import { useContext } from "react";
import { motion } from 'framer-motion';
import Resume from './Resume.pdf';
const Services = () => {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
const transition = {duration : 2, type: 'spring'}
  return (
    <div className='services' id='Services'>

        {/* left side */}
        <div className="awesome">
        <span style = {{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit sunt quidem saepe.
        <br />
        Ex nobis ullam repudiandae error repellendus in.</span>
        <a href={Resume} target="_blank"><button className='button s-button'>Download CV</button></a>
        <div className="blur s-blur1" style={{background: "#abf1ff94"}}></div>
        </div>
        {/* Right side */}
        <div className="cards">
            {/*First card */}
            <motion.div 
            whileInView={{left: '14rem'}}
            initial={{left:'25rem'}}
            transition={transition}
            style={{left: '14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Canva, Figma, sketch, Photoshop, Inkscape"}
                />
            </motion.div>
        
            {/*Second card */}       
            <motion.div 
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            style={{top: '12rem', left: "-4rem"}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"Html, Css, Javascript, React"}
                />
            </motion.div>

            {/*Third card */}       
            <motion.div 
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            style={{top: '19rem', left: "12rem"}}>
                <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

        </div>

    </div>
  )
}

export default Services
