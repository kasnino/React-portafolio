import React, { Component } from 'react';
import Educacion from './educacion';
import {Grid, Cell } from 'react-mdl';
class About extends Component{
	render(){
		return (
			<div className="resumen__body">
				<Grid>
					<Cell className="resumen_left" col={4}>
					<div style={{textAlign: 'center', paddingTop:'1em'}}>
						<img className="resumen__avatar" src="./css/kasnino.png" alt=""/>
					</div>
					<h2 style={{ textAlign: 'center', color: '#fff'}}>Resumen Profesional</h2>
						<hr/>
					<p style={{textAlign: 'center', paddingTop:'1em', margin: '10px', color: '#FFF'}}>Desarrollador Web - Linux (Ubuntu - Elementary OS) -
					 Metodologías Ágiles Scrum - Planificación de los Items 
					 de desarrollo Trello - Comunicación eficaz y asertiva en
					  Slack - Herramienta de 
					Control de Versiones GitHub - 
					Ruby on Rails - HTML - CSS - JQuery - - BD PostgreSQL</p>
					<p>Medellin - Colombia</p>

					<hr/>
					</Cell>

					<Cell className="resumen_right" col={8}>
					<Educacion/>

					</Cell>
				</Grid>
			</div>
		)

	}
}
export default About;