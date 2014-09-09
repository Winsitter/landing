---
title: "Know Your Server's Broken... Before Your Users"
stub: know-your-servers-broke-before-your-users
date: 2012-05-22
changefreq: weekly
priority: 0.7
css-template: blog.css
template: post.html
author: Bret Fisher
draft: false
---
Your at lunch, or worse, taking that much needed weekend getaway.  The phone rings and it's a VP from the office.  Somethings broken.  Maybe this time it's email, or a database, web site, file server, print queue... whatever it is... they know before you.  That sucks.

This has happened to me so many times I've lost the will to keep score.  I try to purse the event logs monthly, and of the many monitoring solutions I've installed, all have various limitations or issues of complexity.  I never make the time to fully tweak those things to monitor *everything* I care about, consequently, the monitoring only partially works or at best only finds an issue that sits in my inbox -- which I'm not checking 'cus I'm *not working*.

After years of never having a great and easy solution to this problem, and seeing other sysadmins around me struggling to do the *minimum* in monitoring, I realized I could help solve this problem.

Out of that pain came the idea.

I thought...What if we took the combined ideas of everyone we knew in the biz of Windows server engineering and built an analysis engine in the cloud?  What if we built an installable agent for servers that would send the relevant availability, configuration, and security info to that engine in the cloud?  Yea, that's right.  Make it awesome.   Oh, and make it simple and *opinionated* so you don't spend days just setting up stuff (i.e. it would have a default opinion on what it thinks are "overworked hard drives" and tell you when they're overworked).  What if it actually *reduces* your workload rather than give you another app to manage (ever hear of alert fatigue)?  What if the analysis engine does all the wizardry and you just get alerts the way you prefer (email/ sms/ twitter/ facebook/ jabber/ phone)?  What if we make it low cost for lots of servers, but always give it away for a few servers so the small business superstar can still do monitoring?  What if it only takes 5 minutes to get a server fully monitored?

What if I stop asking myself these questions and we do something about it?!

Welcome to Winsitter.

~ Bret and Kevin
