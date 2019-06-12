---
layout: news
generated_by_cms: true
title: NavPool Cold Staking Platform Launched
author: Craig MacGregor
date: '2019-06-12T20:50:46+12:00'
feature_image: /images/uploads/12-june-2019.png
categories:
  - Nav News
---
In this week’s news the NavCoin cold staking platform “NavPool” has officially been launched, the community funded marketing campaign “All Eyes on Us” is about to hit the web and we keep you up to date with the latest development progress and community discussions.

<!--more-->

### NavPool Cold Staking Platform Launched

NavCoin Developer _**prodpeak**_ has officially launched his new non-custodial NavCoin cold staking platform called NavPool. NavPool takes advantage of NavCoin’s dual key cold staking capabilities by allowing the pool to stake coins on behalf of users, while the user always remains in control of the coins for spending.

Setting up an account is anonymous with no email address required for sign up. To stake coins with NavPool, you will need to download the NavCoin Core wallet to generate a spending address for cold staking and cryptographically prove you own the address. NavPool then creates a cold staking address for you to send you coins to and start staking.

NavPool also integrates voting for Community Fund proposals and payment requests. Once your coins are staking you are able to cast proposal votes which will be assigned when your coins stake a block on the network.

The NavPool has already accumulated over 450,000 NAV in its staking pool in just a few short days since it was launched. The ease of not having to run your own full node combined with the security of a non-custodial cold staking service seems to be popular, especially with smaller stakers.

NavPool is offering a 1000 NAV prize to one lucky staker to celebrate the launch of the pool. See the website for more details on the competition and to register for the pool.

<https://www.navpool.org>

And don’t forget to follow [@nav_pool](https://twitter.com/nav_pool) on twitter for all the latest updates.

##### Concerns about Centralisation

While the NavPool service is convenient, there is some discussion in the community about the effect it will have on network security over time. 

Anything which encourages centralisation of the NavCoin network goes against the [NavCoin Core Manifesto](https://navcoin.org/en/governance/#read-manifestos) and it is recommended to run your own staking node if you are able to. While an attack that steals coins is unlikely due to the way cold staking works, the possibility for an attacker to influence community fund voting or network consensus grows as the amount in the pool increases.

Even if the pool is never directly compromised, it still makes for a single point of failure. If the NavPool node goes offline either by some system failure or a targeted attack, the network loses the staking weight of the coins in the pool making a consensus attack easier to achieve.

The other, less understood attack vector of network centralisation is not a consensus attack but rather one that attempts to censor or subvert the blockchain. Typically each node connects to about 8 other nodes to create an efficient mesh network which propagates valid transactions and blocks freely around the NavCoin network. When there are less full nodes online sharing valid blocks and transactions, it reduces the cost to perform a [Sybil attack](https://en.wikipedia.org/wiki/Sybil_attack) where connected peers purposefully censor blocks or transactions from propagating.

NavPool is argued to be only useful for smaller stakers for whom it costs more to run their own node than the staking reward provides. Whether the service adds to or detracts from network security can be considered a sliding scale with no binary option. For example, if you’re unable to run your own node and your coins were previously sitting on an exchange, then withdrawing them and cold staking them in NavPool increases the security of both your coins and the NavCoin network. If you are already staking on your own node and you decide to shut it down and stake the coins with NavPool instead then that is definitely weakening the security of the network.

In all cases, you should always consider running a full node as the first option if you want to stake NavCoin. In fact, even if you don’t stake NavCoin you should consider running a full node to support the network as it strengthens NavCoin against Sybil attacks as explained above.

For more information on staking with NavCoin Core please visit the [NavCoin Knowledge Base](https://info.navcoin.org/navcoin-core/how-to-stake-with-navcoin-core/) or join the discussion on the [NavCoin Discord](https://discord.gg/y4Vu9jw). 

### All Eyes on Us Marketing Campaign

NavCoin Contributor _**beekart**_ is starting to roll out the marketing activities described in his community fund sponsored marketing campaign - [All Eyes on Us](https://www.navexplorer.com/community-fund/proposal/fdac698fcddb49a4264d56f8e218fc9890fd3a1bd77ee6e4db883e52923b4dfe). The first stage is a banner campaign on [CoinGeko](https://www.coingecko.com) with 300,000 impressions scheduled over a one month period starting tomorrow, and sponsorship of one of their weekly newsletters which is mailed out to their 120,000 subscribers. 

The next phase of the campaign starts next week with banners and sponsored articles appearing on [CoinIdol](https://coinidol.com) followed again by as sponsored newsletter pushed out to their subscriber base. 

While the community fund has previously sponsored some content creation in the form of [videos](https://www.youtube.com/watch?v=11NLd_e1AXY) and articles, this is the first time a direct marketing campaign like this has been sponsored by the decentralised fund. As a community driven project with no central point of authority it’s great to see some tangible marketing initiatives like this start to emerge from the community.

### The Privacy Debate Continues

With no clear consensus arising from the last network vote on privacy vs auditability the debate has been ongoing within the community on Discord. NavCoin was originally conceived as a privacy coin with its NavTech subchain being a novel solution in the blockchain space when it was first designed and deployed. Although NavTech has been retired, privacy is in NavCoin’s DNA and is a large contributor to the values and character of the community which has surrounded it over the years.

NavCoin Developer aguycalled has been investigating alternative solutions to ZeroCT now that the Zerocoin protocol is no longer viable. The currently leading proposal is an improved version of the ValueShuffle protocol. ValueShuffle is essentially a combination of [CoinJoin](https://en.bitcoin.it/wiki/CoinJoin), [Confidential Transactions](https://en.bitcoin.it/wiki/Confidential_transactions) and [Stealth Addresses](https://www.investopedia.com/terms/s/stealth-address-cryptocurrency.asp), and Alex has some ideas to make it more scalable, more decentralised all while only relying on very well tested cryptography to provide privacy.

A network vote on the matter is scheduled to start tomorrow. Keep an eye on the [community fund proposals list](https://www.navexplorer.com/community-fund/proposals/pending) and [r/navcoin](https://reddit.com/r/navcoin) for the full details about the new privacy proposal and how to cast your vote.

### NavCoin Core Progress Report

It’s been a busy week in the NavCoin Core development community with 10 pull requests successfully merged to the master branch. This bumps up the total number of pull requests ready for inclusion into the next version of NavCoin Core to 25.  

One of the most noteworthy features to be merged this week would be the implementation of docker gitian builds by _**mxaddict**_. This removes the requirement to setup a debian virtual machine to run the cross platform build for NavCoin Core which is often a difficult and time consuming task to setup and keep stable. Now building the NavCoin Core wallet for all platforms (Mac, Windows & Linux) is managed by a docker script and run by executing only a few commands.

This week also saw the first merged pull request from NavCoin Developer _**soopy452000**_ aka _**sherlockcoin**_ since version 3.x of the software almost 3 years ago.

There are still a couple of outstanding issues that need to be addressed before the next version of NavCoin Core (4.6.1) can be released. The NavCoin Developers are hoping to get these squared away and release the new version within the next couple of weeks.

The bounty program for NavCoin Core is ongoing with more and more bounties being claimed each week. If you want to get paid to contribute to NavCoin’s code all you have to do is claim an issue flagged with the “bounty” tag or if you find a feature or bug you want to work on then write your own issue and request a bounty assessment from _**aguycalled**_.

<https://github.com/navcoin/navcoin-core>

### Community Fund Projects Update

There is currently 88,700 NAV available in the community fund with 7 pending proposals and 4 pending payment requests actively being voted on. 

There are two new proposals being voted on this week by the network.

**Community News #2 (24,533 NAV)**

This proposal is to fund a continuation of the weekly community news publication and supporting social media content throughout the week.

<https://www.navexplorer.com/community-fund/proposal/af007c425386b12f03ed7498852e1975bde926765f605712e40f58bc1933f108>

**Portuguese Community Outreach #2 (5,841 NAV)**

This proposal is to fund a continuing outreach to the Portuguese cryptocurrency community to introduce them to and educate them more about NavCoin.

<https://www.navexplorer.com/community-fund/proposal/260b15f2ba3de70eab87c56644471e71ebab327426312e7592aa1dce13cb28b1>

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
