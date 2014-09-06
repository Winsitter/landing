---
title: "Winsitter: What's Next"
stub: winsitter-whats-next
date: 2013-07-30
author: Bret Fisher
template: post.html
draft: false
---
Winsitter team has been quiet so far in 2013, as we create the all-new Awesome Sauce version of Winsitter.

We have been in beta for since last fall, and I hope you have found this service useful.  In that time we've delivered only a few minor updates and I'll give you some details on why, and then what's next... We've got big things coming.

Our beta release is running on Windows Azure, Microsoft's cloud platform for making awesome software.  In starting out, we made all sorts of assumptions about how to make this system secure, scalable, fully redundant, and easy to use. The true challenge is to do *all* of those at the same time. It was an experiment. Since last year we've been monitoring many o' servers and watching as our user base grows so we could see how the whole thing will respond under load.

In that time we've realized many of our initial assumptions were more complicated than they need to be, so here in 2013 we've overhauled nearly everything to make Winsitter a lean, mean monitoring machine.  In doing so, we've had a 50% reduction in our dependency codebase, increased redundancy, and given ourselves the ability to change faster in the future.

Our upcoming infrastructure switch to this version (switching from C# .net to Node.js on the backend) will actually be cold-turkey... meaning you'll need to create a new free account and manually upgrade the agent on your servers. I know that'll require some rework on your part, but I promise it's worth it.

Some of the new features include a re-written web dashboard that auto-updates with any monitoring changes, an easier agent install that also auto-updates, and new monitoring analysis of common Windows Server problems.

Stay tuned. And, we'd love to hear your feedback on Twitter (<a href="http://twitter.com/winsitter">@Winsitter</a>), <a href="https://www.hipchat.com/gGgFwJx3o">WebChat</a>, or email (<a href="mailto:help@winsitter.com">help@winsitter.com</a>).
