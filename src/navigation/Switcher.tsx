import React from 'react';
import { Router,Route, Switch } from 'react-router-dom';
import TodoListPage from '../containers/TodoListPage';
import { createBrowserHistory } from "history";

let Switcher = () =>

    (
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/" component={TodoListPage} />
            </Switch>
        </Router>
    )

export default Switcher;
