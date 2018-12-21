import React, { Component } from 'react';
import { CardMenu, IconButton, Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions,Button} from 'react-mdl';

class Projects extends Component{

/*Los props no cambian los valores, solo acceden a ellos*/

/*Los state si pueden cambiar el valos del atributo */
	constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }  
	
	toggleCategories(){
        if(this.state.activeTab === 0 ){
    	   return(
    	
    	   <div>
    	   <div className="proy-grid">   
		
		{/*proyecto #1*/}
			<Card className="Card" shadow={0} style={{width: '302px', margin: 'auto'}}>
			<CardTitle className="CardTitle1" style={{color: 'rgb(255,64,129)',   height: '196px'}}>
		
			</CardTitle>
			<CardText>
			Reto #2 Creado con ReactJS
			Conociendo la estructura de esta libreria
			</CardText>
			<CardActions border>
			<Button colored> <a href="https://github.com/kasnino/kasnino" rel="noopener noreferrer" target="_blank">
             Github</a></Button>
			
			<Button colored>
			 <a href="http://brief-swim.surge.sh/" rel="noopener noreferrer" target="_blank">
             Demo</a>
			</Button>
			</CardActions>
			<CardMenu style={{color: 'rgb(255,64,129)'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>

				{/*proyecto #2*/}
				<Card className="Card" shadow={0} style={{width: '302px', margin: 'auto'}}>
			
			<CardTitle className="CardTitle2" style={{ color: 'rgb(255,64,129)',  height: '196px'}}>
		
			</CardTitle>
			<CardText>
			Maquetando una web con solo html y CSs 
			utilizo diferentes animaciones en CSs
			se adapta a cualquier dispositivo 
			[Responsive]			
			</CardText>
			<CardActions border>
			<Button colored> <a href="https://github.com/kasnino/kasnino" rel="noopener noreferrer" target="_blank">
             Github</a></Button>
			
			<Button colored>
			 <a href="https://kasnino.github.io/kasnino/" rel="noopener noreferrer" target="_blank">
             Demo</a>
			</Button>
			</CardActions>
			<CardMenu style={{color: 'rgb(255,64,129)'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>


				{/*proyecto #3background: 'url(https://pngimage.net/wp-content/uploads/2018/06/rails-png-5.png) center / cover'}*/} 
			<Card className="Card" shadow={0} style={{width: '272px', margin: 'auto'}}>
			<CardTitle className="CardTitle3" style={{ color: 'rgb(255,64,129)',  height: '196px'}}>
		
			</CardTitle>
			<CardText>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		
			</CardText>
			<CardActions border>
			<Button colored> <a href="https://github.com/kasnino/kasnino" rel="noopener noreferrer" target="_blank">
             Github</a></Button>
			
			<Button colored>
			 <a href="https://stark-sierra-34238.herokuapp.com/" rel="noopener noreferrer" target="_blank">
             Demo</a>
			</Button>
			</CardActions>
			<CardMenu style={{color: 'rgb(255,64,129)'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			</div>

	
	
		</div>
    		     )
    	     }
         else if(this.state.activeTab === 1 ){
    	   return(
    	   <div><h1> Estoy en Maquetacion  </h1></div>
    		     )
    	     }
         else if(this.state.activeTab === 2 ){
    	   return(
    	   <div><h1> Estoy en ReactJS  </h1></div>
    		     )
    	     }
        else if(this.state.activeTab === 3 ){
    	   return(
    	   <div><h1> Estoy en Variados  </h1></div>
    		     )
    	     }
    }

	render(){
	return (
			 <div className="category-tabs">
                <Tabs className="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Ruby on Rails</Tab>
                    <Tab>Maquetacion</Tab>
                    <Tab>React JS</Tab>
                	<Tab>Variados</Tab>
                </Tabs>
                <section className="Projects-grid">
                 <Grid>
                 <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                 </Cell>
                </Grid>
                </section>
            </div>   
		)
	}
}
export default Projects;