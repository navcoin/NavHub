---
layout: news
generated_by_cms: true
title: NavPay Cold Staking Spending Upgrade
author: Craig MacGregor
date: '2019-04-16T17:47:00+12:00'
feature_image: /images/uploads/16-april-2019.png
categories:
  - Nav News
---
The upgrade to enable spending of cold staking balances where NavPay was used as the spending key has been successfully deployed to NavPay's production servers. The upgrade also requires a wallet update (NavPay v4.6.0) which is in the process of rolling out.

If you're on Android, your app should update as soon as the new version rolls out to your region (within 48 hours).

Desktop and Web Wallets should be available from the website and GitHub within the next 24 hours.

What's included in this update;

* Total wallet balance includes cold staking transactions.
* Cold staking transactions will appear as 'received' in the transaction history of your wallet.
* These transactions are now spendable by NavPay.

If you've got the latest wallet and you're still not able to see your cold staking transactions you might need to scan your wallet for unspent transactions. Navigate to;

Settings > (Your Wallet) > More Options > Wallet Addresses

Click 'Scan addresses for funds'

Your cold staking funds should now appear in your wallet as available balance. You may need to refresh the application to see the transaction history.

If you still don't see all your transactions in the transaction history, you may need to remove and reimport your wallet from the seed phrase. If you do this, be careful and make sure you have everything correctly backed up. If you delete a wallet with funds in it and don't have the correct seed phrase to recover it, there's no way to get the coins back.

What's not included in this update;

* Differentiating between cold staking spending transactions and regular transactions in the transaction history.
* Coin control to spend or prioritise particular transactions.

It's worth re-iterating that even with this update, NavPay is still not recommended for use as your cold staking spending wallet. 

It's best practice to use NavCoin Core in a secure environment to create spending keys for cold staking. It has the best tools for spending cold staking transactions like, the ability to set your cold staking address as the custom change address and all the coin control features which make sure you're spending the right transactions.

For more information about Cold Staking best practices, please watch the neat video Laura & Marcus made and join us on [discord](https://discord.gg/y4Vu9jw) if you have further questions

{(<youtube ERIRWwrajco>}}
