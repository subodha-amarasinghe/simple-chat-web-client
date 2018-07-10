import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Icon } from 'antd'
import { chatboxMain, chatboxMsg, chatboxBottom, chatDeleteStyles } from './chatBox.styles';
import { SOCKET_CONNECTION } from '../../settings';

/**
 * Class representing ChatBox component
 */
class ChatBox extends Component {

    deleteMessage = () => {
        SOCKET_CONNECTION.emit('chat delete', this.props.messageId, this.props.nickname);
    }

    render() {
        const deleteBtn = this.props.userName && this.props.nickname === this.props.userName ?
            <div style={chatDeleteStyles}>
                <Icon
                    type="close-circle-o"
                    style={{ cursor: 'pointer', color: 'red' }}
                    onClick={this.deleteMessage}
                />
            </div>
            : null

        return (
            <div>
                {this.props.isDeleted ?
                    <div style={chatboxMain}>
                        <div style={chatboxMsg}>
                            This message was deleted by {this.props.nickname}
                        </div>
                        <div style={chatboxBottom}>
                            <div>&nbsp;</div>
                            <div>{this.props.sentTime}</div>
                        </div>
                    </div>
                    : <div style={chatboxMain}>
                        {deleteBtn}
                        <div style={chatboxMsg}>
                            <div style={{ width: '48px' }}><Avatar>{this.props['nickname'].substring(0, 1)}</Avatar></div>
                            <div>
                                <p>{this.props.message}</p>
                            </div>
                        </div>
                        <div style={chatboxBottom}>
                            <div>{this.props.nickname}</div>
                            <div>{this.props.sentTime}</div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

/**
 * Mapping redux state to component props
 */
const mapStateToProps = ({ user }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
