---
author: 悦辞
pubDatetime: 2022-9-12T13:44:00+08:00
title: Git 常用命令速查手册
slug: Git 常用命令速查手册
featured: false
draft: false
tags:
  - Astro
  - AstroPaper
  - GitHub Pages
  - 部署
description: Git 常用命令速查手册。
---

## 一、基础配置

* 查看当前配置 git config --list 
* 配置全局用户名（提交代码时显示的名字） git config --global user.name "你的名字" 
* 配置全局邮箱（提交代码时显示的邮箱） git config --global user.email "你的邮箱" 
* 配置默认编辑器（可选） git config --global core.editor "code --wait"

## 二、仓库初始化 / 克隆

* 初始化本地新仓库 git init 
* 克隆远程仓库（最常用） git clone 仓库地址 
* 克隆指定分支 git clone -b 分支名 仓库地址

## 三、工作区 → 暂存区 → 本地仓库（提交代码）

* 查看文件状态（必用！） git status 
* 查看文件修改详情 git diff 
* 添加单个文件到暂存区 git add 文件名 
* 添加所有修改文件到暂存区 git add . 
* 提交暂存区代码到本地仓库 git commit -m "提交说明" 
* 一步完成 add + commit（仅修改文件，不包含新增文件） git commit -am "提交说明" 
* 修改上一次提交信息（未推送到远程） git commit --amend -m "新的提交信息"

## 四、分支管理（开发最核心）

* 查看本地所有分支 git branch 
* 查看所有分支（本地+远程） git branch -a 
* 创建新分支 git branch 分支名 
* 切换分支 git checkout 分支名 
* 新版推荐命令（创建+切换） git switch 分支名 
* 创建并切换到新分支 git checkout -b 分支名 git switch -c 分支名 
* 合并指定分支到当前分支 git merge 分支名 
* 删除本地分支 git branch -d 分支名 
* 删除远程分支 git push origin --delete 分支名

## 五、远程仓库操作（拉取 / 推送）

* 查看远程仓库地址 git remote -v 
* 关联本地仓库与远程仓库 git remote add origin 远程仓库地址 
* 拉取远程代码（不合并） git fetch 
* 拉取远程代码并自动合并（常用） git pull 
* 推送代码到远程仓库 git push 
* 第一次推送分支（绑定上游） git push -u origin 分支名 
* 强制推送（慎用！会覆盖远程代码） git push -f

## 六、日志 / 回退版本

* 查看提交日志 git log # 简洁版日志 git log --oneline 
* 图形化查看分支合并记录 git log --graph --oneline 
* 回退到上一个版本（保留本地修改） git reset --soft HEAD^ 
* 彻底回退到上一个版本（丢弃本地修改，慎用） git reset --hard HEAD^ 
* 回退到指定版本 git reset --hard 版本号

## 七、撤销 / 恢复文件

* 撤销工作区修改（未add） git checkout -- 文件名 git restore 文件名 
* 撤销暂存区文件（已add，未commit） git reset HEAD 文件名 git restore --staged 文件名 
* 丢弃所有本地修改，还原到最新版本 git checkout .

## 八、储藏代码（临时保存未提交的修改）

* 储藏当前修改 git stash 
* 查看储藏列表 git stash list 
* 恢复最近一次储藏 git stash pop 
* 删除所有储藏 git stash clear

## 九、标签管理

* 查看所有标签 git tag 
* 创建标签 git tag v1.0.0 
* 推送标签到远程 git push origin v1.0.0 
* 删除本地标签 git tag -d v1.0.0 
* 删除远程标签 git push origin --delete v1.0.0

## 十、高级常用命令

* 强制拉取远程代码，覆盖本地（慎用） git fetch --all && git reset --hard origin/主分支名 
* 重命名分支 git branch -m 旧名 新名 
* 放弃本地所有修改，还原仓库 git clean -fd

## 十一、最常用命令速记

- git clone → 克隆代码
- git status → 看状态
- git add . → 添加所有修改
- git commit -m "" → 提交
- git pull → 拉取最新代码
- git push → 推送代码
- git branch → 分支操作
- git log → 看提交记录
