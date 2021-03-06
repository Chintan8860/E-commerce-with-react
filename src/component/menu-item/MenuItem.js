import React from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom';


const menuItem = (props) => (
            <div className={`${props.size} menu-item`}
            onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>

                <div className="background-image"
                style={{
                backgroundImage:`url(${props.imgUrl})`
                }}/>


                <div className="content">
                    <h1 className="title">{props.title.toUpperCase()}</h1>
                    <span className="subtitle">Add to cart</span>
                </div>
            </div>
    
);

export default withRouter(menuItem);
