# Nav Community Site
The Navcoin community site is maintained by the community

## Contributing to the site
Want to add a project, update or fix some errors. Then plase fork the project and get changing.

## Geting started
The Nav Community site is built with the static site generator [Hugo](https://gohugo.io/). 

### Install Hugo
You will need hugo installed on your system to preview any changes. Follow the install instructions for your OS here: 
https://gohugo.io/getting-started/installing/

### Clone the project
You will need to fork and clone the project on github if you wish to make any changes to the site

### Running the site
With the site cloned and Hugo installed you will terminal to the site dir and run the site bu typing:
```hugo server```

This will serve the site on http://localhost:1313

Please note that hugo is a hot loading site and that changing and saving files will auto rebuild the site for you

## Editing Content
All content for the site is held in markdown files in the content folder. The content sections match the sections of the site.

### Adding news item
When creating a new item it is recommend you use the Hugo commandline tool as this will use the right archetype and populate the properties

`hugo new news/[year]/[month]/[post-title]/index.md`

You should keep all the post related images in the folder with the index.md folder

News page front meta control:

```
title: "New Title"                  - The title of the news item
date: 2018-03-07T10:27:21+13:00     - The date and time published - defaults to date created
draft: false                        - Is the item a draft - if true it is not built
author: ""                          - Who authored the article
description: ""                     - currently unused
categories: ["Nav Coin Updates"]    - Cats
resources: []                       - currently unused
slug: ""                            - currenctly unused
feature_image: "image.png"          - The image that should be herored 
show_title_text: false              - If you want to show the title below the image
```

### Adding projects
When adding a project it is recommend you use the Hugo commandline tool as this will use the right archetype and populate the properties

`hugo new projects/project-name/project-name.md`

News page front-meta control:
```
title: "Project name                - Project Name
date: 2018-03-07T10:27:21+13:00     - The date and time published - defaults to date created        
lastmod: 2018-03-19T10:27:21+13:00  - The date md was last changed
draft: true                         - Is the item a draft - if true it is not incuded in the site
author: ""                          - Who is the project lead
description: ""                     - currently unused
resources: []                       - currently unused
categories: []                      - currently unused
slug: ""                            - currently unused
type: "project"                     - Defines this is a project - DO NOT CHANGE
feature_image: ""                   - currently unused
show_title_text: false              - currently unused
in_progress: false                  - Signal that the project has been started
completed: false                    - Signal project is complete
show_on_roadmap: false              - Show the project on the road map
percent_complete: 0                 - How much of the project has been completed
github_url: ""                      - Github repo of the project - Optional
project_url: ""                     - The project URL - Optional
reddit_url: ""                      - Reddit thread / URL - Optional
twitter_url: ""                     - Project twitter url - Optional
card_color: ""                      - Change the card color - Optional
font_color: ""                      - Change the card font color - Optional
weight: 0                           - Allows the default postion on the roadmap to be overridden
```
## Editing Layouts
The layouts are held in the theme folder currently `nav-commnity-v1`. Please review the [Hugo documentation](https://gohugo.io/documentation/) for layout template information


-