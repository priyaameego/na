/* Nayara Industries - Site Data & Navigation */

window.NAYARA_DATA = {
  site: {
    name: 'NAYARA INDUSTRIES',
    email: 'info@nayaragroup.com',
    phone: '+91 85111 63373',
    address: '205, Second Floor, Samraiya Complex, Shravan Chowkdi, Bharuch, Gujarat - 392001',
    logo: 'https://nayaragroup.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-30-at-12.23.01-PM.jpeg',
    footerLogo: 'https://nayaragroup.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-30-at-12.23.01-PM-1.jpeg',
    social: {
      instagram: 'https://www.instagram.com/nayaraindustries123?igsh=eDd6YjN3emdsZGg0',
      linkedin: 'https://www.linkedin.com/in/nayara-industries-109a26376',
      twitter: 'https://x.com/NIndustrie91371',
    },
  },

  nav: {
    main: [
      { label: 'Home', href: '', type: 'link' },
      {
        label: 'About Us', href: 'about-us/', type: 'dropdown',
        items: [
          { label: 'About Us', href: 'about-us/' },
          { label: 'Industries we Serve', href: 'industries-we-serve/' },
        ],
      },
      { label: 'Product', href: 'product/', type: 'mega' },
      { label: 'Careers', href: 'careers/', type: 'link' },
      {
        label: 'Other Services', href: 'other-services/', type: 'dropdown',
        items: [
          { label: 'BEVERAGES & MINERAL WATER', href: 'beverages-mineral-water/' },
          { label: 'ETP Solutions', href: 'etp-solutions/' },
          { label: 'Greenfield Projects', href: 'greenfield-projects/' },
          { label: 'Process Development', href: 'process-development/' },
          { label: 'Consultancy', href: 'consultancy/' },
        ],
      },
      { label: 'Contact Us', href: 'contact-us/', type: 'link' },
    ],
  },

  productCategories: [
    { id: 'solvents', label: 'Solvents', href: 'solvents/', items: [
      { label: 'Acetone', href: 'solvents/acetone/' }, { label: 'Bromin', href: 'solvents/bromin/' }, { label: 'Toluene', href: 'solvents/toluene/' },
      { label: 'Isopropyl Alcohol (IPA)', href: 'solvents/isopropyl-alcohol-ipa/' }, { label: 'Ethylene Glycol', href: 'solvents/ethylene-glycol/' },
      { label: 'Ethyl Acetate', href: 'solvents/ethyl-acetate/' }, { label: 'Butanol', href: 'solvents/butanol/' }, { label: 'Acetic Acid', href: 'solvents/acetic-acid/' },
      { label: 'Methylene Chloride (MDC)', href: 'solvents/methylene-chloride-mdc/' }, { label: 'KBR', href: 'solvents/kbr/' },
      { label: 'HBR', href: 'solvents/hbr/' }, { label: 'NABR', href: 'solvents/nabr/' }, { label: 'KCL', href: 'solvents/kcl/' }, { label: 'Pyridine', href: 'solvents/pyridine/' },
    ]},
    { id: 'acids', label: 'Acids & Alkalies', href: 'acids-alkalies/', items: [
      { label: 'Sulfuric Acid', href: 'acids-alkalies/sulfuric-acid/' }, { label: 'Phosphoric Acid', href: 'acids-alkalies/phosphoric-acid/' },
      { label: 'Boric Acid', href: 'acids-alkalies/boric-acid/' }, { label: 'Hydrochloric Acid', href: 'acids-alkalies/hydrochloric-acid/' },
      { label: 'Nitric Acid', href: 'acids-alkalies/nitric-acid/' }, { label: 'Caustic Soda Flakes', href: 'acids-alkalies/caustic-soda-flakes/' },
      { label: 'Caustic Potash', href: 'acids-alkalies/caustic-potash/' }, { label: 'Citric Acid', href: 'acids-alkalies/citric-acid/' },
      { label: 'Acetic Acid', href: 'acids-alkalies/acetic-acid/' }, { label: 'Sulfamic Acid', href: 'acids-alkalies/sulfamic-acid/' },
      { label: 'Ammonium Sulphate', href: 'acids-alkalies/ammonium-sulphate/' }, { label: 'Sodium Lauryl Sulphate Powder', href: 'acids-alkalies/sodium-lauryl-sulphate-powder/' },
      { label: 'Di-Calcium Phosphate', href: 'acids-alkalies/di-calcium-phosphate/' }, { label: 'Magnesium Oxide', href: 'acids-alkalies/magnesium-oxide/' },
      { label: 'Soda Ash', href: 'acids-alkalies/soda-ash/' }, { label: 'Potassium Carbonate', href: 'acids-alkalies/potassium-carbonate/' },
    ]},
    { id: 'intermediates', label: 'Intermediates', href: 'intermediates/', items: [
      { label: 'MCA (Mono Chloro Acetic Acid)', href: 'intermediates/mca-mono-chloro-acetic-acid/' }, { label: 'Chlorinated Paraffin', href: 'intermediates/chlorinated-paraffin/' },
      { label: 'Sodium Acetate', href: 'intermediates/sodium-acetate/' }, { label: 'Sodium Formate', href: 'intermediates/sodium-formate/' },
      { label: 'DMF', href: 'intermediates/dmf/' }, { label: 'DMAc', href: 'intermediates/dmac/' },
      { label: 'Sodium Mono Chloro Acetate (SMCA)', href: 'intermediates/sodium-mono-chloro-acetate-smca/' },
      { label: 'Thiophanate Methyl (TPM)', href: 'intermediates/thiophanate-methyl-tpm/' }, { label: 'Pymetrozine (PMT)', href: 'intermediates/pymetrozine-pmt/' },
      { label: 'Chloraniliprole (CTPR)', href: 'intermediates/chloraniliprole-ctpr/' }, { label: 'Tebuconazole', href: 'intermediates/tebuconazole/' },
    ]},
    { id: 'pharma', label: 'Pharma Raw Materials', href: 'pharma-raw-materials/', items: [
      { label: 'API Bulk Drugs', href: 'pharma-raw-materials/api-bulk-drugs/' }, { label: 'Lactose', href: 'pharma-raw-materials/lactose/' },
      { label: 'Magnesium Stearate', href: 'pharma-raw-materials/magnesium-stearate/' }, { label: 'Talc Powder', href: 'pharma-raw-materials/talc-powder/' },
      { label: 'MCC (Microcrystalline Cellulose)', href: 'pharma-raw-materials/mcc-microcrystalline-cellulose/' },
    ]},
    { id: 'textile', label: 'Textile Chemicals', href: 'textile-chemicals/', items: [
      { label: 'Softeners', href: 'textile-chemicals/softeners/' }, { label: 'Dye Fixing Agents', href: 'textile-chemicals/dye-fixing-agents/' },
      { label: 'Wetting Agents', href: 'textile-chemicals/wetting-agents/' }, { label: 'Detergents', href: 'textile-chemicals/detergents/' },
      { label: 'Scouring Agents', href: 'textile-chemicals/scouring-agents/' }, { label: 'Enzymes', href: 'textile-chemicals/enzymes/' },
    ]},
    { id: 'water', label: 'Water Treatment Chemicals', href: 'water-treatment-chemicals/', items: [
      { label: 'Alum', href: 'water-treatment-chemicals/alum/' }, { label: 'Hydrogen Peroxide', href: 'water-treatment-chemicals/hydrogen-peroxide/' },
      { label: 'Poly-Aluminum Chloride', href: 'water-treatment-chemicals/poly-aluminum-chloride/' },
      { label: 'Feric Aluminium Sulphate', href: 'water-treatment-chemicals/feric-aluminium-sulphate/' },
      { label: 'Sodium Chloride', href: 'water-treatment-chemicals/sodium-chloride/' }, { label: 'Ferrous Chloride', href: 'water-treatment-chemicals/ferrous-chloride/' },
      { label: 'Ferric Chloride', href: 'water-treatment-chemicals/ferric-chloride/' }, { label: 'Polyelectrolyte', href: 'water-treatment-chemicals/polyelectrolyte/' },
      { label: 'Chlorine Powder', href: 'water-treatment-chemicals/chlorine-powder/' }, { label: 'Sodium Hypochlorite', href: 'water-treatment-chemicals/sodium-hypochlorite/' },
      { label: 'Activated Carbon', href: 'water-treatment-chemicals/activated-carbon/' }, { label: 'Antiscalants', href: 'water-treatment-chemicals/antiscalants/' },
    ]},
    { id: 'agro', label: 'Agro / Specialty Chemicals', href: 'agro-chemicals/', items: [
      { label: 'Superplasticizers', href: 'agro-chemicals/superplasticizers/' }, { label: 'Waterproofing Chemicals', href: 'agro-chemicals/waterproofing-chemicals/' },
      { label: 'Tile Adhesives', href: 'agro-chemicals/tile-adhesives/' }, { label: 'Epoxy Resin', href: 'agro-chemicals/epoxy-resin/' },
      { label: 'Grouts', href: 'agro-chemicals/grouts/' },
    ]},
    { id: 'dyes', label: 'Dyes & Dye Intermediates', href: 'dyes-dye-intermediates/', items: [
      { label: 'Reactive Dyes', href: 'dyes-dye-intermediates/reactive-dyes/' }, { label: 'Acid Dyes', href: 'dyes-dye-intermediates/acid-dyes/' },
      { label: 'Direct Dyes', href: 'dyes-dye-intermediates/direct-dyes/' }, { label: 'Vat Dyes', href: 'dyes-dye-intermediates/vat-dyes/' },
      { label: 'Pigments', href: 'dyes-dye-intermediates/pigments/' }, { label: 'Naphthalene Intermediates', href: 'dyes-dye-intermediates/naphthalene-intermediates/' },
    ]},
    { id: 'lab', label: 'Laboratory Chemicals', href: 'laboratory-chemicals/', items: [
      { label: 'Laboratory Acids', href: 'laboratory-chemicals/laboratory-acids/' }, { label: 'LR Grade Solvents', href: 'laboratory-chemicals/lr-grade-solvents/' },
      { label: 'Indicators', href: 'laboratory-chemicals/indicators/' }, { label: 'Reagents', href: 'laboratory-chemicals/reagents/' },
      { label: 'Buffer Solutions', href: 'laboratory-chemicals/buffer-solutions/' },
    ]},
    { id: 'detergent', label: 'Detergent Chemicals', href: 'detergent-chemicals/', items: [
      { label: 'STPP', href: 'detergent-chemicals/stpp/' }, { label: 'SLES Needles', href: 'detergent-chemicals/sles-needles/' },
      { label: 'SLES Paste', href: 'detergent-chemicals/sles-paste/' }, { label: 'Acid Thickener', href: 'detergent-chemicals/acid-thickener/' },
      { label: 'Turkish Red Oil', href: 'detergent-chemicals/turkish-red-oil/' }, { label: 'Creosote Oil', href: 'detergent-chemicals/creosote-oil/' },
      { label: 'Alfox 200', href: 'detergent-chemicals/alfox-200/' }, { label: 'Castor Oil', href: 'detergent-chemicals/castor-oil/' },
    ]},
    { id: 'salts', label: 'Industrial Salts', href: 'industrial-salts/', items: [
      { label: 'Calcium Chloride Prills', href: 'industrial-salts/calcium-chloride-prills/' }, { label: 'Calcium Chloride Powder', href: 'industrial-salts/calcium-chloride-powder/' },
      { label: 'Calcium Chloride Lumps', href: 'industrial-salts/calcium-chloride-lumps/' }, { label: 'Aluminum Chloride', href: 'industrial-salts/aluminum-chloride/' },
      { label: 'Potassium Chloride', href: 'industrial-salts/potassium-chloride/' }, { label: 'Sodium Carbonate', href: 'industrial-salts/sodium-carbonate/' },
      { label: 'Sodium Bi-Carbonate', href: 'industrial-salts/sodium-bi-carbonate/' }, { label: 'Sodium Sulphate', href: 'industrial-salts/sodium-sulphate/' },
      { label: 'Sodium Nitrate', href: 'industrial-salts/sodium-nitrate/' }, { label: 'Potassium Nitrate', href: 'industrial-salts/potassium-nitrate/' },
    ]},
  ],

  footerSitemap: [
    { label: 'Home', href: '' },
    { label: 'About Us', href: 'about-us/' },
    { label: 'Products', href: 'product/' },
    { label: 'Industries Served', href: 'industries-we-serve/' },
    { label: 'Careers', href: 'careers/' },
    { label: 'Contact', href: 'contact-us/' },
  ],

  otherServices: {
    hub: { label: 'Other Services', href: 'other-services/' },
    items: [
      {
        label: 'BEVERAGES & MINERAL WATER',
        href: 'beverages-mineral-water/',
        excerpt: 'End-to-end design, installation, and commissioning of mineral water, packaged drinking water, and beverage manufacturing plants.',
      },
      {
        label: 'ETP Solutions',
        href: 'etp-solutions/',
        excerpt: 'Design, engineering, installation, and commissioning of industrial Effluent Treatment Plants for regulatory compliance and sustainable operations.',
      },
      {
        label: 'Greenfield Projects',
        href: 'greenfield-projects/',
        excerpt: 'End-to-end execution support for new chemical and industrial plants — from concept planning to commercial production.',
      },
      {
        label: 'Process Development',
        href: 'process-development/',
        excerpt: 'Structured development, scale-up, and seamless transfer of manufacturing processes from laboratory to commercial production.',
      },
      {
        label: 'Consultancy',
        href: 'consultancy/',
        excerpt: 'Strategic, technical, and regulatory consultancy for chemical, pharmaceutical, industrial, and infrastructure projects.',
      },
    ],
  },

  contactPage: {
    headline: "Let's Connect with NAYARA GROUP",
    tagline: 'CHEMICAL MANUFACTURING | TRADING PARTNER',
    cards: [
      {
        type: 'location',
        title: 'NAYARA INDUSTRIES',
        address: '205, Second Floor, Samraiya Complex, Shravan Chowkdi, Bharuch, Gujarat - 392001',
      },
      {
        type: 'email',
        title: 'Email',
        subtitle: 'Sales & Export',
        emails: ['sales@nayaragroup.com', 'export@nayaragroup.com'],
      },
      {
        type: 'hr',
        title: 'HR',
        subtitle: 'Send Resume',
        email: 'hrd@nayaragroup.com',
      },
      {
        type: 'phone',
        title: 'Contact',
        mobile: '+91 85111 63373',
        whatsapp: '+91 85111 63373',
      },
    ],
    formLabels: {
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Your message (optional)',
      submit: 'Submit',
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.553009391433!2d72.995!3d21.626!',
  },
};
