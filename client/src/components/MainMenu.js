import React, { Component } from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { getValidToken } from "../api/token";
import { signOut } from "../api/auth";

class MainMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: getValidToken(),
        }
        this.logoutAction = this.logoutAction.bind(this)
    }

    logoutAction = (data) => {
        return signOut(data)
    }

    render () {
        return <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as={Link} to='/' header>
                    <Image size='mini' src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678120-calendar-clock-256.png' style={{ marginRight: '1.5em' }} />
                    HiClock
                </Menu.Item>
                <Menu.Item as={Link} to='/'>Home</Menu.Item>
                <Menu.Item as={Link} to='/events'>Events</Menu.Item>
                {this.state.token != null ?
                    <Menu.Item as={Link} to='#' onClick={this.logoutAction}>Logout</Menu.Item>
                    :
                    <Menu.Item as={Link} to='/login'>Login</Menu.Item>
                }
            </Container>
        </Menu>
    }
}

export default MainMenu