---
author: guanwx
pubDatetime: 2022-10-16T20:05:00+08:00
title: markdown语法
slug: markdown语法
featured: false
draft: false
tags:
 - Java
description: 整理 Markdown 标题、分割线、列表、链接、代码块等基础语法的入门学习笔记。
---

- 笔记名称：markdown语法学习
- 笔记作者：guanwx (1771353908@qq.com)
- 笔记归属：个人博客
- 创作日期：2022/07/05
- 参考文献： 个人笔记

## **一、标题**

第一种是使用 # 表示标题，其中 # 号必须在行首，第二种是使用 === 或者 --- 表示

## **一级标题**

六级标题

## **二、分割线：**

--- 或者 ***

------

------

## **三、斜体**

使用 *

**斜体**

## **四、粗体**

使用 **

**粗体**

## **五、又斜又粗**

使用 ***

**又斜又粗**

## **六、删除线**

使用两个 ~ 表示

删除线

## **七、链接**

连接地址加在[]内

[[www.baidu.com](http://www.baidu.com)]

## **八、无序列表**

使用 -、+ 和 * 表示无序列表，前后留一行空白，可嵌套

- 无序列表1

- 无序列表2

- 无序列表3

- 仅此三种符号的吗？！

## **九、有序列表**

使用 1. （点号后面有个空格）表示有序列表，可嵌套

1. 有序列表1层

1. 有序列表2

1. 有序列表3

## **十、文字引用**

使用>

文字引用

文字引用深层

## **十一、行内代码块**

其实上面已经用过很多次了，即使用 ` 表示，例如

扩展：很多字符是需要转义，使用反斜杠 \ 进行转义

java html css javascript; java html css javascript java html css javascript

## **十二、跳转**

点我跳转的功能，写法如下：

我是一个锚点

[哔哩哔哩 (゜-゜)つロ 干杯~-bilibili](https://www.bilibili.com/)]("点此去B站")

[[哔哩哔哩 (゜-゜)つロ 干杯~-bilibili](https://www.bilibili.com/)]: http://www.z01.com/ "这里是链接的title内容"

## **十三、程序代码**

使用```

```java
public static void main(Sstrig[] args) {     System.out.println("程序代码！"); }
```

## **十四、` 号使用**

```text
时间：地点：人员：
```
