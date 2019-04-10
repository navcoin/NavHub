---
layout: news
generated_by_cms: true
title: NavPay Scheduled Maintenance
author: Craig MacGregor
date: '2019-04-10T20:15:11+12:00'
feature_image: /images/uploads/10-04-2019.png
categories:
  - Nav News
---
NavPay Cold Staking Upgrade is Scheduled to take place this week, preparations are being made to release NavCoin Core 4.6.0 and Alex has been interviewed on Cointelegraph Español.

<!--more-->

### NavPay Scheduled Maintenance

Testing for NavPay’s support of cold staking spending has been successful and deployment to the staging environment is scheduled to happen within the next 24 hours. If the staging deployment goes smoothly deployment to the live environment will begin on Friday 12 April at 10am NZT (GMT+12). It is expected NavPay will be unavailable for transactions from this time until the deployment is successful which could take one or more hours. The exact time and duration of downtime will be confirmed via twitter before the scheduled maintenance is due to occur. All efforts will be made to minimise the downtime required during this upgrade.

Keep an eye on the [@NavCoin](https://twitter.com/NAVCoin) twitter account over the next few days for further updates.

### NavCoin Core Update

Two new pull requests have been reviewed, approved and merged into the master branch of NavCoin Core. The first one is a patch required for NavPay’s cold staking update that shows cold staking outputs as utxo’s of the spending key. This means, if you run a fully indexed node and execute the RPC command “getaddressutxos” with the spending pubkeyhash of a cold staking address, you will now receive any utxo’s available to spend by that key including those in cold staking. Previously only regular utxo’s sent directly to that pubkeyhash were returned. 

The second pull request was a simple patch to the spam filter that was introduced to prevent block header spam which is now disabled when the client is performing its initial block download. Having the spam filter enabled during initial block download can result in nodes that are only connected to a small number of peers to trigger the spam filter with a false positive if they receive many valid blocks in a row from the same peer. The main attack vector for the header spam attack is to knock staking nodes off the network by exhausting their physical resources and then attempting to double spend while the network weight is reduced. 

Removing the spam filter on initial block download is not a security concern since these users are not contributing to the staking weight of the network until they have finished their initial block download.

With these two pull requests merged and no more imminent pull requests requiring review, NavCoin Core will look to finalise NavCoin Core 4.6.0 and publish a release candidate to the community once smoke testing has been performed.

### Cointelegraph Español Interview

Alex V has been interviewed by Cointelegraph Español about NavCoin and ZeroCT. The article gives a good overview of the NavCoin project, our recent updates like the Community Fund and Cold Staking, some technical description of the ZeroCT protocol as well as insight into Alex’s views on privacy and an individuals rights.

It’s an interesting article and a great outreach piece to the Español crypto community. If you’re part of any spanish speaking crypto groups, make sure you hit the share button and help by introducing your friends to NavCoin and showing them what it’s all about.

<https://es.cointelegraph.com/news/alex-vazquez-navcoin-is-a-cryptocurrency-whose-development-is-100-percent-driven-by-their-community>

And if you don’t speak Spanish, press the translate button and give the article a read anyway!

### Buy Amazon Gift Cards in the EU with NAV

NavCoin has been integrated into the Sheldon Store site where you can buy Amazon gift cards for use in European Union countries such as Spain, Italy, France and Germany. While Amazon doesn’t accept cryptocurrencies directly, services like these provide additional spending utility to cryptocurrencies like NavCoin. Gift Cards can be bought in many denominations ranging from €0.15 to €100.00. For further information and to purchase gift cards please visit the Sheldon website directly.

<https://sheldoneu.store> 

### New Exchange Listings

NavCoin has been listed on two new exchanges this week; Zwaply and MyLocalCoin.

Zwaply is an instant exchange that allows conversion between many leading cryptocurrencies including Bitcoin, Ethereum and NavCoin. It’s designed to be a non-custodial, secure and private crypto exchange that can operate on top of messaging apps like Twitter, Telegram and more. Whether you just want to swap some crypto or integrate an exchange bot into your community IM channel, check them out.

<https://zwaply.com>

MyLocalCoin is a UK based cryptocurrency exchange platform that now supports BTC and USDT pairs for NavCoin. The exchange promotes their platform as secure, with multi-stage wallets ensuring the majority of coins are held in cold storage at any given time. It is also committed to complying with all current UK regulations surrounding cryptocurrency that help to prevent unlawful use of their platform.

<https://mylocalcoin.com>

### Community Fund Projects Update

There is currently 112,450 NAV available in the community fund with 6 pending proposals and 1 pending payment requests active being voted on. As a new addition to this section of the weekly report we will be highlighting new proposals in their first voting cycle. We plan to feature all new proposals here moving forward and being featured shouldn’t be considered an endorsement. Please continue to do your own due diligence and vote as you see fit.

#### Social Media Marketing for 2019 (22,500 NAV)

This proposal is submitted by blockchain marketing agency Onyxxo to fund advertising and brand awareness for NavCoin on all major crypto channels.

<https://www.navexplorer.com/community-fund/proposal/86d521a55e402fe2a34ff72a96af9c43108d6726fe134eb3521d4d0210459e0e>

#### Translation of 10 Articles to French (5,000 NAV)

This proposal is submitted by Pan Arte to translate 10 of the most relevant articles about NavCoin into French to create introductory materials for the French crypto community.

<https://www.navexplorer.com/community-fund/proposal/2455135c51a2b3dc090c4ba21716e397fd23a0fde5430c6650c2753cc1816b58>

#### FCAS Rating for NavCoin (4,000 NAV)

This proposal is submitted by Craig MacGregor to sponsor Flipside Crypto to review NavCoin and issue their Fundamental Crypto Asset Score (FCAS) as seen on CoinMarketCap.

<https://www.navexplorer.com/community-fund/proposal/3bfa0d3354ddde6a1570c1ff7818353d6e9408642462775b731c57110572074c>

#### + More Existing Proposals

To check out the full list of pending proposals and payment requests, visit the community fund page of the block explorer.

<https://www.navexplorer.com/community-fund>

And remember, anyone can submit a funding proposal which gets voted on by the network. To learn more about how the community fund works and kickstart your next crypto project, head on over to the NavCoin Community Fund page.

<https://navcoin.org/en/community-fund>

That’s all for this week. Don’t forget that you can receive the weekly report by email. If you would like to be added to the mailing list, please [sign up here](http://eepurl.com/cGq92z). 

And if you want your project included in the community news, jump on the NavCoin Discord and post it to the #weekly-update channel.

The NavCoin Core team

- - -

**Join the conversation**

[NavCoin&nbsp;Discord](https://discord.gg/y4Vu9jw) | [NavCoin&nbsp;Reddit](https://www.reddit.com/r/NavCoin) | [NavCoin&nbsp;Twitter](https://twitter.com/NavCoin) | [NavCoin&nbsp;Facebook](https://www.facebook.com/NavCoin/) | [NavCoin&nbsp;Telegram](https://t.me/navcoin) | [NavCoin&nbsp;Bitcoin&nbsp;Talk](https://bitcointalk.org/index.php?topic=679791)

**Resources**

[NavCoin&nbsp;Knowledge&nbsp;Base](https://info.navcoin.org) | [NavCoin&nbsp;YouTube](https://www.youtube.com/NavCoinCore) | [NavCoin&nbsp;Core&nbsp;GitHub](https://github.com/navcoin/navcoin-core)

**Learn more about NavCoin**

[NavCoin&nbsp;Community&nbsp;Fund](https://navcoin.org/en/community-fund) | [NavCoin&nbsp;Governance](https://navcoin.org/en/governance) | [NavCoin&nbsp;Core&nbsp;Roadmap](https://navcoin.org/en/roadmap) | [NavCoin Community&nbsp;Hub](https://navhub.org) | [NavCoin&nbsp;Community&nbsp;Projects](https://navhub.org/projects)
