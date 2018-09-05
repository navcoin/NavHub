---
layout: news
generated_by_cms: true
title: Open Alias Developer Notes
author: Alex
date: '2018-09-03T12:27:42+12:00'
feature_image: /images/uploads/open_alias_dev_notes.png
categories:
  - Nav News
---
OpenAlias is a protocol originally created by the Monero team designed to relate a domain name with a cryptocurrency address. The recently released wallet version 4.3.0 of NavCoin Core includes the changes necessary to support the translation from OpenAlias-ready domains to NavCoin addresses.

OpenAlias is a protocol originally created by the Monero team designed to relate a domain name with a cryptocurrency address. The recently released wallet version 4.3.0 of NavCoin Core includes the changes necessary to support the translation from OpenAlias-ready domains to NavCoin addresses.

![null](/images/uploads/screenshot-from-2018-09-03-12-38-24.png)

[The OpenAlias protocol](https://openalias.org/) is designed on top of the DNS service, using a TXT DNS record on a FQDN (fully qualified domain name). As a quick reminder, a DNS server is just a computer connected to the internet which stores information related to domain names and that other computers are allowed to query when necessary. Normally this information is the IP of the server hosted behind that name, but the DNS protocol allows different kind of entries. The TXT record provides the ability to associate arbitrary text, we use this record to store specially formatted text so the NavCoin wallet can extract the Nav Address:

`oa1:nav recipient_address=NdvfJGBVETticfC7JSzaFtNNNmkYhdMUb8;`

Because regular Internet users tend to relate persons to email addresses, rather than to domain names, the OpenAlias protocol states that an email address can be a valid OpenAlias address, and when we need to translate it to a domain name, we can do it just by substituting the ‘@’ with ‘.’ (a dot). As a simple example, donate@nav.community would translate to donate.nav.community, the client would try to resolve the TXT record of the domain name, and then extract the NavCoin address from there.

![null](/images/uploads/screenshot-from-2018-09-03-12-38-38.png)

One of the first direct implications of this, is that everyone can host OpenAlias addresses under their own domain, by simply setting up the TXT entry of the corresponding domain name using the specified format to point to a concrete NavCoin address. We already did setup a website (<http://openalias.nav.community>) where users can freely register addresses on the domain @nav.community, but we encourage people to also set his own and spread the OpenAlias use.

Besides the basic setup of a DNS entry, one of the requirements for using your own domain name for OpenAlias is to support [`DNSSEC`](https://www.internetsociety.org/deploy360/dnssec/basics/). All our family of wallets enforce the use of DNSSEC to consider an OpenAlias address valid. DNSSEC authenticates the response of the server with a cryptographic signature, to make sure that answers provided by the DNS server are valid and authentic, so no attacker can impersonate the real DNS server and offer its own NavCoin address to steal funds.

## Other security/privacy concerns

By default, the information of a DNS query travels in plain text. That means that any eavesdropper looking at your connection’s data stream (ISPs, Governments, attackers, …) can relatively easy read exactly what DNS queries you are doing. In the case of OpenAlias, this poses a threat to your financial privacy, as it’d be easy to set a relation between your IP address and the OA addresses you looked up for (which very likely are addresses you’ve transacted with).

Privacy is one of the fundamentals of our project, so we’ve taken the following measures:

* NavPay uses Google’s DoH (DNS-over-HTTP) service to query the OpenAlias address, ensuring the request is sent encrypted and protected from external views. Although it requires trust in Google not logging the queries.
* NavPi includes dnscrypt-proxy by default from version 1.0.10, encrypting all the DNS requests and using privacy-friendly servers which do not log the requests.
* If you have a PI Image less than 1.0.10 and want to support sending coins to OpenAlias addresses please [follow this article to setup DNSCrypt.](https://info.navcoin.org/knowledge-base/enable-sending-openalias-addresses-navpi/)
* **We encourage every user of NavCoin Core to set up dnscrypt-proxy** on its system before using OpenAlias. Detailed instructions can be found at <https://github.com/jedisct1/dnscrypt-proxy/wiki/installation> 

More information about DNSCrypt and DNS-over-HTTP can be found at <https://dnscrypt.info> 

Download NavCoin Core v4.3.0 from <http://www.github.com/navcoin/navcoin-core/releases>\
Download NavPay from <https://navcoin.org/navpay/> \
Download NavPi from 1.0.10 from <https://nav.nyc3.digitaloceanspaces.com/navpi/navpi_1.0.10.img>
