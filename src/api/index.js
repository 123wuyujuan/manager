/*
封装了接口请求函数
 */
import ajax from './ajax'
import qs from 'qs'

const BASE=''
export const reqLogin=(username,password)=>(
    /*ajax({
        //配置对象
        //代理在webpack-dev-server里的http-proxy-middleware
        //package.json:  "proxy":"http://localhost:5000"
        method:'post',
        url:BASE+'/login',
        data:qs.stringify({
            //默认使用json携带参数
            username,
            password
        })

    })*/
    ajax.post(BASE+'/login',{username,password})
    
)