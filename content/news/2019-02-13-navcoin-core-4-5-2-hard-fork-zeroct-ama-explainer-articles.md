---
layout: news
generated_by_cms: true
title: NavCoin Core 4.5.2 Hard Fork
author: Craig MacGregor
date: '2019-02-13T18:08:31+13:00'
feature_image: /images/uploads/13-feb-2019.png
categories:
  - Nav News
---
As always there’s been a lot going on in the NavCoin Community this week. The major news is that NavCoin is hard forking this Saturday 16 February at 18:30 GMT to to mitigate an issue with the Community Fund payment requests
<!--more-->

As always there’s been a lot going on in the NavCoin Community this week. The major news is that NavCoin is hard forking this Saturday 16 February at 18:30 GMT to to mitigate an issue with the Community Fund payment requests.

### NavCoin Core 4.5.2 Hard Fork

NavCoin is hard forking at block 2882875 to mitigate an issue with the Community Fund payment requests. Please update to NavCoin Core 4.5.2 before Saturday 16 February at 18:30 GMT to avoid network disruption.

The full details of the issue have been written up to the NavCoin Notice announcing the release of the 4.5.2 version on NavCoin.org

<https://navcoin.org/en/notices/2019-02-12-navcoin-4-5-2-hard-fork>

NavCoin Core remains committed to their manifesto’s goals of minimising the use of hard forks. In this instance it is again only being used to patch an implementation bug and not enforce new consensus rules.

NavCoin Core 4.5.2 also contains a patch that increases the blockchain sync speed as well as some other fixes and documentation updates.

To read the full changelog please read the NavCoin Core GitHub [release notes](https://github.com/NAVCoin/navcoin-core/blob/master/doc/release-notes/release-notes-4.5.2.md).

You can download version 4.5.2 from the downloads section of navcoin.org or directly from the NavCoin Core GitHub release.

<https://navcoin.org/en/wallets/#download-core>

If you’re not sure how to update your wallet, please check out the article in the knowledge base or join the discord community for further assistance.

[How to Update your NavCoin Core Wallet](https://info.navcoin.org/knowledge-base/how-to-update-your-navcoin-core-wallet)

### ZeroCT AMA and Explainer Articles

NavCoin Core developers Alex and Craig hosted an AMA on Reddit today which answered many of the NavCoin Community’s questions about the ZeroCT protocol and what it means for NavCoin. If you missed the AMA please head over to Reddit and check it out.

[https://www.reddit.com/r/NavCoin/comments/ankq9s/navcoin_zeroct_ama_tues_feb_12_79_pm_gmt ](https://www.reddit.com/r/NavCoin/comments/ankq9s/navcoin_zeroct_ama_tues_feb_12_79_pm_gmt)

To follow up on the AMA Craig released a two part article series he’s been working on to further explain ZeroCT and its origins. 

The first article [Private Transactions — The Road to ZeroCT](https://medium.com/@craig.b.macgregor/private-transactions-the-road-to-zeroct-3bc7aa93cba0) gives context to ZeroCT and covers the basics of the privacy protocols its based on. 

The second article [The New Privacy Protocol on the Block — ZeroCT Explained](https://medium.com/@craig.b.macgregor/the-new-privacy-protocol-on-the-block-zeroct-explained-b34f6885dd5) dives straight into ZeroCT explaining it's features, how it works and comparing it to other private cryptocurrencies 

It’s recommended that you read both articles to see the full picture, but the second article can be read by itself if you just want to get a better understanding of ZeroCT. 

There’s some easy to digest content in the second article like a comparison chart of the other main privacy implementations and a diagram showing how ZeroCT transactions work at a high level.

#### ZeroCT Comparison Chart

![ZeroCT Comparison Chart](/images/uploads/zeroct_comparison.png)

Make sure you give the articles a good read and share Craig’s post on twitter.

<https://twitter.com/proletesseract/status/1095514520917659648>

### NavCoin Core CFund Interface Progress

Hayden and Andreas have been making good progress on the NavCoin Core CFund interface this week. Listing and viewing the Community Fund proposals is mostly done and they are now working on the dialog for creating Community Fund proposals and payment requests. 

Andreas has recorded a quick ScreenCast to show their progress which you can view below.

{{< youtube Ce6wlAbmEls >}}

Or you can follow their progress directly on GitHub.

<https://github.com/dy5es41/navcoin-core/tree/communityfund> 

### NavDroid StakeBox Progress

Since discontinuing official support for the NavPi some months ago NavCoin Core have been working towards an alternative solution for a low powered staking device. The best contender so far has been the ODroid XU4 which is nearly 4 times more powerful than the Raspberry Pi. So far we’re confident the navcoin daemon runs well on the device, so if you’re happy using SSH and CLI commands, just dive right in there and grab one. 

There has proven difficult to compile the graphical interface for both NavCoin Core and also NEXT for the ODroid, so we’ve resumed working on the NavDroid StakeBox web interface. 

Matt and Alex are stating to make some good progress on this project with 4 PR’s already up for review. So far the basic framework has been established, including SSL and JWT login. They have been able to get the wallet and staking information from the daemon as well as sending transactions.

To keep up to date with this project you can follow the code bases on GitHub

<https://github.com/Encrypt-S/navcoin-angular>

[https://github.com/Encrypt-S/navcoin-express ](https://github.com/Encrypt-S/navcoin-express) 

### NEXT Lite Wallet Progress

Sakdeniz continues to make progress with the Lite wallet implementation for the NEXT wallet. He has successfully used the alpha version to create a test community fund proposal on the mainnet which is great news. You can see his latest commit to the project on GitHub.

<https://github.com/sakdeniz/next/commit/3e6cf30788ff1cbfa7b98c563c6e26898f2dcb05> 

For more information on the NEXT project visit their website or join the discussion on discord.

[https://next.navcommunity.net ](https://next.navcommunity.net)

### Community Fund Projects

There are currently 8 pending proposals and just 1 pending payment requests active in the community fund. If you’re staking coins make sure you head on over, learn what they’re about and cast your votes accordingly.

<https://www.navexplorer.com/community-fund>

That’s all for this week. Don’t forget that you can receive the weekly report by email. If you would like to be added to the mailing list, please sign up here.

<https://bit.ly/navcoin-news>

The NavCoin Core team
