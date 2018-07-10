import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import ProtectedRoute from './common/ProtectedRoute';
import { connect } from 'react-redux';
import { SOCKET_CONNECTION } from '../settings';
import {addUser} from '../redux/actions/addUserActions';
/** 
 * Class representing App component
 */
class App extends Component {

	state = {
		loggedIn: true
	}
	
	render() {

		SOCKET_CONNECTION.on('chat join', (newUser) => {
			//alert(col)
			this.props.addNewUser(newUser)
		})

		return (

			
			<Router>
				<div className="App">

					{/* Routing */}
					<ProtectedRoute
						exact
						Component={Home} 
						path="/"
						loggedIn={this.props.signedIn}
					/>

					<Route
						exact
						component={Login} 
						path="/login"
					/>

				</div>
			</Router>
		);
	}
}

/**
 * Mapping redux state to component props
 */
const mapStateToProps = ({user}) => {
	return {
		signedIn: user.connected
	}
}

/**
 * Map redux dispatch to component props
 * @param {function} dispatch Dispatches actions
 */
const mapDispatchToProps = dispatch => {
    return {
        addNewUser: user => dispatch(addUser(user))
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (App);
