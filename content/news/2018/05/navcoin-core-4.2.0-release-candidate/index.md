---
title: "Navcoin Core 4.2.0 Release Candidate"
date: 2018-05-22T12:12:44+12:00
draft: false
author: "NavCore"
description: ""
resources: []
categories: ["Software Updates"]
slug: ""
type: "news"
feature_image: "4.2.0-rc.png"
show_title_text: false
---
The NavCoin Core 4.2.0 Release Candidate including Community Fund accumulation is now ready for peer review.
<!-- more -->
Because NavCoin is an open source community project with various contributors its important to provide everyone with the opportunity to perform due diligence prior to releasing any consensus changes.

The NavCoin Core developers have enacted a policy to create a release candidate and publicly notify all interested parties of any important updates prior to merging the changes into the master branch. This release schedule will be formalised into a process document to be published on the NavCoin.org website in the near future as reference.

There are two reasons for this update:

### 1. To begin accumulating NAV in the NavCoin Community Fund.

The Community Fund was endorsed by the NavCoin network early in 2018. NavCoin Core 4.2.0 is the first step in enabling the Community Fund. It contains a soft fork to reduce the staking rewards from 5% to 4%, with 0.25 NAV per block being accumulated to the Community Fund. The Community Fund proposal system is live on the testnet, but there is still more unit tests and network testing to do before the proposal system itself is launched on the mainnet. When the fund is live you’ll be able to vote on and submit proposals to the network to apply for project funding. More information on the proposal process will be available on NavCoin.org as its release approaches.

### 2. To fix the Time Warp bug.

The NavCoin blockchain has been seeing some intermittent difficulty and block spacing issues. NavCoin Core 4.2.0 contains a soft fork to fix this problem by disallowing blocks too far in the future or past and dropping connections to users with out of sync system clocks. The users system clock is now checked against global NTP servers to confirm it’s correct. If your clock is wrong you’ll get a message to adjust it, otherwise you’ll be bumped off the network until it’s properly synced.

Reviewing the NavCoin Core 4.2.0 release candidate
The pull request (PR) into the master branch can be viewed here:

https://github.com/NAVCoin/navcoin-core/pull/209

There is a release candidate available for testing here:

https://build.nav.community/v4.2.0-rc

Any comments or suggestions should be made directly on the PR on GitHub so we are able to track and respond to any queries.

### What happens next?

We are hoping to release version 4.2.0 within the next week if there are no well founded objections to the update. When the new version is released, the way to signal your support for the consensus change is to simply update to version 4.2.0.

The consensus changes are released in a dormant state inside version 4.2.0. When 75% of the blocks in a 20160 block period are signalling support for the consensus changes, the change will be locked in for activation at the end of the next block period.

At the time of activation, you may lose connectivity to the network if you have not updated. So please keep an eye out for the soft fork lock in and update during the grace period if you haven’t already.

More information on how to monitor the soft fork signalling process and keep up to date with the Community Fund proposal system release will be published as it is available.
