import React from 'react';
import {Route} from 'react-router-dom';

import "./shop.scss"
import CollectionOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";

const Shop = ({match}) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    );
};



export default Shop;