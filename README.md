# FIXER-TUBE

FIXER-TUBE app, will allow users to review different how to (fix something) youtube videos and add new videos to the app.
See user stories and models below for more details on functionality.

## User Stories
* A user is able to view youtube videos, add new videos to the app, edit videos and delete videos 
* A user is able to view categories, add new categories, edit categories and delete categories
* A user is able to view brands, add new brands, edit brands and delete brands
* //To make live app, need to create user interface to be able to authenticate users//


## Models
* video
  * Name
  * Category (belongs to)
  * Brand (belongs to)
  * Description
  * Url
  
* Category
  * Name
  * Videos (has many)
  * Main Category (belongs to)
  
* Brand
  * Name
  * Videos (has many)

* Main Category
  * Name
  * Categories (has many)
  * Icon_src 
  * Videos (has many videos through categories)


## Installation - // review install instructions for starting react app
1. Clone git directory in the desired location.
2. App Directory have 2 directories inside fixer-tube-backend and fixer-tube-frontend
3. Open fixer-tube-backend
4. Run bundle install
5. Run rails db:migrate - to create databases
6. Run rails db:seed - to populate sample data
7. Run rails s - to start server
8. When server is running navigate to fixer-tube-frontend
9. Open index.html

## License
[MIT](https://choosealicense.com/licenses/mit/)




<iframe width="560" height="315" src="https://www.youtube.com/embed/S1MSLShV-qs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
https://www.youtube.com/watch?v=S1MSLShV-qs