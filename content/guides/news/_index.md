---
layout: guides
title: 'NavHub Guides - News'
title_text: 'News'
author: Craig MacGregor
date: '2018-05-30T17:44:23+12:00'
sections: [Overview, What can you write, How can I post an article to NavHub]
page_type: 'guide'
github_file: 'content/guides/news/_index.md'

---

# News, Blogs, Aricles, Stories

## Overview

{{< big_text >}}
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim turpis, tempus non ligula quis, dapibus vestibulum tellus. Cras enim turpis, tempus non ligula quis, dapibus vestibulum.
{{< /big_text >}}

{{< divider >}}

{{< text_block
  title="Who can write to NavHub?" >}}
  Anyone can add their own news article to the NavHub. The news section is now a decentralised publication about all the things happening in the NavCoin community. We’ve implemented an Content Management System to the site as a way for non-developers to add their articles. There’s still a few steps that need to take place, so be sure to read this guide if you want to contribute.
{{< /text_block >}}

{{< quote
  image="/images/guides/news/easy.jpg"
  text="We'd partner with @NavCoin to bring Australia the easiest way to get #crypto - we're ready to launch right now, just need a partner in crime!"
  author="Easy Crypto"
  link_href="https://twitter.com/easycryptonz"
  link_text="@easycryptonz"
>}}

## What can you write

{{< info_tiles category="events" >}}



## How can I post an article to NavHub

{{< text_block
  title="Step 1: Getting you started" >}}
  <br>
  1. To add a new article to NavHub, you must first have a GitHub account. If you don't have one, <a href="https://github.com/join" target=e>sign up here</a>.
  <br><br>
  2. Then go to <a href="https://navhub.org/admin/" target=e>NavHub Admin</a>.
  <img src="/images/guides/news/admin.png" class="pic">
  3. Login with your GitHub account, authorise the NavHub App and you will now see this dashboard.
  <img src="/images/guides/news/dashboard.png" class="pic">
  4. To add a new News Article click the <span class="highlight">New News</span> button at the top right of the centre column.
{{< /text_block >}}


{{< text_block
  title="Step 2: Add your title, author name, and featured image." >}}
  <br>
  1. Once you entered the article editing mode, you can start by adding your title and name. The publish date will be automaticly set for you to today's date. You can pick the relavant keyword as your category News, Article, Blog, Story, Software Update etc .
  <img src="/images/guides/news/adding.png" alt="adding-title" class="pic">
  2. Featured images should be <strong>984 x 642</strong> with any text vertically centred like so:
  <img src="/images/guides/news/hero.png" alt="hero image" class="pic">
  The vertical centring of the text is important for when the image is cropped into a thumbnail for the /news listings page as shown below:
  <img src="/images/guides/news/crop.png" alt="cropped" class="pic">
  There are numbers of online tools which allow you to easily create a feature image like <a href="https://canva.com" target=e> Canva</a>, and we cherry pick the best feature image from <a href="https://unsplash.com/" target=e>Unsplash</a> . In terms of the design style, we recommened you to follow the <a href="https://navcoin.org/assets/NavCoinBrandGuidelines.pdf" target=e>NavCoin Brand Guideline</a>, but totally fine to come up with your own style to surpise the community!
  <br><br>
{{< /text_block >}}

{{< text_block
  title="Step 3: Writing the body." >}}
  <br>
  When writing the body of the post, make sure you specify the excerpt of the post to display on the /news listing page. You can do this by inserting the <strong>&lt;!–-more-–&gt;</strong> tag where you want the excerpt to end.
  <img src="/images/guides/news/body.png" alt="write body" class="pic">
  The first paragraph of your post will be used as the excerpt and won’t display on the actual news item. If you want the excerpt to be the first paragraph of the news article, you will need to repeat the first paragraph before and after the <strong>&lt;!–-more-–&gt;</strong> tag. Continue to format your post, you can insert images, headings, lists, links and more.
  <br><br>
  If you are still confused, you can look at how the old post was done, 
  <a href="https://navhub.org/admin/#/collections/news/entries/2018-12-13-navcoin-4-5-0-is-now-available" target=e>check out how we did <strong>NavCoin 4.5.0 Is Now Available!</strong> article here</a>.
  <br><br>

  Once you’re happy with the post, click the <span class="highlight">Save</span> button up the top on the left.

{{< /text_block >}}


{{< text_block
  title="Step 3: Commit and create a pull request" >}}
  <br>
  1. When you save your article, new options will show up on the top bar. Go the the <span class="highlight">Set Status</span> dropdown and choose <strong>In Review</strong>.
  <img src="/images/guides/news/status.png" class="pic">
  A pull request will be automatically opened on NavHub GitHub repository. <a href="https://github.com/NAVCoin/NavHub/pulls">Find your pull request here</a>.
  <br>
  Tips: Pull requests let you tell others about the changes you are about to make to the NavHub.org website, <strong>the changes won't happen straight away until it's approved by 4 other contributors</strong>. 
  <br><br><br>
  2. You can preview your changes by clicking <span class="highlight">show all checks</span> and then the <span class="highlight">Details</span> link next to the Netlify deploy preview.
  <img src="/images/guides/news/preview.png" class="pic">
  3. Add Reviewers
  <img src="/images/guides/projects/add-reviewers.gif" class="pic">
{{< /text_block >}}


{{< text_block
  title="Congrats!" >}}
  <br>
  Well done! You just created your article on NavHub! 
  <br><br>
  Again, this won't go live straight away because any change to the navhub.org site needs to be reviewed by the community members. To speed things up, it would be greate to share your pull request link to dicord.

{{< /text_block >}}

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
  margin: 15px 0 30px 0;
}

.thumb{
  max-width: 300px;
}

</style>