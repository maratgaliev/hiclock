import React, { Component } from 'react'
import { signIn, signUp } from '../api/auth'
import { Button, Container, Header } from "semantic-ui-react";
import { Form } from 'formsy-semantic-ui-react';
import MainMenu from "./MainMenu";
import {Redirect} from "react-router";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signUp: false,
        }
        this.onValidSubmit = this.onValidSubmit.bind(this)
    }

    onValidSubmit = (data) => {
        const user_data = {
            user: data
        }
        if (this.state.signUp) {
            return signUp(user_data)
                .then((res) => this.props.onSignInResponse(res))
        }
        else {
            return signIn(user_data)
                .then((res) => this.props.onSignInResponse(res))
        }

    }

    onClick = () => {
        this.setState({ signUp: !this.state.signUp })
    }

    render() {
        const { signedIn } = this.props
        const { signUp } = this.state

        if (signedIn) {return <Redirect to="/" />}
        return (
            <>
                <MainMenu/>
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1'>LOGIN</Header>
                    <Form className="eventForm" ref={ ref => this.form = ref } onValidSubmit={ this.onValidSubmit }>
                        <Form.Field>
                                <Form.Input
                                    required
                                    name="email"
                                    label="Your email"
                                />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                required
                                type="password"
                                name="password"
                                label="Your password"
                            />
                        </Form.Field>
                        { signUp &&
                        <Form.Field>
                            <Form.Input
                                required
                                type="password"
                                name="password_confirmation"
                                label="Your password"
                            />
                        </Form.Field>
                        }
                        <br />
                        <Button primary>Sign {signUp && 'Up'} {!signUp && 'In'}</Button>
                    </Form>
                    <hr/>
                    <Button onClick={ this.onClick }>{signUp && 'Go to Sign In'} {!signUp && 'Sign Up'}</Button>
                </Container>
            </>
        )
    }
}

export default Login