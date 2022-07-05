import React, { Component } from "react";
import CardPeliculas from "../cards/CardPeliculas";
import Carrousel from "./Carousel/Carrousel.jsx";
import styles from "./Movies.module.css";
const api=" https://api.themoviedb.org/3/search/movie?api_key=b5138e06a3a9125b8c326498bbeae997&";
const api2= "https://api.themoviedb.org/3/movie/top_rated?api_key=b5138e06a3a9125b8c326498bbeae997&"
class Movies extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            search:"",
            error:""
        }
    }
    async componentDidMount(){
        const peliculasPag= await fetch(`${api2}`)
        const peliculasJson= await peliculasPag.json()
        const peliculas= peliculasJson.results;
        this.setState({data:peliculas});
    }

    async buscadorPelis(e){
        e.preventDefault();
        if(!this.state.search){
        return this.setState({error:"Write something please"})}

        const peliculasPag= await fetch(`${api}query=${this.state.search}`)
        const peliculasJson= await peliculasPag.json()
        const peliculas= peliculasJson.results;

        if(peliculas.length<=0){
        return this.setState({error:"Im afraid we dont have that title"})}
        this.setState({data:peliculas, error:""})
    }
    render(){
        return( 
        <div className={styles.container}>
            <div className={styles.containerSun}>
                <div className={styles.divCarousel}>
                   <Carrousel className={styles.carousel} data={this.state.data} /> 
                </div>
                <div className={styles.divForm}>
                    <form className={styles.form} onSubmit={(e)=> this.buscadorPelis(e) } >
                        <input className={styles.input} onChange={e=>this.setState({search:e.target.value})}
                        type="text"  
                        placeholder="Write a movie">      
                        </input> 
                    </form>  
                    <p className={styles.error}>{this.state.error? this.state.error : " "} </p>
                </div>
                
                <div className={styles.movies}>
                    {this.state.data.map((movie, i)=>{
                    return <CardPeliculas movies={movie} key={i}/>})}
                </div>
                
            </div>
        </div>
        )
    }
}
export default Movies;