# ForeFlight Interview
The ForeFlight development team would like to get a better picture of your coding and problem solving skills. Please build a program that implements the specification below. Some guidelines to keep in mind:
 
* You may use any open source / public libraries that you like.
* Your future peers will be reviewing your submission so write it appropriately.
 
## Specification
### Input:
  - One or more airport identifiers. Examples: kaus, khyi, 50r, d73, kjfk, khou, kosh. You can find more valid airport identifiers at: https://www.airnav.com/airports
 
### Output:
 
 A web page with the following:
 - The airport identifier (icao)
 - The airport name
 - The available runways
 - The lat/long of the airport
 - A current weather report that contains the following
    - Temp (F)
    - Relative humidity (%)
    - Summary of cloud coverage (text string)
        - This is the greatest amount of coverage listed if any
    - Visibility (Statute Miles)
    - Wind Speed (MPH)
    - Wind Direction (cardinal directions to secondary-intercardinal precision)
 
 
#### Data Sources
The data sources for this exercise can be accessed while the development server is running. 
- `Airport` data can be obtained at: http://localhost:3000/airports/<airport_identifier>
- `Conditions` can be obtained via a foreflight api:  http://localhost:3000/weather/report/<airport_identifier>

*Note: The development server will only attempt to send requests to these datasources without text/html in its Accept header. To view these responses in a browser window, you can use the following endpoints:
- `Airport` data can be obtained at: https://qa.foreflight.com/airports/<airport_identifier>
- `Conditions` can be obtained at:  https://qa.foreflight.com/weather/report/<airport_identifier>