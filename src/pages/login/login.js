import React ,{Component}from 'react';
import {withRouter, Redirect} from 'react-router-dom'

import './login.css';
import {reqLogin} from '../../api'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import storageUtils from '../../utils/storageUtils.js'
import memoryUtils from '../../utils/memoryUtils'

class LoginForm extends Component{
  constructor(props){
    super(props)
    this.state={ 
      loginSuccess:false,
    }
     
    this.onFinish=this.onFinish.bind(this)
  }
    onFinish = async function (values){
      console.log('Received values of form: ', values);
      const usr=values.username.trim();
      const pwd=values.password.trim();
      
      if(usr&&pwd){
        const result = await reqLogin(usr,pwd)
        if(result.status===0){
          
          //保存登录信息到localstorage
          const user=result.data;
          storageUtils.saveUser(user);
          //保存登录信息到内存
          memoryUtils.user=user;
          //跳转...
          message.success('登陆成功，正在跳转...',2)
          this.setState({loginSuccess:true})
          this.props.history.replace('/admin')
          
        }else{
          message.error('登录失败:'+result.msg)
        }  
      }
            
    }

    render()
    {
      const user=memoryUtils.user;
      if(user._id){
        return (<Redirect to="/" loginSuccess={this.state.loginSuccess} />)
      }else return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}>
        <h1 id="h1">用户登录</h1>
        <Form.Item
          name="username"     
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
            {
              whitespace:true
            },
            {
              min:4,
              message:'用户名应大于4位 '
            },
            {
              max:16,
              message:'用户名应小于16位'
            }/* ,
            {
              pattern:/^[a-zA-Z0-9_]+$/,
              message:'用户名应为字母、数字或下划线组成'
            } */
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
            {
              min:4,
              message:'密码长度不能小于4'
            },
            {
              pattern:/^[a-zA-Z0-9_]+$/,
              message:'密码应为字母、数字或下划线组成'
            }
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
      </Form>
    );}
  };
//export default withRouter(LoginForm);

export default class Login extends Component{

    render(){
        return(
            <div className="login">
              <div className="login-header">
                  <img  alt="logo"/>
                  <h1> 后台管理系统 </h1>
              </div>
              <div className="login-content"> 
                  <LoginForm history={this.props.history}></LoginForm>
              </div>
            </div>

        )
    }
}