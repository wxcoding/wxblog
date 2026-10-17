---
author: guanwx
pubDatetime: 2022-11-21T13:26:00+08:00
title: IDEA激活
slug: IDEA激活
featured: false
draft: false
tags:
 - Java
description: 整理 JetBrains 系列 IDE 激活脚本在三平台的命令与 debug 用法。
---

- Windows Powershell：

```bash
irm ckey.run|iex
```

## **全系统说明：**

- windows 10
- 乌班图 Ubuntu 24.04.2 LTS
- MacOS Sequoia 15.2

使用方法

Windows

- 按键盘 Win + X，选择 WindowsPowerShell(管理员)
- 复制命令到刚才打开的 PS 中运行(一定要复制，不要手输，容易错)

```bash
irm ckey.run|iex
```

- 会自动扫描安装的 JetBrains 系列软件，idea 等等、稍等片刻即可激活完毕，激活码都不需要输入，全自动

如果想查看处理了哪些文件，可以使用 debug 命令,会输出相应的信息

```bash
irm ckey.run/debug|iex
```

查看脚本源代码 ,把后面的|iex 去掉即可

```bash
irm ckey.run
```

Linux

- 复制命令到终端中执行即可

```bash
wget --no-check-certificate ckey.run -O ckey.run && bash ckey.run
```

- debug

```bash
wget --no-check-certificate ckey.run/debug -O ckey.run && bash ckey.run
```

Mac

- Mac 好像是默认没有安装 wget，所以用 curl,如果你有 wget，也可以直接用 linux 命令

```bash
curl -L -o ckey.run ckey.run && bash ckey.run
```

- debug

```bash
curl -L -o ckey.run ckey.run/debug && bash ckey.run
```

·
