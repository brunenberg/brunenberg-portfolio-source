+++
title = 'Bazaar'
date = "2024-04-01"
tags = ['PHP', 'Laravel', 'Unit Testing']
categories = ['School Assignments', 'Collaborative Projects']
+++

## Overview 🗺️
‘Bazaar’ is a web application developed using the Laravel framework as part of an academic project. It was collaboratively created by a team of two students. The platform is designed to integrate features reminiscent of “Marktplaats” and “iBood”, offering a unique marketplace experience. The application supports three distinct user roles: private advertisers, business advertisers, and customers. Each role is equipped with specific permissions and functionalities, enabling interactions with various entities such as products or companies.

### The user stories (without acceptance criteria, these are not included)
- As a user, I can register on the platform (without the possibility of advertising)
- As a user, I can register as a private advertiser
- As a user, I can register as a business advertiser
- As platform owner, I want to export the business registration as a PDF (contract) so that it can be signed. (you may use a package for this)
- As platform owner, I want to offer the application in two languages
- As platform owner, I want to be able to upload the contracts so they can be approved
- As platform owner, I want API calls to be invoked securely
- As a company, I want to be able to give my own look and feel to the application
- As a company, I want to be able to set my own URL so I can create a landing page
- As a business, I want to link different components to my landing page so I don't have to create everything myself. A component could be: Featured ads, an introduction text, image. Think of it as a page layout creator.
- As a company, I want to unlock an API so that only my ads can be used by another application
- As a company, I want to upload a csv of ads so I can load all ads in one go, saving time
- As a platform owner, I want every ad to be tagged with a QR code so it's easily shareable. (You can use a package for this)
- As advertiser I want to be able to place a rental ad
- As advertiser, I want a calendar overview of all my rentals so I can see when I need to lend out and get stuff back
- As advertiser, I want a calendar overview of when my ads will expire
- As a user, I want to be able to see a history of purchased products
- As a user, I want to be able to create favourites
- As a user, I want to see a calendar overview of rented products so I know when I can pick up and return something
- As a user, I want to be able to see a homepage with the latest advertisements
- As a user, I want to be able to post a review of a rental product
- As a user, I want to be able to post a review of an advertiser
- General > each 'list' must be able to be filtered and sorted
- General > every listing contains paging
### Businessrules
- When returning a product, wear is calculated (according to settings)
- When returning a product, a photo must be uploaded
- You may only create a maximum of 4 bids
- You may only place a maximum of 4 advertisements
- You may only create a maximum of 4 rental ads
- An ad is the link with multiple ad > in other words if you rent out a chainsaw you can buy a bottle of oil with it.

## Technologies Used 🛠️
- PHP
- Laravel
- SQL Database
- Microsoft SQL Server Management Studio
- Trello

## Challenges and Solutions 🧗🏻
The challenge of this application was to implement a large list of requirements in quite a short amount of time. A lot of those requirements had quite a vague description, so it was all up to interpretation.

## Showcase 📸
![Image of the home page](/images/portfolio/bazaar_home.jpg)  

![Image of the home product](/images/portfolio/bazaar_product.jpg)  

![Image of the home agenda](/images/portfolio/bazaar_agenda.jpg)

## Conclusion 🏁
The project progressed smoothly overall, yet as the deadline approached, we found ourselves with more tasks remaining than anticipated. Although we initiated the project on time, juggling it alongside other assignments was more challenging than expected. In hindsight, spending additional time to the project at the start of the period might have decreased the end-of-term workload.