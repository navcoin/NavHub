---
layout: news
generated_by_cms: true
title: Guide to Staking NavCoin
author: Kieren Hyland
date: '2018-12-19T15:11:46+13:00'
feature_image: /images/uploads/staking-navcoin-1-.png
categories:
  - Guides
---
Welcome to this guide on becoming a staker for NavCoin.

Welcome to this guide on becoming a staker for NavCoin.

### What is staking?

Proof of Stake is a mechanism to achieve consensus on the state of the blockchain. In order to stake, you must hold NAV - and each NAV you hold is essentially an entry ticket to being eligible to submit the latest block.

The more NAV you have, the more often you will stake and receive the 2 NAV block reward.

### Why is staking important?

Staking protects the network from malicious attacks. Blockchains are about consensus and all the nodes agreeing on which transactions are accepted onto the blockchain.

So if a malicious actor owned 51% of the staking weight, they would ‘be the majority’ and could gain control of the network. This is why it’s critical that there is a substantial amount of NavCoin holders staking - by increasing the amount of NAV staking, it makes it much more expensive for a hostile actor to reach this 51% threshold.

**To be a staker you need:**
- A full node wallet (NavCoin core or NEXT)
- A hardware staking device (optional)
- There is no minimum NAV required to stake, but for practicality, we recommend at least 100 NAV. Otherwise, your stakes will be very infrequent.

### Easiest: Staking on your computer/laptop

The easiest way to get staking is to download a full node wallet on the computer you use the most and leave it running in the background.
Once you download your wallet, the wallet will need to download the blockchain - which can take some time. This gives your wallet a history of all the transactions ever made, and is required in order to verify transactions.

To speed up this process, you can bootstrap the blockchain.
Once your wallet is up to date, you simply send your NAV to this wallet, and enable staking (by unlocking it with your encryption password). It’s important to note that every time your wallet shuts down (e.g. if you close out of it), you need to re-enable staking.

### Best: Dedicated staking hardware

While it does require purchasing a specific device, this is the best way to ensure that you are staking 24 hours a day, and therefore increasing your chance of staking a block.

Historically we have recommended the NavPi, which is a Raspberry Pi that contains the NavCoin wallet. But with these devices getting close to reaching their performance limit - we now recommend the ODroid device, which has higher specs. An image file for the ODroid is currently under development.

### Advanced: How to cold stake

With the 4.5 release of NavCoin core, you can now perform cold staking which aims to increase the security of your coins when they are staking.

Essentially - it’s a new type of wallet address that is created from the combination of two different wallet addresses. The idea being that it allows you to split your. So if your staking device (which has to be connected to the network) gets compromised, your coins can’t be moved. All the attacker can do is stake your coins for you.

To set this up, you need to create a cold staking address in your wallet - it’s a combination of two addresses you specify. 

One would be your hot wallet that you stake from (that’s connected to the NavCoin network), and the other is your cold address (e.g. from a paper wallet). For a full guide on how to set this up, please refer to our Cold Staking set up guide (coming soon).

For you to receive the full benefit of cold staking, your spending key and staking key should be kept on separate devices. One way to do this would be to stake on a NavPi/NavCoin Core/NEXT wallet, but your spending key is stored on a paper wallet (in a secure location).
