#!/bin/bash
name=$1;
if [[ $1 = -z ]];then
echo cat <<EOF
	./build [templateName] 
		参数
			templateName 模板名称
EOF
else
	echo "$name";
	NEXT_PUBLIC_TEMPLATE=$name npm run build
fi
