
import React, {useState } from "react";
import {Carousel} from 'react-bootstrap';

import styles from "./Carrousel.module.css"
function Carrousel(props) {
  const [index, setIndex] = useState(0);
 /* var newArray = props.datos.slice(0, 1)
  newArray.map((movie,i)=>{

  })*/
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
  <div className={styles.container}>
    <div className={styles.containerTitle}>
      <h2 className={styles.title}> New Movies </h2>
    </div>
  
    <div className={styles.containerCarousel}>
      <Carousel className={styles.carousel} activeIndex={index} interval={null} onSelect={handleSelect}>
        
        <Carousel.Item  className={styles.images}>
          <div className={styles.divImagen}>
            <img 
              id={styles.imagen}
              className="d-block w-200"
              src={"http://image.tmdb.org/t/p/w400/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"} 
              alt="Doctor Strange"/>
          </div>
        </Carousel.Item>

        <Carousel.Item  className={styles.images}>
          <div className={styles.divImagen}>
            <img
              id={styles.imagen}
              className="d-block w-200"
              src="http://image.tmdb.org/t/p/w400/74xTEgt7R36Fpooo50r9T25onhq.jpg"
              alt="Batman"/>
          </div>
        </Carousel.Item>
  
        <Carousel.Item className={styles.images}>
        <div className={styles.divImagen}>
          <img 
            id={styles.imagen}
            className="d-block w-200"
            src="http://image.tmdb.org/t/p/w400/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg"
            alt="Jurasic World"/> 
          </div>
        </Carousel.Item>

        <Carousel.Item className={styles.images}>
        <div className={styles.divImagen}>
          <img 
            id={styles.imagen}
            className="d-block w-200"
            src="http://image.tmdb.org/t/p/w400//vpILbP9eOQEtdQgl4vgjZUNY07r.jpg"
            alt="Buzz"/>
          </div>
        </Carousel.Item>

        <Carousel.Item className={styles.images}>
        <div className={styles.divImagen}>
          <img 
            id={styles.imagen}
            className="d-block w-200"
            src="http://image.tmdb.org/t/p/w400/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
            alt="Top gun"/>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
    );
  }
export default Carrousel;