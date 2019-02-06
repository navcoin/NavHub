---
layout: news
generated_by_cms: true
title: 'ZeroCT Pull Request Opened, AMA Scheduled'
author: Craig MacGregor
date: '2019-02-06T18:37:06+13:00'
feature_image: /images/uploads/zero-ct-pr-opened2.png
categories:
  - Nav News
---
It’s been another busy week throughout the NavCoin community with two major milestones reached, some handy new tools launched and progress made across a wide range of community projects.

<!--more-->

It’s been another busy week throughout the NavCoin community with two major milestones reached, some handy new tools launched and progress made across a wide range of community projects.

### ZeroCT Pull Request Opened

The GitHub Pull Request to start adding ZeroCT transactions to NavCoin has been opened by an anonymous community developer going by the handle Skreener. The NavCoin Core developers have begun working to validate Skreener's implementation of Alex's new privacy protocol. This Pull Request is the first step of implementing ZeroCT and uses denominated accumulators and not Confidential Transactions. The Confidential Transactions addition is expected to come in a subsequent PR once this first phase has been tested. ZeroCT implementation is complicated and will take considerable time to review, refine and test. The PR also adds a new testnet for the ZeroCT transactions. Head on over to the [Pull Request #412](https://github.com/NAVCoin/navcoin-core/pull/412) on GitHub if you want to check out the code and keep upto date with the testing process.

### ZeroCT AMA Scheduled

If you’ve read the ZeroCT white paper you’ll know that ZeroCT is not a simple change to the NavCoin protocol. Alex and Craig are working on some explainer videos and articles which they hope to start publishing over the next few days. As well as providing explainer content, they will be hosting an AMA about ZeroCT on the 12th of February from 7 - 9pm GMT. The AMA will take place on the NavCoin Reddit. The [AMA Post](https://www.reddit.com/r/NavCoin/comments/ankq9s/navcoin_zeroct_ama_tues_feb_12_79_pm_gmt/) is live, and comments will be unlocked for questions 48 hours before the start of the AMA. 

### NavHub 2.0 Launched

After months of work by the NavCoin Core Content Team [NavHub 2.0](https://navhub.org/) has been publicly launched. The website features a full redesign from the ground up, giving the site a definitive purpose and clear separation from the main NavCoin website. The new NavHub site revolves around community engagement and features news, projects and events. The site also contains a comprehensive guides section to help people become contributors to the NavCoin community and the NavHub website. 

The entire site is built using the hugo static site generator and can be updated by simply making a Pull Request on GitHub. With the website launched, it’s now up to the wider NavCoin community to make use of the features and help to maintain the site.

<https://github.com/NAVCoin/NavHub> 

### NavCoin Core Mailing List

Alex has launched the NavCoin Dev mailing list. This style of simple mailing list is one of the communication tools the Bitcoin Core developers use to communicate with a global team. If you’re interested in contributing to NavCoin Core or you simply want to keep up to date with the latest developer updates, make sure you subscribe to this mailing list.

To subscribe simply send an email to “navcoin-dev+subscribe@nav.community” and you will be added to the mailing list. You can view the conversation archive on the nav community site.

<https://mailing.nav.community> 

### Staking Rewards Calculator

With the recent change to static rewards, understanding how many NAV you will stake per year has become slightly more complicated since earnings are dependent on how many other people are staking. Marcus has built a tool where people can enter how many NAV they are staking and then calculate an estimate of their yearly staking rewards based on current network statistics. This staking calculator has now been launched and you can try the calculator at the link below.

<http://staking.navcoin.org>

### NavCoin Core CFund Interface

The NavCoin Core Interns are starting to work on improving the NavCoin Core interface for the Community Fund. Carter has put together a wireframe of the design and published his recommendations to [Issue #383](https://github.com/NAVCoin/navcoin-core/issues/383) on GitHub. This update will make it even easier to create, browse and vote on Community Fund proposals and payment requests directly through the NavCoin Core wallet without needing to use the console commands.

### NEXT Implementing Lite Wallet

Sakdeniz has started work to give users the option of running NEXT as a lite wallet instead of a full node. Currently NEXT connects to the NavCoin Daemon behind the HTML and JavaScript interface which means users have to run a full node and sync the entire blockchain. Once the lite wallet option is available, users will be able to use NEXT in much the same way as NavPay where their coins are instantly available and no syncing is necessary. Sakdeniz is hoping to have the lite wallet implementation completed some time later this month.

To find out more about the NEXT wallet and all its great features, head on over to the NavCommunity site.

<https://next.navcommunity.net> 

### NavCoin Staking Pool

Prodpeak (creator of NavExplorer.com) has begun work on building a cold staking pool for NavCoin users. Staking pools are useful for users with small balances where the rewards would be smaller than the cost of running a full node or hosting it somewhere. There are some decentralisation concerns when it comes to staking pools, especially since the Community Fund governance model is based on the fact one stake equals one vote. Prodpeak is currently working on the capability for staking pool users to cast their votes for the CFund when their coins stake, ensuring users still get their say on important funding proposals.

A cold staking pool like this would make it possible for the pool to stake on behalf of users who hold their spending keys in lite wallets like NavPay or NEXT Lite without them being required to run a full node. Of course, the lite wallet would need to be further developed and the staking pool integrated, but it would be technically possible.

### Community Fund Proposals & Payment Requests

Every week there are more and more great projects being proposed by the NavCoin community. Never before have we seen this level of engagement and activity by such a diverse group of individuals. It’s been awesome to see the community take this opportunity to improve the NavCoin ecosystem and run with it. There are currently 7 pending proposals and 4 pending payment requests active in the community fund. If you are staking coins make sure you head on over, learn what they’re about and cast your votes accordingly.

<https://www.navexplorer.com/community-fund>

That’s all for this week. Don’t forget that you can receive the weekly report by email. If you would like to be added to the mailing list, please [sign up here](http://eepurl.com/cGq92z).

The NavCoin Core team
