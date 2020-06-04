const {override, fixBabelImports} = require('customize-cra')

module.exports=override(
    fixBabelImports('import',{ //配置babel-plugin-import
        libraryName:'antd', //antd组件库
        libraryDirectory:'es', //源码文件夹中的es文件夹
        style:'css',//自动打包相关css
    }),
    
)