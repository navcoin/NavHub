---
layout: news
generated_by_cms: true
title: Exchanges Resume NAV Deposit & Withdrawal
author: Craig MacGregor
date: '2019-05-22T21:40:39+12:00'
feature_image: /images/uploads/copy-of-navhub-template-1-.png
categories:
  - Nav News
---
After some recent service disruption, all the major exchanges have resumed NAV deposits and withdrawals, a Ledger integration is underway and the NavDroid Debian package is nearing completion. 

<!--more-->

### Exchanges Resume NAV Deposits & Withdrawals

After some weeks of having their NAV wallets in maintenance mode, all the major NAV exchanges are now open for deposits and withdrawals again. The network issue which caused the outage was resolved in NavCoin Core 4.6.0 which was released on the 7th of May. It took all of the exchanges some time to test the wallet and restore the service but we are happy to say that they are now functioning nominally again. Binance had an additional delay due to the system wide hack they suffered, but they have now also resumed their service.

A lot of the instant exchanges which trade NAV are linked to Binance, Bittrex, Poloniex or LiteBit to fill orders behind the scenes. When these liquid exchanges disable deposits for a coin, often the instant exchanges automatically halt trading also. These instant order services should now also be available again.

<https://navcoin.org/en/buy-navcoin>

### Ledger Nano Integration Started

NavCoin Core Contributor mxaddict is proving to be a valuable asset to the NavCoin Development Community. As well as his recent efforts contributing to NavCoin Core and claiming developer bounties, he has started work on a Ledger Nano integration for NavCoin. 

So far mxaddict has the basic BOLOS App for NAV working on the ledger firmware.

![null](/images/uploads/navcoin-ledger.png)

Pull Requests for the BOLOS app have been submitted to the Ledger GitHub repository and is now awaiting feedback, review and integration.

The next steps are to configure an interface to the ledger device. There are a few options to consider; Ledger Live, NavPay or NavCoin Core. All three can eventually have ledger interfaces added and a decision about which one to do first will depend on which one can be done the fastest after some ongoing investigation is completed.

At this point it is not certain how long the interface integration will take or when NAV will be available for public use on the Ledger devices. We do understand that hardware support is an important part of the NavCoin eco-system, especially with cold staking now available. Storing your cold staking spending keys on a secure hardware wallet like the Ledger would be the simplest and most secure way to store your NAV while you stake.

Join the NavCoin Discord and keep an eye on the weekly report to stay up to date with progress on the Ledger integration project.

<https://discord.gg/y4Vu9jw>

### NavDroid Package Nearing Completion

NavCoin Community Developers mntyfrsh and caffeine have been working together to refine the NavDroid interface and bundle it into a debian package for distribution. When the debian package is released the NavDroid software will be able to be easily installed on x86 Ubuntu based platforms as well as ARM for ODroid. Other advantages of releasing it as a debian package are that you won’t need to download and flash the whole SD card to get the software working and you can install it onto an existing system without needing to do a lot of environment configuration.

The NavDroid project is still looking for front end web developers and testers to help refine the software and test it out before launch. If you want to get involved and be a part of this awesome open source project, join the NavCoin Discord channel #dev-navdroid and say hi.

<https://discord.gg/y4Vu9jw>

### NavCoin Core Progress Report

NavCoin Core has been a hive of activity since the launch of the developer bounty program. There are currently 47 open issues and 10 open pull requests with 4 pull requests merged to master within the last week and a total of 11 pull requests merged to master since the release of 4.6.0 just over two weeks ago.

Some of the notable additions are the OP_POOL script which will be used to denote coinbase transactions mined by the NavPool service as a way to monitor its network influence as well as improvements to the importaddress command so it watches cold staking addresses correctly.

To check out everything that’s being worked on head on over to the NavCoin Core GitHub repository and take a look at the Issues and Pull Requests tabs. There’s still plenty of issues with developer bounties assigned if you want to earn some NAV and contribute to NavCoin Core. All you have to do is claim an issue or if you find a feature or bug you want to work on then write your own issue and request a bounty assessment from aguycalled.

<https://github.com/navcoin/navcoin-core>

### Community Privacy Vote Concludes

With the recent issues discovered in the Zerocoin protocol, the NavCoin Community initiated a sentiment vote on whether it was better to have transaction amounts cryptographically hidden or remain able to be audited. The ZeroCT protocol as defined in its whitepaper would make the amounts cryptographically hidden to provide stronger anonymity. Some community members are concerned at the lack of auditability hiding the amount creates and fear that even though the cryptography i sound, the implementation could introduce inflation bugs.

The vote was conducted by creating two community fund proposals, one to vote YES if you think the amount should be cryptographically hidden to provide more complete privacy and another to vote YES if you think the amount should be visible to retain auditability.

The vote has been close with the proposal to keep the amounts auditable closing with 52% YES votes on its first voting cycle. The proposal to cryptographically hide the amounts is still open.

It’s quite a close race and so far there is no supermajority agreement either way. In NavCoin soft forks to change the consensus require 75% agreement which can be challenging if the issue is divisive.

Either way, ZeroCT will need to redesigned to eliminate the issue found in the Zerocoin protocol since that part is not related to hiding the transaction amounts. Once a new solution is found, one option could be to deploy the privacy implementation in two soft forks; one with the senders/receivers hidden and an additional soft fork to hide the amounts and let the network decide. Depending on what solution is found will dictate whether this two staged approach is possible.

For now, the privacy debate rages on. If you’d like to share your thoughts or work with the NavCoin Core Developers on NavCoin’s new privacy implementation join the NavCoin Discord server channel #privacy and #dev-zeroct and have your say.

<https://discord.gg/y4Vu9jw>

### NavCoin Africa Meet-Up

Some weeks ago Fuseini Alhassan - also known as cryptoeye - put forward a Community Fund proposal to sponsor a NavCoin Meet-Up and cryptocurrency education session at the Bolgantanga Technical University in Ghana. The proposal passed, cryptoeye received the funding and has since put on the event which was the first NavCoin meet-up to be held on the African continent. The meet-up was a success with a full class of 49 participants attending eager to learn about cryptocurrency and NavCoin. The attendees received airdrops of NavCoin so they could experience how fast and easy cryptocurrency is to use, NavCoin t-shirts and an education seminar on the benefits of cryptocurrencies and NavCoin.

![null](/images/uploads/d6udlcguwaay5fu1.jpg)

![null](/images/uploads/d6udnabuuaa1eqn.jpg)

![null](/images/uploads/d6udkf_u8aa799s.jpg)

![null](/images/uploads/d6udo1rv4aaeq6g.jpg)

Ghana is the recipient of USD $2.2 Billion in remittances annually and Africa at large is a huge economy which is ripe to make use of such technologies as NavCoin. Having people on the ground in the region like cryptoeye to help educate people at the grassroots level is such an important part of helping Ghanians achieve financial autonomy.

The Ghana meet-up marks the first NavCoin event to be sponsored by the decentralised community fund and is a great example of what can be achieved with the fund. It’s also an important stepping stone for blockchain events in the region and we look forward to seeing more education sessions from NavCoin Africa in the future.

If you want to keep up to date with what cryptoeye is up to in Ghana and get involved, make sure you start following NavCoin Africa on twitter.

<https://twitter.com/NavcoinT>

### New Exchange Listings

NavCoin is now available on two new exchanges;

**CoinSwitch** - https://coinswitch.co

An instant exchange platform which supports over 300 currencies and simplifies the trading process.

**StakeCube** - https://stakecube.net 

A proof of stake and masternode pooling service which also has exchange capability between the coins it supports.

As with all new listings and services it is our duty to inform the community about them, but it can’t be considered an endorsement. It is always up to you to do your own due diligence before sending your NAV or other forms of money to any third party service. 

### Community Fund Projects Update

There is currently 100,000 NAV available in the community fund with 9 pending proposals and just 2 pending payment requests actively being voted on. 

There are five new proposals this week;

**All Eyes on Us, Online Marketing Campaign (25,500 NAV)**

Beekart wants to create banner advertisement campaigns and articles promoting NavCoin and run them across multiple cryptocurrency related websites.

<https://www.navexplorer.com/community-fund/proposal/fdac698fcddb49a4264d56f8e218fc9890fd3a1bd77ee6e4db883e52923b4dfe>

**NavCoin Analysis Article (1,000 NAV)**

Natalie, a blockchain writer who wants to write and publish an analysis article about NavCoin.

<https://www.navexplorer.com/community-fund/proposal/a4b24b1db4363ed184bc2b84f0a9facb83cf5111158df39b3ba02ee6bc433e9b>

**CryptoGo Video Marketing (60,000 NAV)**

CryptoGo wants to create professional promotional videos for NavCoin and publish them online.

<https://www.navexplorer.com/community-fund/proposal/a1560f30fbcee6d3dd80fb4489001e98b4da85e748cf1b23b92c407c3d2df3e1>

**Website Optimization and Hosting (3,896 NAV)**

Red010b37 to cover the hosting costs of the front end deployment of NavCoin’s public websites and optimize them to reduce the hosting costs.

<https://www.navexplorer.com/community-fund/proposal/7857cbd10c96d377b691203b985d83a3ff112d50eae159fc5db754995938dbe4>

**Investor Brochure (2,000 NAV)**

Igor Fridkins wants to create a slick looking brochure to explain the NavCoin project to new investors.

<https://www.navexplorer.com/community-fund/proposal/6c18c04795e0042d3361c747d7c33ecebb48856276c7fea90f3aa98cea2eff18>

**+ More Existing Proposals**

To check out the full list of pending proposals and payment requests, visit the community fund page of the block explorer.

<https://www.navexplorer.com/community-fund>

And remember, anyone can submit a funding proposal which gets voted on by the network. To learn more about how the community fund works and kickstart your next crypto project, head on over to the NavCoin Community Fund page.

<https://navcoin.org/en/community-fund>

That’s all for this week. Don’t forget that you can receive the weekly report by email. If you would like to be added to the mailing list, please [sign up here](http://eepurl.com/cGq92z). 

And if you want your project included in the community news, jump on the [NavCoin Discord](https://discord.gg/y4Vu9jw) and post it to the #weekly-update channel.

The NavCoin Core team

- - -

**Join the conversation**

[NavCoin&nbsp;Discord](https://discord.gg/y4Vu9jw) | [NavCoin&nbsp;Reddit](https://www.reddit.com/r/NavCoin) | [NavCoin&nbsp;Twitter](https://twitter.com/NavCoin) | [NavCoin&nbsp;Facebook](https://www.facebook.com/NavCoin/) | [NavCoin&nbsp;Telegram](https://t.me/navcoin) | [NavCoin&nbsp;Bitcoin&nbsp;Talk](https://bitcointalk.org/index.php?topic=679791)

**Resources**

[NavCoin&nbsp;Knowledge&nbsp;Base](https://info.navcoin.org) | [NavCoin&nbsp;YouTube](https://www.youtube.com/NavCoinCore) | [NavCoin&nbsp;Core&nbsp;GitHub](https://github.com/navcoin/navcoin-core)

**Learn more about NavCoin**

[NavCoin&nbsp;Community&nbsp;Fund](https://navcoin.org/en/community-fund) | [NavCoin&nbsp;Governance](https://navcoin.org/en/governance) | [NavCoin&nbsp;Core&nbsp;Roadmap](https://navcoin.org/en/roadmap) | [NavCoin Community&nbsp;Hub](https://navhub.org) | [NavCoin&nbsp;Community&nbsp;Projects](https://navhub.org/projects)
