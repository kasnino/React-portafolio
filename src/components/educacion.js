import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
class Educacion extends Component{
	render(){
	return (
			

			<div>
			<div><h1>Educacion</h1></div>
			<Grid>
			<Cell col={6}>colright
			</Cell>
			<Cell col={6}>colleft
			</Cell>
			</Grid>
			</div>
		)

	}
}
export default Educacion;