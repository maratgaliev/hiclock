import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import EventForm from "./EventForm";

class EventNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: '',
        }
    }

    render() {
        const { event } = this.state;
        return (
            <>
                <EventForm event={event}/>
            </>
        );
    }
}

export default EventNew;