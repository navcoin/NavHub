---
layout: news
generated_by_cms: true
title: 'NavCoin 4.5.0 Is Now Available! '
author: Kieren Hyland
date: '2018-12-13T15:41:45+13:00'
feature_image: /images/uploads/4.5.0-is-now-available-1-.png
categories:
  - Software Updates
---
NavCoin 4.5.0 is now available for download! 

Key features of this release include soft forks for cold staking and static rewards, and a community fund interface in the NavCoin core wallet.

### The road to Proof of Stake version 3

This update (if the soft forks activate) brings NavCoin in line with the Proof of Stake version 3 specifications. Proof of Stake version 3 was first developed by Pavel Vasin, and aims to better align the incentives of the network for improved security.

## What’s in this release?

### Cold Staking soft fork

* You are now able to generate cold staking addresses
* At the moment there is a standard address type, and with the coins in this address you can both spend and/or stake from it.
* A cold staking address is essentially a new type of wallet address - that can ONLY stake. You can’t spend these coins in a transaction.
* One way to look at it, is that a cold staking address gives ‘permission to spend’ away to another address.
* So what does this allow? If you are staking the NavCoin network, you can now send your coins to a cold staking address for added protection. 
* This way you can use a cold/offline wallet to create your spending keys, and then stake the network with a ‘hot’ wallet (a wallet connected to the internet e.g. NavPi/NavDroid/Core/NEXT). 
* Keeping your coins in a cold staking address allows your spending key to remain safety offline. Meaning even if your staking wallet was to be compromised in a hack, your coins would be safe, unlike with a standard address.

### Static Rewards soft fork

* Instead of using ‘coin age’ to determine how much NAV you receive when you stake, there is now a fixed 2 NAV reward.
* The aim of this is reward stakers that remain online and secure the network consistently.
* In most cases, the amount of NAV received by stakers will increase.
* Currently, you receive 4% on your balance per year. With static rewards, this could be in the range of 4-11% per year depending on how many other stakers there are.
* Inflation will slightly increase compared to what it is now (currently around 1.2%). But because it is fixed, it diminishes over time (relative to the total supply).

### Community Fund Interface

* It’s now even easier to vote on community fund proposals!
* You can now go into your wallet (either NavCoin Core, or NEXT), and use the interface to vote yes/no for proposals that have been submitted to the network.

### Blockchain Headers

* There are also changes to how blockchain headers are synched.
* The wallet will now rate-limit the amount of block headers received from a single peer before banning them for misbehaving.

## Download it now

So [click here to download the latest version](https://navcoin.org/en/wallets#download-core) and upgrade your wallet!
