/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'


// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

// Create an http link:
const httpLink = new HttpLink({
	uri: 'http://localhost:4000/'
})

// Create a WebSocket link:
const wsLink = new WebSocketLink({
	uri: `ws://localhost:4000/`,
	options: { reconnect: true }
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
	// split based on operation type
	({ query }) => {
		const definition = getMainDefinition(query)
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		)
	},
	wsLink,
	httpLink
)

const client = new ApolloClient({
	link,
	cache: new InMemoryCache().restore({})
})

const hist = createBrowserHistory();

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router history={hist}>
			<Switch>
			<Route path="/admin" component={Admin} />
			<Route path="/rtl" component={RTL} />
			<Redirect from="/" to="/admin/home" />
			</Switch>
		</Router>
	</ApolloProvider>,
  document.getElementById("root")
);
