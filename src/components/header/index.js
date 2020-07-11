import  React,{ Component, memo } from "react";
import {withRouter} from 'react-router-dom'
import {Modal} from 'antd'
import './index.css'; 
import menuList from "../../config/menuconfig";
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import {formateDate} from '../../utils/dateUtils'
import {reqWeather} from '../../api'
import LinkButton from '../../components/link-button'



class Header extends Component{

    state={
        curTime:Date.now(),
        dayPictureUrl:'',
        weather:'',
    }
    componentDidMount(){
        //更新时间
        setInterval(()=>{this.setState({curTime: Date.now()})},1000);
        //获取天气信息，显示
        this.getWeather();

    }
    getWeather=async ()=>{
        /**
         * 获取天气信息
         */
        const {dayPictureUrl,weather}=await reqWeather('重庆');
        this.setState({
            dayPictureUrl,
            weather
        })

    }

    

    getTitle=()=>{
        //两层遍历，确定title
        let title='';
        //根据当前请求的path得到title
        const path=this.props.location.pathname
        console.log(path)
        menuList.forEach(item=>{
            if(item.link===path){
                title=item.title;
            }else if(item.children){
                const cItem=item.children.find(cItem=>cItem.link===path);
                if (cItem){
                    title=cItem.title;
                }
            }
            //console.log(title)
        })
        console.log(title)
        return title;

    }
    /**
     * 退出登录
     */
    logout=()=>{
        //确认退出提示
        Modal.confirm({
            title:'确认退出吗',
            onOk:()=>{
                console.log('OK');
                //清除内存 local
                storageUtils.removeUser()
                memoryUtils.user={}
                this.props.history.replace('/login')
            },
            onCancel:()=>{
                console.log('cancel');
            }
            
        })
        //删除登录信息
    }

    render(){
        const title=this.getTitle();
        const user=memoryUtils.user
        const {curTime,dayPictureUrl,weather}=this.state;


        return( 
            <>
            <div className='header-div'>
                    <div className='header-top'>
                        欢迎 {user.username}
                        <LinkButton  onClick={this.logout} > 退出</LinkButton>
                    </div>
                    <div className='header-bottom'>
                        <div className='header-bottom-left'>{title}</div>
                        <div className='header-bottom-right'>
                            <span>{formateDate(curTime)}</span>
                            <img src={dayPictureUrl} alt='图片'/>
                            <span>{weather}</span>

                        </div>
                        
                    </div>
                    
                
            </div> 
            <div className="triggle"></div>
            </>
        )
    }
}
export default withRouter(Header)