import React, {Component} from 'react';
import FormInput from "../form-input/form-input";

import "./sign-in.scss";
import CustomButton from "../custom-button/custom-button";

import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name='email'
                        value={this.state.email}
                        label="email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name='password'
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

SignIn.propTypes = {};

export default SignIn;