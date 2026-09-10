const products = [
  // =========================
  // 1. GLASSWARE
  // =========================

  {
    productName: "Erlenmeyer Flask 250 mL",
    productPrice: 349,
    discountPrice: 299,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/250_mL_Erlenmeyer_flask.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Erlenmeyer_flask_ben.jpg"
    ],
    productDescription:
      "250 mL borosilicate glass Erlenmeyer flask for mixing, heating and general laboratory applications.",
    productCategory: "Glassware",
    stock: 50,
    rating: 4.8,
    totalReviews: 36,
    featured: true,
    status: "Active"
  },

  {
    productName: "Laboratory Beaker 500 mL",
    productPrice: 249,
    discountPrice: 219,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Becherglas_mit_farbigiger_L%C3%B6sung.png",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Laboratory_beaker.jpg"
    ],
    productDescription:
      "500 mL laboratory beaker with graduated markings for mixing, heating and transferring liquids.",
    productCategory: "Glassware",
    stock: 75,
    rating: 4.7,
    totalReviews: 42,
    featured: true,
    status: "Active"
  },

  {
    productName: "Volumetric Flask 250 mL",
    productPrice: 399,
    discountPrice: 349,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/250ml_Standard_Flask.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Volumetric_flask.PNG"
    ],
    productDescription:
      "250 mL volumetric flask designed for accurate preparation of laboratory solutions.",
    productCategory: "Glassware",
    stock: 35,
    rating: 4.8,
    totalReviews: 24,
    featured: true,
    status: "Active"
  },

  // =========================
  // 2. MEASURING GLASSWARE
  // =========================

  {
    productName: "Graduated Cylinder 100 mL",
    productPrice: 229,
    discountPrice: 199,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Graduated_Cylinder.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/GraduatedCylinder.svg"
    ],
    productDescription:
      "100 mL graduated cylinder for measuring and transferring laboratory liquids.",
    productCategory: "Measuring Glassware",
    stock: 60,
    rating: 4.7,
    totalReviews: 31,
    featured: false,
    status: "Active"
  },

  {
    productName: "Graduated Cylinder 250 mL",
    productPrice: 299,
    discountPrice: 269,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Graduated_Cylinder.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/GraduatedCylinder.svg"
    ],
    productDescription:
      "250 mL graduated cylinder with clear volume markings for laboratory measurement.",
    productCategory: "Measuring Glassware",
    stock: 45,
    rating: 4.8,
    totalReviews: 27,
    featured: false,
    status: "Active"
  },

  {
    productName: "Glass Burette 50 mL",
    productPrice: 749,
    discountPrice: 679,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/English-style_burette_(Alessandri_1895.8).png",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mohr_burette_(Alessandri_1895.9-10).png"
    ],
    productDescription:
      "50 mL glass burette designed for controlled liquid delivery during laboratory titration.",
    productCategory: "Measuring Glassware",
    stock: 18,
    rating: 4.8,
    totalReviews: 19,
    featured: true,
    status: "Active"
  },

  // =========================
  // 3. PIPETTES & LIQUID HANDLING
  // =========================

  {
    productName: "Glass Pasteur Pipette",
    productPrice: 149,
    discountPrice: 129,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pasteur_pipettes.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Glass_Pipette_2.jpg"
    ],
    productDescription:
      "Glass Pasteur pipette for transferring small quantities of laboratory liquids and reagents.",
    productCategory: "Pipettes",
    stock: 100,
    rating: 4.6,
    totalReviews: 45,
    featured: false,
    status: "Active"
  },

  {
    productName: "25 mL Glass Measuring Pipette",
    productPrice: 279,
    discountPrice: 239,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/25mL_Messpipette.png",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Glass_Pipette_2.jpg"
    ],
    productDescription:
      "25 mL graduated glass pipette designed for accurate laboratory liquid transfer.",
    productCategory: "Pipettes",
    stock: 42,
    rating: 4.7,
    totalReviews: 22,
    featured: false,
    status: "Active"
  },

  {
    productName: "Laboratory Pipette Set",
    productPrice: 599,
    discountPrice: 529,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pasteur_pipettes.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Glass_Pipette_2.jpg"
    ],
    productDescription:
      "Laboratory glass pipette set suitable for routine sample and reagent transfer applications.",
    productCategory: "Pipettes",
    stock: 25,
    rating: 4.7,
    totalReviews: 18,
    featured: true,
    status: "Active"
  },

  // =========================
  // 4. FLASKS
  // =========================

  {
    productName: "Round Bottom Flask 250 mL",
    productPrice: 499,
    discountPrice: 449,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Round_bottom_flask.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Round-bottom_flasks.PNG"
    ],
    productDescription:
      "250 mL round bottom flask for laboratory heating, reflux and chemical reaction applications.",
    productCategory: "Flasks",
    stock: 25,
    rating: 4.8,
    totalReviews: 17,
    featured: true,
    status: "Active"
  },

  {
    productName: "Round Bottom Flask 500 mL",
    productPrice: 599,
    discountPrice: 539,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Round-bottom_flasks.PNG",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Round_bottom_flask.jpg"
    ],
    productDescription:
      "500 mL round bottom laboratory flask suitable for heating, reflux and distillation.",
    productCategory: "Flasks",
    stock: 18,
    rating: 4.8,
    totalReviews: 14,
    featured: false,
    status: "Active"
  },

  {
    productName: "Erlenmeyer Flask 500 mL",
    productPrice: 399,
    discountPrice: 349,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Erlenmeyer_flask_ben.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/250_mL_Erlenmeyer_flask.jpg"
    ],
    productDescription:
      "500 mL conical laboratory flask suitable for mixing, heating and solution preparation.",
    productCategory: "Flasks",
    stock: 40,
    rating: 4.8,
    totalReviews: 29,
    featured: true,
    status: "Active"
  },

  // =========================
  // 5. FILTRATION & SEPARATION
  // =========================

  {
    productName: "Glass Separatory Funnel 250 mL",
    productPrice: 899,
    discountPrice: 799,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Separatory_funnel.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sch%C3%BCtteltrichter.png"
    ],
    productDescription:
      "250 mL glass separatory funnel for liquid-liquid extraction and phase separation.",
    productCategory: "Filtration & Separation",
    stock: 16,
    rating: 4.8,
    totalReviews: 15,
    featured: true,
    status: "Active"
  },

  {
    productName: "Glass Laboratory Funnel 75 mm",
    productPrice: 179,
    discountPrice: 149,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Entonnoirs_verre.JPG",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Funnel_with_china_dish.jpg"
    ],
    productDescription:
      "Glass laboratory funnel for safe transfer and basic filtration of liquid samples.",
    productCategory: "Filtration & Separation",
    stock: 55,
    rating: 4.6,
    totalReviews: 21,
    featured: false,
    status: "Active"
  },

  {
    productName: "Buchner Flask 500 mL",
    productPrice: 699,
    discountPrice: 629,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Saugflasche_mit_Dichtung.png",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Filtra%C4%8Dn%C3%AD_aparatura.jpg"
    ],
    productDescription:
      "500 mL laboratory vacuum flask designed for filtration setups and vacuum-assisted laboratory work.",
    productCategory: "Filtration & Separation",
    stock: 14,
    rating: 4.7,
    totalReviews: 12,
    featured: false,
    status: "Active"
  },

  // =========================
  // 6. CULTURE & SAMPLE GLASSWARE
  // =========================

  {
    productName: "Glass Petri Dish 90 mm",
    productPrice: 199,
    discountPrice: 169,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Petri_dish.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/202002_Laboratory_instrument_petri_dish.svg"
    ],
    productDescription:
      "90 mm glass Petri dish for laboratory culture, sample observation and general research applications.",
    productCategory: "Culture Glassware",
    stock: 80,
    rating: 4.7,
    totalReviews: 38,
    featured: true,
    status: "Active"
  },

  {
    productName: "Glass Sample Vial 20 mL",
    productPrice: 129,
    discountPrice: 109,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Laboratory_Glassware.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Laborglas-divers_hg.jpg"
    ],
    productDescription:
      "20 mL laboratory glass sample vial suitable for sample collection, storage and handling.",
    productCategory: "Culture Glassware",
    stock: 120,
    rating: 4.5,
    totalReviews: 26,
    featured: false,
    status: "Active"
  },

  {
    productName: "Laboratory Watch Glass 100 mm",
    productPrice: 139,
    discountPrice: 119,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Laboratory_Watch_glasses_of_different_sizes_1.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Watch_glass_with_Caesium_fluoride.jpg"
    ],
    productDescription:
      "100 mm laboratory watch glass for sample handling, evaporation and covering laboratory containers.",
    productCategory: "Culture Glassware",
    stock: 65,
    rating: 4.6,
    totalReviews: 23,
    featured: false,
    status: "Active"
  },

  // =========================
  // 7. CONDENSERS & DISTILLATION
  // =========================

  {
    productName: "Liebig Condenser 300 mm",
    productPrice: 899,
    discountPrice: 799,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Liebigk%C3%BChler.png",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lieblig%C5%AFv_chladi%C4%8D.jpg"
    ],
    productDescription:
      "300 mm glass Liebig condenser designed for laboratory distillation and vapor condensation.",
    productCategory: "Condensers & Distillation",
    stock: 12,
    rating: 4.8,
    totalReviews: 11,
    featured: true,
    status: "Active"
  },

  {
    productName: "Dimroth Glass Condenser",
    productPrice: 1199,
    discountPrice: 1049,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dimroth_Condenser.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Laboratory_vacuum_distillation_apparatus_on_a_benchtop.jpg"
    ],
    productDescription:
      "Dimroth glass condenser for efficient reflux and condensation in laboratory setups.",
    productCategory: "Condensers & Distillation",
    stock: 8,
    rating: 4.8,
    totalReviews: 9,
    featured: true,
    status: "Active"
  },

  {
    productName: "Glass Distillation Flask 500 mL",
    productPrice: 799,
    discountPrice: 699,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Distillation_flask_(21380108976).jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Laboratory_vacuum_distillation_apparatus_on_a_benchtop.jpg"
    ],
    productDescription:
      "500 mL glass distillation flask for laboratory separation and distillation procedures.",
    productCategory: "Condensers & Distillation",
    stock: 10,
    rating: 4.7,
    totalReviews: 8,
    featured: false,
    status: "Active"
  },

  // =========================
  // 8. LABORATORY EQUIPMENT
  // =========================

  {
    productName: "Digital Analytical Balance",
    productPrice: 8499,
    discountPrice: 7499,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Analytical_balance.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Analytical_balance_1.jpg"
    ],
    productDescription:
      "Digital analytical balance designed for precise weighing applications in laboratory environments.",
    productCategory: "Laboratory Equipment",
    stock: 7,
    rating: 4.9,
    totalReviews: 16,
    featured: true,
    status: "Active"
  },

  {
    productName: "Magnetic Stirrer",
    productPrice: 4299,
    discountPrice: 3799,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Magnetic_stirrer_.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/M%C3%ADch%C3%A1n%C3%AD_na_elektromagnetick%C3%A9_m%C3%ADcha%C4%8Dce.jpg"
    ],
    productDescription:
      "Laboratory magnetic stirrer designed for controlled mixing of liquid samples and solutions.",
    productCategory: "Laboratory Equipment",
    stock: 13,
    rating: 4.8,
    totalReviews: 20,
    featured: true,
    status: "Active"
  },

  {
    productName: "Laboratory Hot Plate",
    productPrice: 3599,
    discountPrice: 3199,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hot_plate.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Laboratory_equipment.jpg"
    ],
    productDescription:
      "Laboratory hot plate designed for controlled heating of samples and laboratory vessels.",
    productCategory: "Laboratory Equipment",
    stock: 11,
    rating: 4.7,
    totalReviews: 14,
    featured: false,
    status: "Active"
  },

  // =========================
  // 9. LAB ACCESSORIES
  // =========================

  {
    productName: "Laboratory Mortar and Pestle",
    productPrice: 449,
    discountPrice: 399,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mortar_and_pestle_for_turning_grass_into_paper_(4782586726).jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mortar_and_pestle.jpg"
    ],
    productDescription:
      "Laboratory mortar and pestle for grinding, crushing and preparing solid samples.",
    productCategory: "Lab Accessories",
    stock: 30,
    rating: 4.7,
    totalReviews: 25,
    featured: false,
    status: "Active"
  },

  {
    productName: "Laboratory Glass Stirring Rod",
    productPrice: 89,
    discountPrice: 69,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Glass_rod.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Glasstab.png"
    ],
    productDescription:
      "Glass stirring rod for manually mixing laboratory solutions and liquids.",
    productCategory: "Lab Accessories",
    stock: 150,
    rating: 4.5,
    totalReviews: 34,
    featured: false,
    status: "Active"
  },

  {
    productName: "Laboratory Pipette Filler",
    productPrice: 349,
    discountPrice: 299,
    productImg: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pipette_filler.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Laboratory_Glasswares.jpg"
    ],
    productDescription:
      "Manual pipette filler designed to assist with safe laboratory liquid transfer.",
    productCategory: "Lab Accessories",
    stock: 40,
    rating: 4.6,
    totalReviews: 19,
    featured: false,
    status: "Active"
  }
];

export default products;