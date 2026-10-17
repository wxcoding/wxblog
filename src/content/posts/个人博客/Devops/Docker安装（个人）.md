---
author: guanwx
pubDatetime: 2024-1-9T20:47:00+08:00
title: Docker安装（个人）
slug: Docker安装（个人）
featured: false
draft: false
tags:
 - Java
description: 记录 CentOS 安装 Docker 步骤，含阿里云源配置、镜像加速与 DNS 设置。
---

### 

## **1. 安装依赖**

```bash
yum install -y yum-utils
```

## **2. 添加 Docker 官方源（CentOS Stream 10 兼容）**

```bash
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

- 如果报错

```bash
rm -rf /etc/yum.repos.d/docker*.repo
rm -rf /etc/yum.repos.d/mirrors.aliyun.com_docker*.repo
dnf install -y dnf-utils
```

1.先清理所有废源（必须执行）

```bash
rm -rf /etc/yum.repos.d/docker*.repo
```

2.直接写入阿里云 Docker 源（本地创建，不联网下载）

```bash
cat > /etc/yum.repos.d/docker-ce.repo <            

[docker-ce-stable]

name=Docker CE Stable - $basearch

baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/$releasever/$basearch/stable

enabled=1

gpgcheck=1

gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg

EOF
```

3. 强制刷新缓存

```bash
dnf clean all
dnf makecache
```

4. 安装 Docker（这一步绝对成功）

```bash
dnf install -y docker-ce docker-ce-cli containerd.io --allowerasing
```

5. 启动并开机自启

```bash
systemctl enable docker
systemctl start docker
```

6. 测试

```bash
docker --version
docker run hello-world（会报错）
```

1. 创建 docker 配置目录

```bash
mkdir -p /etc/docker
```

2. 写入国内镜像加速地址（阿里云 + 中科大）

```bash
cat > /etc/docker/daemon.json << EOF

{

"registry-mirrors": [

"https://docker.mirrors.ustc.edu.cn",

"https://hub-mirror.c.163.com",

"https://mirror.baidubce.com"

]

}

EOF
```

3. 重启 Docker 生效

```bash
systemctl daemon-reload
systemctl restart docker
```

VMware 里的 CentOS Stream 10 虚拟机 → 连不上外网 DNS！

```bash
vim  /etc/docker/daemon.json
```

```json
{

"dns": ["223.5.5.5", "114.114.114.114", "8.8.8.8"],

"registry-mirrors": [

"https://docker.mirrors.ustc.edu.cn",

"https://docker.1ms.run",

"https://hub.rat.dev",

"http://mirror.azure.cn",

"https://docker.1panel.live/",

"https://mirror.ccs.tencentyun.com",

"https://9cpn8tt6.mirror.aliyuncs.com",

"https://registry.docker-cn.com",

"https://mirror.ccs.tencentyun.com",

"https://docker.1panel.live",

"https://2a6bf1988cb6428c877f723ec7530dbc.mirror.swr.myhuaweicloud.com",

"https://docker.m.daocloud.io",

"https://hub-mirror.c.163.com",

"https://mirror.baidubce.com",

"https://dockerhub.icu",

"https://docker.registry.cyou",

"https://docker-cf.registry.cyou",

"https://dockercf.jsdelivr.fyi",

"https://docker.jsdelivr.fyi",

"https://dockertest.jsdelivr.fyi",

"https://mirror.aliyuncs.com",

"https://dockerproxy.com",

"https://mirror.baidubce.com",

"https://docker.m.daocloud.io",

"https://docker.nju.edu.cn",

"https://docker.mirrors.sjtug.sjtu.edu.cn",

"https://docker.mirrors.ustc.edu.cn",

"https://mirror.iscas.ac.cn",

"https://docker.rainbond.cc"

]

}
```
