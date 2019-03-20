import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import api from "../config/api";
import axios from "axios";
import EventDetails from "./EventDetails";
import MainMenu from "./MainMenu";
import {Container} from "semantic-ui-react";

class EventShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            loading: true,
            event: null
        }
    }

    getEvent() {
        return api.get(`/api/v1/events/${this.state.id}`)
    }

    componentDidMount() {
        axios.all([this.getEvent()])
            .then(axios.spread((event) => {
                this.setState({ event: event.data })
                this.setState({ loading: false })
            }));
    }

    render() {
        const { event, loading } = this.state;
        return (
            <>
                <MainMenu/>
                <Container fluid text style={{ marginTop: '7em' }}>
                    <EventDetails event={event} loading={loading} />
                </Container>
            </>
        );
    }
}

export default EventShow;