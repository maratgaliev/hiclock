import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import MainMenu from "./MainMenu";
import ClockComponent from "./ClockComponent";

class MainLayout extends Component {

    render () {
        return <>
            <MainMenu/>
            <Container align='center' text style={{ marginTop: '7em' }}>
                <Header as='h1'>CONTROL YOUR TIME</Header>
                <ClockComponent/>
            </Container>
        </>
    }
}

export default MainLayout