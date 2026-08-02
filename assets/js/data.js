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
    { id: 'solvents', label: 'Solvents', href: 'solvents/', items: ['Acetone', 'Bromin', 'Toluene', 'Isopropyl Alcohol (IPA)', 'Ethylene Glycol', 'Ethyl Acetate', 'Butanol', 'Acetic Acid', 'Methylene Chloride (MDC)', 'KBR', 'HBR', 'NABR', 'KCL', 'Pyridine'] },
    { id: 'acids', label: 'Acids & Alkalies', href: 'acids-alkalies/', items: ['Sulfuric Acid', 'Phosphoric Acid', 'Boric Acid', 'Hydrochloric Acid', 'Nitric Acid', 'Caustic Soda Flakes', 'Caustic Potash', 'Citric Acid', 'Acetic Acid', 'Sulfamic Acid', 'Ammonium Sulphate', 'Sodium Lauryl Sulphate Powder', 'Di-Calcium Phosphate', 'Magnesium Oxide', 'Soda Ash', 'Potassium Carbonate'] },
    { id: 'intermediates', label: 'Intermediates', href: 'intermediates/', items: ['MCA (Mono Chloro Acetic Acid)', 'Chlorinated Paraffin', 'Sodium Acetate', 'Sodium Formate', 'DMF', 'DMAc', 'Sodium Mono Chloro Acetate (SMCA)', 'Thiophanate Methyl (TPM)', 'Pymetrozine (PMT)', 'Chloraniliprole (CTPR)', 'Tebuconazole'] },
    { id: 'pharma', label: 'Pharma Raw Materials', href: 'pharma-raw-materials/', items: ['API Bulk Drugs', 'Lactose', 'Magnesium Stearate', 'Talc Powder', 'MCC (Microcrystalline Cellulose)'] },
    { id: 'textile', label: 'Textile Chemicals', href: 'textile-chemicals/', items: ['Softeners', 'Dye Fixing Agents', 'Wetting Agents', 'Detergents', 'Scouring Agents', 'Enzymes'] },
    { id: 'water', label: 'Water Treatment Chemicals', href: 'water-treatment-chemicals/', items: ['Alum', 'Hydrogen Peroxide', 'Poly-Aluminum Chloride', 'Feric Aluminium Sulphate', 'Sodium Chloride', 'Ferrous Chloride', 'Ferric Chloride', 'Polyelectrolyte', 'Chlorine Powder', 'Sodium Hypochlorite', 'Activated Carbon', 'Antiscalants'] },
    { id: 'agro', label: 'Agro Chemicals', href: 'agro-chemicals/', items: ['Superplasticizers', 'Waterproofing Chemicals', 'Tile Adhesives', 'Epoxy Resin', 'Grouts'] },
    { id: 'dyes', label: 'Dyes & Dye Intermediates', href: 'dyes-dye-intermediates/', items: ['Reactive Dyes', 'Acid Dyes', 'Direct Dyes', 'Vat Dyes', 'Pigments', 'Naphthalene Intermediates'] },
    { id: 'lab', label: 'Laboratory Chemicals', href: 'laboratory-chemicals/', items: ['Laboratory Acids', 'LR Grade Solvents', 'Indicators', 'Reagents', 'Buffer Solutions'] },
    { id: 'detergent', label: 'Detergent Chemicals', href: 'detergent-chemicals/', items: ['STPP', 'SLES Needles', 'SLES Paste', 'Acid Thickener', 'Turkish Red Oil', 'Creosote Oil', 'Alfox 200', 'Castor Oil'] },
    { id: 'salts', label: 'Industrial Salts', href: 'industrial-salts/', items: ['Calcium Chloride Prills', 'Calcium Chloride Powder', 'Calcium Chloride Lumps', 'Aluminum Chloride', 'Potassium Chloride', 'Sodium Carbonate', 'Sodium Bi-Carbonate', 'Sodium Sulphate', 'Sodium Nitrate', 'Potassium Nitrate'] },
    { id: 'custom', label: 'Custom-Formulated Products', href: 'custom-formulated-products/', items: ['Custom Blends', 'Specialty Formulations', 'Tailored Solutions'] },
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
