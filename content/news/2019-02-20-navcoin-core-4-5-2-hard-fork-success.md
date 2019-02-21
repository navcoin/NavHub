---
layout: news
generated_by_cms: true
title: NavCoin Core 4.5.2 Hard Fork Success
author: Craig MacGregor
date: '2019-02-20T18:40:11+13:00'
feature_image: /images/uploads/20-02-2019.png
categories:
  - Nav News
---
The NavCoin hard fork scheduled for last weekend was a success, make sure you update to NavCoin Core 4.5.2 if you haven’t already done so. There’s also been progress made on all active projects throughout the NavCoin Community. Keep up to date with this week’s Community News!

<!--more-->

### Hard Fork Success

The scheduled hard fork at block 2882875 to mitigate an issue with the Community Fund payment requests proceeded without incident. If you haven’t already done so, please update to NavCoin Core 4.5.2 immediately to avoid spending or staking disruption.

The full details of the issue have been written up to the NavCoin Notice announcing the release of the 4.5.2 version on NavCoin.org

<https://navcoin.org/en/notices/2019-02-12-navcoin-4-5-2-hard-fork>

If you missed the memo and are now updating after the fork has occurred, there are some additional steps you might need to take to make sure you’re on the correct chain. After you’ve updated to 4.5.2, open your NavCoin Core wallet and wait for it to sync with the network. Once it’s fully synced, compare your last block with the latest block on the [NavExplorer](https://www.navexplorer.com/). If they are the same, you are on the correct chain and nothing else needs to be done. If they are different, you will need to either re-sync or bootstrap the blockchain to get back on the correct chain.

If you’re not sure how to update your wallet, please check out this knowledge base article; [How to Update your NavCoin Core Wallet](https://info.navcoin.org/knowledge-base/how-to-update-your-navcoin-core-wallet).

If you need to bootstrap your wallet and you’re not sure how, please check out this knowledge base article; [How to Bootstrap your Core Wallet](https://info.navcoin.org/knowledge-base/how-to-bootstrap-your-core-wallet).

If you have trouble with any of this, please join the [discord community](https://discord.gg/y4Vu9jw) for further assistance.

You can download version 4.5.2 from the downloads section of navcoin.org or directly from the NavCoin Core GitHub release.

<https://navcoin.org/en/wallets/#download-core>

### NavCoin & ZeroCT AMA on Argenpool

Following on from the ZeroCT AMA on Reddit, Alex was invited to the Argenpool telegram channel for an AMA about NavCoin and ZeroCT. Argenpool is a discussion space about Bitcoin, other cryptocurrencies, trading, news and blockchain technology for the Spanish speaking community.

If you’d like to get involved in their community, follow them on [Twitter](https://twitter.com/argenpool) or join their [Telegram](https://t.me/ArgenPool). 

### NavCoin Core Pull Request Reviews and Testing

Validating the ZeroCT implementation posted by Skreener has begun and continues to be Alex’s primary focus. Marcus has started some preliminary testing of ZeroCT alongside some other community developers. Besides ZeroCT Marcus has been testing the pull requests for adding mnemonic support, sending staking rewards to a nominated address and had been busy debugging the community fund implementation for the ODroid. 

If you want to help the NavCoin project by reviewing or testing upcoming features in NavCoin Core, head on over to GitHub and have your say in the comments section of the pull requests. Many hands make light work.

<https://github.com/NAVCoin/navcoin-core/pulls> 

### NavCoin Core Community Fund Interface

Adding the Community Fund Interface to NavCoin Core is an ongoing project taken onboard by two of the NavCoin Core interns Hayden and Andreas, who have been making steady progress over the last couple of weeks. They have now finished all viewing functionality for CFund proposals and payment requests in the wallet and are currently working on the forms for creating proposals and payment requests.

Andreas has recorded another ScreenCast to show their progress.

{{< youtube pprDPO4wx_E >}}

Or you can follow their progress directly on GitHub.

<https://github.com/dy5es41/navcoin-core/tree/communityfund>

### NavDroid StakeBox

Another ongoing project in the community is the NavDroid StakeBox Web Interface which will be able to be used on low power staking devices like the ODroid XU4. Matt and Alex B have been busy building out the components which make up the interface. 

So far they’ve finished the community fund page and summary widget, rpc command widget, wallet status/overview widget, and the wallet balance / staking summary widget. They are currently working on a notification widget to display important network and software upgrade information.

If you want to follow or contribute to this project head on over to the GitHub repo.

<https://github.com/Encrypt-S/navcoin-angular>

### NavCoin NEXT Lite Wallet

Sakdeniz has finished the first draft of the NEXT Lite Wallet and is currently preparing the technical preview release. This will effectively be a public alpha of the lite wallet features where people can try it out and help to find any remaining issues that need to be addressed.

One of the great new features of the NEXT Lite Wallet is the ability to password protect the entire wallet. On start-up the wallet will ask for a password that is used to decrypt the wallet.db file. Without the correct password no one can see your wallet balance or transaction history by opening the application on your desktop.

To keep up to date with the latest developments or contribute to the NEXT project, head on over to the GitHub repo.

<https://github.com/sakdeniz/next/commits/master> 

For more information on the NEXT project visit the wallet’s website or join the #navcoin-nextwallet channel on the NavCoin discord.

<https://next.navcommunity.net>

### NavPay Cold Staking Testing

When Cold Staking was introduced to NavCoin some users setup a NavPay address as their spending key. NavPay is not currently capable of recognising cold staking transactions as spendable in the wallet and the NavCoin Core developers have been working to rectify that. 

NavPay is based on BitPay which is a tangle of about a dozen different node libraries, updating and testing the new transaction structure has proven to be somewhat difficult and time consuming. Craig now has multiple stable development environments up and running and is working to validate the patch which Alex committed to our forked version of the bitcore library. We hope to make more progress on this issue over the next week and will keep the community updated.

Until this issue is resolved, we would not recommend using a NavPay address as your spending key for cold staking as it will be difficult to spend the coins. Even when the patch is available, if you’re using NavPay on your mobile device it may not be a good idea to use a NavPay address as your spending key anyway since mobile devices are generally quite insecure.

Marcus and Laura put together this video on NavCoin Cold Staking best practices which includes some good advice and discussion points.

{{< youtube ERIRWwrajco >}}

### Community Fund Projects

There are currently 5 pending proposals and 2 pending payment requests active in the community fund. If you are staking coins make sure you head on over, learn what they’re about and cast your votes accordingly.

<https://www.navexplorer.com/community-fund>

That’s all for this week. Don’t forget that you can receive the weekly report by email. If you would like to be added to the mailing list, [please sign up here](http://eepurl.com/cGq92z).

The NavCoin Core team
