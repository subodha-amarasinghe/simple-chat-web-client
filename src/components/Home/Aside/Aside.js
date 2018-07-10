import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Avatar, Icon } from 'antd';

const { Content, Sider } = Layout;

const { Item } = Menu;

/**
 * Class representing Aside component
 */
class Aside extends Component {

    state = {

    }

    componentWillReceiveProps(nextProps) {
 
    }

    render() {
        return <Sider style={{background:'#fff'}}>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                <Item key="1">
                    <Icon type="user" />
                    <span className="nav-text">nav 1</span>
                </Item>
            </Menu>
        </Sider>
    }
}

/**
 * Mapping redux state to component props
 */
const mapStateToProps = (activeUsers) => {
    return {
        AactiveUsers:activeUsers
    }
};

/**
 * Map redux dispatch to component props
 * @param {function} dispatch Dispatches actions
 */
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Aside);