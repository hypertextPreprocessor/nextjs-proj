@echo off
cd /d nextjs-proj
git status
set /p name=输入你要打包的落地页名称：
set NEXT_PUBLIC_TEMPLAT=%name%
npm run build
echo 执行完成。。。
pause
