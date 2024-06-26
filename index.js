const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000;
// const products = require("./products.json");
var cors = require('cors')
app.use(cors())
// app.use(express.static('dist'))

//** dist file unwanted and no use , it just practice */

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("<h1> Hello Login page</h1>");
});

const products=[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://img.freepik.com/free-photo/restaurant-hall-with-grey-stone-wall-decorated-with-azerbaijani-carpet_140725-8503.jpg?t=st=1712812018~exp=1712815618~hmac=b5e737de819dae07774c268b4c4cc7102f80aae94cdf719b2eebb9126f83863f&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794726.jpg?t=st=1712812072~exp=1712815672~hmac=17a50dc5e6fd71685f7a6f65b48d829af8731004e8ccc6572fdf51f83eb04112&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://img.freepik.com/free-photo/pillow-sofa_1203-2939.jpg?t=st=1712812113~exp=1712815713~hmac=1d26312809392213ac2d27a914c48d578958652c0917bbaecce1512c8a1f0fff&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://img.freepik.com/free-photo/sofa-decoration-interior-room_74190-3918.jpg?t=st=1712812161~exp=1712815761~hmac=714fd090f7d7fee0a97f982833304590f6088d8261b536454674069570610bc3&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://img.freepik.com/free-photo/decoration-interior_74190-6488.jpg?t=st=1712812204~exp=1712815804~hmac=1fcadf412ca9c06d43ab047a00f2044fa69cd8587a5d93e3a6cc1acbdba5c284&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://img.freepik.com/free-photo/table-sofa-rug-office_23-2147650961.jpg?t=st=1712812301~exp=1712815901~hmac=422d527892c147a3fdcd9d792017af210a8182f1a23332ece3c7cd701ac4b660&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://img.freepik.com/free-photo/beautiful-luxury-pillow-sofa-decoration-living-room-interior-vintage-light-filter_74190-1688.jpg?t=st=1712812356~exp=1712815956~hmac=1adcd9c0d204bc9603ac1f1262242e24fd1737ac791e51d7f6e97cfbc42261f1&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://img.freepik.com/free-photo/comfortable-chair-living-room_1203-1017.jpg?t=st=1712812385~exp=1712815985~hmac=78e801ba89240f84a1df520be83a2471660d880142e5db4c011b95ffed4236f6&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://img.freepik.com/free-photo/close-up-vintage-armchair-with-cushion_1203-528.jpg?t=st=1712812412~exp=1712816012~hmac=5ef5b46cd09c36bb15cca384ea4fa95d6730f77fd24e96adb8b60feee89ca394&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://img.freepik.com/free-photo/couch-with-white-orange-cushions_1203-446.jpg?t=st=1712812439~exp=1712816039~hmac=98c19cc40a27430ec41524c2f980b3453597753e0a719d2ed7c68da5dbafb5b8&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://img.freepik.com/free-photo/horror-scene-with-eerie-hall_23-2150975090.jpg?t=st=1712812506~exp=1712816106~hmac=a32bd663b38837425399c76ea20c848df6894da782a47eb17829bf06fd26d80c&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://img.freepik.com/free-photo/view-luxurious-hotel-hallway_23-2150683499.jpg?t=st=1712812531~exp=1712816131~hmac=b0b39c0fe64c01dae293b25f3b059bc10abe02c7797ccb607eb19ffc8f175a4f&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "electronics",
    "image": "https://img.freepik.com/free-photo/modern-styled-small-entryway_23-2150712853.jpg?t=st=1712812562~exp=1712816162~hmac=0122651f28b78af9c84785cc35adab87ad8f6f07b0fdfccdf90d6577fa52bd2a&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "electronics",
    "image": "https://img.freepik.com/free-photo/modern-styled-small-entryway_23-2150712919.jpg?t=st=1712813837~exp=1712817437~hmac=e368dd5ad8d1a14cc966db4ea2313cfff7c634db3f23e98c6bd255626aa42637&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://img.freepik.com/free-photo/home-sofa-with-objects-cozy-decor-living-room_169016-5758.jpg?t=st=1712813887~exp=1712817487~hmac=909c00bec9f34e00f363d42ae6790e407ec4243aaeb7d2c2194d24201fddbadd&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women's clothing",
    "image": "https://img.freepik.com/free-photo/room-with-white-brown-curtains_1203-640.jpg?t=st=1712813924~exp=1712817524~hmac=e15511ae01664cc769aa3df0fa735d0558c7acf55ff1c499340ec5bdc4a22e87&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://img.freepik.com/free-photo/interior-decoration-inspired-by-mexican-folklore_23-2150711349.jpg?t=st=1712813946~exp=1712817546~hmac=d067c14239f45a77e82cd53c35015b80196e4001076a791015fc6e22535db637&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://img.freepik.com/free-photo/pair-trendy-transparent-shoes-with-books-adhesive-note-coffee-mug-rug_23-2147840170.jpg?t=st=1712814083~exp=1712817683~hmac=fd547d624fecff3ddeb5422d52358aa8b684977133e76e8294ee90961475f94c&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 4.7,
      "count": 130
    }
  },
  {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://img.freepik.com/free-photo/luxurious-vintage-interior-ofroom_1232-4715.jpg?t=st=1712814110~exp=1712817710~hmac=fda2c51b87ae28889b4896e2d647cb875789bbf6430b5e0c5a667d4d99f3021e&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://img.freepik.com/free-photo/home-entrance-with-furniture-modern-decor_23-2150831973.jpg?t=st=1712814142~exp=1712817742~hmac=de73dd2d0420e11560c6137a42529d8aaddb355adfdaed666f8b633646fbd4e5&w=740",
    "imageUrl": "",
    "imageUrl2": "",
    "imageUrl3": "",
    "imageUrl4": "",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  }
]

app.get("/api/products", (req, res) => {
 
 
  return res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product=products.find((user)=>user.id===id);
  return res.json(product);
});
app.get("/api/jokes", (req, res) => {
  const joke = [
    {
      id: 1,
      name: "sachine",
      company: "namrata",
    },
    {
      id: 2,
      name: "pankaj",
      company: "namrata",
    },
    {
      id: 3,
      name: "nitish",
      company: "namrata",
    },
    {
      id: 4,
      name: "nitish",
      company: "namrata",
    },
    {
      id: 5,
      name: "nitish",
      company: "namrata",
    },
    {
      id: 6,
      name: "Opna Women's Short Sleeve Moisture",
      price: "7.95",
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      
    },
  ];

  res.send(joke);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
