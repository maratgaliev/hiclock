import React, { Component } from 'react';
import api from '../config/api';
import axios from 'axios';
import LoadingSpinner from "./LoadingSpinner";
import MainMenu from "./MainMenu";
import {Container, Header} from "semantic-ui-react";
import EventsTable from "./EventsTable";

class EventsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            events: []
        }
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    getEvents() {
        return api.get('/api/v1/events.json')
    }

    handleDeleteClick(eventId) {
        const action = window.confirm('Are you sure?');
        if (action) {
            api
                .delete(`/api/v1/events/${eventId}.json`)
                .then((response) => {
                    let filteredData = this.state.events.filter(function( obj ) {
                        return obj.id !== eventId;
                    });
                    this.setState({ events: filteredData });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    componentDidMount() {
        axios.all([this.getEvents()])
            .then(axios.spread((events) => {
                this.setState({ events: events.data })
                this.setState({ loading: false })
            }));
    }

    render() {
        return (
            <>
                <MainMenu/>
                <Container fluid text style={{ marginTop: '7em' }}>
                    <Header as='h1'>TIME LISTING</Header>
                    {this.props.loading ? <LoadingSpinner/> :
                        <EventsTable events={this.state.events} onDeleteClick={this.handleDeleteClick} />
                    }
                </Container>
            </>
        );
    }
}

export default EventsContainer