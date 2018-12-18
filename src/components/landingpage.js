import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl'


class Landingpage extends Component{
	render(){
		return (
	    <div style={{width: '100%', height: 'auto', margin: 'auto'}}>
         <Grid className="landingrid">
        
        
	      <div ClassName="centrar" > 
	         
          
           <img className="avatar__img" src="./css/kasnino.png" alt=""/>
	         
         <h1>&nbsp;&bull;&nbsp; Serrano <span className="text-primary">Kristian &nbsp;&bull;&nbsp;</span></h1>
         </div>

         <div className="banner__text">
         <h1>Web Development</h1>
         <hr/>

         <h2>Maquetador Web   |   Frontend </h2>
         <p>| HTML | CSS-SASS | JS | BOOTSTRAP | REACT Js | GITHUB |</p>

        <div className="iconos__">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kasnino/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://www.linkedin.com/in/kasnino/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square fa-3x" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="https://www.twitter.com/kasnino" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square fa-3x" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://codepen.io/kasnino/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-codepen fa-3x" aria-hidden="true" />
          </a>
		 </div>	

         </div>
         
         </Grid>
	    
	    </div>
		)

	}
}
export default Landingpage;