import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase-utility'

import './header.scss'

const header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container" >
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option" >
                    SHOP
            </Link>
                <Link to="/shop" className="option" >
                    CONTACT
            </Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                        :
                        <Link className="option" to='/login'>Sign In</Link>
                }
            </div>
        </div>
    )
}

export default header
