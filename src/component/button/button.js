
import React from 'react';

import './button.scss';

const CustomButton = ({ children, isGoogle, ...otherProps }) => (
    <button className={`${isGoogle ? 'google-sign' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;