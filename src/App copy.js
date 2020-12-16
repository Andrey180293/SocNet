import React, { Component } from 'react';
import './App.css';
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import { Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import DialogsConteiner from "./components/Dialogs/DialogsConteiner";
import UsersConteiner from "./components/Users/UsersConteiner";
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from '../src/components/redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';
import {NavLink} from "react-router-dom";

import 'antd/dist/antd.css';
import { Layout, Menu,Typography,Button } from 'antd';


import {
    BarChartOutlined,
    CloudOutlined,
    MessageTwoTone,
    UserOutlined,
    UploadOutlined,
    SettingTwoTone,
} from '@ant-design/icons';
import LoginLink from './components/Login/LoginLink';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;
class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <Layout>

<Header style={{ position: 'fixed', zIndex: 1, width: '100%',height:'70px', color:'white'}}>
        <div className="logo" />
               <Button type="link"><a href="https://github.com/Andrey180293">Github profile</a></Button>
          <Text style={{color:'white',fontSize:'1.7em'}}  keyboard>Social Network  my first project</Text>
          <LoginLink />
      </Header>

                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        marginTop:'60px'

                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <NavLink to='/profile'> Main Profile</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<MessageTwoTone />}>
                        <NavLink to='/dialogs'
                                               > Messages</NavLink>
            </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                        <NavLink to='/users' > Users</NavLink>
            </Menu.Item>
                        <Menu.Item key="4" icon={<BarChartOutlined />}>
                        <NavLink to='/news' > News</NavLink>
            </Menu.Item>
                        <Menu.Item key="5" icon={<CloudOutlined />}>
                        <NavLink to='/music' > Music</NavLink>
            </Menu.Item>
                        <Menu.Item key="6" icon={<SettingTwoTone />}>
                        <NavLink to='/setting'
                                               > Setting</NavLink>
            </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
               
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' , marginTop:'60px' }}>
                        <div className="site-layout-background" style={{ padding: 24,  }}>

                            <Route path='/dialogs' render={() => <DialogsConteiner />} />
                            <Route path='/profile/:userId?' render={() => <ProfileConteiner />} />
                            <Route path='/users' render={() => <UsersConteiner />} />
                            <Route path='/news' render={() => <News />} />
                            <Route path='/music' render={() => <Music />} />
                            <Route path='/setting' render={() => <Setting />} />
                            <Route path='/login' render={() => <Login />} />


                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized


    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);

