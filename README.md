# Public API Requests

A front end project I built for my portfolio during my studies at [Treehouse](https://teamtreehouse.com). For this project, I built an app for a fictional company called "Awesome Startup". 

I used the [Random User Generator API](https://randomuser.me) to grab information for twelve random "employees". I then used that data to build a prototype for an employee directory.

I requested a JSON object from the API and parsed the data so that twelve employees are listed in a grid with their thumbnail image, full name, email and location. Clicking the employee's image or name opens a modal window with more detailed information, such as the employee's birthday and address.

Even though I was allowed to use jQuery in this project, I chose to develop the app with 100% plain, "vanilla" JavaScript. 

## Table of Contents

- [Preview](https://github.com/zviels/public-api-requests#preview)
- [Quick Start](https://github.com/zviels/public-api-requests#quick-start)
- [Overview](https://github.com/zviels/public-api-requests#overview)
- [Built With](https://github.com/zviels/public-api-requests#built-with)
- [Thanks](https://github.com/zviels/public-api-requests#thanks)

## Preview

<a href="https://zviels.github.io/public-api-requests">
  <img src="https://deab9i1yeabp0.cloudfront.net/github/treehouse/public-api-requests/public-api-requests.gif" alt="App Preview" width="100%">
</a>

## Quick Start

To view the app -

- You can [download the ZIP file](https://github.com/zviels/public-api-requests/archive/refs/heads/main.zip), extract it and open `index.html`.
- Alternatively, you can watch the app online [here](https://zviels.github.io/public-api-requests).

## Overview

As mentioned above, I developed this app as part of my studies at [Treehouse](https://teamtreehouse.com). I participated in their [Techdegree](https://teamtreehouse.com/techdegree) program. In this section you can read about -

- The topics I learned before I started developing the app.
- The requirements I had to meet to complete this project.
- Additional features I chose to implement for the app.
- The rating the project received.

### What Did I Learn?

Here is what I learned before I started working on the project -

- Introduction to the Terminal <img src="https://img.shields.io/badge/-Dev%20Tools%20Course-9b3b5a" alt="Dev Tools Course">
- Introduction to Git <img src="https://img.shields.io/badge/-Dev%20Tools%20Course-9b3b5a" alt="Dev Tools Course">
- HTTP Basics <img src="https://img.shields.io/badge/-Dev%20Tools%20Course-9b3b5a" alt="Dev Tools Course">
- AJAX Basics <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">
- Asynchronous Programming with JavaScript <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">

I also learned how to work with the Fetch API.

### Project Requirements

You can view the project requirements [here](https://deab9i1yeabp0.cloudfront.net/github/treehouse/public-api-requests/project-requirements.jpg).

### Additional Features

These are features I chose to implement for the project, even though I didn't have to. The additional features may extend the functionality of the app, improve the user experience or beautify the user interface.

As of this moment I have implemented two additional features for the app.

- Click on the first employee, and you won't be able to see the `PREV` button in the modal window. That's because there is no employee prior to the first employee. Likewise, click on the last employee to see that the `NEXT` button is missing in the modal window.
- When I tested the project, I have noticed that after using the search functionality, the modal window appears not only for employees that appear in the search results, but for all employees. I fixed that. With the addition of the previous feature, you can now also search for a specific employee, click on it and see that the modal window has no `PREV` and `NEXT` buttons. This happens when only one employee appears in the search results.

### Rating

There are two possible grades for each Techdegree project - "Meets Expectations" and "Exceeds Expectations".

This project received the **"Exceeds Expectations"** rating.

See the full project review [here](https://deab9i1yeabp0.cloudfront.net/github/treehouse/public-api-requests/project-review.jpg).

:100:

## Built With

- HTML
- CSS
- JavaScript

## Thanks

<a href="https://teamtreehouse.com">
  <img src="https://deab9i1yeabp0.cloudfront.net/github/treehouse/treehouse-logo.png" alt="Treehouse Logo" width="100%">
</a>

Thanks to [Treehouse](https://teamtreehouse.com) for providing the starter files for this project -

- `index.html`
- `styles.css`

In addition, a huge thank you to everyone who reviewed the project! :grinning: