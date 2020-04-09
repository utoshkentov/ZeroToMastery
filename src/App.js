import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import ParticlesBg from 'particles-bg';


function App() {
    return (
        <div>
            <ParticlesBg type="cobweb" bg={true} style={{width: '100%', height: '100%'}} />
            <Header/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/shop" component={Shop}/>
            </Switch>
        </div>
    );
}

export default App;
