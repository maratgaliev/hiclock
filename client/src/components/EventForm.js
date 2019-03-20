import React, { Component } from 'react';
import api from '../config/api';
import {Container, Header} from 'semantic-ui-react';
import { Form } from 'formsy-semantic-ui-react';
import MainMenu from "./MainMenu";
import {Redirect, withRouter} from "react-router";
import "react-datepicker/dist/react-datepicker.css";
import LoadingSpinner from "./LoadingSpinner";
import DatePicker from "react-datepicker";
import moment from "moment";

class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            toEvents: false,
            onValidSubmit: '',
            event: props.event,
            startTime: moment().toDate(),
            stopTime: moment().toDate()

        }
        this.onValidSubmit = this.onValidSubmit.bind(this)
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleStopChange = this.handleStopChange.bind(this);
    }

    componentWillReceiveProps({ event }) {
        this.setState({ event });
        this.setState({startTime: moment(event.start_time).toDate(), stopTime: moment(event.stop_time).toDate()})
    }

    onValidSubmit(data) {
        api.patch(`/api/v1/events/${this.state.id}`, {
            event: {
                start_time: this.state.startTime,
                stop_time: this.state.stopTime,
                user_name: data.user_name,
                reason: data.reason
            }
        }).then(() =>
            this.setState({ toEvents: true })
        )
    }

    handleStartChange(date) {
        this.setState({
            startTime: date
        })
    }

    handleStopChange(date) {
        this.setState({
            stopTime: date
        })
    }

    render() {

        if (this.state.toEvents === true) {
            return <Redirect to='/events' />
        }
        const { event } = this.props;
        return (
            <>
            {this.props.loading ? <LoadingSpinner/> :
                <>
                    <MainMenu/>
                    <Container text style={{ marginTop: '7em' }}>
                        <Header as='h1'>CONTROL TIME</Header>
                        <Form className="eventForm" ref={ ref => this.form = ref } onValidSubmit={ this.onValidSubmit } >
                            <Form.Field>
                                <Form.Input
                                    name="user_name"
                                    label="Your name"
                                    value={event.user_name}
                                />
                            </Form.Field>

                            <Form.Field>
                                <DatePicker
                                    selected={this.state.startTime }
                                    name='start_time'
                                    onChange={ this.handleStartChange }
                                    showTimeSelect
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </Form.Field>

                            <Form.Field>
                                <DatePicker
                                    selected={this.state.stopTime}
                                    name='stop_time'
                                    onChange={this.handleStopChange}
                                    showTimeSelect
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </Form.Field>

                            <Form.Field>
                                    <Form.Input
                                        name="reason"
                                        label="Reason"
                                        value={event.reason}
                                    />
                            </Form.Field>

                            <Form.Group>
                                <Form.Button content="SAVE WORK" color="green"/>
                            </Form.Group>
                        </Form>
                    </Container>
                </>}
            </>
        );
    }
}

export default withRouter(EventForm);