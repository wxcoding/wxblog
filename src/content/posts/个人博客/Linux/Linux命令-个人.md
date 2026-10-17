---
author: guanwx
pubDatetime: 2023-10-24T21:14:00+08:00
title: Linux命令-个人
slug: Linux命令-个人
featured: false
draft: false
tags:
 - Java
description: 整理 Linux 常用命令说明与 CentOS 下 JDK 的 rpm 包安装配置流程。
---

## **一、linux 常用命令：**

- pwd 命令

使用 pwd 命令找出您所在的当前工作目录（文件夹）的路径。该命令将返回一个绝对（完整）路径，该路径基本上是所有以 / 开头的目录的路径。绝对路径的一个示例是 /home/username。

- cd 命令

要浏览 Linux 文件和目录，请使用 cd 命令。根据您所在的当前工作目录，它需要目录的完整路径或名称。假设您位于 /home/username / Documents 中，并且想要转到 Documents 的子目录 Photos。为此，只需键入以下命令：cd Photos。另一种情况是，如果您想切换到一个全新的目录，例如 /home/username / Movies。在这种情况下，您必须输入 cd，然后输入目录的绝对路径：cd /home/username / Movies。有一些快捷方式可帮助您快速导航：cd ..（带有两个点）将一个目录向上移动 cd 直接转到主文件夹 cd-（带连字符）移动到上一个目录附带说明一下，Linux 的 shell 是区分大小写的。因此，您必须准确输入名称的目录。

- ls 命令

LS 命令用于查看目录的内容。默认情况下，此命令将显示当前工作目录的内容。如果要查看其他目录的内容，请键入 ls，然后键入目录的路径。例如，输入 LS / 家 / 用户名 / 文档查看的内容的文件。您可以使用 ls 命令使用以下变体：ls -R 还将列出子目录中的所有文件 ls -a 将显示隐藏的文件 ls -al 将列出文件和目录以及详细信息，例如权限，大小，所有者等。

- cat 命令

cat（连接的缩写）是 Linux 中最常用的命令之一。它用于在标准输出（sdout）上列出文件的内容。要运行此命令，请键入 cat，然后输入文件名及其扩展名。例如：cat file.txt。以下是使用 cat 命令的其他方法：cat> filename 创建一个新文件 cat filename1 filename2> filename3 连接两个文件（1 和 2），并将它们的输出存储在新文件中（3）将文件转换为大写或小写使用，cat filename | tr a-z A-Z >output.txt

- cp 命令

使用 cp 命令将文件从当前目录复制到另一个目录。例如，命令 cp scenery.jpg/home /username/ Pictures 将在您的 Pictures 目录中创建一个 Scene.jpg 副本（来自当前目录）。

- mv 命令

mv 命令的主要用途是移动文件，尽管它也可以用于重命名文件。mv 中的参数类似于 cp 命令。您需要输入 mv，文件名和目标目录。例如：mv file.txt/home /username/ Documents。

- mkdir 命令

使用 mkdir 命令创建一个新目录 - 如果键入 mkdir Music，它将创建一个名为 Music 的目录。还有一些额外的 mkdir 命令：要在另一个目录中生成新目录，请使用此 Linux 基本命令 mkdir Music / Newfile 使用 p（父级）选项在两个现有目录之间创建一个目录。例如，mkdir -p Music / 2022 / Newfile 将创建新的 “2022” 文件。

- rmdir 命令

如果需要删除目录，请使用 rmdir 命令。但是，rmdir 仅允许您删除空目录。

- rm 命令

该 RM 命令用于删除目录以及其中的内容。如果只想删除目录（作为 rmdir 的替代方法），请使用 rm -r。注意：使用此命令时要格外小心，并仔细检查您所在的目录。这将删除所有内容，并且没有撤消操作。

- touch 命令

该触摸命令允许您创建通过 Linux 命令行新的空白文件。例如，输入 touch /home/username/Documents/Web.html 在 Documents 目录下创建一个名为 Web 的 HTML 文件。

- locate 命令

您可以使用此命令来定位文件，就像 Windows 中的搜索命令一样。此外，将 - i 参数与该命令一起使用将使其不区分大小写，因此即使您不记得其确切名称，也可以搜索文件。要搜索包含两个或多个单词的文件，请使用星号（*）。例如，locate -i school * note 命令将搜索包含单词 “school” 和 “ note” 的任何文件，无论它是大写还是小写。

- find 命令

在类似定位命令，使用 查找也搜索文件和目录。区别在于，您可以使用 find 命令在给定目录中查找文件。例如，find /home/-name notes.txt 命令将在主目录及其子目录中搜索名为 notes.txt 的文件。使用查找时的其他变化 是：要查找当前目录中使用的文件，请使用 find . -name notes.txt 要查找目录，请使用 /-type d -name notes. txt13. grep 命令无疑对日常使用很有帮助的另一个基本 Linux 命令是 grep。它使您可以搜索给定文件中的所有文本。为了说明这一点，grep blue notepad.txt 将在记事本文件中搜索单词 blue。包含搜索到的单词的行将被完整显示。

- sudo 命令

该命令是 “SuperUser Do” 的缩写，使您能够执行需要管理或超级用户权限的任务。但是，建议不要将此命令用于日常使用，因为如果您做错了一些事情，很容易发生错误。

- df 命令

使用 df 命令可获取有关系统磁盘空间使用情况的报告，以百分比和 KB 表示。如果要以兆字节为单位查看报告，请输入 df -m。

- du 命令

如果要检查文件或目录占用了多少空间，答案是 du（磁盘使用情况）命令。但是，磁盘使用情况摘要将显示磁盘块号，而不是通常的大小格式。如果要以字节，千字节和兆字节为单位查看它，请在命令行中添加 - h 参数。

- head 命令

所述头命令用于查看任何文本文件的第一行。默认情况下，它将显示前十行，但是您可以根据自己的喜好更改此数字。例如，如果只想显示前五行，则键入 head -n 5 filename.ext。

- tail 命令

该命令与 head 命令具有相似的功能，但是 tail 命令将显示文本文件的最后十行，而不是显示第一行。例如，tail -n filename.ext。

- diff 命令

diff 命令是差异的缩写，diff 命令逐行比较两个文件的内容。分析文件后，它将输出不匹配的行。程序员在需要进行程序更改时经常使用此命令，而不是重写整个源代码。此命令最简单的形式是 diff file1.ext file2.ext

- tar 命令

该 tar 命令是最常用的命令归档多个文件到一个压缩包。类似于 zip 格式常见的 Linux 文件格式，压缩是可选的。该命令具有很长的功能列表，非常复杂，例如将新文件添加到现有档案中，列出档案内容，从档案中提取内容等等。查看一些实际示例，以了解有关其他功能的更多信息。

- chmod 命令

chmod 是另一个 Linux 命令，用于更改文件和目录的读取，写入和执行权限。由于此命令相当复杂，因此您可以阅读完整的教程以正确执行它。

- chown 命令

在 Linux 中，所有文件均归特定用户所有。该 CHOWN 命令使您可以更改或文件的所有权转让给指定的用户名。例如，chown linuxuser2 file.ext 将使 linuxuser2 成为 file.ext 的所有者。

- Jobs 命令

jobs 命令将显示所有当前作业及其状态。作业基本上是由 Shell 启动的进程。

- kill 命令

如果您的程序无响应，则可以使用 kill 命令手动终止它。它将向运行异常的应用发送特定信号，并指示该应用自行终止。您总共可以使用 64 个信号，但是人们通常只使用两个信号：SIGTERM（15） — 请求程序停止运行，并给它一些时间来保存其所有进度。如果在输入 kill 命令时未指定信号，则将使用此信号。SIGKILL（9） - 强制程序立即停止。未保存的进度将丢失。除了知道信号之外，您还需要知道要杀死的程序的进程标识号（PID）。如果您不知道 PID，只需运行命令 ps ux。在知道您要使用什么信号以及程序的 PID 之后，输入以下语法：kill [signal option] PID.

- ping 命令

使用 ping 命令检查与服务器的连接状态。例如，只需输入 ping google.com，该命令将检查您是否能够连接到 Google 并测量响应时间。

- wget 命令

Linux 命令行非常有用 - 您甚至可以在 wget 命令的帮助下从 Internet 下载文件。为此，只需键入 wget，然后输入下载链接即可。

- uname 命令

该 UNAME 命令，短期对于 Unix 名，将打印您的 Linux 系统，如计算机名称的详细信息，操作系统，内核，等等。

- top 命令

作为与 Windows 中的任务管理器等效的终端，top 命令将显示正在运行的进程的列表以及每个进程使用的 CPU 数量。监视系统资源使用情况非常有用，尤其是知道哪个进程由于消耗太多资源而需要终止时。

- history 命令

当您使用 Linux 一段时间后，您会很快注意到每天可以运行数百个命令。因此，如果您想查看之前输入的命令，运行历史记录命令特别有用。

- man 命令

对某些 Linux 命令的功能感到困惑吗？不用担心，您可以使用 man 命令从 Linux 的外壳程序中轻松地学习如何使用它们。例如，输入 man tail 将显示 tail 命令的手动指令。

- echo 命令

此命令用于将一些数据移到文件中。例如，如果要将文本 “Hello，我的名字叫 John” 添加到名为 name.txt 的文件中，则可以键入 echo Hello, my name is John >> name.txt

- zip，unzip 命令

使用 zip 命令将文件压缩到 zip 归档文件中，然后使用 unzip 命令从 zip 归档文件中提取压缩文件。

- hostname 命令

如果您想知道主机 / 网络的名称，只需键入 hostname。在末尾添加 - I 将显示您的网络的 IP 地址。

- useradd，userdel 命令

由于 Linux 是多用户系统，因此这意味着多个人可以同时与同一个系统进行交互。useradd 用于创建新用户，而 passwd 将密码添加到该用户的帐户。要添加名为 John 的新用户，请添加 user John，然后添加其密码类型 passwd 123456789。删除用户与添加新用户非常相似。要删除用户帐户类型，请使用 userdel UserName

## **二、Linux 系统 JDK 安装（rpm 包安装）**

1. Oracle 官网下载对应版本：https://www.oracle.com/java/technologies/downloads/
2. 上传 rpm 包到 Linux 系统环境下的文件下，俺放在 home 下个人文件夹管理
3. 使用命令安装：

- 可以先检查是否已经安装了 Java 环境：

```bash
java -version
```

- 确认没有 java 环境进行安装：

```bash
rpm -ivh jdk-8u381-linux-x64.rpm
```

- 安装完成

![0](/images/linux-commands/img-1.png)

- 配置环境变量
  - 进入 etc 文件夹，有个 profile 文件
  - vim 进入编辑（在文件最后，编辑以下内容保存）

![0](/images/linux-commands/img-2.png)

```bash
vim profile JAVA_HOME=/usr/java/jdk1.8.0_121 CLASSPATH=%JAVA_HOME%/lib:%JAVA_HOME%/jre/lib PATH=$PATH:$JAVA_HOME/bin:$JAVA_HOME/jre/bin export PATH CLASSPATH JAVA_HOME
```

- 让配置文件生效

```bash
source /etc/profile
```

- 如果出现以下情况，使用如下命令解决：（解决源自博客：https://blog.csdn.net/qq_21859119/article/details/109267741）

![0](/images/linux-commands/img-3.png)

```bash
export PATH=/bin:/usr/bin:$PATH
```

- 安装完毕，然后就可以发布项目测试啦
  - 需要配置项目所需的其他环境（如 Tomcat，简单项目验证）
  - 将项目打成 jar 包
  - 上传到服务器（xftpf）
  - 开启 9000 端口
  - 如果防火墙未开启端口，先开启端口
  - 将 jar 包通过 java -jar xxx.jar 启动成功
  - 通过服务器公网就可以访问了
