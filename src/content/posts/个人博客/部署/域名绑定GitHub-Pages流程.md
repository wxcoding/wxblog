---
author: guanwx
pubDatetime: 2026-10-16T21:00:00+08:00
title: 域名绑定 GitHub Pages 全流程
slug: github-pages-custom-domain
featured: false
draft: false
tags:
  - 域名
  - GitHub Pages
  - 部署
description: 给部署在 GitHub Pages 上的博客绑定自定义域名的完整步骤：DNS 解析配置、CNAME 文件、Pages 设置与 HTTPS 证书，全程免费且不需要备案。
---

博客部署在 GitHub Pages 上，原来只能通过 `wxcoding.github.io` 访问。买好域名后，可以把它绑定到 GitHub Pages 上，让 `https://guanwx.me` 成为正式地址。全程免费，且因为 GitHub Pages 服务器在境外，**不需要备案**。

## 原理

备案拦截的是"域名 + 境内托管"的组合。GitHub Pages 的节点全在境外，域名解析过去不受备案制度约束，绑定即用。

## 第一步：发布 CNAME 文件（代码侧）

在源码项目的 `public/` 目录下创建一个名为 `CNAME` 的文件（无扩展名），内容只有一行：

```
guanwx.me
```

Astro 构建时会把 `public/` 里的所有文件原样复制进 `dist`，随 GitHub Actions 部署一起发布到 Pages 仓库。这个文件的作用是让域名绑定在每次自动部署后不丢失。

## 第二步：配置 DNS 解析（域名注册商控制台）

在买域名的平台（阿里云/腾讯云）的"域名解析"控制台添加记录：

| 记录类型 | 主机记录 | 记录值 |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `wxcoding.github.io` |

- A 记录的 4 个 IP 是 GitHub Pages 官方固定地址，指向裸域 `guanwx.me`
- CNAME 让 `www.guanwx.me` 也指向博客
- DNS 生效需要几分钟到几小时

## 实战踩坑记录

以下是 2026-10-16 首次绑定的真实过程，报错、定位与处理逐一记录。

### 坑一：GitHub 报 DNS check unsuccessful

在 GitHub Pages 设置里填入域名保存后，直接出现红色报错：**Both guanwx.me and its alternate name are improperly configured（NotServedByPagesError）**，Enforce HTTPS 复选框同时变为不可勾选：

![GitHub Pages 报 DNS check unsuccessful](/images/github-pages-custom-domain/dns-check-failed.png)

这个报错只有一种含义：**域名当前没有解析到 GitHub Pages 服务器**。常见原因有两个：解析记录还没添加，或者记录填错了（比如主机记录填成完整域名，导致实际生效的是 `guanwx.me.guanwx.me`）。

### 定位方法：本地 nslookup 三连

不用猜，在本地直接查 DNS 就能锁定问题：

```
nslookup guanwx.me             # 查 A 记录
nslookup -type=NS guanwx.me    # 查 DNS 服务器
nslookup www.guanwx.me         # 查 www 子域
```

我的输出解读：

- NS 返回 `dns17.hichina.com` / `dns18.hichina.com` → 域名注册在阿里云（万网），DNS 托管正常
- A 记录提示 "No records available"、`www` 返回 Non-existent domain → **一条解析记录都还没加**

根因就此锁定：不是 GitHub 的问题，也不是域名的问题，纯粹是解析记录还没配。

### 坑二：阿里云添加记录界面的三个细节

打开阿里云云解析 DNS 控制台，解析记录列表确实是空的（"没有数据"）：

![阿里云解析记录列表为空](/images/github-pages-custom-domain/dns-console-empty.png)

新版【添加记录】对话框的"记录值"框支持**一次填多个 IP**（多值混合），4 条 A 记录可以在同一个对话框里一起提交，不用来回点 4 次：

![添加记录对话框支持多值 IP](/images/github-pages-custom-domain/add-record-multi-ip.png)

三个容易犹豫的细节：

1. **主机记录**只填 `@` 和 `www`——填完整域名会变成 `guanwx.me.guanwx.me`
2. **解析请求来源**保持"全球 / 中国地区（默认）"不动。这个字段是"智能线路解析"的入口（给不同运营商返回不同记录值），个人博客全站指向同一个 GitHub Pages，用不上
3. **TTL 保持默认 10 分钟**——生效快，配错时能快速重试

![解析请求来源保持默认线路](/images/github-pages-custom-domain/resolution-line-default.png)

### 附加提醒：域名实名状态影响解析生效

阿里云要求**域名实名审核通过后，解析才会全球生效**。刚买的域名如果实名还在"审核中"，解析记录加了也不生效。域名列表里状态显示"已实名"之后，再配解析才稳妥。

### 收尾

5 条记录加完后，回 GitHub 点 **Check again**（10 分钟 TTL，通常几分钟内生效，一次通过），变绿后勾选 Enforce HTTPS，等 Let's Encrypt 证书签发完成即可。

## 第三步：GitHub 仓库设置

注意：Pages 的自定义域名设置在**发布仓库**（`wxcoding/wxcoding.github.io`），不是源码仓库：

```
仓库 Settings → Pages → Custom domain
→ 填入 guanwx.me → Save
→ 等待 DNS check 通过（打钩）
→ 勾选 Enforce HTTPS
```

- DNS check 未通过时多为解析还没生效，等几分钟重试
- 证书由 GitHub 通过 Let's Encrypt 自动签发，勾选 Enforce HTTPS 后可能需要几分钟到一天生效

## 第四步：更新项目 site 配置

域名生效后，把 `astro-paper.config.ts` 里的 `site.url` 从 `https://wxcoding.github.io` 改为 `https://guanwx.me`，让 RSS 订阅地址、OG 图链接、sitemap 和文章 canonical 链接全部切换到新域名。

## 验证

- 浏览器访问 `https://guanwx.me`，能打开博客且地址栏带锁标即成功
- 旧的 `wxcoding.github.io` 地址会自动 301 跳转到新域名
- 可用 `curl -I https://guanwx.me` 查看响应头确认跳转与证书状态

## 常见问题

| 现象 | 原因与处理 |
|---|---|
| DNS check 一直不通过 | 解析未生效或记录填错，用 `nslookup guanwx.me` 验证，等 TTL 过期后重试 |
| 证书报错"尚未签发" | 刚绑域名后证书签发有延迟，等 15 分钟到 1 小时再试 |
| 域名绑定莫名丢失 | 发布分支里缺 `CNAME` 文件，确认第一步的文件随 dist 发布 |
| Enforce HTTPS 无法勾选 | 证书尚未签发完成，等签发后再勾 |

## 与境内部署的关系

绑定 GitHub Pages 的域名是境外端上岗；将来备案完成后，域名只需把解析记录切到境内的云服务器（A 记录指向 ECS 公网 IP），GitHub 端把 Custom domain 移除即可——同一个域名，两端分时复用，互不冲突。
