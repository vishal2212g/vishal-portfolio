import React from 'react';

import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Sidebar from "../../img/Capture.JPG";
import img1 from "../../img/ecommerce.png";
import img2 from "../../img/hoc.png";
import img3 from "../../img/musicapp.png";

import { themeContext } from '../Context/Context';
import {useContext } from "react"; 

const Portfolio =()=>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
 return(

    <div className='portfolio'id="Portfolio">
        {/* heading  */}

        <span style ={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider  */}

    <Swiper 
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className='portfolio-slider' 
    >
    <SwiperSlide>
        <img src={Sidebar} alt="" />
    </SwiperSlide>

    <SwiperSlide>
        <img src={img1} alt="" />
    </SwiperSlide>

    <SwiperSlide>
        <img src={img2} alt="" />
    </SwiperSlide>

    <SwiperSlide>
        <img src={img3} alt="" />
    </SwiperSlide>
    
  </Swiper>
  </div>
    )}
    export default Portfolio;