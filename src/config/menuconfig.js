import {icon} from 'antd'
import React from 'react'
import  {UserOutlined,PieChartOutlined,BellOutlined,TeamOutlined,ReadOutlined,LineChartOutlined} from '@ant-design/icons' 
 const menuList=[
    {
        key:"1",
        icon: <BellOutlined />,
        title:"我的待办",
        children:[
            {
                key:"11",
                title:"学员首触",
                //icon: <UserOutlined />,
                link:'/mytodo/first',
            },
            {
                key:"12",
                title:"课程跟催",
                //icon: <UserOutlined />,
                link:'/mytodo/follow',
            },
            {
                key:"13",
                title:"我的转化",
               // icon: <UserOutlined />,
                link:'/mytodo/conversion',
            },

        ],
    },
    {
        key:"2",
        icon: <TeamOutlined />,
        title:"我的班级",
        children:[
        {
            key:"21",
            title:"我的课程",
            //icon: <ReadOutlined />,
            link:'/myclass/mylessons',
        },
        {
            key:"22",
            title:"学员信息",
            //icon: <UserOutlined />,
            link:'/myclass/stuinfo',
        },

    ],

    },
    {
        key:"3",
        icon: <LineChartOutlined />,
        title:"我的转化",
        children:[
        {
            key:"31",
            title:"我的图表",
           // icon: <PieChartOutlined />,
            link:'/myconversion/chart',
        },
    

    ],

    },
    {
        key:"4",
        icon: <UserOutlined />,
        title:"ERP电销",
        children:[
        {
            key:"41",
            title:"订单生成",
            //icon: <UserOutlined />,
            link:'/myerp/order',
        },
    ]
       

    },

]

export default menuList;
