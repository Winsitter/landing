---
title: How does the Winsitter agent do background updates?
stub: how-does-the-winsitter-agent-do-background-updates
date: 2014-06-09
author: Kevin Griffin
template: post.html
draft: false
---
As we get closer to removing our beta tag, I wanted to take a couple minutes and discuss how Winsitter performs background updates.

Almost all modern applications we run nowadays update themselves automatically. A lot of the time this is done through some sort of UI construct that says "Hey! There is an update available - do you want to download it?". We would love to run Winsitter in this capacity, but we find that a majority of our users don't log into the servers they manage to update an agent.

So how do we keep your monitoring-as-a-service agents running our latest software? We use Microsoft's own Windows Installer (MSI) technology to install updates using auto-created Scheduled Tasks on your server. This way, it's trackable, self-documenting, and using Microsoft's built-in tools. It's also simple and reliable, and removes the need for us to run another service just for updates (that's often the way other vendors do it, but we feel it adds unnecessary complexity).

Every five (5) minutes, the Winsitter agent will check the server for an available update. We plan on increasing this interval after the beta to something like 8-12 hours. If Winsitter is told an update is available, it will add a Scheduled Task within Windows.

The Scheduled Task will wait 2 minutes, and then execute our update installer MSI from the Internet. This is similar to the process used to install Winsitter initially. The MSI installer will perform the in-place update of the Winsitter agent, and restart the service. This whole process takes less than 1 minute.

A common problem that we're working to alleviate is if your machine is pending a reboot. If a reboot is pending, MSIs typically will not run as a protection to system files. This causes the MSI install to fail, and Winsitter will reschedule on its next update interval. If you had Windows Updates that applied but not rebooted, for instance, Winsitter can't update until after you reboot the server.

Our ultimate goal is to be able to seamlessly update your Winsitter agents, and also give you some control over when/if that happens, and which ones are out of date. As we improve the agent, that will become a reality. We appreciate your cooperation as we work through these processes!

Thanks for being amazing beta testers!

Kevin Griffin
CTO, Winsitter
kevin@winsitter.com
