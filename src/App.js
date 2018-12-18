import React, { Component } from "react";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import "./App.css";
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
<div >
    <Layout  fixedHeader className="layout__">
        <Header className="header__nav" title={<a href="/" class="active"><img className="avatar__img__med" src="./css/kasnino.png" alt=""></img>
      </a>}>
            <Navigation >
                <Link to="/aboutme">Sobre Mi</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/resumen">Blogs</Link>
            </Navigation>
        </Header>
        <Drawer title="">
            <Navigation>
                 <Link to="/aboutme">Aboutme</Link>
                <Link to="/contacto">contacto</Link>
                <Link to="/projects">Poyectos</Link>
                <Link to="/resumen">Resumen</Link>
            </Navigation>
        </Drawer>
        <Content>
           <div className="page-content" />
           <Main/>
        </Content>
    </Layout>
</div>
      </div>
    );
  }
}

export default App;
