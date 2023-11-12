import React, { useState, useEffect,useRef } from 'react';
import styles from "./CardSlider.module.css"
import HorizontalCard from '../HorizontalCard/HorizontalCard';
const CardSlider = () => {

  const totalCards = 8;
  const [activeIndex, setActiveIndex] = useState(parseInt(totalCards/2) );
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

   // Set the total number of cards here

  const goToCard = (index) => {
    setActiveIndex(index);
  };

  const goToNextCard = () => {
    const nextIndex = (activeIndex % totalCards) + 1;
    goToCard(nextIndex);
  };

  const goToPreviousCard = () => {
    const previousIndex = activeIndex === 1 ? totalCards : activeIndex - 1;
    goToCard(previousIndex);
  };

 const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const dragDistance = e.clientX - dragStartX.current;
    const cardWidth = document.querySelector(`.${styles.cardSliderCard}`).offsetWidth;
    const newIndex = activeIndex - Math.floor(dragDistance / cardWidth);
    goToCard(Math.min(Math.max(newIndex, 1), totalCards));
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);


  useEffect(() => {
    const cardWidth = document.querySelector(`.${styles.cardSliderCard}`).offsetWidth;
    const scrollPos = (activeIndex - 1) * cardWidth;
    document.querySelector(`.${styles.cardSliderList}`).style.transform = `translateX(-${scrollPos}px)`;
  }, [activeIndex]);

  
  return (
    <>
 <div className={styles.container}>

      <div className={styles.cardSlider}
     onMouseDown={handleMouseDown}
     onTouchStart={(e) => {
       setIsDragging(true);
       dragStartX.current = e.touches[0].clientX;
     }}
     onTouchMove={(e) => {
       if (!isDragging) return;

       const dragDistance = e.touches[0].clientX - dragStartX.current;
       const cardWidth = document.querySelector(`.${styles.cardSliderCard}`).offsetWidth;
       const newIndex = activeIndex - Math.floor(dragDistance / cardWidth);
       goToCard(Math.min(Math.max(newIndex, 1), totalCards));
       dragStartX.current = e.touches[0].clientX;
     }}
     onTouchEnd={handleMouseUp}
      >
        <ul className={styles.cardSliderList}>
          {[...Array(totalCards).keys()].map((index) => (
            <li
              key={index}
              className={`${styles.cardSliderCard} ${activeIndex === index + 1 ? styles.active : ''}`}
              onClick={() => goToCard(index + 1)}
            >
           
              <HorizontalCard/>
              
             
            </li>
          ))}
        </ul>
      </div>


      <div className='d-flex justify-content-center align-items-center'>
          <button className={`${styles.arrowBtn} bg-transparent `} onClick={goToPreviousCard}>
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
          <p>
            <span>{activeIndex}</span> of <span>{totalCards}</span>
          </p>
          <button className={`${styles.arrowBtn} bg-transparent`} onClick={goToNextCard}>
            <i className="fa-solid fa-arrow-right-long  "></i>
          </button>
        </div>
      
    </div>
    </>
  )
}

export default CardSlider
