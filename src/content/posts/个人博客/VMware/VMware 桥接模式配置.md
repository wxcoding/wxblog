---
author: guanwx
pubDatetime: 2026-2-27T10:52:00+08:00
title: VMware 桥接模式配置
slug: VMware-桥接模式配置
featured: false
draft: false
tags:
 - Java
description: 记录 VMware 桥接绑定 WLAN 网卡、CentOS 静态 IP 配置与 SSH 放行步骤。
---

## **第一步：VMware 桥接模式手动绑定 WLAN 网卡**

1. 关闭虚拟机，打开 VMware → 编辑 → 虚拟网络编辑器
2. 选中 VMnet0（桥接模式），点击 “更改设置”
3. 桥接到：**手动选择你的无线网卡（WLAN）**，不要选自动
4. 应用 → 确定

## **第二步：在 CentOS 里，按你家的网段重新配置 IP**

启动虚拟机，执行下面的命令，把 IP 改成你家路由器的网段：

```bash
# 1. 删除之前错误的静态IP配置 nmcli connection delete ens33  # 2. 新建连接，配置正确的网段 nmcli connection add type ethernet con-name ens33 ifname ens33 autoconnect yes  nmcli connection modify ens33 \ ipv4.addresses 192.168.16.11/24 \ ipv4.gateway 192.168.16.1 \ ipv4.dns 223.5.5.5 \ ipv4.method manual  # 3. 重启网卡生效 nmcli connection up ens33
```

## **第三步：验证连通性**

1. 查看虚拟机 IP 是否正确：

```bash
ip a show ens33
```

确认显示

```text
inet 192.168.16.11/24
```

1. 在 Windows CMD 里 ping 虚拟机：

```cmd
ping 192.168.16.11
```

这次应该能正常收到回复了！

------

## **💡 后续配置 SSH**

网络通了之后，别忘了这两步：

```bash
# 放行22端口 firewall-cmd --permanent --add-port=22/tcp firewall-cmd --reload  # 启动SSH服务 systemctl start sshd systemctl enable sshd
```

现在你就可以用 Xshell 通过 192.168.16.11 正常 SSH 连接了！
