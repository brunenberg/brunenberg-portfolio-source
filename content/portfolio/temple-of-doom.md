+++
title = 'Temple of Doom'
date = "2024-03-10"
tags = ['CSharp', '.NET', 'Object Oriented', 'MVC', 'Console App']
categories = ['School Assignments', 'Solo Projects']
+++

## Overview 🗺️
'Temple of Doom' is a console application developed using the .NET MVC framework. The goal of this assignment was to practice a lot of different design patterns. The front consisted of a console with different characters and colours, depending on the type of object and if it had a colour property assigned to it (in the case of a key or coloured door for example).

## Technologies Used 🛠️
- C#
- .NET Console App
- Design Patterns
  - MVC
  - Factory
  - Observer
  - Strategy
  - Decorator
  - Adapter

## Challenges and Solutions 🧗🏻
One of the biggest challenges was researching all the different kind of design patterns and assessing for which purpose each pattern had to be used, without knowing a lot about them. However, the biggest challenge in my opinion, was understanding how the connections between the different rooms worked. I found it really hard to wrap my head around the idea of having connections that could also be doors (with decorators) and those had a nullable value for each direction, which corresponded with the 'id' of a room. When I finally fully understood it, the implementation was not that much of an issue, but understanding it initially was quite a challenge.

## Showcase 📸
![Temple of doom showcase](/images/portfolio/temple_of_doom_showcase.jpg)  
![Temple of doom win showcase](/images/portfolio/temple_of_doom_win.jpg)  
![Temple of doom game over showcase](/images/portfolio/temple_of_doom_loss.jpg)

## Conclusion 🏁
I initially was pretty intimidated by the concept of design patterns, but they turned out to be very useful and not very hard to understand and implement. I also learned about the importance of understanding concepts of 'features' thoroughly, before starting to write the code for them.