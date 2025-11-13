@echo off
if "%1"=="" (
    set /p var=请输入要构建的模板：
    if "%var%"=="" (
        npm run build
    ) else (
        set NEXT_PUBLIC_TEMPLAT=%var%
        npm run build
    )
    echo 执行完成
) else (
    set NEXT_PUBLIC_TEMPLAT=%1
    npm run build
)
pause