---
layout: news
generated_by_cms: true
title: Gift Card Buyer & Cold Staking Video
author: Craig MacGregor
date: '2019-01-30T17:18:25+13:00'
feature_image: /images/uploads/gift-card-buyer-cold-staking-video.png
categories:
  - Nav News
---
As the NavCoin Core Devs work towards releasing the next version of NavCoin Core, there’s been a lot of activity throughout the NavCoin community. NavCoin has been added to the Bidali Gift Card platform, the NavShopper framework is nearing completion, a Cold Staking best practices video has been published and more.  
<!--more-->

As the NavCoin Core Devs work towards releasing the next version of NavCoin Core, there’s been a lot of activity throughout the NavCoin community. NavCoin has been added to the Bidali Gift Card platform, the NavShopper framework is nearing completion, a Cold Staking best practices video has been published and more.  

## Buying Gift Cards with NAV

NavCoin has been added to [Giftcards by Bidali](https://giftcards.bidali.com/buy-giftcards-with-navcoin/) which allows users to purchase USD and CAD gift cards from 100s of top brands using NAV. NavCoin’s addition to the Bidali platform is a great step forward for NAV’s adoption creating more mainstream ways for people to spend the cryptocurrency. Some of the gift cards available to buy with NAV include Amazon, Best Buy, Nike, Overstock, Uber, Dominos, XBox, iTunes, eBay and many more. The fees are low and the feedback we’ve had from users trialling the service so far has been positive.

## Cold Staking Best Practices Video

Laura and Marcus have put together a video that outlines some of the best practices for keeping your coins secure with cold staking. As well as how to generate your staking and spending keys, the video also covers how to send to and spend coins in cold staking addresses. NavCoin Core are hoping to put out more simple bite size content like this over the coming weeks to help inform and educate the NavCoin community.

{{ youtube ERIRWwrajco }}

As with all security related topics, it’s important to note that this guide should only be considered an introduction and not a definitive guide. There are so many things to consider when choosing how to securely store and backup your keys that we aren’t able to cover all of the details.

## NavShopper Platform Underway

While the interns are busy researching which e-commerce sites we could plug into NavShopper, work has begun by Craig on the framework of the platform. The framework build is around 80% complete with most of the major technologies implemented. Once the NavCoin daemon and exchange trading interfaces are built on the ring fenced back end server the framework will be complete and the components can start to be defined and built on top of this framework. You can keep up to date with work as it progresses by starring the [NavShopper GitHub repo](https://github.com/Encrypt-S/nav-shopper). 

## NavHub Preparing for Launch

The new version of the NavHub community website has gone into final review this week with the content being integrated into the design and the whole site getting a thorough review. As we mentioned last week the update of NavHub includes easier ways for community members to contribute to the site, more guides on how to get involved in the NavCoin ecosystem, news, events and dynamic homepage that shows the latest content added to the site. We are hoping to get the new version up for public review over the next few days and if no major issues are found, deployment next week.

## NavCoffee Updates & Discord Bot

Last week we introduced you to the [NavCoffee live stream](https://www.twitch.tv/navcoffee). So far the NavCoin Core team has been donated 7 coffees from the community and the experiment is largely a success. This week Hayden has been working to improve the stability of the Raspberry Pi so that it could reliably stream for at least 8 hours a day. He’s also deployed a Discord bot which pings the #coffee-bot channel on the NavCoin Discord each time a coffee is donated. The bot can also be queried about how many coffees are available for redemption. Jump on discord and check it out, or if you want to see the code, it’s available on Hayden’s [NavCoffee GitHub repo](https://github.com/hdnsimpson/NavCoffee). 

## NavCoin Core v4.5.2

This week NavCoin Core Devs have been assessing the NavCoin Core pull requests on GitHub and making a short list of what will make the cut into the next version of NavCoin Core. There are a lot of good improvements on the way, most importantly being a fix which helps the blockchain sync faster. Other updates include fixing the voting cycle counter, an interface for donating to the Community Fund and updated build documentation for OSX.

Aside from these features, the NavCoin Interns have been working to fix the list of RPC tests which were inherited from Bitcoin Core but incompatible with the NavCoin protocol. These tests do cover important areas of functionality and updating these tests will ultimately lower chance of unintended bugs making their way into production. Not all the tests are working again, but the ones which are will be included in the next release.

## Testnet Restart

The NavCoin Core test net is currently offline, but an update that restarts the testnet has been written and is now being tested itself, before being deployed. The patch is pretty straight forward, it includes a new genesis block for the testnet and specifies a new data directory to avoid collisions with old testnet data. We are now working to get a reliable network of nodes up and running. If anyone wants to support the netnet by running a testnet node, compile the code on [PR #402](https://github.com/NAVCoin/navcoin-core/pull/402) and contact the core team to be distributed testnet coins to stake. 

## NavCoin Past, Present and Future

Siflu is a long-time community contributor to NavCoin. As part of his Community Fund proposal he recently published this fascinating [Medium article](https://medium.com/@siflu/the-history-the-current-state-and-the-future-of-navcoin-3390d3455313) that explores the history of NavCoin, where it is now, and what we might expect in the future.

That’s all for this week. Don’t forget that you can receive the weekly report by email. If you would like to be added to the mailing list, [please sign up here](http://eepurl.com/cGq92z).

The NavCoin Core team.
