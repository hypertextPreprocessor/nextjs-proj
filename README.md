# Happy Fishing Template Project
## 克隆仓库后下载所需依赖包，之后使用对应平台的构建命令:
```bash
./build.sh trust # for linux bash
build.bat trust # for windows cmd
```
_提示_
> windows用户也可以直接点击build.bat文件运行，输入对应的参数构建.  
也可以不用任何参数构建，没有参数时（windows上弹出输入提示时不输入直接回车键）将寻找后台api配置来调取模板，详见[API](#api文档)文档.当API也没有准备时,默认取第一个模板-trust。

如果你默认的导出`next.config.mjs`没有`export:"standalone"`模式，可以直接用以下命令运行服务器:
```bash
nohup npx next start -p 8081 > ../nodeserver.txt 2>&1 &
```
停止服务:
```bash
ps -aux | grep next-server
kill -9 422841 #根据以上的命令查询到的pid
```
### 可用参数列表
- trust
- metamask
- tronlink
- phantom
- phonepe (构建中)  
- tvgarden
- shortlive
- brizalGame (巴西游戏落地页)
- recruit (职场招聘)
- gdmx (google play游戏下载页)
### 开发文档
#### 关于自适应
css
```html
<h1>两者二选一即可</h1>
<!--tailwind css
max-xs -> 手机样式
xs: ->  PC样式
-->
<!--例如：-->
<div className="max-xs:w-full xs:w-2/3"></div>
```
javascript
```jsx
//注意javascript在ssr中不可用，一定要确保执行环境是客户端环境，并且有windows对象！
import usePageAttribute from "@com/usePageAttribute";
export default function Page(){
    const {device} = usePageAttribute();
    return <div>
        {device.isDesktop?"桌面端":"手机端"}
        {device.isMobile?"手机端":"桌面端"}
    </div>
} 
```
#### 注册一个路由使用以下命令行:
```bash
npx gulp page --add=newRouteName
#查看tasks列表
npx gulp -T #或者 --tasks
```
此时在`src/views`目录下会生成`newRouteName`文件夹，里面包含`index.js`和`page.js`文件。
## API文档
### 模版获取
url - `/api/getWalletType` | `/getWalletType`  
response   
```json
{
    "walletType":"trust"
}
```