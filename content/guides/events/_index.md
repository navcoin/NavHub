---
layout: guides
title: 'NavHub Guides - Events'
title_text: 'Events'
author: Craig MacGregor
date: '2018-05-30T17:44:23+12:00'
sections: [Overview, Types of event you can organize, How to add an event to NavHub, How do i get involved]
page_type: 'guide'
github_file: 'content/guides/events/_index.md'
---


# How To Organize NavCoin Events

## Overview


{{< big_text >}}
Event are a great way to promote navcoin to the public and build stronger community connections in your area. Where you host it and how you promote your event will all depend on the type of event you are running. Once you know exactly what your event is, write a little description about it on the NavHub website and share it around our community channels.
{{< /big_text >}}

{{< text_block
  title="Get Started" >}}
  You can see the full list of NavCoin events here, and here is the guide of how to create an event on navhub website, cointinue to read about what kind of event you can organize.
{{< /text_block >}}

{{< divider >}}

{{< quote
  image="/images/guides/events/rowan.jpg"
  text="Funding events and business relatd to NAV in countries that are usually hard to get money to (Iran, Palestine, North Korea, Venezuela, even Russia to an extent)."
  author="Ro"
  link_href=""
  link_text=""
>}}

## Types of event you can organize

{{< info_tiles category="events" >}}

{{< text_block
  title="Set a date" >}}
  Always make sure to collaborate with your attendees - to make sure that you find a suitable time and location. If it helps, then setting up a mailing list, or some way to contact your local NavCoin community makes it easier anytime there is an event.
{{< /text_block >}}

{{< text_block
  title="Location" >}}
  When considering the location of the event, look for a comfortable, flexible space that can fit the number of participants you expect. Be creative - cafes, bars, community centers, co-working spaces, libraries and hacking spaces are great starting points. And ensure that the location is suitable and has what you require - whether it’s a certain size table, a whiteboard, or even just the right atmosphere.

  You won’t need a physical location at all if you are organizing an online event. But there are things to keep in mind - such as a reliable internet connection, clear sound, and good lighting in the room. As mentioned above, being a global community can make it tricky to arrange a time that suits a lot of people, but do try to take that into consideration. You also need think about creating a google hangout, or youtube live stream link for the community so that everyone knows where to go.
{{< /text_block >}}

{{< text_block
  title="Make it fun!" >}}
Help make it an enjoyable event by creating a welcoming, and creative space. Introduce people to each other, bring snacks/drinks, and plan some ways to get to know each other and how you all got into NavCoin.
{{< /text_block >}}

{{< text_block
  title="Promote your event" >}}
Be sure to create an event on Meetup.com or Facebook so you can share links to invite others. Create an event card on NavHub and share your links on other our community channels will help make your event more visible. When you are hosting a location-based event you could send the event details around your local crypto community, as a way to target newcomers.
{{< /text_block >}}

{{< text_block
  title="Budget" >}}
If you are hosting a bigger event like conferences or workshop, you might need some budget to make it happen. You need to list out the Guest speaker, book a space, and align the budget to your actual needs. Consider creating a proposal in the Community Fund to help out with the costs.
{{< /text_block >}}
<br><br>

## How to add an event to NavHub

{{< text_block
  title="Step 1: Getting things ready" >}}
  <br>
  1. Sign in to our GitHub account, if you don't have one, <a href="https://github.com/join" target= e class="a-guide">sign up here</a>.
  <br><br>
  2. Then <a href="https://github.com/NAVCoin/NavHub/new/master/content/events" target=e class="a-guide">go to the navhub repo</a>
  <br><br>
  3. Type your event name in the first text field. (For example : my-awesome-event)
  <br><br>
  4. Then hit <span class="highlight">/</span> on your keyboard, an empty input field will appear. 
  <br><br>
  5. Type <strong>index.md</strong> in the new input field.

  <br><br>
  Now we have created an empty Markdown file for your project card. (If you haven't heard of Markdown, you can think of it as a normal plain text file with additional web features.) Next we'll learn how to add content to it.
{{< /text_block >}}


{{< text_block
  title="Step 2: Fill out the markdown template" >}}
  <br>
  Copy the template below to the <strong>index.md</strong> you just created.
  
  <br><br>
  <textarea class="textarea" id="txtarea" onClick="SelectAll('txtarea');">
---
short_date_num: ""
short_month: ""
eventLongDate: ""
date: ''
past: false
title: ""
location: ""
host: ""
description: ""
twitter_url: ""
facebook_url: ""
meet_up_url: ""
misc_url: ""
---
  </textarea>
  <button class="button" onclick="copyTxt()">Copy to clipboard</button>

  Here's an example of a completed template for <strong>NavCoin LiveStream - Community Fund</strong>:
  <br><br>
  <img src="/images/guides/events/event-thumb.png" class="pic thumb">
  <br>
  <textarea class="textarea" id="txtarea">
---
short_date_num: "18"
short_month: "OCT"
eventLongDate: "Thursday, 18 October 2019, 8.30am - 9.30am (GMT+12)"
date: '2018-10-18T08:30:00+12:00'
past: true
title: "NavCoin LiveStream - Community Fund"
location: "12 Madden Street, Auckland, New Zealand"
host: "NavCoin Core"
description: "In this education session the NavCoin Core devs will be discussing NavCoin's decentralized governance system; the Community Fund"
misc_url: "https://www.youtube.com/watch?v=UKNZBNiq_Zs"
---
  </textarea>
{{< /text_block >}}

{{< text_block
  title="Step 3: Commit and create a pull request" >}}
  <br>
  Tips: Pull requests let you tell others about the changes you are about to make to the NavHub.org website, <strong>the changes won't happen straight away until it's approved by 4 other contributors</strong>. Here is how to do it
  <br><br>
  1. Commit - after you happy with the Markdown file, scroll down and hit <span class="highlight">Commit new file</span>. Add some comments and decriptions if you need to for others to know more about your change.
  <br>
  <img src="/images/guides/projects/commit.png" class="pic">
  <br><br>
  2. Add Reviewers
  <br><br>
  3. After you commit, a new page will show up. Click on <span class="highlight">Create pull request</span> so people can see your changes. You can see your pull request as the first item  <a href="https://github.com/NAVCoin/NavHub/pulls" target=e class="a-guide">here</a>.
  <br>
  <img src="/images/guides/projects/pull.png" class="pic"> 
{{< /text_block >}}



{{< text_block
  title="Congrats!" >}}
  <br>
  Well done! You just created you event card on NavHub! 
  <br><br>
  Again, this won't go live straight away because any change to the navhub.org site needs to be reviewed by the community members. To speed things up, it would be greate to share your pull request link to dicord.

{{< /text_block >}}

## How do i get involved
{{< text_block
  title="From NavHub to the Community Fund" >}}

    1. If you think you have a greate idea and wish to delivery a major improvement to to the NavCoin ecosystem, it would be greate to communicate with other NavCoin members,and submit your idea to the <a href="https://discord.gg/7dzGmJ7" target=e class="a-guide">Discord Events Channel</a>.
    <br><br>
    2. Disuss and refine your news ideas with the community members and get some buy-ins.
    <br><br>
    3. Pulish the polished idea onto <a href="https://collab.navcoin.org/dashboard" class="a-guide" target=e>Nav Collab</a>.
    <br><br>
    4. Great! Now you can apply for the NavCoin Community Fund with has a link to you the project on Nav Collab and get paid for working and deliverying you ideas. <a href="https://navcoin.org/en/community-fund/" target=e class="a-guide">Check out the community fund page here</a>.
{{< /text_block >}}

<img src="/images/guides/workflow.png" style="display: flex; max-width: 700px;margin: 0 auto; margin-top: 30px;">



{{< community >}}


<style>
.highlight{
  margin: 0 2px;
  padding: 0px 5px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  border-radius: 3px;
}

.textarea {
  line-height: 1.5em;
  background: #fffff;
  max-width: 700px;
  padding: 15px 30px;
  margin-bottom: 8px;
  font-size: 14px;
  font-style: italic;
  color: #66757f;
  height: 400px;
  border: 1px solid #ccd6dd;
  border-radius: 5px;
  resize: none;
  overflow-y: scroll;
  display: flex;
  margin-right: auto;
  margin-left: auto;
}

.button {
  background: #1073E7;
  font-size: 17px;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  min-width: 300px;
  padding: 8px 30px;
  justify-content: space-around;
  align-items: center;
  border-radius: 0px;
  border: none;
  color: #fff;
  transition: 0.4s;
  display: flex;
  margin: 15px auto;
  margin-bottom: 30px;
}

.pic {
  border-radius: 5px;
  display: flex; 
  border: 1px solid #ccd6dd; 
}

.thumb{
  max-width: 400px;
}

</style>



<script type="text/javascript">
function copyTxt(){
    var copyText = document.getElementById("txtarea");

  copyText.select();

  document.execCommand("copy");
}  
  
function SelectAll(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}
</script>

