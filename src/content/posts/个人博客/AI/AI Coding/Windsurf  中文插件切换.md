---
author: guanwx
pubDatetime: 2026-9-14T15:08:00+08:00
title: Windsurf  中文插件切换
slug: Windsurf-中文插件切换
featured: false
draft: false
tags:
 - Java
description: 整理 Windsurf 安装中文语言包后切换 zh-cn 的步骤与界面不变时的排查方法。
---

## **✅ Windsurf 汉化完整步骤（你只装插件没执行语言切换命令，所以不变）**

插件装完**必须手动执行命令选 zh-cn，再重启**，不是装完自动变中文

1. 左侧扩展面板（方块图标），搜索：Chinese (Simplified) Language Pack（微软官方简体中文语言包，就是 VSCode 那个蓝色地球图标），**安装**
2. 打开命令面板：Ctrl + Shift + P
3. 在弹出框输入：Configure Display Language，选中这条命令回车
4. 在列表里选择：zh-cn

- 如果没出现 zh-cn：代表插件没装好，重装一次中文包

1. 弹出提示，点 **Restart** 重启 Windsurf

重启完，菜单、设置界面就变成中文了

## **❗ 你遇到【装了插件但界面不变】常见原因（挨个排查）**

1. **只装插件，没跑 Configure Display Language 命令（90% 人的问题）**装插件只是下载语言文件，**不会自动切换语言**，必须上面第 3、4 步手动选 zh-cn。
2. 中文语言包版本和 Windsurf 内核不匹配卸载中文包 → 重启 Windsurf → 重新安装最新版 Chinese (Simplified) Language Pack，再执行语言切换命令。
3. 你点的只是 Reload Window，**不是完全关闭软件重启**Reload 窗口有时候不生效；直接彻底退出 Windsurf，重新打开。
4. 注意：**Cascade 聊天面板（右侧 AI 对话窗口）本身不会汉化**汉化只改编辑器菜单、文件、设置界面；AI 聊天框文字依旧英文，这个是正常现象，不是 bug。

## **📌 备选方案：直接改 settings.json 强制中文**

Ctrl + Shift + P → 输入 Preferences: Open Settings (JSON)，在大括号里加入一行：

`"locale": "zh-cn"`

保存，完全关闭 Windsurf 再重新打开。

```json
{    "locale": "zh-cn" }
```

## **补充小提示**

- Windsurf 内核是 VSCode，**插件市场和 VSCode 共用插件**，中文包就是微软官方那个简体中文语言包，不要下第三方汉化插件。
- 汉化不影响代码、Cascade AI 对话，只是界面菜单中文，写 Java 代码不受任何影响。
