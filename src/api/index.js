/*
封装了接口请求函数
 */
import ajax from './ajax'
import jsonp from 'jsonp' //axios不能发jsonp请求
import qs from 'qs'
import { message } from 'antd'

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
export const reqWeather =(city)=>{
    const url= `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`

    return new Promise((resolve,reject)=>{
        //成功调用resolve() 
        //失败提示错误
        jsonp(url,{},(err,data)=>{
            const {dayPictureUrl,weather}=data.results[0].weather_data[0];
            if(!err&&data.error===0){
                resolve({dayPictureUrl,weather})
            }else{
                message.error('获取天气信息失败');
            }
        })
    })


}
export const reqClasses=()=>{
    ajax(BASE+'/myclass/mylessons')
}
