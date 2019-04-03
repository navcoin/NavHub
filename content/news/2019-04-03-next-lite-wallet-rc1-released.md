---
layout: news
generated_by_cms: true
title: NEXT Lite Wallet RC1 Released
author: Craig MacGregor
date: '2019-04-03T20:43:13+13:00'
feature_image: /images/uploads/03-04-2019.png
categories:
  - Nav News
---
The NEXT Lite Wallet RC1 has been released, progress has been made patching NavPay for cold staking and NavCoin is now on social media platform Cent.

<!--more-->

### NEXT Lite Wallet RC1 Released

The first release candidate (RC1) of the NEXT Lite wallet has been officially released. For those who are unfamiliar with the project, NEXT is a modern desktop wallet interface originally built for NavCoin and which now has support for other cryptocurrencies. Previously the NEXT wallet needed to be run as a full node which requires downloading the entire blockchain of the cryptocurrencies you want to use. The NEXT developers have now enabled the wallet to run in “lite” mode which doesn’t require the full blockchain to be downloaded. While the wallet looks to a remote server for the blockchain, it still retains control of its private keys so it can create and sign transactions before broadcasting them to be relayed. Any attempt to tamper with the transaction in transit would invalidate the signature and it would be rejected by the rest of the network. Behind the scenes NEXT uses the same open source framework as NavPay. These libraries have been well tested and reviewed making them a solid starting point for any lite wallet.

The NEXT Lite Wallet has been in public beta for a number of weeks and the development team behind it is now confident the remaining bugs have been ironed out. They’ve added some additional security measures and community fund features to the latest version and published it as RC1. To read the full change log and get the latest version of the wallet visit the NavCommunity blog.

<https://blog.navcommunity.net/2019/03/24/next-lite-wallet-rc1-live>

### NavPay Cold Staking Progress

NavCoin Core have been working towards allowing NavPay to recognise cold staking transactions when a NavPay address has been used as the spending key. This has been no easy task and has taken the core team longer than originally thought given the complexity of the code base. Craig and Alex have made some great progress this week though and they’ve been able to successfully see and spend cold staking transactions from NavPay.

While this is a great step forward some additional testing is still required and a deployment plan needs to be designed and run through on the staging environment. There’s been modifications to at least three of the forked bitcore repositories, navcoin core and the navpay front end application. This means as well as redeploying the code to the servers, updating the daemons and reindexing the blockchain a new version of NavPay will need to be built and released.

It’s hoped the testing and staging deployment can be done within the next week, keep an eye on Google Play for the app update as it becomes available.

### NavCoin Social on Cent

The NavCoin Community now has a presence on the Ethereum powered social network — Cent. Content posted on Cent generates income based on the number of views, likes and shares. These blockchain based platforms are great for combating censorship as well as helping to directly reward content creators rather than advertising corporations for their work. To fully take advantage of the platform it’s recommended to use an Ethereum enabled browser extension like Metamask. Check out the NavCoin account below and follow it to support the efforts of the NavCoin Community.

<https://beta.cent.co/@NavCoin>

### NavCoin Core Update

There are currently three PR’s which have been merged into master of NavCoin Core since the last release. The merged features include the Community Fund GUI, accumulation of staking rewards into different addresses and mnemonic seed phrase support. While it’s likely there will be other features merged into master before the next release is cut, Matt has started putting together the release notes for NavCoin Core 4.6.0.

<https://github.com/NAVCoin/navcoin-core/blob/master/doc/release-notes/release-notes-4.6.0.md>

Alex has also fixed an issue with the DNS Seeder which means nodes should find peers automatically again and not need to resort to manually adding nodes from the peer lists on the block explorers.

### ZeroCT Review

Panarte has contacted Bart Preneel, a respected security and cryptography researcher, to review the ZeroCT protocol. The ZeroCT protocol has already been reviewed by Sarang Noether (Lead Cryptography Researcher @ Monero), Sam Dobson (Cryptography Researcher & Bitcore Engineer) and a number of other industry peers. However, in such a complex and security conscious field as cryptography, it is well understood that the best way to ensure a protocol is sufficiently secure is through ongoing peer review. We welcome the chance to have another experienced cryptographer review the protocol and offer feedback.

If you want to read more about ZeroCT check out this Medium post by Craig;

<https://medium.com/@craig.b.macgregor/the-new-privacy-protocol-on-the-block-zeroct-explained-b34f6885dd5>

Or you can try out the ZeroCT implementation on the NavCoin testnet at this GitHub PR;

<https://github.com/NAVCoin/navcoin-core/pull/412>

### Community Fund Projects Update

There is currently 112,800 NAV available in the community fund with 6 pending proposals and 2 pending payment requests active being voted on. If you are staking coins make sure you head on over, learn what they’re about and cast your votes.

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
