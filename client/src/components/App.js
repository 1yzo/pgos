import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateOrderForm from './CreateOrderForm';
import DashboardPage from './DashboardPage';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={DashboardPage} />
				</Switch>
      		</BrowserRouter>
    	);
 	}
}

export default App;