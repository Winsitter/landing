---
name: FAQ
stub: faq
template: page.html
---
* **System Requirements?**
  * Windows Server 2003 with SP2 and newer (including Server 2012 R2)
  * .NET Framework 4.0 Full
  * Service typically uses ~50MB RAM
  * ~5MB drive space, Defaults to c:\Program Files (x86)\Winsitter
  * IPv4 HTTPS (TCP 443) open to api.winsitter.com.
  * A tiny about of bandwidth.  Seriously…. think dial up modem stuff.

* **What information to you store and how is it protected?**
  * Our first goal is to not track highly valuable data. We only track performance monitor stats and basic hardware and software stats, versions, etc. If you ever want a complete copy of the metrics data we collect on your servers, just ask.
  * Then we do all the standard industry best practice stuff.  Our Agents all communicate back over https.  All agent connections require authentication with a unique key that is NOT your account password, so we're not storing that on servers.
  * We encrypt your account password on our servers.
  * Lastly, since we're running on Microsoft Azure, we gain the benefits of a enterprise-grade security infrastructure.

* **Can Winsitter monitor without an agent?**
  * No. But we think that's a good thing. While many systems support using WMI and SNMP, we find the technical hurdles of implementing monitoring using those protocols too great for many businesses. There are lots of other monitoring tools that support "agent-less monitoring".  We have used many of those ourselves, and they do work, but we're going for a simpler and easier way to monitor.  We think a quick and easy install on each server is something everyone can do. Plus, by running locally we're not limited to what data WMI and SNMP can provide.

* **Can Winsitter monitor Windows XP, Vista, 7, 8, etc.?**
  * Yes, but Winsitter is meant for systems that need to be up and working. It's not designed for the on-again off-again nature of user PC's, but if you're using a Windows client OS to provide always-on services, Winsitter is great way to monitor it's health and availability.
  * Note that Winsitter will alert if a system goes offline suddenly, but if the OS shuts down gracefully, it will assume you meant to do that, and not warn. It will show as off in the Dashboard.
