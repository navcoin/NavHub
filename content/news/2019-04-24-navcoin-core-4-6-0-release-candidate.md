---
layout: news
generated_by_cms: true
title: NavCoin Core 4.6.0 Release Candidate
author: Craig MacGregor
date: '2019-04-24T22:01:04+12:00'
feature_image: /images/uploads/24-04-2019.png
categories:
  - Nav News
---
This week the Release Candidate of NavCoin Core 4.6.0 is ready for testing, NavCoin Engineer Alex V talks with Binance in their AMA series and more.

<!--more-->

### NavCoin Core 4.6.0 Release Candidate

The newest version of NavCoin Core (v4.6.0) is nearly ready to go. All the features which will be included in v4.6.0 have been merged to the master branch. There is one outstanding bug fix that the core developers are looking to include in v4.6.0 alongside anything that is discovered while testing the release candidate. If you want to build and test the release candidate, you can do so from [Pull Request #444](https://github.com/NAVCoin/navcoin-core/pull/444).

If you don’t have a build environment setup but you want to help test the release candidate, the core developers will publish the built binaries to the pull request once they have been compiled — keep an eye on the PR.

There are a lot of great improvements being released in v4.6.0. Some of the major features to be included are;

Community Fund User Interface — There will be a new tab in the core wallet for browsing and voting on community fund proposals and payment requests.

Staking Accumulation — There is now the ability to specify a different address to accumulate staking rewards to with the -stakingaddress argument.

Mnemonic Seed Phrase Support — Ability to export and import master private keys as mnemonic phrases to backup or create wallets.

Along with another 12 closed pull requests which are detailed in the [4.6.0 release notes](https://github.com/NAVCoin/navcoin-core/blob/e9e91b1f8cc2ff9c212b8cfc9fdef5329acd03f3/doc/release-notes/release-notes-4.6.0.md).

Once testing is completed and any discovered bugs fixed, the release will be formally published and the announcement will be made on navcoin.org.

### NavCoin Core Bootstrap Issue

The node which generates the blockchain bootstrap and pushes it to the cloud has encountered an issue which caused it to orphan a payment request and never rejoin the main blockchain. If you’ve used the bootstrap within the last few days it’s possible that your node has ended up on the same side-fork as the bootstrap server. Even if you haven’t bootstrapped lately it’s a good time to check on your node and make sure it is running correctly.

The easiest way to check you’re on the right chain is;

* Make sure your block height matches the latest block height showing on [NavExplorer](https://navexplorer.com/).
* Open the debug window and use the ‘getbestblockhash’ command.
* Copy the resulting block hash and search for it on NavExplorer.

If the block hash is found by searching for it on NavExplorer, you are on the right chain. If NavExplorer can’t find that block hash, something has gone wrong.

The cloud bootstrap has been updated with the correct chain, so if you are having issues you can try the bootstrap option from the menu again, or sync your wallet naturally from the beginning.

For further assistance, check the [NavCoin Knowledge Base](https://info.navcoin.org/navcoin-core/bootstrap-your-wallet/) or join the community on [Discord](https://discord.gg/y4Vu9jw).

### Binance Spanish AMA

Last Friday Alex V joined Binance on their Spanish telegram channel for an AMA with their 5,000+ member community. Binance Spanish Community Admin Jorge (AKA ‘Binance Angel’) collated a series of questions about NavCoin from their community and asked them directly to Alex in an interview style. Then the AMA was opened up to the rest of the users on Telegram to ask follow up questions.

The majority of the questions were based around NavCoin’s upcoming privacy protocol ZeroCT which Alex V was the author of the white paper.

There were some great questions and answers. If you missed it and want to check it out, the [full Spanish transcript](https://pastebin.com/WST3dmQ6) is available on pastebin. Or you can read it in English courtesy of google translate by using [this link](https://translate.google.com/translate?depth=1&hl=en&nv=1&rurl=translate.google.com&sl=auto&sp=nmt4&tl=en&u=https://pastebin.com/WST3dmQ6&xid=25657,15700022,15700186,15700190,15700253,15700256,15700259).

### NavCoin Sponsoring University Hackathon

NavCoin Community Members are sponsoring a blockchain hackathon at the La Plata University, Buenos Aires, Argentina. The hackathon is part of a two day blockchain event at the university. The event speakers are scheduled to talk on various topics including Ethereum, NEM, Polymath, Hyperledeger, Binance and more.

To learn more about the event or book your ticket, check out the link below;

<https://www.eventbrite.com.ar/e/hackathon-y-congreso-blockchain-tickets-59027362430>

Korean & Japanese Translations are Live
The NavCoin website is now available in both Korean & Japanese. With these translations published, NavCoin.org can be read in a total of 8 different languages. Each additional language increases the audience who can more easily learn about NavCoin.

**Korean**: <https://navcoin.org/kr>

**Japanese**: <https://navcoin.org/jp>

The Korean translation was fully funded by the NavCoin Community Fund. If you are literate in a language that isn’t yet supported by the website, or you want to help maintain a language, check out the NavCoin Community Fund and get paid for contributing your skills.

<https://navcoin.org/en/community-fund>

### NavCoin Community Roundtable

As a decentralised project, one of the difficulties can be coordinating the community’s efforts so we’re all pulling in a similar direction. Some community members thought a good way to resolve this is by hosting a regularly scheduled discussion forum where everyone can talk about what’s going on in the project and how we can work together. Salmonskinroll has been working to coordinate this forum as a monthly community roundtable event on discord.

Everyone is welcome to join the discussion and bring their ideas and projects to the table. The format will be non-hierarchical and we hope it will help to connect individuals with the help and support they need to engage with and contribute to the project.

The Community Roundtables will be held on the first Monday of every month at 8PM GMT on the [NavCoin Discord Server,](https://discord.gg/y4Vu9jw) channel #roundtable.

Community Roundtable 001 is scheduled for 8PM GMT Monday 6 May 2019.

<https://navhub.org/events/#community-roundtable-001>

### Community Fund Projects Update

There is currently 97,600 NAV available in the community fund with 2 pending proposals and 3 pending payment requests actively being voted on.

There are no new proposals this week. If you’ve been thinking about putting forward a proposal for development, promotion, education, awareness or anything else, now is a great time to do it.

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
