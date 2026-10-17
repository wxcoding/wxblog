---
author: guanwx
pubDatetime: 2022-12-28T22:31:00+08:00
title: Linux指令
slug: Linux指令
featured: false
draft: false
tags:
 - Java
description: 整理 Linux 常用指令速记，含 sudo、docker、conda 与 ssh 隧穿命令。
---

## **Linux指令**

1.sudo（管理员权限）

sudo -i（切换管理员账号）

sudo apt update（更新软件包索引）

sudo apt upgarde	（更新软件包）

sudo apt install git软件包的名字（下载安装软件包）

2.ls（查看当前目录下文件）

ls -a（查看隐藏文件）

3.cd（切换目录）

cd ..（返回上一级）

cd ~（返回根目录也就是root目录）

4.vi（vi编辑器）

5.rm（删除文件）

rm （删除文件）

rm -r（删除目录里的所有文件）

6.mkdir（新建目录）

7.git（git工具）

git clone（克隆项目，也就是复制别人的代码）

git lfs pull（拉取大文件）

git lfs ls-files（检查文件完整性）

8.conda（虚拟环境工具）

conda create –name xxx python=（创建虚拟环境）

conda init（初始化）

conda activate（激活环境）

9.pip（安装python依赖）

pip install

10.python（执行python脚本）

python3 （执行脚本，用python3）

11.docker（docker工具）

docker ps（查看运行中的服务）

docker images（查看拉取好的服务，包含运行中的和未运行的）

docker-compose up -d（用docker-compose启动服务）

docker-compose down（停止服务）

docker-compose restart（重启服务）

docker restart（重启docker服务）

docker run（运行一个新的docker容器）

docker start（启动服务）

docker stop（停止服务）

docker --version，docker-compose --version（查看版本，也可以用来查看是否安装成功）

docker rm （删除服务）

docker restart $(docker ps -q)（重启所有服务）

12.ssh -CNg -L 6006:127.0.0.1:8501 root@region-45.autodl.pro -p 33736（ssh隧穿命令）

ssh -p 33736 root@region-45.autodl.pro

h0qjAeDBO2vK

docker run alpine echo "Hello World"
