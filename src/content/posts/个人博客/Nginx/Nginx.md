---
author: guanwx
pubDatetime: 2022-11-15T09:28:00+08:00
title: Nginx
slug: Nginx
featured: false
draft: false
tags:
 - Java
description: 整理 Nginx 的反向代理、负载均衡与动静分离原理及安装配置入门教程。
---

## **公司产品出现瓶颈？**

我们公司项目刚刚上线的时候，并发量小，用户使用的少，所以在低并发的情况下，一个 jar 包启动应用就够了，然后内部 tomcat 返回内容给用户。

但是慢慢的，使用我们平台的用户越来越多了，并发量慢慢增大了，这时候一台服务器满足不了我们的需求了。

于是我们横向扩展，又增加了服务器。这个时候几个项目启动在不同的服务器上，用户要访问，就需要增加一个代理服务器了，通过代理服务器来帮我们转发和处理请求。

我们希望这个代理服务器可以帮助我们接收用户的请求，然后将用户的请求按照规则帮我们转发到不同的服务器节点之上。这个过程用户是无感知的，用户并不知道是哪个服务器返回的结果，我们还希望他可以按照服务器的性能提供不同的权重选择。保证最佳体验！所以我们使用了 Nginx。

![0](/images/nginx/img-1.png)

![0](/images/nginx/img-2.png)

![0](/images/nginx/img-3.png)

## **什么是 Nginx？**

Nginx (engine x) 是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务。Nginx 是由伊戈尔·赛索耶夫为俄罗斯访问量第二的 Rambler.ru 站点（俄文：Рамблер）开发的，第一个公开版本 0.1.0 发布于 2004 年 10 月 4 日。2011 年 6 月 1 日，nginx 1.0.4 发布。

其特点是占有内存少，并发能力强，事实上 nginx 的并发能力在同类型的网页服务器中表现较好，中国大陆使用 nginx 网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。在全球活跃的网站中有 12.18% 的使用比率，大约为 2220 万个网站。

Nginx 是一个安装非常的简单、配置文件非常简洁（还能够支持 perl 语法）、Bug 非常少的服务。Nginx 启动特别容易，并且几乎可以做到 7*24 不间断运行，即使运行数个月也不需要重新启动。你还能够不间断服务的情况下进行软件版本的升级。

Nginx 代码完全用 C 语言从头写成。官方数据测试表明能够支持高达 50,000 个并发连接数的响应。

## **Nginx 作用？**

Http 代理，反向代理：作为 web 服务器最常用的功能之一，尤其是反向代理。

正向代理

反向代理

![0](/images/nginx/img-4.png)

![0](/images/nginx/img-5.png)

Nginx 提供的负载均衡策略有 2 种：内置策略和扩展策略。内置策略为轮询，加权轮询，Ip hash。扩展策略，就天马行空，只有你想不到的没有他做不到的。

轮询

加权轮询

iphash 对客户端请求的 ip 进行 hash 操作，然后根据 hash 结果将同一个客户端 ip 的请求分发给同一台服务器进行处理，可以解决 session 不共享的问题。

![0](/images/nginx/img-6.png)

![0](/images/nginx/img-7.png)

![0](/images/nginx/img-8.png)

动静分离，在我们的软件开发中，有些请求是需要后台处理的，有些请求是不需要经过后台处理的（如：css、html、jpg、js 等等文件），这些不需要经过后台处理的文件称为静态文件。让动态网站里的动态网页根据一定规则把不变的资源和经常变的资源区分开来，动静资源做好了拆分以后，我们就可以根据静态资源的特点将其做缓存操作。提高资源响应的速度。

![0](/images/nginx/img-9.png)

目前，通过使用 Nginx 大大提高了我们网站的响应速度，优化了用户体验，让网站的健壮性更上一层楼！

## **Nginx 的安装**

## **windows 下安装**

**1、下载 nginx**

http://nginx.org/en/download.html 下载稳定版本。

以 nginx/Windows-1.16.1 为例，直接下载 nginx-1.16.1.zip。

下载后解压，解压后如下：

![0](/images/nginx/img-10.png)

**2、启动 nginx**

有很多种方法启动 nginx

(1) 直接双击 nginx.exe，双击后一个黑色的弹窗一闪而过

(2) 打开 cmd 命令窗口，切换到 nginx 解压目录下，输入命令 nginx.exe ，回车即可

**3、检查 nginx 是否启动成功**

直接在浏览器地址栏输入网址 [http://localhost:80](http://localhost/) 回车，出现以下页面说明启动成功！

![0](/images/nginx/img-11.png)

**4、配置监听**

nginx 的配置文件是 conf 目录下的 nginx.conf，默认配置的 nginx 监听的端口为 80，如果 80 端口被占用可以修改为未被占用的端口即可。

![0](/images/nginx/img-12.png)

当我们修改了 nginx 的配置文件 nginx.conf 时，不需要关闭 nginx 后重新启动 nginx，只需要执行命令 nginx -s reload 即可让改动生效

**5、关闭 nginx**

如果使用 cmd 命令窗口启动 nginx， 关闭 cmd 窗口是不能结束 nginx 进程的，可使用两种方法关闭 nginx

(1) 输入 nginx 命令 nginx -s stop(快速停止 nginx) 或 nginx -s quit(完整有序的停止 nginx)

(2) 使用 taskkill taskkill /f /t /im nginx.exe

taskkill 是用来终止进程的，/f 是强制终止 ./t 终止指定的进程和任何由此启动的子进程。/im 示指定的进程名称 .

## **linux 下安装**

**1、安装 gcc**

安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装：

```bash
yum install gcc-c++
```

**2、PCRE pcre-devel 安装**

PCRE(Perl Compatible Regular Expressions) 是一个 Perl 库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx 也需要此库。命令：

```bash
yum install -y pcre pcre-devel
```

**3、zlib 安装**

zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。

```bash
yum install -y zlib zlib-devel
```

**4、OpenSSL 安装**

OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。

nginx 不仅支持 http 协议，还支持 https（即在 ssl 协议上传输 http），所以需要在 Centos 安装 OpenSSL 库。

```bash
yum install -y openssl openssl-devel
```

**5、下载安装包**

手动下载 .tar.gz 安装包，地址：https://nginx.org/en/download.html

下载完毕上传到服务器上 /root

**6、解压**

```bash
tar -zxvf nginx-1.18.0.tar.gzcd nginx-1.18.0
```

![0](https://note.youdao.com/yws/res/1087/WEBRESOURCEfe13452a43b385f70c87f337b357a69c)

**7、配置**

使用默认配置，在 nginx 根目录下执行

```bash
./configuremakemake install
```

查找安装路径： `whereis nginx`

![0](https://note.youdao.com/yws/res/1088/WEBRESOURCEf0d5b0beaa350b1a44623946f25e1999)

## **Nginx 常用命令**

```bash
cd /usr/local/nginx/sbin/./nginx  启动./nginx -s stop  停止./nginx -s quit  安全退出./nginx -s reload  重新加载配置文件ps aux|grep nginx  查看nginx进程
```

启动成功访问 服务器ip:80

![0](https://note.youdao.com/yws/res/1089/WEBRESOURCEb65597c3a4046b81575294f30d5d8ff6)

注意：如何连接不上，检查阿里云安全组是否开放端口，或者服务器防火墙是否开放端口！

相关命令：

```bash
# 开启service firewalld start# 重启service firewalld restart# 关闭service firewalld stop# 查看防火墙规则firewall-cmd --list-all# 查询端口是否开放firewall-cmd --query-port=8080/tcp# 开放80端口firewall-cmd --permanent --add-port=80/tcp# 移除端口firewall-cmd --permanent --remove-port=8080/tcp #重启防火墙(修改配置后要重启防火墙)firewall-cmd --reload # 参数解释1、firwall-cmd：是Linux提供的操作firewall的一个工具；2、--permanent：表示设置为持久；3、--add-port：标识添加的端口；
```

## 
