# News and Weather Website
This is a News and Weather website created using Angular

## Setup Guide
1. Download or clone the repository
2. Once downloaded run the following command in the root folder: `npm install`
3. Once `npm install` has completed, run the following command: `ng serve`
4. Once `ng serve` has completed, it will display a url to navigate and open the website locally

## User Guide
The website consist of three main pages:
- Country Search
- Weather
- News

The country Search page is the landing page of the website, from here you can enter the name or partial name of a country you wish to view the weather or news for, if you search for a none existing country you will be displayed an information message that no country was found.

Once you click the Search button you will then be presented with a list of potential matches for your input serach query. From here you can view the name of the country, their flag and two buttons for the News and Weather.

Clicking the Weather button will present you with a new page that displays the current temperature and an infographic icon that maps to the current weather, for example if a thunderstorm was present then an icon with dark clouds and a lightning bolt would be displayed.

If we return and select the News button instead, we will then be presented with a page that shows the current news headlines for that country.
