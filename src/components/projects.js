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
			<Card className="Card" shadow={0} style={{width: '272px', margin: 'auto'}}>
			<CardTitle style={{ color: 'rgb(255,64,129)',  height: '196px', background: 'url(https://pngimage.net/wp-content/uploads/2018/06/rails-png-5.png) center / cover'}}>
			Ruby on Rails
			</CardTitle>
			<CardText>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Mauris sagittis pellentesque lacus eleifend lacinia...
			</CardText>
			<CardActions border>
			<Button colored>Github</Button>
			<Button colored>CodePen</Button>
			<Button colored>Demo</Button>
			</CardActions>
			<CardMenu style={{color: 'rgb(255,64,129)'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>

				{/*proyecto #2*/}
				<Card className="Card" shadow={0} style={{width: '272px', margin: 'auto'}}>
			<CardTitle style={{ color: 'rgb(255,64,129)',  height: '196px', background: 'url(https://pngimage.net/wp-content/uploads/2018/06/rails-png-5.png) center / cover'}}>
			Ruby on Rails
			</CardTitle>
			<CardText>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Mauris sagittis pellentesque lacus eleifend lacinia...
			</CardText>
			<CardActions border>
			<Button colored>Github</Button>
			<Button colored>CodePen</Button>
			<Button colored>Demo</Button>
			</CardActions>
			<CardMenu style={{color: 'rgb(255,64,129)'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>


				{/*proyecto #3*/}
				<Card className="Card" shadow={0} style={{width: '272px', margin: 'auto'}}>
			<CardTitle style={{ color: 'rgb(255,64,129)',  height: '196px', background: 'url(https://pngimage.net/wp-content/uploads/2018/06/rails-png-5.png) center / cover'}}>
			Ruby on Rails
			</CardTitle>
			<CardText>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Mauris sagittis pellentesque lacus eleifend lacinia...
			</CardText>
			<CardActions border>
			<Button colored>Github</Button>
			<Button colored>CodePen</Button>
			<Button colored>Demo</Button>
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