import React, { Component } from 'react';
import api from "../config/api";
import {Button, Form} from "semantic-ui-react";
import moment from 'moment';
import {getValidToken} from "../api/token";

class ClockComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inProgress: false,
            eventId: null,
            userName: ''
        }
        this.addEvent = this.addEvent.bind(this)
        this.updateEvent = this.updateEvent.bind(this)
        this.updateUserName = this.updateUserName.bind(this)
    }

    addEvent() {
        api.post(`/api/v1/events`, {
            event: {
                user_name: this.state.userName,
                start_time: moment().format('YYYY-MM-DD HH:mm:ss')
            }
        }).then((res) => {
                localStorage.setItem('eventId', res.data.id)
                this.setState({inProgress: true, eventId: res.data.id })
            }
        )
    }

    chooseEventIdSource() {
        return this.state.eventId ? this.state.eventId : this.getFromStorage('eventId')
    }

    updateEvent() {
        api.patch(`/api/v1/events/${this.chooseEventIdSource()}`, {
            event: {
                stop_time: moment().format('YYYY-MM-DD HH:mm:ss')
            }
        }).then((res) => {
                localStorage.removeItem('eventId')
                this.setState({inProgress: false, eventId: res.data.id })
            }
        )
    }

    getFromStorage(key) {
        return localStorage.getItem(key)
    }

    updateUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }

    checkLastState(inProgress) {
        let inStorage = this.getFromStorage('eventId')
        let result = false

        if( (inProgress && !inStorage) || (!inProgress && inStorage) || (inProgress && inStorage) ) {
            result = true
        }
        if(!inProgress && !inStorage) {
            result = false
        }
        return result
    }

    render () {
        return <>
            <>
                <br/>
                {this.checkLastState(this.state.inProgress) ?
                    <Button primary negative onClick={this.updateEvent} size='massive'>STOP</Button>
                    :
                    <>
                        {!getValidToken() &&
                        <Form.Field>
                            <Form.Input
                                onChange={e => this.updateUserName(e)}
                                required
                                name="user_name"
                                placeholder="Your name"
                            />
                        </Form.Field>}
                        <br/>
                        <Button primary positive onClick={this.addEvent} size='massive'>START</Button>
                    </>
                }
            </>
        </>
    }
}

export default ClockComponent