import React, { Component } from "react";
import styles from "./CardSeries.module.css";
var allGenres={  
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

class CardSeries extends Component{
    constructor(props){
        super(props);
        this.state={
            empty:"",
            title:styles.title
        }
    }
 
    render(){
        return (
            <div className={styles.container}>
                <div className={styles.containerSun}>
                    <h2 className={this.state.title}>{this.props.series.name} </h2>
                    <div className={styles.containerImagen}>
                        <img className={styles.imagen} onClick={()=>
                        {for(var e=0; e<this.props.series.genre_ids.length;e++){
                                for(var i in allGenres){
                                    if(this.props.series.genre_ids[e]=== allGenres[i]){
                                        this.setState({empty:i})
                                    }
                                }
                            }
                            let id= document.getElementById(this.props.series.id);
                            if(id.hidden===true){
                                id.hidden=false;
                            }else if(id.hidden===false){
                                id.hidden=true;
                            }  
                            setInterval(() => {
                                id.hidden=true;
                              }, 9000);
                        }}  
                        src={"http://image.tmdb.org/t/p/w400/"+ this.props.series.poster_path} alt={this.props.series.title} />
                        <div className={styles.divConP}>
                            <div hidden={true?true:this.setState({title:styles.oculto})} id={this.props.series.id} >
                                <h3 className={styles.genre}> {this.state.empty} </h3>
                                <p className={styles.oculto} > {this.props.series.overview}</p>    
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
export default CardSeries;