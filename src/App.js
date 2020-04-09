import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";


function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/shop" component={Shop}/>
            </Switch>
        </div>
    );
}

export default App;
