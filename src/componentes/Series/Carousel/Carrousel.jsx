
import React, {useState } from "react";
import {Carousel} from 'react-bootstrap';

import styles from "./Carrousel.module.css"
function Carrousel(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
  <div className={styles.container}>
    <div className={styles.containerTitle}>
      <h2 className={styles.title}> New Series </h2>
    </div>
  
    <div className={styles.containerCarousel}>
      <Carousel className={styles.carousel} activeIndex={index} interval={null} onSelect={handleSelect}>
        
        <Carousel.Item  className={styles.images}>
          <div className={styles.divImagen}>
            <img 
              id={styles.imagen}
              className="d-block w-200"
              src={"http://image.tmdb.org/t/p/w400//qJRB789ceLryrLvOKrZqLKr2CGf.jpg"} 
              alt="Obiwan"/>
          </div>
        </Carousel.Item>

        <Carousel.Item  className={styles.images}>
          <div className={styles.divImagen}>
            <img
              id={styles.imagen}
              className="d-block w-200"
              src="http://image.tmdb.org/t/p/w400//vKDUmKO6F9bSKKyHhg7YGbgcEeF.jpg"
              alt="MoonKnight"/>
          </div>
        </Carousel.Item>
  
        <Carousel.Item className={styles.images}>
        <div className={styles.divImagen}>
          <img 
            id={styles.imagen}
            className="d-block w-200"
            src="http://image.tmdb.org/t/p/w400//mbsRGqJtdKcVbjQxkrfzKCAkYoU.jpg"
            alt="Casa de papel"/> 
          </div>
        </Carousel.Item>

        <Carousel.Item className={styles.images}>
        <div className={styles.divImagen}>
          <img 
            id={styles.imagen}
            className="d-block w-200"
            src="	http://image.tmdb.org/t/p/w400//ls2Hl8CXmqEHvkDqkN3fRtmDodK.jpg"
            alt="Marvel"/>
          </div>
        </Carousel.Item>

        <Carousel.Item className={styles.images}>
        <div className={styles.divImagen}>
          <img 
            id={styles.imagen}
            className="d-block w-200"
            src="http://image.tmdb.org/t/p/w400//o7uk5ChRt3quPIv8PcvPfzyXdMw.jpg"
            alt="Sara"/>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
    );
  }
export default Carrousel;