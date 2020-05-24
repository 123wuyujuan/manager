import React,{Component} from 'react';
import logo from '../images/logo192.png';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


export const LoginForm = () => {
    const onFinish = values => {
      console.log('Received values of form: ', values);
    };
    return (
      <div>
      <h1 id="h1">用户登录</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
            <a className="login-form-forgot" href="_blank">
            忘记密码
          </a>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>  
        </Form.Item>
      </Form></div>
    );
  };

export default class Login extends Component{

    render(){
        return(
            <div className="login">
              <div className="login-header">
                  <img src={logo} alt="logo"/>
                  <h1> 后台管理系统 </h1>
              </div>
              <div className="login-content">

                  
                  <LoginForm></LoginForm>
              </div>


            </div>

        )
    }
}