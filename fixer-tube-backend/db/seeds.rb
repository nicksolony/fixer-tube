# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mainCategories = MainCategory.create([
    {name:'Audio & TV', icon_src:'/icons/audiotv.png'},
    {name:'Kitchen', icon_src:'/icons/kitchen.png'},
    {name:'Toys', icon_src:'/icons/toys.png'},
    {name:'Computers', icon_src:'/icons/computers.png'},
    {name:'HVAC', icon_src:'/icons/hvac.png'},
    {name:'Washer/Dryer', icon_src:'/icons/washer.png'}
    ])

