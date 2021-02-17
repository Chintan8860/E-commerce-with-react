import React from 'react';
import './MenuItem.scss';


const menuItem = (props) => (
            <div className={`${props.size} menu-item`}>

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

export default menuItem;
