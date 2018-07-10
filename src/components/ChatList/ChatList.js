import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChatBox from './ChatBox';
import { SOCKET_CONNECTION } from '../../settings';
import moment from 'moment'

/**
 * Class representing ChatList component
 */
class ChatList extends Component {

    state = {
        data: []
    }

    componentDidMount() {

        SOCKET_CONNECTION.on('chat message', (msg, nickname, messageid) => {

            let newMessage = {
                nickname: nickname,
                message: msg,
                messageId: messageid,
                sentTime : moment().format('lll'),
                isDeleted: false
            }
            this.setState({ data: [...this.state.data, newMessage] })

            //this.props.addNewUser(newUser)
        });

        SOCKET_CONNECTION.on('chat delete', (messageid, nickname) => {
            console.log("Chat delete" , messageid, nickname)
            let prevStateData=this.state.data;
            let deletedMessage = {
                nickname: nickname,
                message: "",
                messageId: messageid,
                sentTime : moment().format('lll'),
                isDeleted: true
            }
            const updatedItems = prevStateData.map(item => {
                if(item.messageId === messageid){
                  return { ...item, ...deletedMessage }
                }
                return item
            })

            this.setState({ data: [...updatedItems] })

            //this.props.addNewUser(newUser)
            console.log("updatedItems" , updatedItems)
        })
    }


    render() {

        const messageList = this.state.data.map((messageItem) =>
            <ChatBox
                key = {messageItem.messageId}
                {...messageItem}
            />
        );
        return (
            <div style={{marginBottom: '90px'}}>
                {messageList}
            </div>
        )
    }
}

/**
 * Mapping redux state to component props
 */
const mapStateToProps = () => {
    return {}
};

/**
 * Map redux dispatch to component props
 * @param {function} dispatch Dispatches actions
 */
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
