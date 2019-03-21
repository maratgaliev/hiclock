import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import EventForm from "./EventForm";
import axios from "axios";
import api from '../config/api';

class EventEdit extends Component {
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
                this.setState({ event: event.data, loading: false })
            }));
    }

    render() {
        const { event, loading } = this.state;
        return (
            <EventForm event={event} loading={loading}/>
        );
    }
}

export default EventEdit;