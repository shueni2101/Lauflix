import React, { Component } from "react";
import styles from "./CardPeliculas.module.css";

var tiposGenero={
    
        "action":28,
        "Adventure": 12,
        "Animation": 16,
        "Comedy": 35,
        "Crime":80,
        "Documentary":99,
        "Drama":18,
        "Family":10751,
        "Fantasy":14,
        "History":36,
        "Horror":27,
        "Music": 10402,
        "Mystery":9648,
        "Romance": 10749,
        "Science Fiction": 878,
        "TV Movie": 10770,
        "Thriller":53,
        "War": 10752,
        "Western": 37 
}

class CardPeliculas extends Component{
    constructor(props){
        super(props);
        this.state={
            vacio:"",
            title:styles.title
            
        }

    }
    render(){
        return (
            <div className={styles.container}>
                {console.log(this.props.movies.poster_path + " " +  this.props.movies.title)}
                <div className={styles.containerSun}>
                    <h2 className={this.state.title}>{this.props.movies.title} </h2>
                    <div className={styles.containerImagen}>
                        <img className={styles.imagen} onClick={()=>
                        {for(var e=0; e<this.props.movies.genre_ids.length;e++){
                                for(var i in tiposGenero){
                                    if(this.props.movies.genre_ids[e]=== tiposGenero[i]){
                                        this.setState({vacio:i})
                                    }
                                }
                            }
                            let id= document.getElementById(this.props.movies.id);
                            if(id.hidden===true){
                                id.hidden=false;

                            }else if(id.hidden===false){
                                id.hidden=true;
                               
                            }
                            
                            setInterval(() => {
                                id.hidden=true;
                              }, 9000);
                        }}  
                        src={"http://image.tmdb.org/t/p/w400/"+ this.props.movies.poster_path} alt={this.props.movies.title} />
                        <div className={styles.divConP}>
                            <div hidden={true?true:this.setState({title:styles.oculto})} id={this.props.movies.id} >
                                <h3 className={styles.genre}> {this.state.vacio} </h3>
                                <p className={styles.oculto} > {this.props.movies.overview}</p>    
                            </div>

                        </div>
                        
                    </div> 
                   
                </div>
               
            </div>

        )
    }
}
export default CardPeliculas;