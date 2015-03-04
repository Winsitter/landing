---
title: Use Friendly Names to Remember Server Purpose
stub: friendly-names
date: 2015-03-04
changefreq: weekly
priority: 0.7
css-template: blog.css
template: post.html
author: Kevin Griffin
draft: false
---

Does your infrastructure have a "unique" way of naming servers?

>**Kim:** Hey Jim, can you go check VADER?  Winsitter says SQL Server is down.  
>**Jim:** Sure.

Or do you deploy to cloud services such as Microsoft Azure or Amazon Web Services?

>**Jim:** The new server is up and running.  Just for reference, it's hostname is WIN-ABX123XZY.

Oy.  Try remembering which server THAT is at 2:00am when you're the person on call.

>**Jim:** (checks phone) Winsitter says SQL Server is down on WIN-ABX123XZY.  Wait... is that production or test?  

###Friendly Names
Winsitter gets it.  That's why we give you the ability to set a friendly name in our dashboard.  It's perfect for those unexpected alerts when you don't have any reference to which machines are which.

**A friendly name will be used on the dashboard and in any messaging sent to you by Winsitter.**

####How to Configure Friendly Names

1) Head over to your [Winsitter](https://dashboard.winsitter.com) dashboard and log in.  Find the machine you would like to set a friendly name for.

![Dashboard before Friendly Names](http://winsitter.com/images/friendly-names-01.png)

2) Press the **edit button** (it looks like a gear).  This will drop down the server properties.

![Dashboard before Friendly Names](http://winsitter.com/images/friendly-names-02.png)

3) Type in a friendly name.  This can be whatever you want, but we recommend you be descriptive.

4) Press enter or the save icon.

![Dashboard before Friendly Names](http://winsitter.com/images/friendly-names-03.png)

5) Way to go!  Your server now has a friendly name.
