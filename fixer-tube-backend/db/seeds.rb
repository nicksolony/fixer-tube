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
    {name:'Computers', icon_src:'/icons/computers.png'},
    {name:'HVAC', icon_src:'/icons/hvac.png'},
    {name:'Washer/Dryer', icon_src:'/icons/washer.png'},
    {name:'Other', icon_src:'/icons/toys.png'}
    ])

categories = Category.create([
    {name:'TVs', main_category_id:1},
    {name:'Home Theaters', main_category_id:1},
    {name:'Projectors', main_category_id:1},
    {name:'Sound Bar & Sound Systems', main_category_id:1},
    {name:'Streaming Devices', main_category_id:1},
    {name:'Microwaves', main_category_id:2},
    {name:'Refrigerators', main_category_id:2},
    {name:'Dishwashers', main_category_id:2},
    {name:'Coffee Makers', main_category_id:2},
    {name:'Small Appliances', main_category_id:2},
    {name:'Fryers', main_category_id:2},
    {name:'Desktops', main_category_id:3},
    {name:'Laptops', main_category_id:3},
    {name:'Monitors', main_category_id:3},
    {name:'Computer Accessories', main_category_id:3},
    {name:'Printers & Scanners', main_category_id:3},
    {name:'Wi-Fi & Networking', main_category_id:3},
    {name:'AC Units', main_category_id:4},
    {name:'Heat Pumps', main_category_id:4},
    {name:'Furnace', main_category_id:4},
    {name:'Heaters', main_category_id:4},
    {name:'Thermostats', main_category_id:4},
    {name:'Washers', main_category_id:5},
    {name:'Dryers', main_category_id:5},
    {name:'Light Fixtures', main_category_id:6},
    {name:'Smart Appliances', main_category_id:6},
    {name:'Toys', main_category_id:6},
    {name:'Home Security', main_category_id:6},
    {name:'Other', main_category_id:6}
])

Brands = Brand.create([
    {name:'Samsung'},
    {name:'Dell'},
    {name:'HP'},
    {name:'Apple'},
    {name:'LG'},
    {name:'Canon'},
    {name:'Nikon'},
    {name:'Sony'},
    {name:'Lenovo'},
    {name:'Microsoft'},
    {name:'Toshiba'},
    {name:'Amazon'},
    {name:'Dyson'},
    {name:'Epson'},
    {name:'Insignia'},
    {name:'Keurig'},
    {name:'Nintendo'},
    {name:'Dynex'},
    {name:'Sharp'},
    {name:'Vizio'},
    {name:'Whirlpool'},
    {name:'KitchenAid'},
    {name:'Logitech'},
    {name:'Shark'},
    {name:'Nespresso'},
    {name:'Cuisinart'},
    {name:'Philips'},
    {name:'GE Appliances'},
    {name:'Hisense'},
    {name:'iRobot'},
    {name:'Wacom'},
    {name:'Nintendo'},
    {name:'Ninja'},
    {name:'Goodman'},
    {name:'Frigidaire'},
    {name:'Friedrich'},    
    {name:"Other"}
])

Videos = Video.create([
    {name:"Pair power/volume button on Amazon Firestick", description:"In this short video I show you the steps to sync your Amazon Fire TV remote with the volume/power buttons to your tv. This is the 2nd gen Firestick remote with the volume/power button controls.", url:"https://www.youtube.com/watch?v=rrkxz2VWwmM", brand_id:12, category_id:5},
    {name:"Microwave Won’t Turn On - No Power on Microwave", description:"There are multiple things that can go bad on an older microwave that cause it not to function properly. This video shows how to locate the issue when there is no power at all.", url:"https://www.youtube.com/watch?v=8i3iYtQOih4", brand_id:37, category_id:6},
    {name:"How To Open/Disassemble a PS4", description:"How to disassemble the PS4 to get access to the Motherboard, Disc Drive, Hard Drive and PSU for repair, cleaning or modification.", url:"https://www.youtube.com/watch?v=WVzWK3H3iN4", brand_id:8, category_id:27},
    {name:"AC Wont Turn On - The Most Common Fix", description:"AC wont turn on and The Most Common Fix. Is your inside fan working but the unit outside not turning on? There's a very good chance that you have a blown capacitor. Often times you will hear the outside unit buzz for a few seconds as if trying to start and then stops. In this video I show you how to locate, read the rating, replace, and measure the dual capacitor. This is the most common air conditioner repair. BUT.. Keep in mind that this is not a fix it all repair. Its common, but there could be many other things that can go wrong. Let me know in the comments below if you have a problematic AC. I will try to walk you through it ;)", url:"https://www.youtube.com/watch?v=C82HvbvP08E", brand_id:35, category_id:18},
    {name:"Canon LV-LP22 Projector Lamp Replacement Video Guide”, description:“Here is a video guide that shows you step by step how to replace the lamp LV-LP22 inside of your Projector Canon", url:"https://www.youtube.com/watch?v=5GDvKHk2ENI", brand_id:6, category_id:3},
    {name:"How do I change air conditioner capacitor", description:"Information on replacing capacitor for an air conditioner unit provided by Shortys HVAC Supplies. Check us out at www.shortyshvac.com or give us a call at 877-821-8770. Let us help you save money.", url:"https://www.youtube.com/watch?v=WSyZHOjlbMs", brand_id:28, category_id:18},
    {name:"LG TV Flickering Problem FIX - TV LED Back Lights Flickering", description:"In this video I show you how to fix your LG TV that flickers, it will go on and then off every few seconds. This is a known problem for LG TV's even though they are only a couple years old, what will go bad are the LED lights or it could be your power supply or both. Thanks for watching.", url:"https://www.youtube.com/watch?v=Fva__AeWMW0", brand_id:5, category_id:1},
    {name:"Dell Inspiron Black Screen Fix - Simple Home Fix", description:"how to fix black screen on windows 10", url:"https://www.youtube.com/watch?v=ifDOiLADj7E", brand_id:2, category_id:13},
    {name:"Lenovo Laptop Keyboard Replacement | Change in 5 Easy Minutes (Ideapad G580)", description:"Hi Lenovo G Series users , this video will help you to figure out 'How to Change keyboard of Lenovo G580 Laptop' . In this Laptop the problem is , some time Bios is opening automatically  at startup, some of the keys are not working and a 'Sticky key' pop up appears at the windows startup. Its look like Like a software problem you will desire to format your Laptop but this is not a right decision. You should have to unplug your laptop's keyboard and take a chance by cleaning dust from it then re plug the keyboard, if this doesn't work then the final step is to change the keyboard. Buy the keyboard from your nearest Laptop parts shops. Then follow the video , my video showed the perfect and the best Lenovo G580 Keyboard Replacement project in detail. It is quick and easy , try it by yourself. Thank you for watching our video SUBSCRIBE our channel for more videos like this. We upload only useful tech videos in High Quality and in detail.", url:"https://www.youtube.com/watch?v=yOE2-XesL5M", brand_id:9, category_id:13},
    {name:"Dryer Repair- Replacing the Thermal Fuse (Whirlpool Part# 3392519)", description:"If your dryer is having any of these symptoms, then replacing the Thermal Fuse could solve your appliance problem.", url:"https://www.youtube.com/watch?v=ajDWK7x1J5Q", brand_id:21, category_id:24},
    {name:"Top-Load Washer Won’t Spin — Washing Machine Troubleshooting", description:"Washing machine not spinning? This video provides information on how to troubleshoot a top-load washer that won’t spin and the most likely defective parts associated with this problem.", url:"https://www.youtube.com/watch?v=LMgRO4GAgBg" , brand_id:28, category_id:23}    
])