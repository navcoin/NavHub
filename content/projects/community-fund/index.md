---
title: "Community Fund"
date: 2018-03-27T17:53:11+13:00
lastmod: 2018-03-27T17:53:11+13:00
draft: false
author: "Alex Vazquez"
description: "The community have suggested a change in the consensus mechanism which would allow for community contributors to receive funding from the network for their efforts."
resources: []
filter: ["Protocol Improvements"]
bg_image: "/images/icons/icon-purple-lightbulb-new.png"
slug: ""
type: "project"
feature_image: ""
show_title_text: false
in_progress: false
completed: true
show_on_roadmap: true
show_on_projects: true
allow_click_through: true
percent_complete: 100
github_url: "https://github.com/navcoin/navcoin-core/tree/v4.1.2-cfund"
project_url: ""
reddit_url: ""
twitter_url: ""
card_color: "#6984D8"
font_color: "#fff"
weight: 100
---
{{< project_header
    title="Community Fund!!"
    subhead="Decetralising development for NAV!"
    text="Anyone and everyone on the network will be able to propose projects, budgets and initiate network votes to schedule funds."
    captionPadding="80px"
    imgSrc="community-fund.jpg"
    imgHeight="300px"
    imgPadding="20px"
    bgColor="#FFF"
    bgImgSrc=""
    fontColor="#333">}}
{{< center_text_section
    title="Why do we need a community fund?"
    bgColor="#42b6eb"
    gradient=""
    fontColor="#FFF">}}
    <p>NavCoin is an open-source project to which anyone can contribute. It is a community initiative that ran no pre-mine or initial coin offering. As a community we have ambitious goals for NavCoin and it’s supporting software. The NavCoin Core developers do their best to find funding and build projects independently. Finding a decentralised way to fund NavCoin projects and further encourage the decentralisation of the development of NavCoin is one of the NavCoin Core developers priorities.</p>
{{< /center_text_section >}}

<br />
<section class="container">
## What's changing?

The community have suggested a change in the consensus mechanism which would allow for community contributors to receive funding from the network for their efforts. The NavCoin Core developers agree that implementing community led funding will best serve the interests of this open-source project and foster it’s decentralised nature.

After consideration and discussion within the community, the NavCoin Core developers have proposed the following changes.

- Proof of Stake rewards will be reduced from 5% to 4% per annum.
- Each block staked will generate 0.25 NAV per block for the NavCoin Community Fund.
- Anyone and everyone on the network will be able to propose projects, budgets and initiate network votes to schedule funds.
- The NavCoin Community Fund will be protected by the consensus layer – proposals to schedule funds will never be accepted without the positive vote from a majority of NavCoin stakers.
- Scheduled funds can only be released by a 2nd network vote when NavCoin stakers achieve consensus on whether the proposal was completed successfully. No funds are received until work is agreed as complete.
- If the work is never completed, the scheduled funds are returned to the NavCoin Community Fund.
- No one (not even the NavCoin Core developers) owns or can directly access, manage or curate the NAV in the Community Fund or how it is distributed. The fund has no private key which can spend the NAV, the only way they can ever be spent is by the dual network consensus vote.

Currently approximately 40% of the 62M NAV in the network are used for staking. This means the network generates approximately 1.24M NAV per year. Therefore 1% of the proof of stake rewards approximately equals 250k NAV per year which is roughly 0.237 NAV per block with NavCoin’s 30 second block time. The NavCoin Core developers suggest using a fixed amount of 0.25 NAV per block rather than a calculation based on 1% of the amount staked to protect the network against attackers who could aim to remove coins from staking to constrain the financial capabilities of the community and to protect the fund from extreme fluctuations.

## How the proposal process works

- Dream up the changes you would like to see within the NavCoin eco-system. These can be everything from protocol changes, new applications that run on top of the NavCoin protocol, third party services, websites, promotional activities or even non-NavCoin related things like charity donations.
- Document your ideas on the NavCoin Community site and and discuss it with other people involved in the NavCoin community.
- If you’re unable to complete the work involved in your proposal yourself, you will need to build the team necessary to make your proposal a reality.
- Figure out how much NAV you need to complete your proposal.
- Create and submit the Community Fund proposal to the NavCoin blockchain for voting.
- Promote your proposal to NavCoin stakers and convince them to accept your proposal.
- If the proposal gets locked in, now it’s time to do the work. You and your team need to complete whatever task you set yourselves in the proposal so you can claim the NAV scheduled for your proposal.
- Once you’ve done the work outlined in your proposal, a second round of voting will take place to release the funds. Present and promote your work to the NavCoin stakers to get them to agree that you have finished the work.
- Retrieve the funds from your proposal as payment for the work you’ve done.

## Voting to implement the Community Fund

Because we are a community project, we take the democratic process especially seriously. We would never attempt to make changes to the consensus mechanism without due process. The first step in this process is to initiate a network vote to see the community’s interest in reducing the stake reward and implementing a Community Fund.

Since network votes are cast when a user stakes a block, a network vote on this issue gives us the capability to get consensus from those who will be directly affected by a change in the staking rewards.

This proposal is a work in progress and we would love to hear your feedback. If you want to make a suggestion, comment or contribution please join us on reddit.

https://reddit.com/r/navcoin

In order to facilitate the voting process the NavCoin Core developers have released version 4.0.6 of the NavCoin Core wallet. Users using the graphical interface will be shown with a dialog once the voting period starts allowing them to choose their vote. Users of the headless version of the wallet may add the following line

votefunding=n (being n=1 for YES, n=0 for NO)

to the navcoin.conf file and restart the daemon to start voting. In both cases the wallet should be actively staking to cast votes, every minted block will represent 1 vote. Voting period will start at 00:00 on the 18th October 2017 (GMT) and be counted as a percentage per block period (~4 days).

NavPi users will need to log into their device and update the Nav Coin wallet to cast their vote. More detailed instructions for NavPi users will be posted in the coming days.

This proposal would be considered approved when 8640 blocks signal a positive vote over a 11520 (~4 days) block period (75% acceptance).

### What's the TL;DR

The NavCoin Core developers propose some changes to the NavCoin consensus protocol. In short:

- Creating a decentralized NavCoin Community fund
- Staking reward changes from 5% to 4%
- Fixed amount of 0.25 NAV Coin/block to NavCoin Community fund
- Anyone can make a funding proposal
- Payout’s of NAV happen when everyone votes that the work is completed
- The aim of this is to fund the decentralised development of NavCoin amongst the community.

<br /><br />
</section>
{{< center_text_section
    title="The voting period was successful"
    bgColor="#7d5ab5"
    gradient=""
    fontColor="#FFF">}}
    <p>The NavCoin Community fund has been voted on by the stakers and been accepted. There were an overwhelming amount of positive votes with the vote period completing at around 81% yes (above and beyond the 75% threshold). </p>

{{< /center_text_section >}}


{{< project_features
    fontColor="#333"
    gradient="false"
    bgColor=""
    feature1Img="/images/icons/icon-bulb.png"
    feature1Title="Anyone can make a Proposal"
    feature1Txt="Anyone and everyone on the network will be able to propose projects, budgets and initiate network votes to schedule funds."
    feature2Img="/images/icons/icon-lock.png"
    feature2Title="Funds are Released by Consensus"
    feature2Txt="The requested amount is scheduled when the proposal is accepted, but the funds are only released by a second round of voting."
    feature3Img="/images/icons/icon-blue-globe.png"
    feature3Title="Decentralised Development"
    feature3Txt="The aim of the Community Fund is to further decentralise the development of NavCoin projects amongst the community.">}}

{{< center_text_section
    title="Want to get involved in testing?"
    bgColor="#42b6eb"
    gradient=""
    btn1Link="https://discord.gg/y4Vu9jw"
    btn1Txt="Join us on Discord"
    fontColor="#FFF">}}
    <p>The NavCoin Community Fund is currently undergoing testing on the network. If you want to help with testing join the community on Discord. There's a bug bounty programme in place, so you could even earn some NAV if you find something the developers need to fix.</p>
{{< /center_text_section >}}
