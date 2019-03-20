import React, { Component } from 'react'
import LoadingSpinner from "./LoadingSpinner";
import {
    Container,
    Header,
    Segment
} from 'semantic-ui-react';

class EventDetails extends Component {

    render () {
        return(
            <>
                {this.props.loading ? <LoadingSpinner/> :
                    <>
                        <Header as='h1' content='Text Container' textAlign='center' />
                        <Container text>
                            <Segment.Group>
                                <Segment>{this.props.event.id}</Segment>
                                <Segment>{this.props.event.user_name}</Segment>
                                <Segment>{this.props.event.start_time}</Segment>
                                <Segment>{this.props.event.stop_time}</Segment>
                                <Segment>{this.props.event.reason}</Segment>
                            </Segment.Group>
                        </Container>
                    </>
                }
            </>
        )
    }
}

export default EventDetails