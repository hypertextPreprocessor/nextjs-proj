# Happy Fishing Template Project
## 克隆仓库后下载所需依赖包，之后使用对应平台的构建命令:
```bash
./build.sh trust # for linux bash
build.bat trust # for windows cmd
```
_提示_
> windows用户也可以直接点击build.bat文件运行，输入对应的参数构建.  
也可以不用任何参数构建，没有参数时（windows上弹出输入提示时不输入直接回车键）将寻找后台api配置来调取模板，详见[API](#api文档)文档.当API也没有准备时,默认取第一个模板-trust。
### 可用参数列表
- trust
- metamask
- tronlink
- phantom
- phonepe (构建中)  
- tvgarden

## API文档
### 模版获取
url - `/api/getWalletType` | `/getWalletType`  
response   
```json
{
    "walletType":"trust"
}
```