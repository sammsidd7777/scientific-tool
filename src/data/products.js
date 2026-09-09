const products = [
  {
    _id: "static-001",
    productName: "Digital Analytical Balance 500g x 0.001g",
    productPrice: 18500,
    discountPrice: 15999,
    productImg: [
      "https://i5.walmartimages.com/asr/57963a25-9f98-49c0-9719-da794e9cb2ce.eb74d5713cc4027ade415bf75a0f5b90.jpeg?odnBg=FFFFFF&odnHeight=576&odnWidth=576",
    ],
    productDescription:
      "High precision digital analytical balance designed for accurate weighing of laboratory samples and materials.",
    productCategory: "Measuring Equipment",
    stock: 18,
    rating: 4.8,
    totalReviews: 42,
    featured: true,
    status: "Active",
    createdAt: "2026-09-10T10:00:00.000Z",
  },

  {
    _id: "static-002",
    productName: "Euromex BioBlue Binocular Compound Microscope",
    productPrice: 42000,
    discountPrice: 37999,
    productImg: [
      "https://m.media-amazon.com/images/I/717yYxZ2pPL.jpg",
    ],
    productDescription:
      "Binocular compound microscope designed for educational, biological and professional laboratory applications.",
    productCategory: "Microscopy",
    stock: 8,
    rating: 4.9,
    totalReviews: 35,
    featured: true,
    status: "Active",
    createdAt: "2026-09-09T10:00:00.000Z",
  },

  {
    _id: "static-003",
    productName: "Borosilicate Glass Beaker 500 mL",
    productPrice: 450,
    discountPrice: 399,
    productImg: [
      "https://www.vikinglabsupply.com/cdn/shop/files/Beaker-500mL-151817833.jpg?v=1763929458&width=1445",
    ],
    productDescription:
      "500 mL borosilicate glass beaker with graduated markings and pouring spout for laboratory use.",
    productCategory: "Lab Glassware",
    stock: 100,
    rating: 4.7,
    totalReviews: 64,
    featured: true,
    status: "Active",
    createdAt: "2026-09-08T10:00:00.000Z",
  },

  {
    _id: "static-004",
    productName: "Digital Laboratory pH Meter",
    productPrice: 6800,
    discountPrice: 5999,
    productImg: [
      "https://image.made-in-china.com/2f0j00TOYbKNdErloq/pH100b-Laboratory-Digital-pH-Meters-Benchtop-pH-Meter-with-Good-Price-Handheld-pH-Meter-Tester-for-Lab-amp-Field-Use.jpg",
    ],
    productDescription:
      "Digital laboratory pH meter with electrode probe for accurate pH measurement in laboratory solutions.",
    productCategory: "Measuring Equipment",
    stock: 24,
    rating: 4.6,
    totalReviews: 29,
    featured: false,
    status: "Active",
    createdAt: "2026-09-07T10:00:00.000Z",
  },

  {
    _id: "static-005",
    productName: "IKA C-MAG HP 4 Laboratory Hot Plate",
    productPrice: 12500,
    discountPrice: 10999,
    productImg: [
      "https://medsolut.com/media/image/product/1920/md/de-p-ika-c-mag-hp-4-ikatherm-heizplatte-.jpg",
    ],
    productDescription:
      "Laboratory hot plate with ceramic heating surface for controlled heating of samples and solutions.",
    productCategory: "Chemistry Equipment",
    stock: 15,
    rating: 4.7,
    totalReviews: 22,
    featured: true,
    status: "Active",
    createdAt: "2026-09-06T10:00:00.000Z",
  },

  {
    _id: "static-006",
    productName: "Thermo Scientific Adjustable Volume Micropipette",
    productPrice: 5200,
    discountPrice: 4499,
    productImg: [
      "https://www.thermofisher.com/TFS-Assets/LPD/product-images/4641010N-650x600.jpg-650.jpg",
    ],
    productDescription:
      "Adjustable volume single-channel micropipette designed for accurate and comfortable liquid transfer.",
    productCategory: "Pipettes",
    stock: 32,
    rating: 4.8,
    totalReviews: 51,
    featured: true,
    status: "Active",
    createdAt: "2026-09-05T10:00:00.000Z",
  },

  {
    _id: "static-007",
    productName: "VWR Benchtop Laboratory Centrifuge",
    productPrice: 28500,
    discountPrice: 25999,
    productImg: [
      "https://img.directindustry.com/images_di/photo-g/159960-15082007.jpg",
    ],
    productDescription:
      "Compact benchtop laboratory centrifuge designed for efficient sample separation in research and clinical laboratories.",
    productCategory: "Laboratory Instruments",
    stock: 9,
    rating: 4.7,
    totalReviews: 27,
    featured: true,
    status: "Active",
    createdAt: "2026-09-04T10:00:00.000Z",
  },

  {
    _id: "static-008",
    productName: "Autoclavable Laboratory Test Tube Rack",
    productPrice: 850,
    discountPrice: 699,
    productImg: [
      "https://image.made-in-china.com/2f0j00LFUqiMknQZoO/Lab-Test-Autoclavable-Laboratory-Plastic-Material-Lab-Plastic-Test-Tube-Racks.webp",
    ],
    productDescription:
      "Autoclavable laboratory test tube rack designed to securely organize multiple test tubes during experiments.",
    productCategory: "Lab Accessories",
    stock: 75,
    rating: 4.5,
    totalReviews: 18,
    featured: false,
    status: "Active",
    createdAt: "2026-09-03T10:00:00.000Z",
  },

  {
    _id: "static-009",
    productName: "Simax Class A Volumetric Flask 1000 mL",
    productPrice: 1250,
    discountPrice: 1099,
    productImg: [
      "https://www.onelab.com.co/images/thumbs/0030905_balon-volumetrico-clase-a-tapon-vidrio-simax_510.png",
    ],
    productDescription:
      "Class A borosilicate glass volumetric flask with glass stopper for accurate solution preparation.",
    productCategory: "Lab Glassware",
    stock: 42,
    rating: 4.8,
    totalReviews: 31,
    featured: false,
    status: "Active",
    createdAt: "2026-09-02T10:00:00.000Z",
  },

  {
    _id: "static-010",
    productName: "Laboratory Safety Goggles",
    productPrice: 850,
    discountPrice: 699,
    productImg: [
      "https://i5.walmartimages.com/seo/TR-Industrial-Wide-Vision-Lab-Safety-Eye-Goggle-Ansi-Z87-1-Approved_14822b16-8953-4a0c-97ca-973b8aebcea9.84f1e21162f2083b17996900830858a3.jpeg?odnBg=FFFFFF&odnHeight=576&odnWidth=576",
    ],
    productDescription:
      "Protective laboratory safety goggles designed to protect eyes from chemical splashes and flying particles.",
    productCategory: "Safety Equipment",
    stock: 120,
    rating: 4.6,
    totalReviews: 38,
    featured: false,
    status: "Active",
    createdAt: "2026-09-01T10:00:00.000Z",
  },

  {
    _id: "static-011",
    productName: "Lachoi Laboratory Hotplate Magnetic Stirrer",
    productPrice: 7800,
    discountPrice: 6999,
    productImg: [
      "https://bsg-i.nbxc.com/product/36/14/ff/0f6ce11d5ad995b8bc9db11fa9.jpg",
    ],
    productDescription:
      "Laboratory hotplate magnetic stirrer designed for simultaneous heating and mixing of laboratory solutions.",
    productCategory: "Chemistry Equipment",
    stock: 16,
    rating: 4.7,
    totalReviews: 24,
    featured: true,
    status: "Active",
    createdAt: "2026-08-31T10:00:00.000Z",
  },

  {
    _id: "static-012",
    productName: "LT-101 Digital Laboratory Thermometer",
    productPrice: 1450,
    discountPrice: 1199,
    productImg: [
      "https://easytest.com.eg/images/products/lt_101_professional_digit1724326975/cover.jpg",
    ],
    productDescription:
      "Digital thermometer with probe sensor for accurate temperature monitoring in laboratory applications.",
    productCategory: "Measuring Equipment",
    stock: 48,
    rating: 4.5,
    totalReviews: 20,
    featured: false,
    status: "Active",
    createdAt: "2026-08-30T10:00:00.000Z",
  },

  {
    _id: "static-013",
    productName: "Laboratory Bunsen Burner",
    productPrice: 1250,
    discountPrice: 999,
    productImg: [
      "https://media.snl.no/media/289048/standard_compressed_bunsenbrenner.jpeg",
    ],
    productDescription:
      "Laboratory Bunsen burner designed for controlled heating and sterilization applications.",
    productCategory: "Chemistry Equipment",
    stock: 38,
    rating: 4.4,
    totalReviews: 17,
    featured: false,
    status: "Active",
    createdAt: "2026-08-29T10:00:00.000Z",
  },

  {
    _id: "static-014",
    productName: "Erlenmeyer Flask 250 mL",
    productPrice: 380,
    discountPrice: 329,
    productImg: [
      "https://www.arborsci.com/cdn/shop/files/12-0250-12ErlenmeyerFlask250ml2048x2048_75335e93-3f20-4e68-9d53-84ae88ee60c0.jpg?v=1765811600&width=1920",
    ],
    productDescription:
      "250 mL borosilicate glass Erlenmeyer flask suitable for mixing, heating, cooling and laboratory storage.",
    productCategory: "Lab Glassware",
    stock: 90,
    rating: 4.7,
    totalReviews: 46,
    featured: true,
    status: "Active",
    createdAt: "2026-08-28T10:00:00.000Z",
  },

  {
    _id: "static-015",
    productName: "30L Digital Laboratory Water Bath",
    productPrice: 13500,
    discountPrice: 11999,
    productImg: [
      "https://i.ebayimg.com/images/g/3noAAOSwAQFoNACL/s-l500.jpg",
    ],
    productDescription:
      "Digital thermostatic laboratory water bath designed for controlled and uniform heating of samples.",
    productCategory: "Laboratory Equipment",
    stock: 11,
    rating: 4.6,
    totalReviews: 19,
    featured: false,
    status: "Active",
    createdAt: "2026-08-27T10:00:00.000Z",
  },

  {
    _id: "static-016",
    productName: "250 mL Borosilicate Graduated Measuring Cylinder",
    productPrice: 650,
    discountPrice: 549,
    productImg: [
      "https://www.foxxlifesciences.com/cdn/shop/products/250ml_Cylinder_grande.jpg?v=1539193631",
    ],
    productDescription:
      "Class A borosilicate graduated cylinder designed for precise measurement and controlled liquid dispensing.",
    productCategory: "Lab Glassware",
    stock: 60,
    rating: 4.6,
    totalReviews: 25,
    featured: false,
    status: "Active",
    createdAt: "2026-08-26T10:00:00.000Z",
  },

  {
    _id: "static-017",
    productName: "Hanna HI6321 Laboratory Conductivity Meter",
    productPrice: 32500,
    discountPrice: 28999,
    productImg: [
      "https://www.hannainstruments.fr/media/HI6321-ecran.jpg",
    ],
    productDescription:
      "Professional laboratory conductivity meter for conductivity, TDS, resistivity, salinity and temperature measurement.",
    productCategory: "Measuring Equipment",
    stock: 7,
    rating: 4.9,
    totalReviews: 14,
    featured: true,
    status: "Active",
    createdAt: "2026-08-25T10:00:00.000Z",
  },

  {
    _id: "static-018",
    productName: "Bürkle Stainless Steel Laboratory Forceps",
    productPrice: 550,
    discountPrice: 449,
    productImg: [
      "https://digitalassets.avantorsciences.com/adaptivemedia/rendition?clid=SAPDAM&id=c6fe998dbbb79e60ba8387d7a25282f47b4266a2&prid=original&vid=09b9fc330afc15e68c643506282b1bb953528d6b",
    ],
    productDescription:
      "Precision stainless steel forceps with sharp straight tips for handling small laboratory samples.",
    productCategory: "Lab Accessories",
    stock: 85,
    rating: 4.5,
    totalReviews: 16,
    featured: false,
    status: "Active",
    createdAt: "2026-08-24T10:00:00.000Z",
  },

  {
    _id: "static-019",
    productName: "20L Digital Laboratory Incubator",
    productPrice: 26500,
    discountPrice: 23999,
    productImg: [
      "https://i5.walmartimages.com/seo/Lab-Incubator-20L-Bacteria-Incubator-RT-65-Scientific-Digital-Incubator-PID-Temperature-Control-Microbiological-Laboratory-Incubator_3a18facb-8ef1-49c8-b563-18d9201d859e.0067e294f5e9b2b1a5c213556238e453.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573",
    ],
    productDescription:
      "Digital laboratory incubator with controlled temperature environment for microbiology and research applications.",
    productCategory: "Microbiology",
    stock: 6,
    rating: 4.8,
    totalReviews: 23,
    featured: true,
    status: "Active",
    createdAt: "2026-08-23T10:00:00.000Z",
  },

  {
    _id: "static-020",
    productName: "Thermo Scientific Finnpipette F Pipette Stand",
    productPrice: 1800,
    discountPrice: 1599,
    productImg: [
      "https://aimg.as-1.co.jp/c/2/8248/04/02824804s_EC.jpg",
    ],
    productDescription:
      "Laboratory pipette stand designed to securely hold and organize multiple pipettes on the laboratory bench.",
    productCategory: "Pipettes",
    stock: 35,
    rating: 4.6,
    totalReviews: 12,
    featured: false,
    status: "Active",
    createdAt: "2026-08-22T10:00:00.000Z",
  },
];

export default products;