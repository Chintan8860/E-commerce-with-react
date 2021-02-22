import React, { Component } from 'react';
import FormInput from '../form-input/form-input'
import './signin.scss';
import Buttons from '../button/button';
import { signInWithGoogle } from '../../firebase/firebase-utility';
export default class signin extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I alredy have an account </h2>
                <span>Sign In with Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email"
                        value={this.state.email}
                        required
                        label="Email"
                        handleChange={this.handleChange} />
                    <FormInput name="password" type="password"
                        value={this.state.password} required label="Password"
                        handleChange={this.handleChange}
                    />
                    <div className='buttons'>


                        <Buttons type="submit" >Sign In</Buttons>
                        <Buttons onClick={signInWithGoogle} isGoogle >Google SignIn</Buttons>

                    </div>
                </form>
            </div>
        )
    }
}
