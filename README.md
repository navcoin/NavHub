# NAV community site
NavHub is your portal into the NavCoin community. 

Maintained by the global NAV community to keep you up to date with the latest NavCoin news, projects, and events.


[![Netlify Status](https://api.netlify.com/api/v1/badges/2c02a0ab-b7eb-411a-96f8-291e9ffcd039/deploy-status)](https://app.netlify.com/sites/navhub/deploys)

## Contributing to the site

Anyone can contribute to the site by making a pull request with the changes you'd like to see included.

## Bounty Program

There is a bounty program which you can get paid in NAV for contributing to this websites.

https://www.reddit.com/r/NavCoin/comments/bttld6/websites_bounty_program

To make sure you are eligible to claim a bounty please follow these simple steps;

1. Check the issues list for issues tagged with `bounty` or make your own issue and tag it with `bounty-review` to have it reviewed and assigned a bounty.
2. Comment on the bounty issue you'd like to work on to claim it and ensure no one else is working on it.
3. Fork the repository and do the work outlined in the bounty issue.
4. Make a pull request to the main repository and fill out the pull request template in full.
5. Once the pull request is reviewed, approved and merged to master the bounty will be paid.

## Geting started
The NAV community site is built with the static site generator [Hugo](https://gohugo.io/).

This website is built using Hugo Version 0.46.

### Install Hugo
You will need Hugo installed on your system to preview any changes. Follow the install instructions for your OS here:
https://gohugo.io/getting-started/installing/

### Clone the project
You will need to fork and clone the project on github if you wish to make any changes to the site

### Running the site
After cloning the site, cd into the project directory and run it up:
    `cd nav-community-site`
    `hugo server`

This will serve the site on http://localhost:1313

Please note that Hugo is a hot loading site and that changing and saving files will auto rebuild the site for you.

## Editing Content
All content for the site is held in markdown files in the content folder. The content sections match the sections of the site.

### Adding news item
News items are now loaded in from the NavCoin Collective publication on Medium. To get an article featured on the site, publish it to your own Medium account then contact the publication editors who can help you get it included.

### Adding projects
When adding a project it is recommend you use the Hugo commandline tool as this will use the right archetype and populate the properties

    hugo new projects/project-name/index.md

#### Project page front-meta control:
    title: "Project name"               - Project Name
    date: 2018-03-07T10:27:21+13:00     - The date and time published - defaults to date created
    lastmod: 2018-03-19T10:27:21+13:00  - The date md was last changed
    draft: true                         - Is the item a draft - if true it is not incuded in the site
    author: ""                          - Who is the project lead
    description: ""                     - currently unused
    resources: []                       - currently unused
    categories: []                      - currently unused
    slug: ""                            - currently unused
    type: "projects"                     - Defines this is a project - DO NOT CHANGE
    feature_image: ""                   - currently unused
    show_title_text: false              - currently unused
    in_progress: false                  - Signal that the project has been started
    completed: false                    - Signal project is complete
    percent_complete: 0                 - How much of the project has been completed
    github_url: ""                      - Github repo of the project - Optional
    project_url: ""                     - The project URL - Optional
    reddit_url: ""                      - Reddit thread / URL - Optional
    twitter_url: ""                     - Project twitter url - Optional
    card_color: ""                      - Change the card color - Optional
    font_color: ""                      - Change the card font color - Optional
    weight: 0                           - Allows the default postion on the roadmap to be overridden

## Editing Layouts
The layouts are held in the theme folder currently `nav-community-v1`. Please review the [Hugo documentation](https://gohugo.io/documentation/) for layout template information

## Editing Styles
CSS styles can be added/edited in the `static/css` directory. Most of the main styles are in `style.css`

Styles are built using sass. To compile the sass run `npm run sass`

## Editing React Components
Some content is loaded dynamically as React Components. If you need to change these, you can watch for changes and build for development by running `npm run watch:react`.

Before you commit your PR with the changes, you'll need to run `npm run build` which will compile the React components for production.

To add a new component simply add the js file to the `/react/components/` directory. All files in this directory are considred entry points and are bundled by webpack. If you write sub components which aren't entry points, add them to the `/react/components/lib` directory instead. Webpack will put all the dependencies into a common file called `vendor.bundle.js`. To add your components to the html, just make sure the vendor.bundle.js file is included into the page before your component followed by your component which should both be just before the closing body tag. eg.

```
...
{{ partial "footer.html" . }}

<!-- React components. -->
<script src="/js/react/vendor.bundle.js"></script>
<script src="/js/react/news-article.js"></script>

</body>
</html>
```
