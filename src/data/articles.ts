import type { Product } from './products';

export interface FilterButton {
  id: string;
  label: string;
  icon: string;
}

export interface ComparisonColumn {
  label: string;
  source: 'price' | 'rating' | 'badge' | 'highlight' | 'spec';
  specLabel?: string;
}

export interface BuyingGuideItem {
  title: string;
  body: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface QuickPick {
  label: string;
  productId: string;
}

export interface Article {
  slug: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  breadcrumb: { label: string; href: string }[];
  heroImage: string;
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubtitle: string;
  heroTrustNote: string;
  introHeading: string;
  introParagraphs: string[];
  filters: FilterButton[];
  comparisonColumns: ComparisonColumn[];
  comparisonSubtitle: string;
  products: Product[];
  buyingGuideHeading: string;
  buyingGuide: BuyingGuideItem[];
  faqs: FAQItem[];
  quickPicks: QuickPick[];
  budgetTips: string[];
  relatedArticles: string[];
  sortOptions: { value: string; label: string }[];
  defaultSort: string;
}

// ===========================================================================
// Article 1 — Cheap Window Air Conditioners Under $100
// ===========================================================================

const acProducts: Product[] = [
  {
    id: 'rovsun-5000-mechanical',
    title: 'ROVSUN 5000 BTU Window Air Conditioner',
    shortTitle: 'ROVSUN 5000 BTU',
    image: 'https://m.media-amazon.com/images/I/71ephNsr6AL._AC_SL1500_.jpg',
    price: 139,
    rating: 4.1,
    affiliateUrl: 'https://amzn.to/3R1gMlG',
    asin: 'B08YDGXYX8',
    specs: [
      { label: 'BTU', value: '5,000' },
      { label: 'Coverage', value: '150 sq ft' },
    ],
    features: ['Mechanical Controls', 'Energy Saving', 'Easy Install', '4 Modes'],
    pros: ['Lowest price on the list', 'Simple knob controls', 'Eco-friendly design', '7 temperature options'],
    cons: ['No remote control', 'Basic feature set'],
    badge: 'Cheapest Pick',
    highlightFeature: 'Energy Saving',
  },
  {
    id: 'senville-5000',
    title: 'Senville 5,000 BTU Window Air Conditioner',
    shortTitle: 'Senville 5000 BTU',
    image: 'https://m.media-amazon.com/images/I/81yJqTEuS1L._AC_SL1500_.jpg',
    price: 143,
    rating: 4.3,
    affiliateUrl: 'https://amzn.to/49wtpvh',
    asin: 'B09Y9J8223',
    specs: [
      { label: 'BTU', value: '5,000' },
      { label: 'Coverage', value: '150 sq ft' },
    ],
    features: ['Mechanical Control', '2 Cooling Speeds', 'Washable Filter', 'Easy Install'],
    pros: ['Budget-friendly price', 'CEER 11.0 efficiency', 'Fits 23"-36" windows', '1-year warranty'],
    cons: ['No remote', 'Only 2 fan speeds'],
    badge: 'Best Value',
    highlightFeature: 'Energy Saving',
  },
  {
    id: 'mepty-evaporative',
    title: 'MEPTY 3-IN-1 Evaporative Air Cooler',
    shortTitle: 'MEPTY Evaporative Cooler',
    image: 'https://m.media-amazon.com/images/I/61hdJJSPq9L._AC_SL1500_.jpg',
    price: 129,
    rating: 4.6,
    affiliateUrl: 'https://amzn.to/4d5bD4z',
    asin: 'B0GX2165HY',
    specs: [
      { label: 'BTU', value: 'N/A' },
      { label: 'Coverage', value: '200 sq ft' },
    ],
    features: ['3-in-1 Design', '120° Oscillation', '12H Timer', '3 Speeds', 'Windowless'],
    pros: ['No window required', 'Humidifier + cooler + fan', 'Quiet 80W motor', 'ETL certified'],
    cons: ['Not a true AC (no compressor)', 'Less effective in humid climates'],
    badge: 'Top Rated',
    highlightFeature: 'Quiet Mode',
  },
  {
    id: 'rovsun-5000-slim',
    title: 'ROVSUN 5000 BTU Window AC Unit',
    shortTitle: 'ROVSUN 5000 BTU Slim',
    image: 'https://m.media-amazon.com/images/I/71u6Rd-PpML._AC_SL1500_.jpg',
    price: 151,
    rating: 4.3,
    affiliateUrl: 'https://amzn.to/4fgWFtC',
    asin: 'B0925NFBL5',
    specs: [
      { label: 'BTU', value: '5,000' },
      { label: 'Coverage', value: '150 sq ft' },
    ],
    features: ['115V/60Hz', 'Quiet 55dB', 'Easy Install Kit', '2 Cool Settings'],
    pros: ['Very quiet at 55dB', 'Easy-to-understand controls', 'Slim design', 'Included install kit'],
    cons: ['Manual controls only', 'No timer function'],
    highlightFeature: 'Quiet Mode',
  },
  {
    id: 'tcl-5000',
    title: 'TCL 5000 BTU Window Air Conditioner',
    shortTitle: 'TCL 5000 BTU',
    image: 'https://m.media-amazon.com/images/I/719qmomItML._AC_SL1500_.jpg',
    price: 162,
    rating: 4.0,
    affiliateUrl: 'https://amzn.to/4uIAm4u',
    asin: 'B0CRK2CTB5',
    specs: [
      { label: 'BTU', value: '5,000' },
      { label: 'Coverage', value: '150 sq ft' },
    ],
    features: ['4-Way Directional Vent', 'CEER 11.0', 'Mechanical Dials', 'Washable Filter'],
    pros: ['4-way airflow direction', 'Energy efficient', 'TCL brand reliability', 'Compact design'],
    cons: ['No digital display', 'Basic controls'],
    highlightFeature: 'Energy Saving',
  },
  {
    id: 'ge-5000',
    title: 'GE 5,000 BTU Window Air Conditioner',
    shortTitle: 'GE 5000 BTU',
    image: 'https://m.media-amazon.com/images/I/81iKzqhWm+L._AC_SL1500_.jpg',
    price: 164,
    rating: 4.2,
    affiliateUrl: 'https://amzn.to/4nncLUN',
    asin: 'B0DK63CLPV',
    specs: [
      { label: 'BTU', value: '5,000' },
      { label: 'Coverage', value: '150 sq ft' },
    ],
    features: ['Quiet 52-56dB', 'Auto Restart', 'Mechanical Controls', 'EZ Mount Kit'],
    pros: ['Trusted GE brand', 'Auto restart after outages', 'Very quiet operation', '440W low power draw'],
    cons: ['Higher price for 5000 BTU', 'No Wi-Fi'],
    badge: "Editor's Choice",
    highlightFeature: 'Quiet Mode',
  },
  {
    id: 'frigidaire-5000',
    title: 'Frigidaire 5,000 BTU Window AC',
    shortTitle: 'Frigidaire 5000 BTU',
    image: 'https://m.media-amazon.com/images/I/81Aa2gcPQTL._AC_SL1500_.jpg',
    price: 169,
    rating: 4.4,
    affiliateUrl: 'https://amzn.to/4txhEvR',
    asin: 'B07RGM11L5',
    specs: [
      { label: 'BTU', value: '5,000' },
      { label: 'Coverage', value: '150 sq ft' },
    ],
    features: ['Auto Restart', '52 dBA Quiet', 'Effortless Temp Control', 'Washable Filter'],
    pros: ['52 dBA ultra-quiet', 'Auto restart feature', 'Extra-long power cord', 'Frigidaire reliability'],
    cons: ['Premium price for 5000 BTU', 'No smart controls'],
    badge: 'Best Battery',
    highlightFeature: 'Quiet Mode',
  },
  {
    id: 'midea-5000-mechanical',
    title: 'Midea 5,000 BTU EasyCool Window AC',
    shortTitle: 'Midea 5000 BTU EasyCool',
    image: 'https://m.media-amazon.com/images/I/61vWLeENnTL._AC_SL1000_.jpg',
    price: 159,
    rating: 4.4,
    affiliateUrl: 'https://amzn.to/48Wowvm',
    asin: 'B085797ZFF',
    specs: [
      { label: 'BTU', value: '5,000' },
      { label: 'Coverage', value: '150 sq ft' },
    ],
    features: ['CEER 11.0', '2-Way Air Direction', 'Reusable Filter', '1-Year Warranty'],
    pros: ['Quieter than a refrigerator', 'Easy mechanical controls', 'Worldwide leader brand', 'Eco mode'],
    cons: ['Basic controls, no remote', 'Standard coverage area'],
    highlightFeature: 'Energy Saving',
  },
  {
    id: 'lg-5000',
    title: 'LG 5000 BTU Window Air Conditioner',
    shortTitle: 'LG 5000 BTU',
    image: 'https://m.media-amazon.com/images/I/71A7Uu7TEtL._AC_SL1500_.jpg',
    price: 189,
    rating: 4.3,
    affiliateUrl: 'https://amzn.to/4d7V6wU',
    asin: 'B0BM57LB4B',
    specs: [
      { label: 'BTU', value: '5,000' },
      { label: 'Coverage', value: '150 sq ft' },
    ],
    features: ['Ultra-Quiet 50dB', 'Energy Save Function', 'R32 Eco Refrigerant', 'EZ Mount Kit'],
    pros: ['Ultra-quiet at 50dB', 'Eco-friendly R32 refrigerant', 'LG brand quality', '2 cooling modes'],
    cons: ['Highest price in 5000 BTU range', 'No remote'],
    highlightFeature: 'Quiet Mode',
  },
  {
    id: 'midea-5000-remote',
    title: 'Midea 5,000 BTU Window AC with Remote',
    shortTitle: 'Midea 5000 BTU w/ Remote',
    image: 'https://m.media-amazon.com/images/I/71YZU9Ix6nL._AC_SL1500_.jpg',
    price: 176,
    rating: 4.4,
    affiliateUrl: 'https://amzn.to/432Xyi5',
    asin: 'B0DXDTSL4D',
    specs: [
      { label: 'BTU', value: '5,000' },
      { label: 'Coverage', value: '150 sq ft' },
    ],
    features: ['Remote Control', '3-in-1 Mode', 'Eco Mode', 'EasyTimer'],
    pros: ['Includes remote control', '3-in-1 cooling/fan/dehumidifier', 'Eco mode savings', 'LED display'],
    cons: ['Slightly more expensive than basic Midea', 'Basic plastic build'],
    highlightFeature: 'Energy Saving',
  },
  {
    id: 'antarctic-star-5000',
    title: 'Antarctic Star 5,000 BTU Window AC',
    shortTitle: 'Antarctic Star 5000 BTU',
    image: 'https://m.media-amazon.com/images/I/71V7GOoBFxL._AC_SL1500_.jpg',
    price: 159,
    rating: 4.3,
    affiliateUrl: 'https://amzn.to/4u01pbE',
    asin: 'B0F5PYF7XV',
    specs: [
      { label: 'BTU', value: '5,000' },
      { label: 'Coverage', value: '150 sq ft' },
    ],
    features: ['Ultra-Quiet 49dB', 'Adjustable Louvers', '2 Knob Controls', 'Easy Clean Filter'],
    pros: ['Quietest on list at 49dB', 'Adjustable vertical & horizontal louvers', 'Very simple controls', 'Budget price'],
    cons: ['Newer brand, less reviews', 'Basic feature set'],
    highlightFeature: 'Quiet Mode',
  },
  {
    id: 'achazel-6000-wifi',
    title: 'ACHAZEL 6000 BTU WiFi Window AC',
    shortTitle: 'ACHAZEL 6000 BTU WiFi',
    image: 'https://m.media-amazon.com/images/I/71KXAM1qHEL._AC_SL1500_.jpg',
    price: 179,
    rating: 4.3,
    affiliateUrl: 'https://amzn.to/432Bc06',
    asin: 'B0CWL5BX8V',
    specs: [
      { label: 'BTU', value: '6,000' },
      { label: 'Coverage', value: '250 sq ft' },
    ],
    features: ['WiFi SmartLife App', 'Remote Control', 'Eco Mode', 'Sleep Mode', '24H Timer'],
    pros: ['Smart WiFi control via app', 'Cools larger 250 sq ft', 'CEER 11.0 efficiency', 'Multiple smart modes'],
    cons: ['Slightly over $100', 'Requires smartphone for smart features'],
    badge: 'Best Value',
    highlightFeature: 'Cooling Power',
  },
  {
    id: 'zafro-6000',
    title: 'ZAFRO 6,000 BTU Window AC with Dehumidifier',
    shortTitle: 'ZAFRO 6000 BTU 3-in-1',
    image: 'https://m.media-amazon.com/images/I/71y5zHoB0rL._AC_SL1500_.jpg',
    price: 189,
    rating: 4.3,
    affiliateUrl: 'https://amzn.to/48Z4hwZ',
    asin: 'B0GQCNGGWF',
    specs: [
      { label: 'BTU', value: '6,000' },
      { label: 'Coverage', value: '250 sq ft' },
    ],
    features: ['3-in-1 AC+Dehumidifier+Fan', 'ECO Mode', 'Sleep Mode', '50-55dB Quiet', '24H Timer'],
    pros: ['Removes 40 pints moisture/day', 'Very quiet 50-55dB', '4-way directional louvers', 'Remote included'],
    cons: ['Premium price', 'Bulkier unit'],
    badge: "Editor's Choice",
    highlightFeature: 'Cooling Power',
  },
  {
    id: 'window-ac-6000-remote',
    title: 'Window Air Conditioner 6000 BTU with Remote',
    shortTitle: '6000 BTU Window AC Remote',
    image: 'https://m.media-amazon.com/images/I/71jbo-NWHDL._AC_SL1500_.jpg',
    price: 180,
    rating: 4.0,
    affiliateUrl: 'https://amzn.to/4wliy1f',
    asin: 'B0GGGMZ533',
    specs: [
      { label: 'BTU', value: '6,000' },
      { label: 'Coverage', value: '375 sq ft' },
    ],
    features: ['375 Sq Ft Coverage', '3 Cooling Speeds', 'Remote Control', 'Quiet 52dB', 'Eco Mode'],
    pros: ['Largest coverage: 375 sq ft', '3 cooling speeds', 'Remote control included', 'Sleep mode'],
    cons: ['Budget brand, fewer reviews', 'Basic build quality'],
    highlightFeature: 'Cooling Power',
  },
  {
    id: 'electactic-6000',
    title: 'Electactic 6,000 BTU Window AC Unit',
    shortTitle: 'Electactic 6000 BTU',
    image: 'https://m.media-amazon.com/images/I/71gojxXwtYL._AC_SL1500_.jpg',
    price: 189,
    rating: 4.4,
    affiliateUrl: 'https://amzn.to/4nrH8t1',
    asin: 'B0DWXF26Y7',
    specs: [
      { label: 'BTU', value: '6,000' },
      { label: 'Coverage', value: '250 sq ft' },
    ],
    features: ['4 Fan Speeds', 'Sleep Mode', '24H Timer', 'Remote Control', '56 pints/day Dehumidifier'],
    pros: ['4 fan speeds for precision control', 'Removes 56 pints moisture daily', 'Batteries included with remote', 'Very quiet 38-45dB'],
    cons: ['Premium price bracket', 'Large unit size'],
    badge: 'Top Rated',
    highlightFeature: 'Cooling Power',
  },
  {
    id: 'comfort-zone-5000',
    title: 'Comfort Zone 5,000 BTU Window AC',
    shortTitle: 'Comfort Zone 5000 BTU',
    image: 'https://m.media-amazon.com/images/I/71nc2YaVE-L._AC_SL1500_.jpg',
    price: 169,
    rating: 4.2,
    affiliateUrl: 'https://amzn.to/4djtcwq',
    asin: 'B0DXXJ39X7',
    specs: [
      { label: 'BTU', value: '5,000' },
      { label: 'Coverage', value: '150 sq ft' },
    ],
    features: ['7 Temp Settings', '2 Fan Modes', 'Washable Filter', 'Auto Restart', 'Adjustable Louvers'],
    pros: ['7 precise temperature settings', 'Auto restart after power failure', 'Directional louvers', 'Fits 23"-34" windows'],
    cons: ['Brand less known than GE/LG', 'No timer'],
    highlightFeature: 'Energy Saving',
  },
];

// ===========================================================================
// Article 2 — Electric Bikes Under $200 for Adults
// ===========================================================================

const ebikeProducts: Product[] = [
  {
    id: 'varun-all-terrain-500w',
    title:
      'VARUN Electric Bike — 500W Peak Motor, 24/26" All-Terrain E-Bike, Up to 40 Miles & 20 MPH, Removable Battery, 7-Speed, Front Suspension, Dual Disc Brakes',
    shortTitle: 'VARUN 500W All-Terrain',
    image: 'https://m.media-amazon.com/images/I/81uxehGMkqL._AC_SL1500_.jpg',
    price: 199,
    rating: 4.5,
    affiliateUrl: 'https://amzn.to/4nzkteA',
    asin: 'B0GSQP46K6',
    specs: [
      { label: 'Motor', value: '500W Peak' },
      { label: 'Range', value: 'Up to 40 mi' },
      { label: 'Top Speed', value: '20 MPH' },
      { label: 'Wheel', value: '24" / 26"' },
    ],
    features: ['7-Speed Shimano', 'Front Suspension', 'Dual Disc Brakes', 'Removable Battery'],
    pros: [
      'Best overall rating at 4.5 stars',
      'Full-size 24"/26" wheels — real bike geometry',
      'Removable battery for indoor charging',
      'Up to 40-mile range on pedal assist',
    ],
    cons: ['Some assembly required', 'Heavier than folding models'],
    badge: 'Editor’s Choice',
    highlightFeature: 'Long Range',
  },
  {
    id: 'jasion-eb5-1000w',
    title:
      'Jasion EB5 Electric Bike for Adults — Peak 1000W Brushless Motor, 40 Miles 20MPH Commuting Electric Mountain Bike with 500Wh Removable Battery, 7-Speed, 26" Tires and Front Fork Suspension',
    shortTitle: 'Jasion EB5 1000W',
    image: 'https://m.media-amazon.com/images/I/81G3ijG4TTL._AC_SL1500_.jpg',
    price: 199,
    rating: 4.1,
    affiliateUrl: 'https://amzn.to/4fjl1TB',
    asin: 'B0G4GXNCHV',
    specs: [
      { label: 'Motor', value: '1000W Peak' },
      { label: 'Range', value: '40 mi' },
      { label: 'Top Speed', value: '20 MPH' },
      { label: 'Battery', value: '500Wh' },
    ],
    features: ['1000W Peak Motor', '500Wh Battery', '7-Speed', '26" Mountain Tires'],
    pros: [
      'Highest motor wattage at this price point',
      'True mountain-bike frame with 26" wheels',
      '500Wh battery for genuine 40-mile range',
      'Front fork suspension for trail comfort',
    ],
    cons: ['Bulky shipping box', '3.7 lb heavier than folding e-bikes'],
    badge: 'Most Powerful',
    highlightFeature: 'Top Speed',
  },
  {
    id: 'hiyviy-folding-1200w',
    title:
      'Folding Electric Bikes for Adults — Peak 1200W/1000W 25 MPH Foldable Electric Bike for Teens, 48V 10Ah 480Wh & 45 Miles (PAS), 14" Tire Full Suspension Folding Ebikes',
    shortTitle: 'HiyViy 1200W Foldable',
    image: 'https://m.media-amazon.com/images/I/71dsSZ0I-uL._AC_SL1500_.jpg',
    price: 169,
    rating: 4.3,
    affiliateUrl: 'https://amzn.to/4ub8uq0',
    asin: 'B0GK73S5HP',
    specs: [
      { label: 'Motor', value: '1200W Peak' },
      { label: 'Range', value: '45 mi (PAS)' },
      { label: 'Top Speed', value: '25 MPH' },
      { label: 'Battery', value: '48V 10Ah / 480Wh' },
    ],
    features: ['Full Suspension', '14" Tires', 'Foldable Frame', 'Removable 48V Battery'],
    pros: [
      'Fastest top speed at 25 MPH',
      'Full suspension on a folding e-bike (rare under $200)',
      '45-mile pedal assist range',
      'Folds for car trunks & apartments',
    ],
    cons: ['Small 14" wheels less smooth on potholes', 'Top speed varies by local law'],
    badge: 'Top Rated',
    highlightFeature: 'Top Speed',
  },
  {
    id: 'lelekuai-1200w-commuter',
    title:
      'LELEKUAI Electric Bike for Adults — 1200W Peak Motor Commuter Ebike, 20-28MPH Speed, 32 Miles Range, Removable Waterproof Battery, Dual Disc Brakes, UL 2849 Certified',
    shortTitle: 'LELEKUAI 1200W Commuter',
    image: 'https://m.media-amazon.com/images/I/71xcoMja3jL._AC_SL1500_.jpg',
    price: 154,
    rating: 4.3,
    affiliateUrl: 'https://amzn.to/4dKDfLB',
    asin: 'B0G6ZTCCBK',
    specs: [
      { label: 'Motor', value: '1200W Peak' },
      { label: 'Range', value: '32 mi' },
      { label: 'Top Speed', value: '20-28 MPH' },
      { label: 'Battery', value: 'Waterproof Removable' },
    ],
    features: ['UL 2849 Certified', 'Dual Disc Brakes', 'Waterproof Battery', 'Foldable'],
    pros: [
      'UL 2849 safety certified — important for cheap e-bikes',
      'Dual disc brakes for confident stopping',
      'Strong 1200W peak motor for hills',
      'Excellent value at $154',
    ],
    cons: ['Range slightly shorter than larger-battery rivals', 'Compact 14" wheels'],
    badge: 'Best Value',
    highlightFeature: 'Safety Certified',
  },
  {
    id: 'lelekuai-560w-compact',
    title:
      'Electric Bike for Adults and Teens — 560-740W Motor, 20-25MPH Compact Commuter Folding Ebike, 32 Miles Range, 48V 10Ah Battery, 3-Level Pedal Assist, 14" Foldable, UL 2849 Certified',
    shortTitle: 'LELEKUAI 560W Compact',
    image: 'https://m.media-amazon.com/images/I/71rHYTtsFhL._AC_SL1500_.jpg',
    price: 148,
    rating: 4.4,
    affiliateUrl: 'https://amzn.to/4tzTocx',
    asin: 'B0G1M1J46G',
    specs: [
      { label: 'Motor', value: '560-740W' },
      { label: 'Range', value: '32 mi' },
      { label: 'Top Speed', value: '20-25 MPH' },
      { label: 'Battery', value: '48V 10Ah' },
    ],
    features: ['UL 2849 Certified', '3-Level Pedal Assist', '14" Foldable', 'Compact Commuter'],
    pros: ['Strong 4.4-star rating', 'UL 2849 certified for safety', 'Fits in a car trunk', '3 pedal assist levels'],
    cons: ['Motor power slightly lower than 1200W rivals', 'Better for paved commuting than off-road'],
    badge: 'Best Folding',
    highlightFeature: 'Foldable',
  },
  {
    id: 'sepado-750w-folding',
    title:
      'Folding Electric Bike for Adults — 750W Peak Motor Mini Ebike, 20mph Speed, 36V 10.4ah Battery, 20-40 Miles Range, 14" Foldable Electric Bicycle for Commute',
    shortTitle: 'sepado 750W Folding',
    image: 'https://m.media-amazon.com/images/I/71vuxK6nDmL._AC_SL1500_.jpg',
    price: 139,
    rating: 4.5,
    affiliateUrl: 'https://amzn.to/42xDggx',
    asin: 'B0GMNSLLQB',
    specs: [
      { label: 'Motor', value: '750W Peak' },
      { label: 'Range', value: '20-40 mi' },
      { label: 'Top Speed', value: '20 MPH' },
      { label: 'Battery', value: '36V 10.4Ah' },
    ],
    features: ['Mini Foldable', '14" Wheels', 'Commute Ready', 'Pedal Assist'],
    pros: [
      'Excellent 4.5-star rating',
      'Lightweight mini frame folds easily',
      '750W peak motor is plenty for city commuting',
      'One of the cheapest UL-grade options at $139',
    ],
    cons: ['Smaller battery than 48V models', 'Best for riders under 220 lbs'],
    badge: 'Cheapest Pick',
    highlightFeature: 'Foldable',
  },
  {
    id: 'mdeam-2-seater',
    title:
      'Mdeam Foldable Electric Bike — 500W Motor Compact Adults Commute Ebike 20 MPH Max Speed, 30+ Miles Folding Electric Bicycle with Passenger Seat, 14" Mini E-Bike 2 Seater for Adults/Teens',
    shortTitle: 'Mdeam 2-Seater 500W',
    image: 'https://m.media-amazon.com/images/I/71yUdZr-8yL._AC_SL1467_.jpg',
    price: 153,
    rating: 4.4,
    affiliateUrl: 'https://amzn.to/42xZGhF',
    asin: 'B0DXPQPPFM',
    specs: [
      { label: 'Motor', value: '500W' },
      { label: 'Range', value: '30+ mi' },
      { label: 'Top Speed', value: '20 MPH' },
      { label: 'Battery', value: '36V' },
    ],
    features: ['2-Seater Design', 'Passenger Seat', '14" Foldable', 'Mini Commuter'],
    pros: [
      'Built-in passenger seat — rare in this budget',
      'Strong 4.4-star rating',
      'Folds into compact size for storage',
      'Great for couples or parent-kid rides',
    ],
    cons: ['Lower wattage if loaded with two riders', '14" wheels feel small on rough pavement'],
    badge: 'Best for Couples',
    highlightFeature: 'Foldable',
  },
  {
    id: 'rpint-740w-folding',
    title:
      'Foldable Electric Bike for Adults and Teens — 740W Peak Motor Ebike with 48V 10AH/20AH Removable Battery, 30-60 Miles PAS Range, 14" Folding Mini E-Bike, 20MPH',
    shortTitle: 'RPINT 740W Foldable',
    image: 'https://m.media-amazon.com/images/I/71k6gIUyYKL._AC_SX569_.jpg',
    price: 199,
    rating: 4.1,
    affiliateUrl: 'https://amzn.to/437bNT2',
    asin: 'B0FP1MFPCP',
    specs: [
      { label: 'Motor', value: '740W Peak' },
      { label: 'Range', value: '30-60 mi' },
      { label: 'Top Speed', value: '20 MPH' },
      { label: 'Battery', value: '48V 10/20Ah' },
    ],
    features: ['48V Removable Battery', '20Ah Big Battery Option', '14" Foldable', 'Pedal Assist'],
    pros: [
      'Up to 60-mile range with 20Ah option',
      'Larger 48V battery for steady torque',
      'Folds for cars & apartments',
      'Solid daily-commuter pick',
    ],
    cons: ['60-mile range only with optional larger battery', 'Heavier when folded'],
    highlightFeature: 'Long Range',
  },
  {
    id: 'reocro-700w-folding',
    title:
      'REOCRO Foldable Electric Bike for Adults — 14" Mini Folding E-Bike with 48V 10AH/20AH Removable Battery, 30-60 Miles PAS Range, 700W Peak Motor',
    shortTitle: 'REOCRO 700W Foldable',
    image: 'https://m.media-amazon.com/images/I/71xcoMja3jL._AC_SL1500_.jpg',
    price: 198,
    rating: 4.1,
    affiliateUrl: 'https://amzn.to/4tvlNAs',
    asin: 'B0FHBHC28Z',
    specs: [
      { label: 'Motor', value: '700W Peak' },
      { label: 'Range', value: '30-60 mi' },
      { label: 'Top Speed', value: '20 MPH' },
      { label: 'Battery', value: '48V 10/20Ah' },
    ],
    features: ['Mini Folding', '48V Battery', 'Pedal Assist', 'Daily Commute'],
    pros: ['Up to 60-mile PAS range', '48V removable battery', 'Folds for trunk storage', 'Comfortable daily commuter'],
    cons: ['Top range needs larger 20Ah battery', 'Mini wheels less ideal for off-road'],
    highlightFeature: 'Long Range',
  },
  {
    id: 'furider-26-commuter',
    title:
      'Electric Bike for Adults — 26" Commuter Ebikes with 5-Level Pedal Assist & 7-Speed Gears, 25MPH, 720W Motor, 375Wh Battery, 50 Miles, Lockable Suspension Fork',
    shortTitle: 'Furider 720W 26"',
    image: 'https://m.media-amazon.com/images/I/81870f6JzyL._AC_SL1500_.jpg',
    price: 199,
    rating: 3.7,
    affiliateUrl: 'https://amzn.to/3R9Ac7Q',
    asin: 'B0FH698PQV',
    specs: [
      { label: 'Motor', value: '720W' },
      { label: 'Range', value: '50 mi' },
      { label: 'Top Speed', value: '25 MPH' },
      { label: 'Wheel', value: '26"' },
    ],
    features: ['5-Level Pedal Assist', '7-Speed Gears', 'Lockable Suspension Fork', '26" Wheels'],
    pros: [
      'Real 26" mountain-bike wheels',
      '50-mile range on pedal assist',
      'Lockable front fork for road comfort',
      '7-speed Shimano-style shifter',
    ],
    cons: ['Lower 3.7-star rating', 'Bigger frame requires more assembly'],
    highlightFeature: 'Long Range',
  },
  {
    id: 'lelekuai-520w-folding',
    title:
      'LELEKUAI Electric Bike for Adults and Teens — 520W-560W Motor, 20-24MPH, 32 Miles Range, 48V 10Ah Battery, 3-Level Pedal Assist, 14" Foldable Mini Electric Bicycle, UL 2849 Certified',
    shortTitle: 'LELEKUAI 520W Mini',
    image: 'https://m.media-amazon.com/images/I/81HpwZOHeTL._AC_SL1500_.jpg',
    price: 159,
    rating: 4.2,
    affiliateUrl: 'https://amzn.to/4nrGnA5',
    asin: 'B0F24B7DNY',
    specs: [
      { label: 'Motor', value: '520-560W' },
      { label: 'Range', value: '32 mi' },
      { label: 'Top Speed', value: '20-24 MPH' },
      { label: 'Battery', value: '48V 10Ah' },
    ],
    features: ['UL 2849 Certified', '3-Level Pedal Assist', '14" Foldable', '48V Battery'],
    pros: ['UL 2849 safety certification', '48V battery for solid torque', 'Folds compact', 'Reliable LELEKUAI brand'],
    cons: ['Smaller motor than 1200W siblings', 'Mini wheels less stable at top speed'],
    highlightFeature: 'Safety Certified',
  },
  {
    id: 'generic-500w-folding',
    title:
      'Folding Electric Bike for Adults — 500W Motor 25MPH & 35 Miles Long Range, 14" Mini E-Bike with Removable 48V 576Wh Battery, UL Certified Electric Bicycle for Commuting',
    shortTitle: '500W Folding 25 MPH',
    image: 'https://m.media-amazon.com/images/I/71i1X34bniL._AC_SL1500_.jpg',
    price: 138,
    rating: 4.0,
    affiliateUrl: 'https://amzn.to/4dk3DLR',
    asin: 'B0FQV58NKR',
    specs: [
      { label: 'Motor', value: '500W' },
      { label: 'Range', value: '35 mi' },
      { label: 'Top Speed', value: '25 MPH' },
      { label: 'Battery', value: '48V 576Wh' },
    ],
    features: ['UL Certified', '48V 576Wh Battery', '14" Foldable', '25 MPH'],
    pros: ['Cheapest 25 MPH e-bike on this list', 'Big 576Wh battery', 'UL safety certified', 'Folds for commute & storage'],
    cons: ['No-name brand', 'Service & parts may be limited'],
    highlightFeature: 'Top Speed',
  },
  {
    id: 'furider-560w-basket',
    title:
      'Electric Bike for Adults and Teens — 560W Motor 24MPH Compact Commuter Ebike, 32 Miles Range, 48V 10Ah Battery, 3 Shock Absorbers, 14" Mini Foldable Electric Bicycles with Basket, UL 2849 Certified',
    shortTitle: 'Furider 560W Basket',
    image: 'https://m.media-amazon.com/images/I/81nKVmVi8vL._AC_SL1500_.jpg',
    price: 156,
    rating: 3.9,
    affiliateUrl: 'https://amzn.to/4tC5aCZ',
    asin: 'B0G5PL4L78',
    specs: [
      { label: 'Motor', value: '560W' },
      { label: 'Range', value: '32 mi' },
      { label: 'Top Speed', value: '24 MPH' },
      { label: 'Battery', value: '48V 10Ah' },
    ],
    features: ['Front Basket Included', '3 Shock Absorbers', 'UL 2849 Certified', '14" Foldable'],
    pros: ['Front basket bundled for errands', '3 shock absorbers for comfort', 'UL 2849 certified', 'Compact folding frame'],
    cons: ['3.9-star rating is below class average', 'Basket reduces top speed slightly'],
    highlightFeature: 'Foldable',
  },
  {
    id: 'generic-350w-folding',
    title:
      'Folding Electric Bike for Adults and Teens — 350W Peak Motor, 19.88MPH E Bikes, 35 Miles PAS Range, 48V Battery, 14" Foldable Mini Commuting Electric Bicycle, UL 2849 Certified',
    shortTitle: '350W Folding Mini',
    image: 'https://m.media-amazon.com/images/I/81pZd1oGotL._AC_SL1500_.jpg',
    price: 143,
    rating: 4.4,
    affiliateUrl: 'https://amzn.to/4dFwlrQ',
    asin: 'B0G4WD39MQ',
    specs: [
      { label: 'Motor', value: '350W Peak' },
      { label: 'Range', value: '35 mi' },
      { label: 'Top Speed', value: '19.88 MPH' },
      { label: 'Battery', value: '48V' },
    ],
    features: ['UL 2849 Certified', '3-Level Pedal Assist', '14" Foldable', '48V Battery'],
    pros: ['Strong 4.4-star rating', 'UL 2849 certified', '35-mile pedal-assist range', 'Compact mini commuter'],
    cons: ['350W feels slower on hills', 'Not the best for heavier riders'],
    highlightFeature: 'Safety Certified',
  },
  {
    id: 'generic-rv-folding',
    title:
      'Folding Electric Bike for Adults — 48V 10.5Ah Removable Battery 35 Mile Range, Front Suspension, UL 2849 Certified, 19.88MPH, 300LB Payload, Tool-Free Fold, RV Ready Camping Mountain Off-Road Ebike',
    shortTitle: 'RV Folding 300LB',
    image: 'https://m.media-amazon.com/images/I/81CbL-ipZsL._AC_SL1500_.jpg',
    price: 141,
    rating: 4.2,
    affiliateUrl: 'https://amzn.to/4fiYiqI',
    asin: 'B0FP2LS6VJ',
    specs: [
      { label: 'Motor', value: '500W' },
      { label: 'Range', value: '35 mi' },
      { label: 'Top Speed', value: '19.88 MPH' },
      { label: 'Battery', value: '48V 10.5Ah' },
    ],
    features: ['Tool-Free Fold', '300 LB Payload', 'Front Suspension', 'UL 2849 Certified'],
    pros: ['300 LB rider payload — highest in class', 'Tool-free folding mechanism', 'Front suspension fork', 'RV-ready compact frame'],
    cons: ['Top speed capped near 20 MPH', 'Range tested on flat terrain'],
    highlightFeature: 'Foldable',
  },
  {
    id: 'xylophant-14',
    title:
      '14-inch Folding Electric Bicycle — 330 Pound Load-bearing Capacity, 19 Mph, 18-28 Mile Range, 48V Lithium Battery, Front Headlight & Disc Brake, Alloy Steel Frame, City Commuting',
    shortTitle: 'xylophant 14" Folding',
    image: 'https://m.media-amazon.com/images/I/51sIHIwujbL._AC_.jpg',
    price: 189,
    rating: 3.7,
    affiliateUrl: 'https://amzn.to/42t289g',
    asin: 'B0G25C7DV4',
    specs: [
      { label: 'Motor', value: '48V Hub' },
      { label: 'Range', value: '18-28 mi' },
      { label: 'Top Speed', value: '19 MPH' },
      { label: 'Battery', value: '48V Lithium' },
    ],
    features: ['330 LB Load Capacity', 'Front Headlight', 'Disc Brake', 'Alloy Steel Frame'],
    pros: ['330 LB load capacity', 'Integrated front headlight', 'Disc brake for safety', 'Sturdy alloy steel frame'],
    cons: ['3.7-star rating is below average', 'Range varies a lot with rider weight'],
    highlightFeature: 'Heavy-Duty',
  },
];

// ===========================================================================
// Article registry
// ===========================================================================

export const articles: Article[] = [
  {
    slug: 'electric-bikes-under-200-for-adults',
    keyword: 'electric bikes under $200 for adults',
    metaTitle: 'Best Electric Bikes Under $200 for Adults (2026 Buyer’s Guide)',
    metaDescription:
      'We compared 16 electric bikes under $200 for adults — folding ebikes, commuter ebikes, and full-suspension models. Best value, longest range, and top-rated picks.',
    category: 'Electric Bikes',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Sports & Outdoors', href: '/sports-and-outdoors' },
      { label: 'Electric Bikes Under $200', href: '/electric-bikes-under-200-for-adults/' },
    ],
    heroImage:
      'https://images.pexels.com/photos/8348624/pexels-photo-8348624.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroBadge: 'Updated May 2026',
    heroTitleLine1: 'Electric Bikes for Adults',
    heroTitleLine2: 'Under $200',
    heroSubtitle:
      'We compared 16 ebikes priced under $200 — folding commuters, full-suspension mini bikes, and 26" mountain ebikes — ranked by motor power, real-world range, safety certification, and verified buyer ratings.',
    heroTrustNote:
      'Our editors analyze verified Amazon reviews, UL 2849 certification status, motor wattage, battery capacity, and range claims to surface the best ebikes you can actually trust under $200. We earn a small commission if you buy through our links — at no extra cost to you.',
    introHeading: 'Best Electric Bikes Under $200 for Adults — 2026 Guide',
    introParagraphs: [
      'A real electric bike for adults under $200 sounds too good to be true — and ten years ago it would have been. But the explosion of compact folding ebikes and direct-to-consumer brands on Amazon means you can now grab a UL 2849-certified, 48V folding ebike with 30+ miles of range for less than the cost of a tank of gas a month.',
      'After cross-checking 16 sub-$200 ebikes against motor wattage, battery capacity, real-world range, rider weight limits, and verified Amazon reviews, our top overall pick is the VARUN 500W All-Terrain E-Bike at $199 — the only model on this list with a 4.5-star rating and full-size 24"/26" wheels. For the absolute cheapest entry point, the sepado 750W Folding Ebike at $139 punches well above its price with a 4.5-star rating and 750W peak motor.',
    ],
    filters: [
      { id: 'all', label: 'All Bikes', icon: 'Home' },
      { id: 'Top Speed', label: 'Top Speed', icon: 'Gauge' },
      { id: 'Long Range', label: 'Long Range', icon: 'Battery' },
      { id: 'Foldable', label: 'Foldable', icon: 'Maximize2' },
      { id: 'Safety Certified', label: 'UL Certified', icon: 'ShieldCheck' },
    ],
    comparisonColumns: [
      { label: 'Price', source: 'price' },
      { label: 'Motor', source: 'spec', specLabel: 'Motor' },
      { label: 'Range', source: 'spec', specLabel: 'Range' },
      { label: 'Top Speed', source: 'spec', specLabel: 'Top Speed' },
      { label: 'Rating', source: 'rating' },
      { label: 'Best For', source: 'highlight' },
    ],
    comparisonSubtitle: 'Side-by-side specs for our top electric bike picks under $200',
    products: ebikeProducts,
    buyingGuideHeading: 'How to Choose the Right Electric Bike Under $200',
    buyingGuide: [
      {
        title: 'Motor Power (Watts)',
        body:
          'For flat-city commuting, 350W–500W is enough. If you weigh over 200 lbs or ride hills, look for 700W+ peak motor wattage. Models like the Jasion EB5 and HiyViy hit 1000W–1200W peak — strong enough for moderate climbs.',
      },
      {
        title: 'Battery & Real Range',
        body:
          'Manufacturer range claims assume pedal assist on flat ground. Halve them for throttle-only riding. A 48V 10Ah battery (~480Wh) realistically delivers 18–25 throttle miles or 30–40 pedal-assist miles for an average adult.',
      },
      {
        title: 'UL 2849 Certification',
        body:
          'UL 2849 is the safety standard for ebike electrical systems. Cheap uncertified ebikes have caused house fires. Every pick on this list except the budget-most options is UL 2849 certified — never skip this on a sub-$200 ebike.',
      },
      {
        title: 'Folding vs Full-Size Frame',
        body:
          'Folding 14" mini ebikes fit in a car trunk and dorm room but feel less stable on potholes. A full-size 24"/26" frame (VARUN, Jasion EB5) is more comfortable on longer rides but harder to store.',
      },
      {
        title: 'Rider Weight Limit',
        body:
          'Most sub-$200 ebikes are rated for 220–265 lbs. The RV Folding model on this list supports 300 lbs, and the xylophant supports 330 lbs. If you’re close to the limit, drop down to a smaller motor will hurt hill performance.',
      },
      {
        title: 'Top Speed & Local Law',
        body:
          'Class 1 ebikes top out at 20 MPH. Models claiming 25–28 MPH are technically Class 3 and may require a helmet or be restricted from bike paths in your state. Check your local ebike classification before riding above 20 MPH.',
      },
    ],
    faqs: [
      {
        q: 'Can you really get a decent electric bike for adults under $200?',
        a: 'Yes — but you have to be selective. The sub-$200 segment is dominated by compact 14" folding ebikes (think mini commuters, not mountain bikes). The best picks like the VARUN All-Terrain ($199) and Jasion EB5 ($199) deliver real 500–1000W peak motors, 30–40 mile pedal-assist range, and UL 2849 safety certification. Skip any uncertified brand even if it’s cheaper.',
      },
      {
        q: 'What is the cheapest electric bike for adults that actually works?',
        a: 'The sepado 750W Folding Electric Bike at $139 is the cheapest pick on our list with a 4.5-star Amazon rating. It has a 750W peak motor, 36V 10.4Ah battery, and 20–40 mile range. Surprisingly capable for the price, but plan on a sub-220 lb rider.',
      },
      {
        q: 'Which under-$200 electric bike has the longest range?',
        a: 'The RPINT 740W and REOCRO 700W foldables both advertise up to 60 miles of pedal-assist range when you upgrade to the 48V 20Ah battery option. With the stock 10Ah battery, expect 30 miles. The full-size Furider 720W with a 50-mile claim is another long-range pick.',
      },
      {
        q: 'Are these cheap ebikes safe? What is UL 2849?',
        a: 'UL 2849 is the U.S. safety standard for ebike electrical systems, batteries, and chargers. Cheap unbranded ebikes from overseas have caused house fires when their batteries failed. Always look for UL 2849 in the listing. LELEKUAI, Furider, and most picks on this list are UL 2849 certified.',
      },
      {
        q: 'Can a 1000W or 1200W electric bike be street legal?',
        a: 'Peak wattage and continuous wattage are different. A 1000W peak motor often outputs 500–750W continuous, which falls inside most state Class 2/3 ebike limits. Top speed is the real legal trigger — most states cap ebikes at 20 MPH (Class 1/2) or 28 MPH (Class 3). Always check your local laws.',
      },
      {
        q: 'How long does an electric bike battery last?',
        a: 'A lithium ebike battery typically lasts 500–800 full charge cycles before noticeable capacity loss — roughly 3–5 years of regular commuting. Removable 48V batteries (LELEKUAI, Jasion, RPINT) can be replaced for $80–$150 when they wear out.',
      },
      {
        q: 'Do these electric bikes work for tall or heavy riders?',
        a: 'Most 14" mini folding ebikes have a 220–265 lb weight limit and feel cramped over 6 feet tall. For taller or heavier riders, choose a full-size 26" frame like the VARUN, Jasion EB5, or Furider commuter ($189–$199). The Generic 300 LB Payload Folding model is the highest-capacity small frame on this list.',
      },
      {
        q: 'Do I need a license or insurance for an electric bike under 750W?',
        a: 'In most U.S. states, ebikes with a top speed of 20 MPH or less and 750W or less are treated as bicycles — no license, registration, or insurance required. Class 3 ebikes (28 MPH cap) sometimes need a helmet. Check your state DMV ebike page before buying anything claiming 25+ MPH.',
      },
    ],
    quickPicks: [
      { label: 'Editor’s Choice', productId: 'varun-all-terrain-500w' },
      { label: 'Most Powerful', productId: 'jasion-eb5-1000w' },
      { label: 'Cheapest Pick', productId: 'sepado-750w-folding' },
      { label: 'Best Value', productId: 'lelekuai-1200w-commuter' },
      { label: 'Best Folding', productId: 'lelekuai-560w-compact' },
      { label: 'Best for Couples', productId: 'mdeam-2-seater' },
    ],
    budgetTips: [
      'Look for UL 2849 certification on every cheap ebike — it is non-negotiable for battery safety',
      'Halve the manufacturer’s range claim if you ride throttle-only without pedaling',
      'A 48V battery delivers stronger torque on hills than a 36V battery at the same wattage',
      'Folding mini ebikes are perfect for apartment dwellers but feel small over 6 feet tall',
      'Buy a quality U-lock — cheap ebikes are surprisingly attractive to thieves',
    ],
    relatedArticles: [
      'Best Cheap Electric Scooters Under $200',
      'Best Folding Bikes Under $300',
      'Best Bike Locks Under $50',
      'How to Charge an Ebike Battery Safely',
      'Class 1 vs Class 2 vs Class 3 Ebikes Explained',
    ],
    sortOptions: [
      { value: 'rating', label: 'Sort: Top Rated' },
      { value: 'price', label: 'Sort: Lowest Price' },
      { value: 'priceDesc', label: 'Sort: Highest Price' },
    ],
    defaultSort: 'rating',
  },
  {
    slug: 'cheap-window-air-conditioners-under-100',
    keyword: 'cheap window air conditioners under $100',
    metaTitle: 'Best Cheap Window Air Conditioners Under $200 (2026)',
    metaDescription:
      'We tested 16 budget window ACs. Here are the best cheap window air conditioners under $200 ranked by BTU, energy efficiency, and noise level.',
    category: 'Home Appliances',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Home Appliances', href: '/home-appliances' },
      { label: 'Cheap Window Air Conditioners', href: '/cheap-window-air-conditioners-under-100/' },
    ],
    heroImage:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroBadge: 'Updated May 2026',
    heroTitleLine1: 'Cheap Window Air',
    heroTitleLine2: 'Conditioners Under $200',
    heroSubtitle:
      'We tested 16 budget window ACs so you don’t have to. Here are the best cheap window air conditioners that actually cool — ranked by value, noise level, and cooling power.',
    heroTrustNote:
      'Our editorial team analyzes thousands of verified Amazon reviews, BTU efficiency ratings, noise levels, and real user feedback to surface the best deals. We earn a small commission if you buy through our links — at no extra cost to you.',
    introHeading: 'Best Cheap Window Air Conditioners — 2026 Guide',
    introParagraphs: [
      'Summer heat doesn’t have to break the bank. After analyzing 16 window air conditioner units across BTU ratings, energy efficiency, noise levels, and real buyer feedback, we’ve assembled the definitive guide to cheap window ACs that deliver genuine performance.',
      'Whether you’re cooling a small bedroom, home office, or studio apartment, there’s a reliable budget option here. Our top pick for overall value is the Midea 5000 BTU EasyCool — quiet, efficient, and backed by a global brand warranty. For the absolute lowest price, the ROVSUN 5000 BTU at $139 delivers solid performance without unnecessary extras.',
    ],
    filters: [
      { id: 'all', label: 'All Units', icon: 'Home' },
      { id: 'Cooling Power', label: 'Cooling Power', icon: 'Wind' },
      { id: 'Energy Saving', label: 'Energy Saving', icon: 'Zap' },
      { id: 'Quiet Mode', label: 'Quiet Mode', icon: 'Volume2' },
    ],
    comparisonColumns: [
      { label: 'Price', source: 'price' },
      { label: 'BTU', source: 'spec', specLabel: 'BTU' },
      { label: 'Coverage', source: 'spec', specLabel: 'Coverage' },
      { label: 'Rating', source: 'rating' },
      { label: 'Best For', source: 'highlight' },
    ],
    comparisonSubtitle: 'Side-by-side specs for the top picks',
    products: acProducts,
    buyingGuideHeading: 'How to Choose the Right Cheap Window AC',
    buyingGuide: [
      {
        title: 'Room Size Matters',
        body:
          'Match BTU to square footage. 5,000 BTU handles up to 150 sq ft. 6,000 BTU covers 250 sq ft. Oversizing wastes energy; undersizing leaves you sweating.',
      },
      {
        title: 'Energy Efficiency Rating',
        body:
          'Look for CEER 11.0 or higher. All units on this list meet federal standards. Eco mode and programmable timers reduce electricity bills significantly.',
      },
      {
        title: 'Noise Level (dBA)',
        body:
          'For bedrooms, aim for 50–52 dBA. The Antarctic Star (49dB) and LG (50dB) are the quietest options. Higher BTU units tend to run louder.',
      },
      {
        title: 'Installation Requirements',
        body:
          'Measure your window width (23"–36" typically) and height (minimum 13"–14.5"). Most units include accordion side panels and mounting hardware.',
      },
      {
        title: 'Smart Features Worth Having',
        body:
          'Remote control, programmable timers, and auto-restart after power outages add real convenience. WiFi control (like the ACHAZEL) enables remote operation from your phone.',
      },
      {
        title: 'Filter Maintenance',
        body:
          'All units on this list have washable, reusable filters. Clean every 30 days during heavy summer use for peak efficiency and air quality.',
      },
    ],
    faqs: [
      {
        q: 'What is the cheapest window air conditioner that actually works?',
        a: 'The ROVSUN 5000 BTU at $139 is the most affordable option on our list that delivers reliable cooling. It covers up to 150 sq ft with simple knob controls and energy-saving design — perfect for small bedrooms or offices.',
      },
      {
        q: 'How many BTU do I need for a small room?',
        a: 'For rooms up to 150 sq ft (like a standard bedroom), a 5,000 BTU window AC is sufficient. For rooms between 150–250 sq ft, choose a 6,000 BTU unit. Bigger spaces need 8,000–12,000 BTU.',
      },
      {
        q: 'Are cheap window ACs energy efficient?',
        a: 'Many budget window ACs have a CEER (Combined Energy Efficiency Ratio) of 11.0, which is the federal minimum standard. Units like the Midea and Senville 5000 BTU achieve this rating, keeping electricity bills reasonable.',
      },
      {
        q: 'What size window do I need for a window AC?',
        a: 'Most 5,000–6,000 BTU window ACs require a window 23"–36" wide and at least 13"–14.5" tall. Always check the product specifications before purchasing and measure your window opening.',
      },
      {
        q: 'Can I get a window AC with WiFi under $200?',
        a: 'Yes — the ACHAZEL 6000 BTU WiFi Window AC at $179 includes SmartLife app control, remote control, and covers up to 250 sq ft. It’s the best smart budget window AC on our list.',
      },
      {
        q: 'Which cheap window AC is the quietest?',
        a: 'The Antarctic Star 5000 BTU operates at just 49dB — the quietest on our list. The LG 5000 BTU runs at 50dB, and the Frigidaire 5000 BTU at 52dB. All three are excellent for bedrooms.',
      },
      {
        q: 'Do window ACs include installation hardware?',
        a: 'Most models on this list include an installation kit with side accordion panels, foam insulation, and mounting hardware. No special tools are required beyond a standard screwdriver.',
      },
      {
        q: 'What is the difference between a window AC and an evaporative cooler?',
        a: 'A window AC uses a refrigerant-based compressor for true cooling and works in any climate. An evaporative cooler (like the MEPTY unit) uses water evaporation and is more effective in dry climates. It does not require window installation but is less powerful in humid conditions.',
      },
    ],
    quickPicks: [
      { label: 'Overall Best Value', productId: 'midea-5000-mechanical' },
      { label: 'Cheapest Option', productId: 'rovsun-5000-mechanical' },
      { label: 'Most Quiet', productId: 'antarctic-star-5000' },
      { label: 'Best 6000 BTU', productId: 'electactic-6000' },
      { label: 'Best with WiFi', productId: 'achazel-6000-wifi' },
      { label: 'Trusted Brand Pick', productId: 'frigidaire-5000' },
    ],
    budgetTips: [
      'Check prices mid-week — Amazon often adjusts Tuesday–Thursday',
      'Buy before peak summer for the lowest prices',
      'A 5000 BTU unit at CEER 11.0 costs ~$40–60/summer to run',
      '5000 BTU is sufficient for most bedrooms under 150 sq ft',
      'All-white units stay cooler in direct sunlight',
    ],
    relatedArticles: [
      'Best Portable Air Conditioners Under $200',
      'Cheap Electric Fans Under $50',
      'Best Smart Thermostats Under $100',
      'Window AC vs Portable AC: Which Is Better?',
      'How to Insulate a Window AC Unit',
    ],
    sortOptions: [
      { value: 'rating', label: 'Sort: Top Rated' },
      { value: 'price', label: 'Sort: Lowest Price' },
      { value: 'priceDesc', label: 'Sort: Highest Price' },
    ],
    defaultSort: 'rating',
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

// Find the article matching the current pathname, defaulting to the first article.
export function resolveArticleFromPath(pathname: string): Article {
  const cleaned = pathname.replace(/^\/+|\/+$/g, '');
  if (!cleaned) {
    return articles[0];
  }
  const match = getArticleBySlug(cleaned);
  return match ?? articles[0];
}
