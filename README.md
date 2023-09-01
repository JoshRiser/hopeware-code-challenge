# Code Challenge

Welcome! If you are reading this, it's likely because you want to work with us. If you have already applied, then continue on. If not, check out our [careers](https://hopeware.com/careers/) page to see our available openings. No engineer roles posted? Email us anyway!

# Instructions

The goal of this coding challenge is to allow us to see how you approach a technical problem. This challenge requires experience with React.

This should take about **2-3 hours** to complete.

Upon completion, a **public** Github URL should be sent to the following people:

- [tim@hopeware.com](mailto:tim@hopeware.com)
- [shane@hopeware.com](mailto:shane@hopeware.com)

> Pro Tip. Read this doc in it's entirety BEFORE you do anything. One of the main things we'll be looking for is someone who can follow directions well.

## The Challenge

You'll be creating a React Web application that interacts with the XKCD API. 

If you've never heard of XKCD before, it's a fun web comic. You can check it out here - [XKCD Website](https://xkcd.com).

Their website API does not support CORS, so we've built out a proxy for you that can be found here - [XKCD PROXY](https://xkcd.now.sh/). There you will also find the documentation that you need for the API calls you will be making.

The goals are:

1. Create a React Application
2. Create a Home Page that displays the latest comic
3. Create a Search Page (seperate page) that allows you to search & load a specific comic
4. Follow all directions outlined below

## Pre-Requisites

To ensure this runs properly, make sure the following are installed.

- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/lang/en/)

## Requirements

First, head over to the [API website](https://xkcd.now.sh/) to get started. Feel free to make some test requests there to get a feeling for how the data will work.

Second, start on your project.

1. Clone this repo. Please use this for your project.
2. Remove the current `git` configuration, and re-init yourself.
    - `rm -rf .git`
    - `git init`
3. Add & Commit your first `Initial Commit` to your own repository
4. Set up the Project
    - We used [Vite](https://vitejs.dev/) to set it up.
    - We stripped it down a bit to keep things simpler.
    - You can read their documentation, but here are the basics:
      - To Setup: `yarn`
      - To Run: `yarn dev`
      - To Test: `yarn lint` (There shoudl be no errors on the final code)
      - Open up [http://localhost:3006](http://localhost:3006) to view the app.
    - All of your programming will be done in the `./src` directory
      - You shouldn't have to edit anything else.
5. Create two pages in the app
    - HINT: You'll need some sort of router
    - The URLs should be `http://localhost:3006` and `http://localhost:3006/search`
6. Build out the Home Page
    - The home page should display the latest comic upon load.
7. Build out the Search Page
    - Upon load, the search page just displays an input field
    - When you add a value (1 - 2821) and submit, the corresponding comic will be displayed
    - If a number beyond that range is entered, an error message should be displayed

## Images

All images should have both `title` and `alt` text on them.

- The `alt` text should be pulled from the "title" field in the API response.
- The `title` text should be pulled from the "alt" field in the API response.

_(yes, we know it sounds reversed, but trust us... there's a reason)_

# Working Example

Feel free to take any liberties you'd like with design.

Feel free to have fun, implement your own styles and make it feel like your own.

To help, here is a VERY STRIPPED DOWN [working example](https://i.imgur.com/0dXELKX.gif).

# Bonus

There is a lot of other data available in the API response, such as "year", "month", "num", etc. Feel free to take that data and show it somewhere on the page.

This isn't required, but feel free to go beyond the requirements. 

Lastly, have fun. We look forward to seeing what you come up with!
