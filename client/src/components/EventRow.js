import React, { Component } from 'react'
import {Button, Table} from "semantic-ui-react";
import moment from 'moment';
import { Link } from 'react-router-dom';

class EventRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            onDeleteClick: null
        }
    }

    render () {

        const { onDeleteClick } = this.props;

        return(
            <>
                <Table.Row>
                    <Table.Cell>{this.props.event.id}</Table.Cell>
                    <Table.Cell>{this.props.event.user_name}</Table.Cell>
                    <Table.Cell>{moment(this.props.event.start_time).format('DD MMM YYYY HH:mm:ss')}</Table.Cell>
                    <Table.Cell>{moment(this.props.event.stop_time).isValid() ? moment(this.props.event.stop_time).format('DD MMM YYYY HH:mm:ss') : 'In progress'}</Table.Cell>
                    <Table.Cell>{this.props.event.reason}</Table.Cell>
                    <Table.Cell>
                        <Link className='ui green basic button' to={`/events/${this.props.event.id}`}>R</Link>
                    </Table.Cell>
                    <Table.Cell>
                        <Link className='ui brown basic button' to={`/events/${this.props.event.id}/edit`}>U</Link>
                    </Table.Cell>
                    <Table.Cell>
                        <Button basic color='red' type="button" onClick={() => onDeleteClick(this.props.event.id)}>
                            D
                        </Button>
                    </Table.Cell>
                </Table.Row>
            </>
        )
    }
}

export default EventRow