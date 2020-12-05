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

categories = Category.create([
    {name:"TV", main_category_id:1},
    {name:"Home Theater", main_category_id:1},
    {name:"Projector", main_category_id:1},
    {name:"Microwave", main_category_id:2},
    {name:"Toaster", main_category_id:2},
    {name:"Oven", main_category_id:2},
    {name:"Gaming Consoles", main_category_id:3},
    {name:"Board Games", main_category_id:3},
    {name:"Moving toys", main_category_id:3},
    {name:"Monitors", main_category_id:4},
    {name:"Laptops", main_category_id:4},
    {name:"Desktops", main_category_id:4},
    {name:"AC", main_category_id:5},
    {name:"Heater", main_category_id:5},
    {name:"Washer", main_category_id:6},
    {name:"Dryer", main_category_id:6}
])

Brands = Brand.create([
    {name:"HP"},
    {name:"Bosch"},
    {name:"Samsung"},
    {name:"Dell"},
    {name:"Ninja"},
    {name:"GE"},
    {name:"Playstation"},
    {name:"Toshiba"},
    {name:"Sound Systems"},
    {name:"Canon"},
    {name:"HP"},
    {name:"Hasbro"},
    {name:"Marvel"},
    {name:"Home Goods"},
    {name:"Amazon"},
    {name:"Other"}
])

Videos = Video.create([
    {name:"Pair power/volume button on Amazon Firestick" ,description:"In this short video I show you the steps to sync your Amazon Fire TV remote with the volume/power buttons to your tv. This is the 2nd gen Firestick remote with the volume/power button controls.", url:"https://www.youtube.com/watch?v=rrkxz2VWwmM", brand_id:14 ,category_id: 1},
    {name:"Microwave Won’t Turn On - No Power on Microwave" ,description:"There are multiple things that can go bad on an older microwave that cause it not to function properly. This video shows how to locate the issue when there is no power at all.", url:"https://www.youtube.com/watch?v=8i3iYtQOih4", brand_id:6 ,category_id: 4},
    {name:"How To Open/Disassemble a PS4" ,description:"How to disassemble the PS4 to get access to the Motherboard, Disc Drive, Hard Drive and PSU for repair, cleaning or modification.", url:"https://www.youtube.com/watch?v=WVzWK3H3iN4", brand_id:7 ,category_id: 7},
    {name:"AC Wont Turn On - The Most Common Fix" ,description:"AC wont turn on and The Most Common Fix. Is your inside fan working but the unit outside not turning on? There's a very good chance that you have a blown capacitor. Often times you will hear the outside unit buzz for a few seconds as if trying to start and then stops. In this video I show you how to locate, read the rating, replace, and measure the dual capacitor. This is the most common air conditioner repair. BUT.. Keep in mind that this is not a fix it all repair. Its common, but there could be many other things that can go wrong. Let me know in the comments below if you have a problematic AC. I will try to walk you through it ;)", url:"https://www.youtube.com/watch?v=C82HvbvP08E", brand_id:6 ,category_id: 13},
    {name:"A Pair power/volume button on Amazon Firestick" ,description:"In this short video I show you the steps to sync your Amazon Fire TV remote with the volume/power buttons to your tv. This is the 2nd gen Firestick remote with the volume/power button controls.", url:"https://www.youtube.com/watch?v=rrkxz2VWwmM", brand_id:14 ,category_id: 1}
])