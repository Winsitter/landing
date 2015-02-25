---
title: How to Scan Your Computer for Insecure Software
stub: how-to-scan-your-computer-for-insecure-software
date: 2015-02-16
changefreq: weekly
priority: 0.7
css-template: blog.css
template: post.html
author: Bret Fisher
draft: false
---
*This is part of our **[9 Internet Security Tips for Humans](/2015/01/26/9-internet-security-tips-for-humans/)** series. If this is your first time here, read those articles first.*

> Summary: Automatic Windows Updates aren't enough anymore. [Secunia PSI](http://secunia.com/products/consumer/) is fantastic free (for personal use) software for finding all the insecure software on your PC. Mark 30 minutes on your calendar every month to go through your major programs and check for updates.

The most common way for you to "get hacked" is to use the Internet with *vunerable* software with known security issues. **But how do you know what software is vulnerable or outdated?**

**The Answer (for Windows):** You can run [Secunia's free PSI](http://secunia.com/vulnerability_scanning/personal/) (for personal use, paid for corporate use). This scanner operates a bit like Windows Update on each PC, always checking to be sure the software installed on your computer has the most current security updates and doesn't have known security holes in it. PSI will warn you when it finds something, and in many cases will install the update for you.

Note that there are other updaters out there that will scan your PC, but Secunia is the best one to focus on **security vunerabilities**.

Windows Update is great, but only covers Microsoft software. PSI handles the rest of popular software. There is even an [Android version](http://secunia.com/vulnerability_scanning/psi-android/) to find if you have any unsafe software on your smartphone.

Sorry, I know nothing like this on Mac, though for now, this is less of an issue. Just be sure you get your Mac software through the Apple Store if at all possible.

### Alternative to Secunia
An alternative to using Secunia, you can protect against the *worst of the worst* by uninstalling the [most common insecure software](http://www.av-test.org/en/news/news-single-view/adobe-java-make-windows-insecure/?=):

If you use Google Chrome, it blocks [most of this list by default](https://support.google.com/chrome/answer/1247383?hl=en).

#### Java
By far the most insecure software on the planet. Most people don't know if they need it, so I recommend uninstalling it, and if all your programs work, great. If not, just [reinstall it](https://java.com/download). If you *must* have it on your computer, ensure you update every time you see a pop-up to do so.

#### Acrobat
I recommend avoiding Acrobat and using [Nitro Reader](https://www.gonitro.com/pdf-reader). I think it's better in all respects. If you *must* have Adobe Acrobat, always update when it reminds you to, [which is at least monthly](http://helpx.adobe.com/security.html#acrobat). Use version 10 or above.

#### IE
Internet Explorer is only as secure as you keep it updated. You want to ensure Windows Updates run in auto-update mode as much as possible. You should run the latest version (11 as of Jan 2015).

#### Flash
Flash: Although better in recently releases, this used to be a requirement for surfing the web, but many sites including Youtube and Netflix no longer require it. I recommend uninstalling it from your PC/Mac, and when you *need* it, use Google Chrome, which comes with it's own always-up-to-date version of Flash. I've lived without it installed for years.

What do you use to ensure the software you're using is safe? Reply in comments or at [@BretFisher](https://twitter.com/bretfisher). Do you like something other then Secunia?

-----

> I'm Bret Fisher, the Co-Founder of [Winsitter](http://winsitter.com), a Windows Server monitoring and mobile alerting service. I also consult as a sysadmin and developer, have ~30 certifications, and spend my free time helping the community through [Code for America](http://codeforamerica.org) and local user groups. Find me at [@BretFisher](https://twitter.com/bretfisher) and http://bretfisher.com
