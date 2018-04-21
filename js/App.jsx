import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Title } from './title.jsx';
import { Items } from './items.jsx';

class App extends React.Component {
    render() {
        return (
        <Router>
        <div>
        
            <Switch>

            <Route exact path="/" component={Title}/>
            <Route path="/blankItems" exact component={Items}/>

            <Route render={() => <h1>Page not found</h1>} />

            </Switch>
        </div>
        </Router>);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

