---
author: guanwx
pubDatetime: 2024-2-21T19:33:00+08:00
title: Vmware安装docker问题
slug: Vmware安装docker问题
featured: false
draft: false
tags:
 - Java
description: 记录 CentOS 7 停止维护后更换阿里云 yum 源并安装 Docker 的解决步骤。
---

## **（centos 源 yum 停止维护原因）**

**这个问题是因为 CentOS 7 已经停止维护，官方的 yum 源已经不可用。我建议你更换为国内的镜像源，比如阿里云或清华大学的镜像源。以下是解决方案：**

1. 备份原有的 yum 源配置文件：

```bash
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

2. 下载新的 CentOS-Base.repo 文件（使用阿里云镜像源）：

```bash
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```

3. 清理 yum 缓存并重新生成：

```bash
yum clean all yum makecache
```

4. 现在可以重新尝试安装 gcc：

```bash
yum -y install gcc
```

如果还是遇到问题，你也可以尝试使用清华大学的镜像源：

```bash
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.tuna.tsinghua.edu.cn/help/centos/
```

## **更新系统**

更新系统： yum update -y 安装必要的依赖： yum install -y yum-utils device-mapper-persistent-data lvm2 删除旧的 Docker 源（如果存在）： rm -f /etc/yum.repos.d/docker*.repo 清理缓存并重新生成： yum clean all yum makecache
