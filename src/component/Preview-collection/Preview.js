import React from 'react';
import './Preview.scss';
import Collection from '../Collection-item/Collection-item'

const Preview = ({title , items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item,index) => index <4).map(({id , ...otheritem})=>(
                      <Collection key={id} {...otheritem} />
                    ))
                }
            </div>
        </div>
    )
}

export default Preview;