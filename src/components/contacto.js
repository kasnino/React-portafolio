import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contacto extends Component{
	render(){
		return (
			<div className="contacto__body">
				<Grid className="contacto__grid">
				 <Cell col={6}>
				 <h1>Serrano Kristian</h1>
				 <img className="contacto__avatar" src="./css/kasnino.png" alt=""/>
				 <h5 style={{ color:'#fff'}}>Maquetador Web | frontend jr</h5>
				 
				 </Cell>

				 <Cell col={6}>
				 <h1>Contactame</h1>
				  <hr/>
				  <div className="lista__body">
					  <List >
					  <ListItem>
						  <ListItemContent className="lista__item1">
							  <i className="fa fa-phone-square fa-3x" aria-hidden="true" />
							  (313) 7265135
						  </ListItemContent>
					  </ListItem>
					   <ListItem>
						  <ListItemContent className="lista__item1">
							  <i className="fa fa-envelope-square fa-3x" aria-hidden="true" />
							  kasn.emprendedor@gmail.com
						  </ListItemContent>
					  </ListItem>
					   <ListItem>
						  <ListItemContent className="lista__item1">
							  <i className="fa fa-skype fa-3x" aria-hidden="true" />
							  @kasnino
						  </ListItemContent>
					  </ListItem>
					  </List>
				 	</div>
				 </Cell>
				</Grid >
			</div>
		)

	}
}
export default Contacto;