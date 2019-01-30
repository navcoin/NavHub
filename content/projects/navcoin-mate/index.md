---
title: "NavCoin m8"
date: 2018-03-10T14:29:06+13:00
lastmod: 2018-06-01T14:11:00+01:00
draft: false
author: "hash512"
description: "The NavCoin m8 is a low-power device capable of running NavCoin Core and other wallets at the same time at very low energy costs."
bg_image: "/images/icons/wallet-purple.png"
resources: []
filter: ["Wallets"]
slug: ""
type: "project"
feature_image: ""
show_title_text: false
in_progress: false
completed: true

show_on_projects: true
allow_click_through: true
percent_complete: 100
github_url: ""
project_url: "https://navcoinm8.com"
reddit_url: ""
twitter_url: ""
weight: 0
---
{{< left_image_section
    title="NavCoin m8"
    subhead=""
    gradient=""
    captionPadding="100px"
    imgSrc="m8spro.png"
    imgHeight="400px"
    imgPadding="60px"
    bgColor="#FFF"
    btn1Txt="Visit the project website"
    btn1Link="http://www.navcoinm8.com"
    fontColor="#333">}}
    <p>The NavCoin m8 is a low-power device capable of running NavCoin Core and other wallets at the same time at very low energy costs.</p>
    <p>The NavCoin m8 is using the M8S PRO hardware. Android TV device out of the box its possible to be repurposed to use the little powerhouse for various usecases. At only $60 it quickly repays for itself when used as a staking wallet.</p>
    <p>In the future wallets prepared for plug-and-play-use will be made available but for now its fully DIY. Instructions are available below or on the website.</p>
    {{< /left_image_section >}}
{{< project_features
    fontColor="#fff"
    bgColor="#42b6eb"
    gradient="false"
    feature1Img="/images/icons/icon-blue-linux.png"
    feature1Title="Linux"
    feature1Txt="The NavCoin m8 is running Ubuntu Mate, a full desktop system. You are able to run it as a headless server using Ubunti Server too."
    feature2Img="/images/icons/icon-blue-bank.png"
    feature2Title="Savings"
    feature2Txt="Spending less money on power apart from its other advantages means you are going to save money on power costs. All this while staking your NavCoin to save NAV to buy more NavCoin m8 devices!"
    feature3Img="/images/icons/icon-blue-navcoin.png"
    feature3Title="Compatibility"
    feature3Txt="Run a full NavCoin Qt GUI wallet. Can configure to run NavPi, NavPi 2.0, NEXT or whatever is coming next."
    feature4Img="/images/icons/icon-plant.png"
    feature4Title="Energy efficient"
    feature4Txt="Using less power than an average energy efficient light bulb without compromising on performance. Using as little as 2.5W of power at the wall (240V)."
    feature5Img="/images/icons/icon-blue-laptop.png"
    feature5Title="Powerful"
    feature5Txt="The NavCoin m8 is very powerful, running an 8-core Cortex-A53 CPU and 3 GB DDR4 RAM with dedicated is GPU making the device even able to run virtual machines."
    feature6Img="/images/icons/icon-blue-wallet.png"
    feature6Title="Multiple wallets"
    feature6Txt="You are able to run multiple wallets at the same time even including a full node Bitcoin wallet (requires additional hard drive space) or other Proof of Stake coins.">}}
<br />
<section class="container">
<h2>DIY Instructions</h2>
<h3>Download an image</h3>
Download the pre-built image with pre-compiled navcoin-qt wallet.  
OR  
Download an image for installation the suggested image is Armbian_5.41.1_S9xxx_Ubuntu_xenial_3.14.29_mate_20180421.img.xz
<h3>Write the image to USB / Micro-SD card</h3>
Unzip the download and install the NavCoin m8 image. <a href="http://download.aust.systems/owncloud/index.php/s/3uwXUZCtyWz1ChV/download">NavCoin m8 image</a>  
OR  
Download an image for installation the suggested image is Armbian_5.41.1_S9xxx_Ubuntu_xenial_3.14.29_mate_20180421.img.xz  
Rename the file gxm_q201_3g.dtb to dtb.img and copy it to the root folder.  
The file will be found in the DTB folder on the first partition built.
<h3>Set the device to development mode</h3>
Setting the device to development mode cannot be reversed easily.  
The only impact of setting "development mode" is making it possible to boot from USB or Micro SD media.  
Find the "reset/developer mode" button and hold the button down while powering the device.  
Release the button about 1 second after you see the initial splash screen.  
If a USB drive or Micro SD card is inserted with the appropriate image it will boot from the image.  
This procedure is only required to be done once.  
The button is likely to be on the bottom at the front of the device (opposite side to power and ethernet port) in the middle.  
Use a paper clip to press the button in. When depressed you should hear an audible click (depends on hearing!).  
<h3>Launch navcoin-qt or build your own navcoin-qt and launch.</h3>
If you used the NavCoin m8 image on the desktop there will be a link to navcoin-qt.  
Double click on the icon and select run. The NavCoin wallet will launch and start completing the sync of the blockchain (a few days).  
Delete the wallet.dat file if one existing prior to running and restart. Do not transfer any NavCoin to the device until you have done this.  
If you installed your own image following the Linux build instructions for NavCoin.  
You can <a href="http://download.aust.systems/owncloud/index.php/s/rylN8ZLgPaUziAL/download">download the pre compiled wallet</a> ensure all required prerequisites are installed.  
Once the build is complete run navcoin-qt and await the download of the blockchain.  
You can fast track things by downloading the blockchain and installing in the .navcoin4 folder (or create it if necessary and install the folders there).  
Take a backup of the wallet.dat file from .navcoin4 before transferring any NavCoin.  
Do not put large amounts of NavCoin on this device until it is considered safe to do so.  
It will not be considered safe to do so for a couple of months while we develop an image that is user friendly and secure.  
Adding a USB hard drive with capacity for the entire Bitcoin blockchain will allow you to run a Bitcoin wallet. It is suggested that 3GB of ram is installed to run this along with the NavCoin wallet. The bitcoin wallet can be installed by issuing the following command: sudo apt-get install bitcoin-qt. You will need any pre-requisites installed to run the wallet.
<br /><br />
</section>
    {{< links_section
        title="Questions? Need help? Got ideas?"
        subtitle="The NavCoin m8 has its own Discord server."
        fontColor="#000"
        bgColor="#eee"
        containerPadding="40px 0 60px 0"
        titleMargin="0 0 20px 0"
        gradient="false"
        feature2Img="/images/icons/icon-community.png"
        feature2Title="Discord"
        feature2Txt="Join the NavCoin m8 Discord »"
        feature2Link="https://discord.gg/pqYW7Fs">}}
