import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Spotify from '../../../img/spotify.png'
import Electricity from '../../../img/electricity.png'
import TodoList from '../../../img/todo.png'
import TicTacToe from '../../../img/tictactoe.png'
import 'swiper/css'
import { themeContext } from "../../../Context";
import { useContext } from "react";


const Portfolio = () => {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id="Portfolio">
      {/* heading */}
      <span style = {{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
            <img src={Spotify} alt="" />
            <a href="https://anammalikk.github.io/Spotify-Clone.github.io/" target='_blank'><span className='project_name' style={{fontSize: '20px', color: darkMode? 'white': ''}}>Spotify Clone</span></a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Electricity} alt="" />
            <a href="https://github.com/AnamMalikk/Electricity-Billing-System" target='_blank'><span className='project_name' style={{fontSize: '20px', color: darkMode? 'white': ''}}> Electricity Billing System</span></a> 
        </SwiperSlide>
        <SwiperSlide>
            <img src={TicTacToe} alt="" />
            <a href="https://anammalikk.github.io/TicTacToe.github.io/" target='_blank'><span className='project_name' style={{fontSize: '20px', color: darkMode? 'white': ''}}> TicTacToe</span></a> 
        </SwiperSlide>
        <SwiperSlide>
            <img src={TodoList} alt="" />
            <a href="http://localhost:3001/" target='_blank'><span className='project_name' style={{fontSize: '20px',color: darkMode? 'white': '' }}>Todos-List</span></a> 
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio

