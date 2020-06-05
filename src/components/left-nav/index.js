import React, { Component } from 'react';
import './index.css';
import logo from '../../assets/images/logo.jpg'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MoneyCollectOutlined, AreaChartOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }

    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {

        return (
            <div className="left-nav">
                <Sider style={{ height: '100%' }} collapsible collapsed={this.state.collapsed} onCollapse={this.on}>
                    <Link className="left-nav-logo" to='/home' >
                        <img className="left-nav-logo-img" src={logo} alt="logo" />
                        <h1 className="left-nav-logo-h1">班课系统</h1>
                    </Link>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <SubMenu key="1" mode="inline" icon={<UserOutlined />} title="我的待办">
                            <Menu.Item key="11"><Link to='/mytodo/first'>
                                {<UserOutlined />}学员首触
                            </Link></Menu.Item>
                            <Menu.Item key="12"><Link to="/mytodo/follow">
                                {<UserOutlined />}课程跟催
                            </Link></Menu.Item>
                            <Menu.Item key="13"><Link to="/mytodo/conversion">
                                {<UserOutlined />}学员转化</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="2" icon={<VideoCameraOutlined />} title="我的班级">
                            <Menu.Item key="21">
                                <Link to="/myclass/mylessons">
                                    {<UserOutlined />}我的课程
                                </Link></Menu.Item>
                            <Menu.Item key="22"><Link to="/myclass/stuinfo">
                                {<UserOutlined />}学员信息
                            </Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="3" icon={<UploadOutlined />} title="我的转化">
                            <Menu.Item key="31"><Link to="/myconversion/chart">
                                {<UserOutlined />}我的图表
                            </Link></Menu.Item>

                        </SubMenu>
                        <SubMenu key="4" icon={<UserOutlined />} title="ERP电销">
                            <Menu.Item key="41">
                                <Link to="/myerp/order">
                                    {<UserOutlined />}订单生成
                                </Link></Menu.Item>

                        </SubMenu>
                    </Menu>
                </Sider>
            </div>
        )

    }
}