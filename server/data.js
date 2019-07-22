const data = [
    {
        id: 1,
        title: 'Chile Verde',
        img: 'https://www.seriouseats.com/recipes/images/2017/02/20170124-pressure-cooker-chili-verde-18-1500x1125.jpg',
        cuisine: 'Mexican'
    },
    {
        id: 2,
        title: 'Street Tacos',
        img: 'https://asimplepantry.com/wp-content/uploads/2016/01/Easy-Mexican-Recipes-Carne-Asada-Mexican-Street-Tacos-2.jpg',
        cuisine: 'Mexican'
    },
    {
        id: 3,
        title: 'Mole',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/13/0/FNM_030110-Chicken-Mole_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371599959117.jpeg',
        cuisine: 'Mexican'
    },
    {
        id: 4,
        title: 'Tamales',
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200007-r-xl-pulled-pork-tamales.jpg%3Fitok%3DpfzHEvxq&w=450&c=sc&poi=face&q=85',
        cuisine: 'Mexican'
    },
    {
        id: 6,
        title: 'Chicken Tikka Masala',
        img: 'https://s23209.pcdn.co/wp-content/uploads/2019/02/Easy-Chicken-Tikka-MasalaIMG_8253.jpg',
        cuisine: 'Indian'
    },
    {
        id: 7,
        title: 'Chicken Korma',
        img: 'https://www.whiskaffair.com/wp-content/uploads/2018/09/Mutton-Korma-5.jpg',
        cuisine: 'Indian'
    },
    {
        id: 8,
        title: 'Lamb Vindaloo',
        img: 'https://pipingpotcurry.com/wp-content/uploads/2019/03/Chicken-Vindaloo-in-Instant-Pot-Piping-Pot-Curry-4.jpg',
        cuisine: 'Indian'
    },
    {
        id: 9,
        title: 'Butter Chicken',
        img: 'https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/1e35c0fae62345bcba48d8cdbd0ba1ee',
        cuisine: 'Indian'
    },
    {
        id: 10,
        title: 'Buffalo Wings',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQr1d505tYbnH6v6FtR1bTaaLLIgoJTBgiKXYRkTJxVZQvVXjq9A',
        cuisine: 'American'
    },
    {
        id: 11,
        title: 'Cheeseburgers',
        img: 'https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg?fit=1000%2C665&ssl=1',
        cuisine: 'American'
    },
    {
        id: 12,
        title: 'Gumbo',
        img: 'https://cdn-image.realsimple.com/sites/default/files/styles/rs_medium_image/public/1483995143/gumbo.jpg?itok=kMYN5Wvv',
        cuisine: 'American'
    },
    {
        id: 13,
        title: 'Lobster Rolls',
        img: 'https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/easy-lobster-rolls_42361.jpg',
        cuisine: 'American'
    },
    {
        id: 14,
        title: 'Carbonara',
        img: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/03/1484784941-white-cheddar-carbonaral1.jpg',
        cuisine: 'Italian'
    },
    {
        id: 15,
        title: 'Calzone',
        img: 'https://www.traegergrills.com/images/en-us/Shared/images/recipes/banners/Pork/Calzone_Traeger-Wood-Fired-Grills_RE_HE_M.jpg',
        cuisine: 'Italian'
    },
    {
        id: 16,
        title: 'Chicken Alfredo',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/9/15/1/FNK_Chicken-Fettucine-Alfredo_s4x3.jpg.rend.hgtvcom.826.620.suffix/1442375396342.jpeg',
        cuisine: 'Italian'
    },
    {
        id: 17,
        title: 'Ziti',
        img: 'https://www.onceuponachef.com/images/2017/10/Sausage-Baked-Ziti-1-760x557.jpg',
        cuisine: 'Italian'
    },
    {
        id: 18,
        title: 'Ramen',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=1xw:0.9995002498750624xh;center,top&resize=480:*',
        cuisine: 'Japanese'
    },
    {
        id: 19,
        title: 'Sushi',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QbqcEeTiifrOUnNYmC0By3DK97DrYyT-KvsQ8f4bbbCKsuzF',
        cuisine: 'Japanese'
    },
    {
        id: 20,
        title: 'Chicken Teriyaki',
        img: 'https://hips.hearstapps.com/delish/assets/17/26/1498598755-teriyaki-chicken.jpg',
        cuisine: 'Japanese'
    },
    {
        id: 21,
        title: 'Yakisoba',
        img: 'https://www.justonecookbook.com/wp-content/uploads/2017/02/Yakisoba-NEW-II.jpg',
        cuisine: 'Japanese'
    },
    {
        id: 22,
        title: 'Bulgogi',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/15/0/FNK_Korean-Grilled-Beef-Bulgogi-H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1557961246095.jpeg',
        cuisine: 'Korean'
    },
    {
        id: 23,
        title: 'Bibimbap',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1200px-Dolsot-bibimbap.jpg',
        cuisine: 'Korean'
    },
    {
        id: 24,
        title: 'Japchae',
        img: 'https://www.jessicagavin.com/wp-content/uploads/2016/06/japchae-korean-glass-noodles-with-tofu-and-vegetables-1200.jpg',
        cuisine: 'Korean'
    },
    {
        id: 25,
        title: 'Samgyeopsal',
        img: 'https://www.maangchi.com/wp-content/uploads/2009/09/grilled-porkbelly_cut1.jpg',
        cuisine: 'Korean'
    },
    {
        id: 26,
        title: 'Bratwurst',
        img: 'https://9woclymefe-flywheel.netdna-ssl.com/wp-content/uploads/Plated-Cherry-Brats.jpg',
        cuisine: 'German'
    },
    {
        id: 27,
        title: 'Schnitzel',
        img: 'https://www.thespruceeats.com/thmb/_lj5FMmlXhjUGcvPu0dgc6_WTow=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
        cuisine: 'German'
    },
    {
        id: 28,
        title: 'Chow Mein',
        img: 'https://www.recipetineats.com/wp-content/uploads/2016/07/Chow-Mein_9.jpg',
        cuisine: 'Chinese'
    },
    {
        id: 29,
        title: 'Orange Chicken',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/8/26/3/WU0802H_Orange-Chicken_s4x3.jpg.rend.hgtvcom.826.620.suffix/1440693433689.jpeg',
        cuisine: 'Chinese'
    },
    {
        id: 30,
        title: 'Peking Duck',
        img: 'https://www.curiouscuisiniere.com/wp-content/uploads/2018/10/Peking-Duck-7206-1.jpg',
        cuisine: 'Chinese'
    },
    {
        id: 31,
        title: 'Sweet and Sour Pork',
        img: 'https://tipbuzz.com/wp-content/uploads/Sweet-and-Sour-Pork-Thumbnail.jpg',
        cuisine: 'Chinese'
    },
    {
        id: 32,
        title: 'Fried Catfish',
        img: 'https://www.simplyrecipes.com/wp-content/uploads/2012/07/fried-catfish-vertical-a-1400.jpg',
        cuisine: 'American'
    },
    {
        id: 33,
        title: 'King Crab Legs',
        img: 'https://thestayathomechef.com/wp-content/uploads/2019/02/How-to-Cook-Crab-Legs-1-500x375.jpg',
        cuisine: 'American'
    },
    {
        id: 34,
        title: 'Burnt Ends',
        img: 'https://i2.wp.com/howtobbqright.com/wp-content/uploads/2017/08/RFI_burntends.jpg?fit=640%2C510&ssl=1',
        cuisine: 'American'
    },
    {
        id: 35,
        title: 'Carne Asada',
        img: 'https://pinchandswirl.com/wp-content/uploads/2016/08/Carne-Asada-thinly-sliced-across-the-grain-featured.jpg',
        cuisine: 'Mexican'
    },
    {
        id: 36,
        title: 'Clam Chowder',
        img: 'https://honest-food.net/wp-content/uploads/2012/05/maine-clam-chowder.jpg',
        cuisine: 'American'
    },
    {
        id: 37,
        title: 'French Onion Soup',
        img: 'https://www.simplyrecipes.com/wp-content/uploads/2015/02/french-onion-soup-horiz-a-1600.jpg',
        cuisine: 'French'
    },
    {
        id: 38,
        title: 'Beef Bourguignon',
        img: 'https://images-gmi-pmc.edge-generalmills.com/42fb4d81-8d92-40e2-9f0a-524edce5ca74.jpg',
        cuisine: 'French'
    },
    {
        id: 39,
        title: 'Tandoori Chicken',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg?resize=480:*',
        cuisine: 'Indian'
    },
    {
        id: 40,
        title: 'Grilled Cheese',
        img: 'https://cdn.craftbeer.com/wp-content/uploads/grilledcheese1-900x600.jpg',
        cuisine: 'American'
    },
    {
        id: 41,
        title: 'Mac and Cheese',
        img: 'https://sugarspunrun.com/wp-content/uploads/2018/01/baked-macaroni-and-cheese-recipe-1-of-1-12.jpg',
        cuisine: 'American'
    },
    {
        id: 42,
        title: 'Bruschetta',
        img: 'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/recipes_header_image/public/2-Bruschetta_Mozzarella.jpg?itok=wUNvjArC',
        cuisine: 'Italian'
    }
]
module.exports = data 