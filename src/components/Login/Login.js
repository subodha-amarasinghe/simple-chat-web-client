import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/signinActions';
import { Redirect } from 'react-router-dom';

/**
 * Class representing Login component
 */
class Login extends Component {

    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {

    }

    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {

    }

    handelChat = (event) => {
        let nickname = event.target.value;
        if(event.keyCode === 13 ) {
            this.props.signIn(nickname);
            event.target.value="";
        }
        //    event.keyCode == 13 ? SOCKET_CONNECTION.emit('chat join', nickname): null;
    }


    render() {

        if (this.props.signedIn) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter your nickname to join chat"
                    style={{ width: '100%', padding: '4px', textAlign: 'center' }}
                    onKeyUp={this.handelChat}
                />
            </div>
        )
    }
}




/**
 * Mapping redux state to component props
 */
const mapStateToProps = ({user}) => {
    return {
        signedIn: user.connected
    }
};

/**
 * Map redux dispatch to component props
 * @param {function} dispatch Dispatches actions
 */
const mapDispatchToProps = dispatch => {
    return {
        signIn: user => dispatch(loginUser(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);