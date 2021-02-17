import React, { Component } from 'react';
import ShopData from './data.js';
import Preview from '../../component/Preview-collection/Preview'

export default class shop extends Component {
    state ={
        collections : ShopData
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                
                {
                    collections.map(({id,...otherCollectionProps}) => 
                    <Preview key={id} {...otherCollectionProps} />)
                }
                 
            </div>
        )
    }
}


