# FIXER-TUBE

FIXER-TUBE app, will allow users to review different how to (fix something) youtube videos and add new videos to the app.
See user stories and models below for more details on functionality.

## User Stories
* A user is able to view youtube videos, add new videos to the app, edit videos and delete videos 
* A user is able to view categories, add new categories, edit categories and delete categories
* A user is able to view brands, add new brands, edit brands and delete brands


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
  * Brands (has many brands through videos)
  * Main Category (belongs to)
  
* Brand
  * Name
  * Categories (has many categories through videos)
  * Videos (has many)

* Main Category
  * Name
  * Categories (has many)
  * Icon_src 
  * Videos (has many videos through categories)


## Installation - // review install instructions for starting react app
1. Clone git directory in the desired location.
2. App Directory have 2 directories inside fixer-tube-backend and fixer-tube-frontend
3. Open fixer-tube-backend (cd fixer-tube-backend)
4. Run bundle install
5. Run rails db:reset 
6. Run rails s - to start server
7. When server is running navigate to fixer-tube-frontend (cd .. | cd fixer-tube-frontend)
8. Run npm i
9. Run yarn
9. Run yarn start

## Demo
https://youtu.be/6AuazvySc9U

## Live App
### Back-end API
https://fixer-tube-api.herokuapp.com/main_categories
### Front-end
https://fixer-tube.herokuapp.com/

## License
[MIT](https://choosealicense.com/licenses/mit/)
