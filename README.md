# 使用方法
```bash
    ./build.sh trust    #linux
    ./build.bat trust   #windows
```
执行前确保拥有管理员权限
## 参数列表
 - trust
 - metamask
 - tronlink
 - phantom
 - phonepe  (构建中)
 ## 开发者注意事项
 ### 关于icon
 icon建议使用svg，如果使用其他格式的icon直接使用`<Image>`组件引用即可。    
 新的icon需要在`/components/SvgIcon.js`中新增icon使用,使用时严格按照规范构建和使用,采用icon本身的文件名称去掉.svg后缀，在最前面添加一根下划线，如：
 构建时:
 ```javascript
export default function SvgIcon({
  icon
}){
  switch(icon){
      case "_9111064_scan_icon":   //目录/public/icons/存在9111064_scan_icon.svg
            return <></>;
    }
  }
}
 ```
 使用时:
 ```javascript
import SvgIcon from "@com/SvgIcon";
export default function IconUseExample(){
  return <SvgIcon icon="_9111064_scan_icon" width="22px" height="22px"/>;
}
 ```
 **提示**
 >在增加新的icon时需要在跟目录执行 npx gulp构建.svg icon,构建icon后,在SvgIcon.js文件增加对应icon 才能使用.
 ### 路由
 首页路由的路由的规则优先API路由，由后台控制，没有API路由则按照命令行参数打包后的路由。  
 路由包含两套系统，一套是nextjs内置文件式路由系统，另一套是SPA式的路由系统。   
 #### 路由规范
 新增路由（模板页/落地页） 在`/pages/`创建文件夹,文件夹的名字必须对应浏览器上的路径名称，新建文件`index.js`; 对应此页面的css也放在此目录下（如果有)。  
 新增的路由需要在`/utlis/index.js`文件里增加响应导航来对应首页渲染(新增case记录，并让首屏路由指向刚才新增的组件);
 ##### 路由注册
在命令行下输入一下代码:
```bash
npx gulp addRoute
```
根据提示输入注册的名称,将会在`/pages/`目录下创建相应的文件夹(符合上述规范);
 #### 开发环境
 开发环境的路由环境变量更改`package.json`的script字段，下面的dev的环境来渲染首页:
 ```json
  "scripts": {
    "dev": "cross-env NEXT_PUBLIC_TEMPLATE=环境变量 next dev",
  },
 ```
 ### 正式环境

