---
title: "OpenAlias"
date: 2018-07-09T11:41:44+12:00
draft: false
author: "Alex Vasquez"
description: "This project allows you to register a completely free OpenAlias address"
resources: []
filter: ["Open Alias"]
bg_image: "/images/icons/icon-purple-lightbulb-new.png"
slug: ""
type: "project"
feature_image: ""
show_title_text: false
in_progress: true
completed: false
show_on_roadmap: true
show_on_projects: true
allow_click_through: true
percent_complete: 90
github_url: "https://github.com/aguycalled/openalias-register/blob/master/views/index.ejs"
project_url: ""
reddit_url: ""
twitter_url: ""
card_color: "#6984D8"
font_color: "#fff"
weight: 100
---

{{< project_header
    title="NavCoin"
    subhead="OpenAlias Registration"
    text="OpenAlias was implemented to simplify NavCoin payments by bridging the knowledge gap between cryptographically secure systems and users who aren’t sophisticated developers."
    captionPadding="80px"
    imgSrc="/images/icons/nav_blue-peertopeer-large.png"
    imgHeight="300px"
    imgPadding="20px"
    bgColor="#FFF"
    bgImgSrc=""
    fontColor="#333">}}

{{< center_text_section
    title="What is OpenAlias?"
    bgColor="#42b6eb"
    gradient=""
    fontColor="#FFF">}}
    <p>OpenAlias (openalias.org) is an open standard for simpler addresses for any crypto. It allows users to transform a lengthy wallet addresses into something much easier to read, write, and remember. For example, donate.navhub.org</p>
{{< /center_text_section >}}

<br />
<section class="container">

## Overview

OpenAlias seeks to provide a way to simplify aliasing amidst a rapidly shifting technology climate. Users are trying to cross the bridge to private and cryptographically secure infrastructure and systems, but many of them have just barely started remembering the email addresses of their friends and family.

## Registering for an NavCoin Open Alias

First, visit [http://openalias.nav.community/](http://openalias.nav.community/).

### 1. Register your name

Register a name you like and the suffix @NavCommunity will be added automatically.

### 2. Copy message to console

A line of code with be generated to assign the address to the alias. Follow the instruction to copy it to your console.

### 3. Verify

The console output a line of verification code,


## Why use OpenAlias?

Open Alias was created by contributors to the Monero cryptocurrency project who wanted to find a way of simplifying cryptocurrency payments by bridging the knowledge gap between cryptographically secure systems and users who aren’t sophisticated developers.

1. **It's easy** - You can transform long alphanumeric codes in an easily memorable address.

2. **It's secure** - NavCoin Open Alias leverages DNSSEC to prevent MITM attacks on the alias.

3. **It saves time** - It’s quicker and easier to remember a meaningful Open Alias address than a long string of randomised characters.

## Benefits of OpenAlias

- instead of using a key-value store, OpenAlias uses a TXT DNS record on a FQDN (fully qualified domain name)
- removes the responsibility of the cryptocurrency to resolve issues or alias disputes
- provides a mechanism to resolve situation where a user loses their private key
- allows the end-user to restore their alias and avoid ending up with dead aliases
- more user friendly than raw addresses
- registration does not need a blockchain transaction
- prevents "spammy" registration
- support for DNSSEC for authentication and privacy
- an alias can be discontinued or changed
- cross blockchain support (TXT records can be setup with Bitcoin, NavCoin, and Monero addresses)

## Inner workings of DNS TXT records

The general concept is that domain names are easy for people to remember and map to a person or entity. The particular type of data attached to the registration data for a domain is called a DNS TXT record. This record is used to advertise a set cryptocurrency addresses. By implementing OpenAlias, it allows the wallet to lookup the domain name, find the TXT record, and view the NAV address attached to that record.

## Human-meaningful, Decentralized, Secure (Zooko's triangle)

Taking [Zooko's Triangle](https://en.wikipedia.org/wiki/Zooko%27s_triangle) into consideration, OpenAlias satisfies all three of the properties required to be considered 'desirable' for names of participants in a network protocol.

1. **Human-meaningful:** Meaningfulness and memorability to the users.

2. **Decentralized:** No need of a centralized authority for determining the meaning of a name.

3. **Secure:** There is one, unique and specific entity to which the name applies.

Without OpenAlias, NAV addresses are very long and lack meaning. By allowing users and entities to choose their own meaningful OpenAlias names, decentralisation is still strong and the corners of Zooko's Triangle remain secured.

<br /><br />

</section>
