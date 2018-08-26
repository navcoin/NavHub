---
layout: news
generated_by_cms: true
title: NavCoin Core 4.3.0 Release Candidate
author: Craig MacGregor
date: '2018-07-11T19:11:27+12:00'
feature_image: /images/uploads/11-07-2018.png
categories:
  - Nav News
---
This week brings your chance to test and comment on the release candidate for NavCoin Core 4.3.0. This update introduces the OpenAlias feature for NavCoin core, adds wallet support for bootstrapping, and delivers some GUI fixes.

This week brings your chance to test and comment on the release candidate for NavCoin Core 4.3.0. This update introduces the OpenAlias feature for NavCoin core, adds wallet support for bootstrapping, and delivers some GUI fixes.

Check out the pull request in GitHub here:

<https://github.com/NAVCoin/navcoin-core/pull/232>

Let’s take a look at the two key new features of NavCoin Core 4.3.0

NavCoin aims to simplify cryptocurrency, and by introducing OpenAlias as a new wallet feature it will make transacting more familiar and easier for users. NAV OpenAlias securely converts a wallet’s full 34 character alphanumeric address into an easy to remember ‘email style’ address, for example yourname@nav.community.

If you want to get your own name as part of your NAV OpenAlias address, you’ll have to hop to it after 4.3.0 is released, because name duplication is prevented - there can be only one rupert.rabbit@nav.community.

Bootstrapping support is a new feature that makes it quicker and easier to jump-start the NavCoin blockchain when you’re setting up a NavCoin Core wallet or NavPi for the first time. Bootstrapping enables you to download the full blockchain directly from a trusted URL. Because blockchains are large files (about 2.2GB) doing it this way is a lot faster than the standard peer-to-peer syncing mechanism.

We need your help testing and commenting on the 4.3.0 release candidate. It doesn’t require hard core developer skills, so anyone in the NavCoin community can (and should) get involved. The binaries are available on the link below. All you need to do is download the one that’s relevant to your operating system and run it to see if it works as it should.

<https://build.nav.community/v4.3.0-rc>

Once you’ve done that post your comments in the GitHub pull request - whether it worked successfully or you found a bug. Here is the link to the PR.

<https://github.com/NAVCoin/navcoin-core/pull/232>

When the community is happy with results of testing 4.3.0 it will be released on the mainnet. One thing to note is that if you want to access the new NAV OpenAlias feature, you will need to download the new version of the NavCoin Core wallet.

### Developer Updates

Over the past week the Core dev team has focused on testing the voting, proposal, and payment request functionality in the NavCoin Community Fund. Testing was performed on the new NavCoin Core install and build configuration for developers working on NavCoin Core in OSX, and scoping began on the build out of project pages for NavPi and OpenAlias on the NavHub Community website.

Another priority was developing an experimental fix for community members who have been experiencing crashes with their NavPi's. The fix is currently being tested with users, so if you are having issues with your NavPi, please message 'Ro#6388' on Discord. Alongside this work they are also working on an updated image that will run on the Raspberry Pi 3+.

Berlin is fast becoming a global centre of blockchain technology, and because of that there is a lot of opportunity for learning. Last week after a talk about cross-chain atomic swaps, the Berlin based devs had an in-depth discussion with one of the leading researchers in the field. The new insights they developed as a result of this are likely to influence their proposal for how Atomic Swaps could be implemented on NavCoin, the Kauri Wallet, and a possible DEX in the future.

![Berlin Meetups](/images/uploads/berlin-collage.jpg)

### Core Content Creators

Now that NavCoin Core 4.2.1 soft fork has locked in and NAV has begun accumulating in the Community Fund, the Core Content Creators are spending much of their time working on compiling information to help community members understand how the Fund works. There will be guides to creating and submitting proposals, and ways to enable collaboration on projects with other community members. This content will be rolled out over the coming months as stage two of the Community Fund gets closer to activation.

### Top Community News

Once again it’s the Sakdeniz show. Continuing the Community Fund theme, Sakdeniz produced this video that highlights the simplicity of the idea behind the fund. For inspiration check it out, then head over to the NavCoin community fund forum he built, which is just one of several channels you can use to discuss your project ideas and collaborate with other community members.

<iframe width="100%" height="315" style="margin-bottom: 20px;" src="https://www.youtube.com/embed/R5LbxuWDCBc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<https://navcommunity.net/community-fund>

That’s all for this week,

NavCoin Core
