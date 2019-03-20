import './App.css'
import './index.css'
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import MainLayout from "./components/MainLayout";
import NotFound from "./components/NotFound";
import EventsContainer from "./components/EventsContainer";
import EventNew from "./components/EventNew";
import EventEdit from "./components/EventEdit";
import EventShow from "./components/EventShow";
import Login from './components/Login';
import {getDecodedToken} from './api/token';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: getDecodedToken()
        }
    }

    onSignInResponse = (data) => {
        this.setState({ user: data })
    }

    render() {
        const { user } = this.state
        const signedIn = !!user
        return <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={withRouter(MainLayout)} />
                    <Route path='/events' exact component={withRouter(EventsContainer)} />
                    <Route path='/events/new' exact component={withRouter(EventNew)} />
                    <Route path='/events/:id' exact component={withRouter(EventShow)} />
                    <Route path='/events/:id/edit' exact component={withRouter(EventEdit)} />

                    <Route path='/login' exact render={ () => (
                        <Login signedIn={ signedIn } onSignInResponse={ this.onSignInResponse }/>
                    )}/>

                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    }
}

export default App