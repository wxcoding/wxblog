---
author: guanwx
pubDatetime: 2026-3-17T10:26:00+08:00
title: pg-vector扩展
slug: pg-vector扩展
featured: false
draft: false
tags:
 - Java
description: Windows 下为 PostgreSQL 编译安装 pgvector 向量扩展的完整步骤，从 VS 生成工具到编译安装与扩展创建。
---

## 编译前准备（必须装）

### 1. 安装 Visual Studio 生成工具（免费）

用于编译 C 语言代码

下载地址：https://visualstudio.microsoft.com/zh-hans.com/downloads/

打开后选择：

`【Visual Studio 生成工具 2022】`

安装时勾选：

`使用 C++ 的桌面开发`

### 2. 确认你的 PostgreSQL 安装了 开发组件

你需要：

- `pg_config.exe`（在 `bin` 目录）
- `libpq.lib`、头文件等

你的路径：

`E:\guanwx\Environment\postgresql\bin\pg_config.exe`

只要存在就没问题。

## 开始编译（复制命令就能跑）

### 步骤 1：下载 pgvector 源码

https://github.com/pgvector/pgvector/archive/refs/tags/v0.8.2.zip

解压到：

`C:\pgvector-0.8.2`

### 步骤 2：打开 VS 编译环境

开始菜单 → 打开：

`x64 Native Tools Command Prompt for VS 2022`

（必须用这个，不能用普通 CMD）

### 步骤 3：进入源码目录

```bash
cd C:\pgvector-0.8.2
```

### 步骤 4：设置 PostgreSQL 路径

```bash
set PG_CONFIG=E:\guanwx\Environment\postgresql\bin\pg_config.exe
```

### 步骤 5：编译（关键命令）

```bash
nmake /F Makefile.win
```

### 步骤 6：安装（自动复制 .dll 到正确位置）

```bash
nmake /F Makefile.win install
```

编译成功后你会得到：

- ✅ `vector.dll`
- ✅ `vector.control`
- ✅ `vector--0.8.2.sql`

自动复制到你的 PostgreSQL 目录

## 最后一步：创建扩展

```bash
psql -U postgres -c "CREATE EXTENSION IF NOT EXISTS vector;"
```

成功显示：

```plaintext
CREATE EXTENSION
```
