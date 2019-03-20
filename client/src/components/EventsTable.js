import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import EventRow from "./EventRow";

class EventsTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            onDeleteClick: null
        }
    }

    render () {
        const { onDeleteClick } = this.props;

        return <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>User</Table.HeaderCell>
                        <Table.HeaderCell>Start Time</Table.HeaderCell>
                        <Table.HeaderCell>Stop Time</Table.HeaderCell>
                        <Table.HeaderCell>Reason</Table.HeaderCell>
                        <Table.HeaderCell>Read</Table.HeaderCell>
                        <Table.HeaderCell>Edit</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.events.length > 0 && this.props.events.map((event) => {
                        return <EventRow key={event.id} event={event} onDeleteClick={onDeleteClick} />
                    })}
                </Table.Body>
            </Table>
    }
}

export default EventsTable