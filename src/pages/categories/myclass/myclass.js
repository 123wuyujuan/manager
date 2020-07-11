import React, { Component } from 'react'
import {Card,Button,Icon,Table} from 'antd'
import req  from '../../../api'
import LinkButton from '../../../components/link-button';


export default class Myclass extends Component {
    state={
        classes:[], //所有班级的数组
    }
    initCoulumns=()=>{
        //初始化table所有列信息
        this.columns = [
            {
              title: '课程名称',
              dataIndex: 'classname',
            },
            {
              title: '班级号码',
              dataIndex: 'classnum',    
            },
            {
              title: '学生人数',
              dataIndex: 'classsize',
            },
            {
              title:'操作',
              render:()=>(<><LinkButton>编辑</LinkButton> <LinkButton>删除</LinkButton></>)
            }
          ];


    }
    componentWillMount(){
        this.initCoulumns();
        
    }
    componentDidMount(){

    }



    

    render() {
        
        const dataSource = [
            {
              key: '1',
              classname: '暑期新高一数学提升班',
              classnum: '04911702',
              classsize: '32',
              

            },
            {
                key: '2',
                classname: '暑期新高一数学提升班',
                classnum: '04911702',
                classsize: '32',
            
                
            },
            {
                key: '3',
                classname: '暑期新高一数学提升班',
                classnum: '04911702',
                classsize: '32',
                
           
            }
          ];
          
          
          
        
        
        return (
            <Card title="班课信息"  >

                <Table
                    columns={this.columns}
                    dataSource={dataSource}
                >

                </Table>
          </Card>
        )
    }
}
