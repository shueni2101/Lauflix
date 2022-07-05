import React, { Component } from "react";
import CardSeries from "../cards/CardSeries";
import Carrousel from "./Carousel/Carrousel.jsx";
import styles from "./Series.module.css";
const api2="https://api.themoviedb.org/3/search/tv?api_key=b5138e06a3a9125b8c326498bbeae997&";
const api="https://api.themoviedb.org/3/tv/popular?api_key=b5138e06a3a9125b8c326498bbeae997&";
class Series extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            search:"",
            error:""
        }
    }
    async componentDidMount(){
        const seriesPag= await fetch(`${api}`)
        const seriesJson= await seriesPag.json()
        const series= seriesJson.results;
        this.setState({data:series});
    }

    async findSerie(e){
        e.preventDefault();
        if(!this.state.search){
        return this.setState({error:"Write something please"})}

        const seriesPag= await fetch(`${api2}query=${this.state.search}`)
        const seriesJson= await seriesPag.json()
        const series= seriesJson.results;

        if(series.length<=0){
        return this.setState({error:"Im afraid we dont have that title"})}
        this.setState({data:series, error:""})
    }
   
    render(){
        return( 
        <div className={styles.container}>
            <div className={styles.containerSun}>
                <div className={styles.divCarousel}>
                   <Carrousel className={styles.carousel} data={this.state.data} /> 
                </div>
                <div className={styles.divForm}>
                    <form className={styles.form} onSubmit={(e)=> this.findSerie(e) } >
                        <input className={styles.input} onChange={e=>this.setState({search:e.target.value})}
                        type="text"  
                        placeholder="Write a serie">      
                        </input> 
                    </form>  
                    <p className={styles.error}>{this.state.error? this.state.error : " "} </p>
                </div>
                
                <div className={styles.series}>
                    {this.state.data.map((serie, i)=>{
                    return <CardSeries series={serie} key={i}/>})}
                </div>
            </div>
        </div>
        )
    }
}
export default Series;