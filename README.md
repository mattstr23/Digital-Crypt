# Digital Crypt
React front-end based, mobile responsive application implementing CoinGecko API for a crypto info database with a user portoflio.
## Technology
* React
* Redux
* JavaScript
* React Router
* CSS
## Layout
* Landing Page
* Markets Page with Navbar
* Portfolio Page with Navbar
* Individual crypto detail page with Navbar
## Rundown
### Starting
Once inside of the react-project file, run npm start to begin the application.
### Landing
Once inside of the react-project file, run npm start to begin the application.
First page is a landing page with site logo, name and a continuance 'Begin Trading' button to the markets page.
![Screen Shot 2021-11-04 at 12 57 37 PM](https://user-images.githubusercontent.com/88062670/140393801-d6d95e3a-476e-4e32-9ac8-5ccc557ed678.png)
### Markets
Markets page runs the redux stores function to display the CoinGecko API information by mapping out each crypto coin. Each crypto has certain information that will display along with an add button that will allow you to add it to your profile
![Screen Shot 2021-11-04 at 1 07 09 PM](https://user-images.githubusercontent.com/88062670/140457247-3355d7fe-bb2d-4a0c-b9c1-717a653057b8.png)
### Portfolio
The portfolio page displays any cryptos that have been added to to your portfolio redux reducer. It displays some information on the crypto and a delete button. When clicked, it will run a function that uses a redux reducer to remove the crypto from the state.
![Screen Shot 2021-11-05 at 12 12 57 AM](https://user-images.githubusercontent.com/88062670/140461622-02ab6b62-6055-4117-b29f-28a1780dd657.png)
### More Info
Each cyrptos name is a link to a new page that displays more info on the stock. This page uses a local state to store a new API fetch data for the individual stock.
![Screen Shot 2021-11-05 at 12 20 30 AM](https://user-images.githubusercontent.com/88062670/140462209-70266653-b924-46be-8e41-d7687ad9f3ca.png)
## Closing
### Medium Article - 
### LinkedIn - https://www.linkedin.com/in/matthew-valicoff/
