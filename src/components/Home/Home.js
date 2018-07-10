import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { homeContentStyles } from './home.styles';
import ChatList from '../ChatList/ChatList';
import InputBox from '../InputBox/InputBox';

const { Content } = Layout;

/**
 * Class representing Home component
 */
class Home extends Component {

    render() {

        return (
            <Layout>
               <Content style={homeContentStyles} key="content">
                    <ChatList />
                    <InputBox />
                </Content>
            </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);