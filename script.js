// ========== ENHANCED PRODUCT DATA (15+ PER CATEGORY) ==========
const products = [
    // MOBILE PHONE ACCESSORIES - CASES (10+)
    { id: 1, name: 'Custom Silicone Case', basePrice: 15, image: 'https://via.placeholder.com/300x300?text=Silicone+Case&bg=00d4ff&textColor=000', category: 'case', description: 'Durable silicone with custom design' },
    { id: 2, name: 'Premium Leather Case', basePrice: 22, image: 'https://via.placeholder.com/300x300?text=Leather+Case&bg=a855f7&textColor=fff', category: 'case', description: 'Genuine leather protective case' },
    { id: 3, name: 'Clear TPU Case', basePrice: 12, image: 'https://via.placeholder.com/300x300?text=TPU+Case&bg=ec4899&textColor=fff', category: 'case', description: 'Crystal clear TPU protection' },
    { id: 4, name: 'Rugged Armor Case', basePrice: 19, image: 'https://via.placeholder.com/300x300?text=Armor+Case&bg=00d4ff&textColor=000', category: 'case', description: 'Military-grade protection case' },
    { id: 5, name: 'Flip Wallet Case', basePrice: 18, image: 'https://via.placeholder.com/300x300?text=Flip+Wallet&bg=a855f7&textColor=fff', category: 'case', description: 'Leather flip case with card slots' },
    { id: 6, name: 'Matte Finish Case', basePrice: 14, image: 'https://via.placeholder.com/300x300?text=Matte+Case&bg=ec4899&textColor=fff', category: 'case', description: 'Anti-fingerprint matte case' },
    { id: 7, name: 'Carbon Fiber Case', basePrice: 25, image: 'https://via.placeholder.com/300x300?text=Carbon+Case&bg=00d4ff&textColor=000', category: 'case', description: 'Premium carbon fiber design' },
    { id: 8, name: 'Shockproof Case', basePrice: 21, image: 'https://via.placeholder.com/300x300?text=Shockproof&bg=a855f7&textColor=fff', category: 'case', description: 'Military shockproof case' },
    { id: 9, name: 'Slim Protective Case', basePrice: 13, image: 'https://via.placeholder.com/300x300?text=Slim+Case&bg=ec4899&textColor=fff', category: 'case', description: 'Thin and protective' },
    { id: 10, name: 'Designer Case', basePrice: 28, image: 'https://via.placeholder.com/300x300?text=Designer&bg=00d4ff&textColor=000', category: 'case', description: 'Premium designer case' },
    { id: 11, name: 'Rainbow Case', basePrice: 16, image: 'https://via.placeholder.com/300x300?text=Rainbow&bg=a855f7&textColor=fff', category: 'case', description: 'Colorful vibrant case' },

    // MOBILE PHONE ACCESSORIES - GRIPS (10+)
    { id: 12, name: 'Personalized Pop Grip', basePrice: 10, image: 'https://via.placeholder.com/300x300?text=Pop+Grip&bg=ec4899&textColor=fff', category: 'grip', description: 'Expandable phone grip with custom art' },
    { id: 13, name: 'Phone Stand', basePrice: 9, image: 'https://via.placeholder.com/300x300?text=Phone+Stand&bg=00d4ff&textColor=000', category: 'grip', description: 'Adjustable universal phone stand' },
    { id: 14, name: 'Magnetic Car Mount', basePrice: 14, image: 'https://via.placeholder.com/300x300?text=Car+Mount&bg=a855f7&textColor=fff', category: 'grip', description: 'Magnetic dashboard car mount' },
    { id: 15, name: 'Phone Ring Holder', basePrice: 8, image: 'https://via.placeholder.com/300x300?text=Ring+Holder&bg=ec4899&textColor=fff', category: 'grip', description: 'Rotating ring phone holder' },
    { id: 16, name: 'Desk Phone Holder', basePrice: 11, image: 'https://via.placeholder.com/300x300?text=Desk+Holder&bg=00d4ff&textColor=000', category: 'grip', description: 'Desktop phone stand' },
    { id: 17, name: 'Vent Mount', basePrice: 12, image: 'https://via.placeholder.com/300x300?text=Vent+Mount&bg=a855f7&textColor=fff', category: 'grip', description: 'Air vent car mount' },
    { id: 18, name: 'Suction Cup Mount', basePrice: 13, image: 'https://via.placeholder.com/300x300?text=Suction+Mount&bg=ec4899&textColor=fff', category: 'grip', description: 'Dashboard suction mount' },
    { id: 19, name: 'Wall Mount', basePrice: 10, image: 'https://via.placeholder.com/300x300?text=Wall+Mount&bg=00d4ff&textColor=000', category: 'grip', description: 'Adhesive wall mount' },
    { id: 20, name: 'Tripod Mount', basePrice: 15, image: 'https://via.placeholder.com/300x300?text=Tripod&bg=a855f7&textColor=fff', category: 'grip', description: 'Mobile phone tripod' },
    { id: 21, name: 'Bike Mount', basePrice: 16, image: 'https://via.placeholder.com/300x300?text=Bike+Mount&bg=ec4899&textColor=fff', category: 'grip', description: 'Bicycle phone mount' },

    // MOBILE PHONE ACCESSORIES - PROTECTORS (10+)
    { id: 22, name: 'Camera Lens Protector', basePrice: 8, image: 'https://via.placeholder.com/300x300?text=Lens+Protector&bg=00d4ff&textColor=000', category: 'protector', description: 'Tempered glass lens protection' },
    { id: 23, name: 'Screen Protector Pack', basePrice: 6, image: 'https://via.placeholder.com/300x300?text=Screen+Protector&bg=a855f7&textColor=fff', category: 'protector', description: 'Pack of 3 tempered glass screens' },
    { id: 24, name: 'Glass Back Protector', basePrice: 9, image: 'https://via.placeholder.com/300x300?text=Glass+Back&bg=ec4899&textColor=fff', category: 'protector', description: 'Back glass protection film' },
    { id: 25, name: 'Anti-Glare Screen Guard', basePrice: 7, image: 'https://via.placeholder.com/300x300?text=Anti-Glare&bg=00d4ff&textColor=000', category: 'protector', description: 'Reduces glare and fingerprints' },
    { id: 26, name: 'Tempered Glass Bundle', basePrice: 20, image: 'https://via.placeholder.com/300x300?text=Glass+Bundle&bg=a855f7&textColor=fff', category: 'protector', description: 'Front + back + camera protection' },
    { id: 27, name: 'Privacy Screen Protector', basePrice: 12, image: 'https://via.placeholder.com/300x300?text=Privacy+Screen&bg=ec4899&textColor=fff', category: 'protector', description: 'Privacy filter screen' },
    { id: 28, name: 'Blue Light Protector', basePrice: 10, image: 'https://via.placeholder.com/300x300?text=Blue+Light&bg=00d4ff&textColor=000', category: 'protector', description: 'Blue light blocking' },
    { id: 29, name: 'Corner Protector', basePrice: 5, image: 'https://via.placeholder.com/300x300?text=Corner+Protector&bg=a855f7&textColor=fff', category: 'protector', description: 'Corner bumper protector' },
    { id: 30, name: 'Full Body Protector', basePrice: 15, image: 'https://via.placeholder.com/300x300?text=Full+Body&bg=ec4899&textColor=fff', category: 'protector', description: 'Complete phone protection' },
    { id: 31, name: 'Hydrogel Protector', basePrice: 11, image: 'https://via.placeholder.com/300x300?text=Hydrogel&bg=00d4ff&textColor=000', category: 'protector', description: 'Self-healing hydrogel' },

    // MOBILE PHONE ACCESSORIES - BUNDLES (10+)
    { id: 32, name: 'Accessory Bundle', basePrice: 25, image: 'https://via.placeholder.com/300x300?text=Bundle&bg=a855f7&textColor=fff', category: 'bundle', description: 'Complete accessories package' },
    { id: 33, name: 'Starter Bundle', basePrice: 35, image: 'https://via.placeholder.com/300x300?text=Starter+Bundle&bg=ec4899&textColor=fff', category: 'bundle', description: 'Case + Screen + Cable' },
    { id: 34, name: 'Premium Protection Bundle', basePrice: 45, image: 'https://via.placeholder.com/300x300?text=Premium+Bundle&bg=00d4ff&textColor=000', category: 'bundle', description: 'Full protection package' },
    { id: 35, name: 'Travel Bundle', basePrice: 40, image: 'https://via.placeholder.com/300x300?text=Travel+Bundle&bg=a855f7&textColor=fff', category: 'bundle', description: 'Travel essentials pack' },
    { id: 36, name: 'Daily Driver Bundle', basePrice: 30, image: 'https://via.placeholder.com/300x300?text=Daily+Driver&bg=ec4899&textColor=fff', category: 'bundle', description: 'Everyday accessories' },
    { id: 37, name: 'Ultimate Bundle', basePrice: 65, image: 'https://via.placeholder.com/300x300?text=Ultimate+Bundle&bg=00d4ff&textColor=000', category: 'bundle', description: 'All accessories included' },
    { id: 38, name: 'Gaming Bundle', basePrice: 50, image: 'https://via.placeholder.com/300x300?text=Gaming+Bundle&bg=a855f7&textColor=fff', category: 'bundle', description: 'Gaming setup bundle' },
    { id: 39, name: 'Office Bundle', basePrice: 38, image: 'https://via.placeholder.com/300x300?text=Office+Bundle&bg=ec4899&textColor=fff', category: 'bundle', description: 'Professional bundle' },
    { id: 40, name: 'Outdoor Bundle', basePrice: 42, image: 'https://via.placeholder.com/300x300?text=Outdoor+Bundle&bg=00d4ff&textColor=000', category: 'bundle', description: 'Adventure pack' },
    { id: 41, name: 'Student Bundle', basePrice: 28, image: 'https://via.placeholder.com/300x300?text=Student+Bundle&bg=a855f7&textColor=fff', category: 'bundle', description: 'Student essentials' },

    // PRICE-BASED PRODUCTS (10+ ITEMS)
    { id: 42, name: 'Wireless Charging Pad', basePrice: 28, image: 'https://via.placeholder.com/300x300?text=Wireless+Charger&bg=ec4899&textColor=fff', category: 'accessory', description: '15W fast wireless charging' },
    { id: 43, name: 'USB-C Charging Cable', basePrice: 11, image: 'https://via.placeholder.com/300x300?text=USB+Cable&bg=00d4ff&textColor=000', category: 'accessory', description: '3m durable USB-C cable' },
    { id: 44, name: 'Fast Charger 30W', basePrice: 19, image: 'https://via.placeholder.com/300x300?text=Fast+Charger&bg=a855f7&textColor=fff', category: 'accessory', description: 'Rapid charging adapter' },
    { id: 45, name: 'Power Bank 20000mAh', basePrice: 32, image: 'https://via.placeholder.com/300x300?text=Power+Bank&bg=ec4899&textColor=fff', category: 'accessory', description: 'Large capacity power bank' },
    { id: 46, name: 'Lightning Cable', basePrice: 9, image: 'https://via.placeholder.com/300x300?text=Lightning+Cable&bg=00d4ff&textColor=000', category: 'accessory', description: 'Premium lightning cable' },
    { id: 47, name: 'Multi-Port Charger', basePrice: 25, image: 'https://via.placeholder.com/300x300?text=Multi+Charger&bg=a855f7&textColor=fff', category: 'accessory', description: '4-port USB charger' },
    { id: 48, name: 'Car Charger', basePrice: 15, image: 'https://via.placeholder.com/300x300?text=Car+Charger&bg=ec4899&textColor=fff', category: 'accessory', description: 'Dual USB car charger' },
    { id: 49, name: 'Wall Outlet Adapter', basePrice: 12, image: 'https://via.placeholder.com/300x300?text=Wall+Adapter&bg=00d4ff&textColor=000', category: 'accessory', description: 'Multi-outlet adapter' },
    { id: 50, name: 'Magnetic Charging Cable', basePrice: 16, image: 'https://via.placeholder.com/300x300?text=Magnetic+Cable&bg=a855f7&textColor=fff', category: 'accessory', description: 'Magnetic connection cable' },
    { id: 51, name: 'Wireless Earbuds', basePrice: 65, image: 'https://via.placeholder.com/300x300?text=Earbuds&bg=ec4899&textColor=fff', category: 'accessory', description: 'Premium wireless earbuds' },
    
    // LAPTOP ACCESSORIES (15+)
    { id: 52, name: 'Laptop Sleeve 15"', basePrice: 35, image: 'https://via.placeholder.com/300x300?text=Laptop+Sleeve&bg=00d4ff&textColor=000', category: 'laptop', description: 'Protective neoprene sleeve' },
    { id: 53, name: 'Laptop Stand', basePrice: 28, image: 'https://via.placeholder.com/300x300?text=Laptop+Stand&bg=a855f7&textColor=fff', category: 'laptop', description: 'Ergonomic aluminum stand' },
    { id: 54, name: 'USB Hub 7-Port', basePrice: 22, image: 'https://via.placeholder.com/300x300?text=USB+Hub&bg=ec4899&textColor=fff', category: 'laptop', description: '7-port USB 3.0 hub' },
    { id: 55, name: 'Laptop Cooling Pad', basePrice: 32, image: 'https://via.placeholder.com/300x300?text=Cooling+Pad&bg=00d4ff&textColor=000', category: 'laptop', description: 'Dual fan cooling system' },
    { id: 56, name: 'External SSD 1TB', basePrice: 89, image: 'https://via.placeholder.com/300x300?text=External+SSD&bg=a855f7&textColor=fff', category: 'laptop', description: 'Portable SSD drive' },
    { id: 57, name: 'Wireless Keyboard', basePrice: 45, image: 'https://via.placeholder.com/300x300?text=Keyboard&bg=ec4899&textColor=fff', category: 'laptop', description: 'Mechanical wireless keyboard' },
    { id: 58, name: 'Ergonomic Mouse', basePrice: 29, image: 'https://via.placeholder.com/300x300?text=Mouse&bg=00d4ff&textColor=000', category: 'laptop', description: 'Wireless ergonomic mouse' },
    { id: 59, name: 'Laptop Fast Charger', basePrice: 18, image: 'https://via.placeholder.com/300x300?text=Charger&bg=a855f7&textColor=fff', category: 'laptop', description: 'Fast charging power adapter' },
    { id: 60, name: 'Laptop Screen Guard', basePrice: 14, image: 'https://via.placeholder.com/300x300?text=Screen+Guard&bg=ec4899&textColor=fff', category: 'laptop', description: 'Anti-glare screen protector' },
    { id: 61, name: 'Laptop Backpack', basePrice: 42, image: 'https://via.placeholder.com/300x300?text=Backpack&bg=00d4ff&textColor=000', category: 'laptop', description: 'Professional laptop backpack' },
    { id: 62, name: 'Portable Monitor', basePrice: 199, image: 'https://via.placeholder.com/300x300?text=Portable+Monitor&bg=a855f7&textColor=fff', category: 'laptop', description: '15.6" portable USB monitor' },
    { id: 63, name: 'Laptop Desk Mount', basePrice: 25, image: 'https://via.placeholder.com/300x300?text=Desk+Mount&bg=ec4899&textColor=fff', category: 'laptop', description: 'Adjustable desk mounting arm' },
    { id: 64, name: 'Keyboard Wrist Rest', basePrice: 16, image: 'https://via.placeholder.com/300x300?text=Wrist+Rest&bg=00d4ff&textColor=000', category: 'laptop', description: 'Memory foam wrist rest' },
    { id: 65, name: 'Laptop Riser', basePrice: 21, image: 'https://via.placeholder.com/300x300?text=Laptop+Riser&bg=a855f7&textColor=fff', category: 'laptop', description: 'Adjustable height riser' },
    { id: 66, name: 'USB-C Docking Station', basePrice: 79, image: 'https://via.placeholder.com/300x300?text=Dock&bg=ec4899&textColor=fff', category: 'laptop', description: '11-in-1 USB-C dock' },

    // PC COMPONENTS (15+)
    { id: 67, name: 'Gaming PC Case', basePrice: 79, image: 'https://via.placeholder.com/300x300?text=PC+Case&bg=00d4ff&textColor=000', category: 'pc', description: 'Mid-tower gaming case' },
    { id: 68, name: 'CPU Air Cooler', basePrice: 45, image: 'https://via.placeholder.com/300x300?text=CPU+Cooler&bg=a855f7&textColor=fff', category: 'pc', description: 'Silent tower air cooler' },
    { id: 69, name: 'GPU Cooler', basePrice: 35, image: 'https://via.placeholder.com/300x300?text=GPU+Cooler&bg=ec4899&textColor=fff', category: 'pc', description: 'Graphics card cooling' },
    { id: 70, name: '750W Power Supply', basePrice: 89, image: 'https://via.placeholder.com/300x300?text=PSU&bg=00d4ff&textColor=000', category: 'pc', description: '80+ Gold certified' },
    { id: 71, name: 'ATX Motherboard', basePrice: 145, image: 'https://via.placeholder.com/300x300?text=Motherboard&bg=a855f7&textColor=fff', category: 'pc', description: 'ATX with WiFi' },
    { id: 72, name: '16GB DDR4 RAM', basePrice: 65, image: 'https://via.placeholder.com/300x300?text=RAM&bg=ec4899&textColor=fff', category: 'pc', description: '16GB memory kit' },
    { id: 73, name: '1TB NVMe SSD', basePrice: 72, image: 'https://via.placeholder.com/300x300?text=SSD&bg=00d4ff&textColor=000', category: 'pc', description: 'Fast M.2 NVMe' },
    { id: 74, name: 'RGB Case Fans', basePrice: 28, image: 'https://via.placeholder.com/300x300?text=Case+Fans&bg=a855f7&textColor=fff', category: 'pc', description: 'Set of 3 RGB fans' },
    { id: 75, name: 'Cable Management Kit', basePrice: 15, image: 'https://via.placeholder.com/300x300?text=Cables&bg=ec4899&textColor=fff', category: 'pc', description: 'Cable organizer kit' },
    { id: 76, name: 'Dual Monitor Mount', basePrice: 38, image: 'https://via.placeholder.com/300x300?text=Monitor+Mount&bg=00d4ff&textColor=000', category: 'pc', description: 'Adjustable arm mount' },
    { id: 77, name: 'Liquid CPU Cooler', basePrice: 95, image: 'https://via.placeholder.com/300x300?text=AIO+Cooler&bg=a855f7&textColor=fff', category: 'pc', description: '240mm AIO liquid cooler' },
    { id: 78, name: 'Thermal Paste', basePrice: 8, image: 'https://via.placeholder.com/300x300?text=Thermal+Paste&bg=ec4899&textColor=fff', category: 'pc', description: 'High performance thermal paste' },
    { id: 79, name: 'RAM Coolers', basePrice: 12, image: 'https://via.placeholder.com/300x300?text=RAM+Coolers&bg=00d4ff&textColor=000', category: 'pc', description: 'Passive RAM cooling' },
    { id: 80, name: 'Cable Extensions', basePrice: 16, image: 'https://via.placeholder.com/300x300?text=Cable+Ext&bg=a855f7&textColor=fff', category: 'pc', description: 'RGB cable extensions' },
    { id: 81, name: 'Anti-Vibration Pads', basePrice: 11, image: 'https://via.placeholder.com/300x300?text=Vibration+Pads&bg=ec4899&textColor=fff', category: 'pc', description: 'Noise reduction pads' },

    // SMART TV ACCESSORIES (15+)
    { id: 82, name: 'TV Wall Mount', basePrice: 49, image: 'https://via.placeholder.com/300x300?text=TV+Mount&bg=00d4ff&textColor=000', category: 'tv', description: 'Fixed wall mount' },
    { id: 83, name: 'Full Motion Arm', basePrice: 65, image: 'https://via.placeholder.com/300x300?text=Motion+Arm&bg=a855f7&textColor=fff', category: 'tv', description: 'Articulating arm mount' },
    { id: 84, name: '2.1 HDMI Cable', basePrice: 12, image: 'https://via.placeholder.com/300x300?text=HDMI+Cable&bg=ec4899&textColor=fff', category: 'tv', description: '4K/8K HDMI 2.1' },
    { id: 85, name: '4K Streaming Box', basePrice: 49, image: 'https://via.placeholder.com/300x300?text=Streaming+Box&bg=00d4ff&textColor=000', category: 'tv', description: 'Ultra HD streaming' },
    { id: 86, name: 'Dolby Soundbar', basePrice: 89, image: 'https://via.placeholder.com/300x300?text=Soundbar&bg=a855f7&textColor=fff', category: 'tv', description: 'Dolby Atmos soundbar' },
    { id: 87, name: 'Universal Remote', basePrice: 28, image: 'https://via.placeholder.com/300x300?text=Remote&bg=ec4899&textColor=fff', category: 'tv', description: 'Smart universal remote' },
    { id: 88, name: 'HD Cable Box', basePrice: 55, image: 'https://via.placeholder.com/300x300?text=Cable+Box&bg=00d4ff&textColor=000', category: 'tv', description: 'Digital cable receiver' },
    { id: 89, name: 'Gaming Console', basePrice: 299, image: 'https://via.placeholder.com/300x300?text=Console&bg=a855f7&textColor=fff', category: 'tv', description: 'Next-gen console' },
    { id: 90, name: 'In-Wall Plates', basePrice: 15, image: 'https://via.placeholder.com/300x300?text=Wall+Plate&bg=ec4899&textColor=fff', category: 'tv', description: 'Cable management' },
    { id: 91, name: 'RGB LED Backlight', basePrice: 32, image: 'https://via.placeholder.com/300x300?text=Backlight&bg=00d4ff&textColor=000', category: 'tv', description: 'Bias RGB kit' },
    { id: 92, name: 'TV Stand Mount', basePrice: 35, image: 'https://via.placeholder.com/300x300?text=Stand+Mount&bg=a855f7&textColor=fff', category: 'tv', description: 'Adjustable TV stand' },
    { id: 93, name: 'Optical Audio Cable', basePrice: 9, image: 'https://via.placeholder.com/300x300?text=Optical&bg=ec4899&textColor=fff', category: 'tv', description: 'Digital optical cable' },
    { id: 94, name: 'Subwoofer', basePrice: 149, image: 'https://via.placeholder.com/300x300?text=Subwoofer&bg=00d4ff&textColor=000', category: 'tv', description: 'Wireless subwoofer' },
    { id: 95, name: 'Surge Protector', basePrice: 24, image: 'https://via.placeholder.com/300x300?text=Surge+Protector&bg=a855f7&textColor=fff', category: 'tv', description: '6-outlet surge strip' },
    { id: 96, name: 'Wall Cable Hider', basePrice: 18, image: 'https://via.placeholder.com/300x300?text=Cable+Hider&bg=ec4899&textColor=fff', category: 'tv', description: 'Paintable cable cover' },

    // SMART WATCH ACCESSORIES (15+)
    { id: 97, name: 'Silicone Watch Band', basePrice: 18, image: 'https://via.placeholder.com/300x300?text=Sport+Band&bg=00d4ff&textColor=000', category: 'smartwatch', description: 'Sport silicone band' },
    { id: 98, name: 'Leather Watch Strap', basePrice: 25, image: 'https://via.placeholder.com/300x300?text=Leather+Strap&bg=a855f7&textColor=fff', category: 'smartwatch', description: 'Premium leather' },
    { id: 99, name: 'Watch Screen Protector', basePrice: 9, image: 'https://via.placeholder.com/300x300?text=Watch+Screen&bg=ec4899&textColor=fff', category: 'smartwatch', description: 'Tempered glass' },
    { id: 100, name: 'Watch Wireless Charger', basePrice: 15, image: 'https://via.placeholder.com/300x300?text=Watch+Charger&bg=00d4ff&textColor=000', category: 'smartwatch', description: 'Fast charger' },
    { id: 101, name: 'Watch Charging Dock', basePrice: 19, image: 'https://via.placeholder.com/300x300?text=Dock&bg=a855f7&textColor=fff', category: 'smartwatch', description: 'Aluminum dock' },
    { id: 102, name: 'Metal Watch Case', basePrice: 22, image: 'https://via.placeholder.com/300x300?text=Metal+Case&bg=ec4899&textColor=fff', category: 'smartwatch', description: 'Protective case' },
    { id: 103, name: 'Multi-Band Set', basePrice: 32, image: 'https://via.placeholder.com/300x300?text=Band+Set&bg=00d4ff&textColor=000', category: 'smartwatch', description: '3 interchangeable' },
    { id: 104, name: 'Screen Film', basePrice: 8, image: 'https://via.placeholder.com/300x300?text=Screen+Film&bg=a855f7&textColor=fff', category: 'smartwatch', description: 'Anti-scratch film' },
    { id: 105, name: 'TPU Watch Case', basePrice: 14, image: 'https://via.placeholder.com/300x300?text=TPU+Case&bg=ec4899&textColor=fff', category: 'smartwatch', description: 'Bumper case' },
    { id: 106, name: 'Watch Carrying Case', basePrice: 16, image: 'https://via.placeholder.com/300x300?text=Carrying+Case&bg=00d4ff&textColor=000', category: 'smartwatch', description: 'Travel case' },
    { id: 107, name: 'Metal Band', basePrice: 28, image: 'https://via.placeholder.com/300x300?text=Metal+Band&bg=a855f7&textColor=fff', category: 'smartwatch', description: 'Stainless steel' },
    { id: 108, name: 'Fabric Band', basePrice: 16, image: 'https://via.placeholder.com/300x300?text=Fabric+Band&bg=ec4899&textColor=fff', category: 'smartwatch', description: 'Breathable fabric' },
    { id: 109, name: 'Watch Protector Pack', basePrice: 12, image: 'https://via.placeholder.com/300x300?text=Protector+Pack&bg=00d4ff&textColor=000', category: 'smartwatch', description: 'Pack of 5' },
    { id: 110, name: 'Watch Replacement Band', basePrice: 14, image: 'https://via.placeholder.com/300x300?text=Replacement&bg=a855f7&textColor=fff', category: 'smartwatch', description: 'Extra band' },
    { id: 111, name: 'Watch Cleaner', basePrice: 9, image: 'https://via.placeholder.com/300x300?text=Cleaner&bg=ec4899&textColor=fff', category: 'smartwatch', description: 'Cleaning kit' },
];

// ========== USER MANAGEMENT ==========
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];

// ========== CART MANAGEMENT ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    updateHeaderUI();
    
    if (document.getElementById('product-grid')) {
        loadProducts();
        document.getElementById('category-filter').addEventListener('change', filterProducts);
        document.getElementById('price-filter').addEventListener('change', filterProducts);
    }
    
    if (document.getElementById('checkout-form')) {
        document.getElementById('checkout-form').addEventListener('submit', handleCheckout);
    }
    
    if (document.getElementById('login-form')) {
        document.getElementById('login-form').addEventListener('submit', handleLogin);
    }
    
    if (document.getElementById('search-form')) {
        document.getElementById('search-form').addEventListener('submit', handleSearch);
    }
    
    if (document.querySelector('.search-box')) {
        document.querySelector('.search-box').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                window.location.href = 'search.html?q=' + encodeURIComponent(this.value);
            }
        });
    }
    
    if (document.querySelector('.user-icon')) {
        document.querySelector('.user-icon').addEventListener('click', toggleUserMenu);
    }
    
    if (document.getElementById('cart-items')) {
        loadCartPage();
    }
});

// ========== HEADER UI UPDATE ==========
function updateHeaderUI() {
    const navRight = document.querySelector('.nav-right');
    if (!navRight) {
        const nav = document.querySelector('nav ul');
        const newNavRight = document.createElement('div');
        newNavRight.className = 'nav-right';
        
        const searchBox = document.createElement('input');
        searchBox.type = 'text';
        searchBox.className = 'search-box';
        searchBox.placeholder = 'Search products...';
        
        const userIcon = document.createElement('span');
        userIcon.className = 'user-icon';
        userIcon.innerHTML = currentUser ? `👤${currentUser.name[0]}` : '👤';
        userIcon.style.cursor = 'pointer';
        userIcon.title = currentUser ? currentUser.name : 'Login';
        
        newNavRight.appendChild(searchBox);
        newNavRight.appendChild(userIcon);
        
        nav.parentElement.insertBefore(newNavRight, nav.nextSibling);
    }
}

// ========== PRODUCT LOADING & FILTERING ==========
function loadProducts(filterCategory = 'all', filterPrice = 'all') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    products.filter(p => {
        const categoryMatch = filterCategory === 'all' || p.category === filterCategory;
        const priceMatch = filterPrice === 'all' || 
                          (filterPrice === 'low' && p.basePrice < 15) || 
                          (filterPrice === 'high' && p.basePrice >= 15);
        return categoryMatch && priceMatch;
    }).forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <span class="product-badge">NEW</span>
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="product-content">
                <h3>${p.name}</h3>
                <p class="product-description">${p.description}</p>
                <div class="product-price">
                    <span class="price">$${p.basePrice}</span>
                </div>
                <a href="product.html?id=${p.id}" class="cta-button">Customize</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    
    if (categoryFilter && priceFilter) {
        loadProducts(categoryFilter.value, priceFilter.value);
    }
}

// ========== SEARCH FUNCTIONALITY ==========
function handleSearch(e) {
    e.preventDefault();
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        showNotification('Please enter a search term', 'warning');
        return;
    }
    
    const results = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
    );
    
    const resultsContainer = document.getElementById('search-results');
    if (resultsContainer) {
        resultsContainer.innerHTML = '';
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">No products found matching your search.</p>';
        } else {
            const grid = document.createElement('div');
            grid.className = 'product-grid';
            results.forEach(p => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-image">
                        <img src="${p.image}" alt="${p.name}">
                    </div>
                    <div class="product-content">
                        <h3>${p.name}</h3>
                        <p class="product-description">${p.description}</p>
                        <div class="product-price">
                            <span class="price">$${p.basePrice}</span>
                        </div>
                        <a href="product.html?id=${p.id}" class="cta-button">Customize</a>
                    </div>
                `;
                grid.appendChild(card);
            });
            resultsContainer.appendChild(grid);
        }
    }
}

// ========== LOGIN/LOGOUT ==========
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.querySelector('#login-form input[type="email"]').value;
    const password = document.querySelector('#login-form input[type="password"]').value;
    
    if (!email || !password) {
        showNotification('Please fill all fields', 'warning');
        return;
    }
    
    // Find user
    let user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        // Auto create account if not exists (for demo)
        if (confirm('Account not found. Create new account?')) {
            user = { id: Date.now(), email, password, name: email.split('@')[0] };
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            showNotification('Invalid credentials', 'warning');
            return;
        }
    }
    
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    showSuccessModal('Login Successful', `Welcome back, ${user.name}!`);
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

function toggleUserMenu() {
    if (currentUser) {
        if (confirm(`Logged in as: ${currentUser.name}\n\nLogout?`)) {
            logout();
        }
    } else {
        window.location.href = 'login.html';
    }
}

// ========== CART FUNCTIONS ==========
function addToCart(productId, quantity = 1) {
    if (!currentUser) {
        showNotification('Please login to add items to cart', 'warning');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    let cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.basePrice,
            quantity: quantity,
            image: product.image
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    showSuccessModal('Added to Cart', `${product.name} added successfully!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartPage();
    showNotification('Item removed from cart', 'success');
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item && quantity > 0) {
        item.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartPage();
    }
}

function loadCartPage() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <a href="shop.html" class="cta-button">Continue Shopping</a>
            </div>
        `;
        const summary = document.getElementById('cart-summary');
        if (summary) summary.style.display = 'none';
        return;
    }
    
    const summary = document.getElementById('cart-summary');
    if (summary) summary.style.display = 'block';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const element = document.createElement('div');
        element.className = 'cart-item';
        element.innerHTML = `
            <div class="cart-item-info">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">$${item.price} x ${item.quantity} = $${itemTotal}</p>
            </div>
            <div class="cart-item-actions">
                <input type="number" value="${item.quantity}" min="1" max="10" 
                       onchange="updateCartQuantity(${item.id}, this.value)">
                <button class="cta-button btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(element);
    });
    
    updateTotalPrice();
}

function updateTotalPrice() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalElement = document.getElementById('total-price');
    if (totalElement) {
        totalElement.textContent = total.toFixed(2);
    }
}

// ========== CHECKOUT ==========
function handleCheckout(e) {
    e.preventDefault();
    
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'warning');
        return;
    }
    
    const inputs = document.querySelectorAll('#checkout-form input');
    let allFilled = true;
    inputs.forEach(input => {
        if (!input.value.trim()) allFilled = false;
    });
    
    if (!allFilled) {
        showNotification('Please fill all required fields', 'warning');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Process payment (mock)
    showSuccessModal('Payment Successful!', `Order placed successfully!\n\nTotal: $${total.toFixed(2)}\n\nThank you for your purchase!`);
    
    setTimeout(() => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'index.html';
    }, 3000);
}

// ========== CUSTOMIZATION PAGE ==========
if (document.getElementById('add-to-cart')) {
    document.getElementById('add-to-cart').addEventListener('click', function() {
        const params = new URLSearchParams(window.location.search);
        const productId = parseInt(params.get('id')) || 1;
        addToCart(productId);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const customTextInput = document.getElementById('custom-text');
    const colorSelect = document.getElementById('color-select');
    const fontSelect = document.getElementById('font-select');
    const imageUpload = document.getElementById('image-upload');
    
    if (customTextInput) {
        customTextInput.addEventListener('input', updatePreview);
        colorSelect.addEventListener('change', updatePreview);
        fontSelect.addEventListener('change', updatePreview);
        imageUpload.addEventListener('change', handleImageUpload);
    }
});

function updatePreview() {
    const text = document.getElementById('custom-text')?.value || '';
    const color = document.getElementById('color-select')?.value || '#000000';
    const font = document.getElementById('font-select')?.value || 'Arial';
    const previewText = document.getElementById('preview-text');
    
    if (previewText) {
        previewText.textContent = text;
        previewText.style.color = color;
        previewText.style.fontFamily = font;
    }
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const previewImg = document.getElementById('preview-image');
            if (previewImg) {
                previewImg.src = event.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideInUp 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== SUCCESS MODAL ==========
function showSuccessModal(title, message) {
    // Remove existing modal
    const existingModal = document.getElementById('success-modal');
    if (existingModal) existingModal.remove();
    
    const modal = document.createElement('div');
    modal.id = 'success-modal';
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content success-modal">
            <div class="success-icon">✓</div>
            <p class="success-message">${title}</p>
            <p class="success-details">${message}</p>
            <div class="modal-footer">
                <button class="cta-button" onclick="this.closest('.modal').remove()">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.remove();
        }
    });
}

// ========== CLOSE MODALS ==========
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close-modal')) {
        e.target.closest('.modal').remove();
    }
});