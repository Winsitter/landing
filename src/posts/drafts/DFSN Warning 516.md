---
title:
stub:
date: 2014-06-09
changefreq: weekly
priority: 0.7
css-template: blog.css
template: post.html
author: Bret Fisher
draft: true
---


http://social.technet.microsoft.com/Forums/windowsserver/en-US/6afd1599-f423-43ed-9a3c-1ca02ab04d3a/dfsnserver-id-516-flooding-event-log

Mentions this is normal for 2012 and above
http://blogs.technet.com/b/filecab/archive/2012/08/26/dfs-namespace-scalability-considerations.aspx


Log Name: Microsoft-Windows-DFSN-Server/Admin
Source: DFSN-Server
Event ID: 516
Level: Warning

Error Text DFSN service has started performing complete refresh of metadata for namespace files.
This task can take time if the namespace has large number of folders and may delay
namespace administration operations.

This is actually just an info event for 99% of us. I'm betting it's only a
Warning because of the potential for delay if there is a "large" namespace.
