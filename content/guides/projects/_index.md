---
layout: guides
title: 'NavHub Guides - Projects'
title_text: 'Projects'
author: Craig MacGregor
date: '2018-05-30T17:44:23+12:00'
sections: [Overview, Ways you can help existing projects, Create new Development project on NavHub]
page_type: 'guide'
github_file: 'content/guides/projects/_index.md'
---

# NavCoin Development Projects

## Overview

{{< text_block
  title="Development is important for NavCoin ecosystem to self-sustain and grow" >}}
  Developers are a core part of the NavCoin community - we’re always looking for more people to help build new projects, and contribute to the wider NavCoin ecosystem.
  Whatever your skill set or experience, there are a range of projects you can help with. From fixing bugs, testing new releases, to creating your own project that uses NAV. In NavCoin, everyone gets decides what they work on.

{{< /text_block >}}

{{< text_block
  title="Community fund helps you build projects" >}}
  The NavCoin community fund can help you get paid for your contributions. All you need to do is submit a proposal, and the community votes on whether they think it adds to the NavCoin ecosystem. There is 500,000 NAV available in the fund each year for proposals, and it’s open to anyone.
{{< /text_block >}}

{{< text_block
  title="Benefits for developers" >}}
If you’re looking to get involved with crypto, this is the perfect opportunity for you. There are a range of ways to contribute, and you’ll be surrounded by a passionate community of developers who you can reach out to for help. Not only will you be learning new skills, but you’ll also gain a reputation among the community as someone who’s keen to help out.
{{< /text_block >}}

{{< divider >}}

{{< quote
  image="/images/guides/projects/matt.jpeg"
  text="Fund yearly/bi-yearly server costs for sites like the block explorer (any smaller period than that is probably too short for voting to pass). It can help fund people to create new tools/sites/walls or improve existing ones. New paper wallet anyone?"
  author="Matt"
  link_href=""
  link_text=""
>}}

## Ways you can help existing projects

{{< info_tiles category="projects" >}}

## Create new Development project on NavHub
{{< text_block
  title="Step 1: Getting things ready" >}}
  <br>
  1. Sign in to our GitHub account, if you don't have one, <a href="https://github.com/join" target=e>sign up here</a>.
  <br><br>
  2. Then <a href="https://github.com/NAVCoin/NavHub/new/master/content/projects" target=e>go to the NavHub repo</a>
  <br><br>
  3. Type your project name in the first text field. (For example : my-awesome-project)
  <br><br>
  4. Then hit <span class="highlight">/</span> on your keyboard, an empty input field will appear. 
  <br><br>
  5. Type <strong>index.md</strong> in the new input field.
  <br><br>
  <img style="width:100%;  border: 1px solid #ccd6dd; border-radius: 5px;" src="/images/guides/projects/giphy.gif" alt="make">
  <br><br>
  Now we have created an empty Markdown file for your project card. (If you haven't heard of Markdown, you can think of it as a normal plain text file with additional web features.) Next we'll learn how to add content to it.
{{< /text_block >}}


{{< text_block
  title="Step 2: Fill out the markdown template" >}}
  <br>
  Copy the template below to the <strong>index.md</strong> you just created. If you want to customize the background icon for your project, you can <a href="https://github.com/NAVCoin/NavHub/tree/master/themes/nav-community-v1/static/images/icons" target=e>pick one from here</a>.
  
  <br><br>
  <textarea class="textarea" id="txtarea" onClick="SelectAll('txtarea');">
---
title: ""
date: 
draft: false
author: ""
description: ""
filter: [""]
bg_image: "/images/icons/icon-purple-network-new.png"
type: "project"
in_progress: false
completed: true
show_on_projects: true
allow_click_through: false
percent_complete: 100
github_url: ""
project_url: ""
reddit_url: ""
twitter_url: ""
weight: 0
---
  </textarea>
  <button class="button" onclick="copyTxt()">Copy to clipboard</button>

  Here's an example of a completed template for <strong>Nav Explorer</strong>:
  <br><br>
  <img src="/images/guides/projects/nav-explorer.png" alt="nav-explorer" class="pic thumb">
  <br>
  <textarea class="textarea" id="txtarea">
---
title: "Nav Explorer"
date: 2018-03-10T14:29:06+13:00
draft: false
author: "Prodpeak"
description: "Alternative block explorer written in Java. This will offer redundancy if there are any issues with the current cryptoid block explorer."
filter: ["Network"]
bg_image: "/images/icons/icon-purple-network-new.png"
type: "project"
in_progress: false
completed: true
show_on_projects: true
allow_click_through: false
percent_complete: 100
github_url: "https://github.com/NavExplorer"
project_url: "http://www.navexplorer.com"
reddit_url: ""
twitter_url: ""
weight: 0
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
  <img src="/images/guides/projects/add-reviewers.gif" class="pic">
  <br><br>
  3. After you commit, a new page will show up. Click on <span class="highlight">Create pull request</span> so people can see your changes. You can see your pull request as the first item  <a href="https://github.com/NAVCoin/NavHub/pulls" target=e>here</a>.
  <br>
  <img src="/images/guides/projects/pull.png" class="pic"> 
{{< /text_block >}}



{{< text_block
  title="Congrats!" >}}
  <br>
  Well done! You just created you project card on NavHub! 
  <br><br>
  Again, this won't go live straight away because any change to the navhub.org site needs to be reviewed by the community members. To speed things up, it would be greate to share your pull request link to dicord.

{{< /text_block >}}

## How do i get involved
{{< text_block
  title="From NavHub to the Community Fund" >}}

    1. If you think you have a greate idea and wish to delivery a major improvement to to the NavCoin ecosystem, it would be greate to communicate with other NavCoin members,and submit your idea to the <a href="https://discord.gg/uzq4jYr" target=e>Discord Projects Channel</a>.
    <br><br>
    2. Disuss and refine your news ideas with the community members and get some buy-ins.
    <br><br>
    3. Pulish the polished idea onto <a href="https://collab.navcoin.org/dashboard">Nav Collab</a>.
    <br><br>
    4. Great! Now you can apply for the NavCoin Community Fund with has a link to you the project on Nav Collab and get paid for working and deliverying you ideas. <a href="https://navcoin.org/en/community-fund/" target=e>Check out the community fund page here</a>
{{< /text_block >}}

<img src="/images/guides/workflow.png" style="display: flex; max-width: 700px;margin: 0 auto; margin-top: 30px;">


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
  max-width: 300px;
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

{{< community >}}
