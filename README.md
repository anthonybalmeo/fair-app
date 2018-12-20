<p align="center">
    <h3 align="center">FAIR | Take home Interview<br></h3>
</p>

[![CircleCI](https://circleci.com/gh/ReactJSResources/react-webpack-babel/tree/master.svg?style=svg)](https://circleci.com/gh/ReactJSResources/react-webpack-babel/tree/master)

[![Dependency Status](https://img.shields.io/david/ReactJSResources/react-webpack-babel.svg)](https://david-dm.org/dylang/npm-check)

### Simple React Car Listing App

***

##### Developed by Anthony Balmeo

A simple React app that hits an apiary stubbed API endpoints to display a list of cars and a car details page.

***
##### Architecture
- Used a container/component approach. Will load necessary data in the container and wrap data with HOC.
- Styles are broken down by components and shareable styles. Made to be responsive as well.
- Utilized `flexboxgrid-sass` for simple grid solution
- Broke down necessary components for resuable around different pages
- Build a loading screen component to display when data is loading
- WithModel will do any data loading needed. Will take in an optional loading component
- Added jest component testing
- Added prop checking with `PropTypes`
- Created fixture files for reusable test data
- Action/Reducers in store to manage state [`react-redux`]
- States in redux:
    - `vehicle`
        - The vehicle in details route.
    - `vehicles`
        - List an array of vehicles for a page returned by the endpoint
    - `favoriteVehicles`
        - List an array of objects of VIN Ids. Used to keep state of favorited vehicles.
    - `paymentPermiles`
        - Saves the selected monthly payments and desired mileage. Used to show changes in payments when mileage is adjusted in the details route.
- Fun open animation when hitting root url `/`

***

##### Car Listing Page
- URL: `/listing` or `/listing/#` (`#` = number value for page route)
- If `listing` is hit via url, it will redirect to `/listing/1`
- Displays a list of cars returned by the stubbed endpoint.
- Saves vehicle data using redux to state.
- Prevents loading the endpoint again if the data is already loaded into state.
- Has a favorite feature that persist per car when going between the car listing and car details route.
- Implemented pagination
- `console.error(e)` if endpoint does not return value

###### Note:
I made the car listing page similar to what you have in production vs the reference. I chose to do this since the reference is missing certain data points to display things similar to the design provided.

***

##### Car Details Page
- URL: `/detail/{vin}` (`{vin}`: Vehicle ID to load vehicle)
- Displays a specific car identified by the {vin}.
- Will check if `vehicle` is already in `vehicles` state before trying to hit the endpoint. Prevents from loading endpoint multiple times if data is already available.
- Implemented a gallery using `react-slick`.
- Using `react-number-format` to display pricing and mileage in the 1,000s format.
- Implemented a slider using `react-rangeslider` to calculate monthly prices per yearly mileage adjustment.
    - This will update state to save the specific monthly payment and mileage desired.
- Favorite feature is available here too. The state of the favorite is persistent between the listing and detail route.

###### Note:
Since most endpoints are not stubbed after the first two cars, my `catch` error returns to the listing page.