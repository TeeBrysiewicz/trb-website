---
author: Tobias Brysiewicz
date: 2021/02/08
slug: location-obfuscation
title: Location Obfuscation
---

Location obfuscation is used in location-based services (LBSs) to protect the location
information of users. This can be done in a variety of ways, which we will explore in this article.

### Disclaimer

As software developers, we have several different options for achieving this goal. Which option
is best will depend on your application and it's intended use.

## Objectives To Obfuscate

- Identity
- Location
- Time

### Options

- Fake Locations: Using **fake** location data
- Rounding: Using things such as landmarks to **approximate** locations
- Redefinition: Using **possible** areas
- Spatial Cloaking: Using blurring techniques to use **regions**
- Invisible Cloaking: Using **zones** rather than exact locations
- Noise: Using **randomness** to obscure the location

## Fake Locations

### Explanation

Simply put, this would be using completely fake information. Often, this is used for
development rather than a production environment.

Depending on what language you use, libraries like [Faker](https://hexdocs.pm/faker/apireference.
html) are great for this.

### Example #1 (address)

Given you choose to use a library like Faker, you can make calls like:
`Faker.Address`
This will generate a fake address to be used.

### Example #2 (latitude / longitude):

Here you can use your given language's random operators to generate a latitude and longitude
inside of a ceiling and a floor, including a possible minus sign.


## Rounding

### Explanation

Nearby landmarks is a way to approximate the user's location to a publicly known location such
as a park or memorial. It could also mean something as simple as a street intersection.

Suggesting you use something like Google Place Search API, you can pass in a location and the maximum distance and have it return nearby landmarks.


## Redefinition

### Explanation

Instead of showing your user's location, you may choose to redefine that location. This could
mean taking an address's street number and randomly increasing it or decreasing it. It could
also mean randomly selecting an address within 1 mile of the given address, and redefining
your user's location as the randomly selected address.

Simply put, this means hiding your user's location inside the the process you choose to select an
address replacement.


## Spatial Cloaking

### Explanation

The idea here is to replace the exact location with some sort of coarser grained spatial range.
Something like a region or zip code, but most importantly to introduce uncertainty.


## Invisible Cloaking

### Explanation

This involves never sending actual location data, but instead using zones to represent user's
locations. The details of how to do this will depend upon the programming language being used
along with the application of location information.


## Noise

### Explanation

Implementing a sense of randomness to result in inaccurate data. Often, this will be done by
some sort of randomzing function. Specifically speaking about Location Based Services (LBSs),
this could mean randomly generating x amount of points inside of a given area and then
randomly selecting one of those points to represent the user's location.































