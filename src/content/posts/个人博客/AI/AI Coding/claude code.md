---
author: guanwx
pubDatetime: 2025-12-15T16:40:00+08:00
title: claude code
slug: claude-code
featured: false
draft: false
tags:
 - Java
description: 记录 claude code 的安装与卸载命令及国内中转环境变量配置方法。
---

## **安装**

```bash
npm install -g @anthropic-ai/claude-code  # 跳过验证 "hasCompletedOnboarding": true
```

## **卸载**

```bash
claude uninstall npm uninstall -g @anthropic-ai/claude-code
```

- 国内中转（直接在 CMD 里复制执行这 2 行）

```bash
set ANTHROPIC_BASE_URL=https://a.ai-gaia.net set ANTHROPIC_AUTH_TOKEN=sk-w3DziFAMHgv1VjcKwlLy1MLImr14OX2VJBj5nGZuxbTj6sKN sk-w3DziFAMHgv1VjcKwlLy1MLImr14OX2VJBj5nGZuxbTj6sKN claude chat "hello"
```
