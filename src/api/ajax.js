/* 
接口请求函数
1.拦截请求，处理请求方式和请求体数据
2.拦截响应，返回response.data
*/
import axios from 'axios'
import qs from 'qs'
import { message } from 'antd';

//添加请求拦截器
axios.interceptors.request.use(
    config=>{
        //得到请求方式和请求体数据
        const {method,data}=config
        //处理post请求
        if(method.toLowerCase()==='post'&&typeof data==='object'){
            config.data=qs.stringify(data)
        }

        return config
    },
    err=>{
        message.error('请求失败'+err.message,2)
        }
);
axios.interceptors.response.use(
    //响应拦截器
    response=>{
        message.success('请求成功...',2)
        return response.data
    },
    err=>{
        message.error('请求失败:'+err,2)
        //return Promise.reject(err)
        //返回pending的promise，中断promise链
    return new Promise(()=>{})
    }

)


export default axios
