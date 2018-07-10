import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Input, Icon } from 'antd';
import { SOCKET_CONNECTION } from '../../settings';
const {  Footer } = Layout;

/**
 * Class representing InputBox component
 */
class InputBox extends Component {

    sendMessage = (event) => {
        let message = event.target.value;

        //event.keyCode == 13 ? this.props.sendMessage(message) : null;
        if(event.keyCode === 13) {
            SOCKET_CONNECTION.emit('chat message', message, this.props.userName);
            event.target.value = ""
        } 
    }

    render() {
        return (
            <div style={{position:'fixed', bottom:'0px', width:'100%'}}>
                <Layout>
                    <Footer>
                        <Input onKeyUp={this.sendMessage} placeholder="Enter Your Message Here" />
                    </Footer>
                </Layout>
            </div>
        )
    }
}

/**
 * Mapping redux state to component props
 */
const mapStateToProps = ({user}) => {
    return {
		userName: user.userName
	}
};

/**
 * Map redux dispatch to component props
 * @param {function} dispatch Dispatches actions
 */
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);
