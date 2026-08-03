const fs = require('fs');
const path = require('path');

const pagesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data', 'pages-content.json'), 'utf8')
);

const SKIP_SLUGS = ['home', 'custom-formulated-products'];

const CONTACT_PAGE = {
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
};

const OTHER_SERVICES = [
  {
    label: 'BEVERAGES & MINERAL WATER',
    href: 'beverages-mineral-water/',
    excerpt: 'End-to-end design, installation, and commissioning of mineral water, packaged drinking water, and beverage manufacturing plants.',
    image: 'https://nayaragroup.com/wp-content/uploads/2026/01/creative-assortment-with-hamburger-menu-scaled.jpg',
  },
  {
    label: 'ETP Solutions',
    href: 'etp-solutions/',
    excerpt: 'Design, engineering, installation, and commissioning of industrial Effluent Treatment Plants for regulatory compliance and sustainable operations.',
    image: 'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
  },
  {
    label: 'Greenfield Projects',
    href: 'greenfield-projects/',
    excerpt: 'End-to-end execution support for new chemical and industrial plants — from concept planning to commercial production.',
    image: 'https://nayaragroup.com/wp-content/uploads/2026/01/greenfield-news.jpg',
  },
  {
    label: 'Process Development',
    href: 'process-development/',
    excerpt: 'Structured development, scale-up, and seamless transfer of manufacturing processes from laboratory to commercial production.',
    image: 'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
  },
  {
    label: 'Consultancy',
    href: 'consultancy/',
    excerpt: 'Strategic, technical, and regulatory consultancy for chemical, pharmaceutical, industrial, and infrastructure projects.',
    image: 'https://nayaragroup.com/wp-content/uploads/2026/01/Consultancy-ServiceS-scaled.jpg',
  },
];

const BEVERAGES_PAGE = {
  breadcrumb: 'BEVERAGES & MINERAL WATER',
  hero: {
    title: 'Beverages & Mineral Water Plant',
    intro: 'End-to-end design, installation, and commissioning of mineral water, packaged drinking water, and beverage manufacturing plants.',
    bg: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1800&q=80',
  },
  intro: {
    title: 'Complete Beverage & Mineral Water Solutions',
    text: 'Nayara Industries provides turnkey solutions for mineral water and beverage manufacturing plants, covering plant layout, water treatment, bottling lines, and statutory compliance in accordance with BIS, FSSAI, and IS standards.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1200&q=80',
  },
  whatIs: {
    title: 'What Is a Mineral Water & Beverage Plant?',
    text: 'A mineral water and beverage plant processes raw water through advanced purification systems and packages it into bottles, jars, or pouches under hygienic and controlled conditions.',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Raw water treatment & purification',
      'RO, UV, Ozonation systems',
      'Automated bottling & packaging',
      'Quality testing & compliance',
    ],
  },
  servicesTitle: 'Our Services',
  services: [
    {
      title: 'Plant Design & Layout',
      text: 'Customized plant layout optimized for hygiene, flow, and capacity.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
      span: 'featured',
    },
    {
      title: 'Water Treatment Systems',
      text: 'RO, softener, sand filter, carbon filter, UV & ozonation systems.',
      image: 'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
      span: 'wide',
    },
    {
      title: 'Bottling & Packaging Lines',
      text: 'Automatic & semi-automatic bottling, jar filling, and labeling lines.',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
      span: 'featured',
    },
    {
      title: 'Commissioning & Trial Runs',
      text: 'System startup, quality validation, and production stabilization.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      span: 'normal',
    },
    {
      title: 'Quality & Lab Setup',
      text: 'Support for in-house testing labs and quality control systems.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      span: 'normal',
    },
    {
      title: 'Compliance Support',
      text: 'BIS, FSSAI, IS approvals and documentation assistance.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      span: 'normal',
    },
  ],
  timeline: ['Concept', 'Planning', 'Plant Design', 'Equipment Installation', 'Commissioning', 'Testing', 'Production'],
  whyTitle: 'Why Choose Nayara',
  why: [
    { label: 'Quality testing & compliance', sub: 'Quality testing & compliance' },
    { label: 'BIS, FSSAI, IS standards', sub: 'Statutory compliance in accordance with BIS, FSSAI, and IS standards' },
    { label: 'Automated bottling & packaging', sub: 'Automated bottling & packaging' },
    { label: 'Commissioning & support', sub: 'Commissioning & Trial Runs — system startup, quality validation, and production stabilization' },
    { label: 'Turnkey solutions', sub: 'Turnkey solutions for mineral water and beverage manufacturing plants' },
  ],
  stats: [
    { num: 6, suffix: '', label: 'Services' },
    { num: 3, suffix: '', label: 'BIS · FSSAI · IS' },
    { num: 4, suffix: '', label: 'Process pillars' },
  ],
  cta: {
    title: 'Planning a Mineral Water or Beverage Plant?',
    text: 'Partner with Nayara Industries for reliable beverage and mineral water plant solutions from concept to commissioning.',
  },
};

const ETP_PAGE = {
  breadcrumb: 'ETP Solutions',
  hero: {
    title: 'Effluent Treatment Plant (ETP)',
    intro: 'Design, engineering, installation, and commissioning of industrial Effluent Treatment Plants for regulatory compliance and sustainable operations.',
    bg: 'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
  },
  intro: {
    eyebrow: 'ETP Solutions',
    title: 'Comprehensive ETP Solutions',
    text: 'Nayara Industries provides end-to-end Effluent Treatment Plant (ETP) solutions for chemical, pharmaceutical, textile, and industrial manufacturing units. Our systems are designed to meet CPCB / SPCB norms while ensuring operational reliability and cost efficiency.',
    image: 'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
  },
  whatIs: {
    title: 'What Is an Effluent Treatment Plant?',
    text: 'An Effluent Treatment Plant (ETP) is a system designed to treat industrial wastewater before discharge or reuse. It removes contaminants through physical, chemical, and biological treatment processes.',
    image: 'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
    features: [
      'Primary, secondary & tertiary treatment',
      'Reduction of BOD, COD, TDS & TSS',
      'Regulatory compliance',
      'Water reuse & sustainability',
    ],
  },
  servicesTitle: 'Our ETP Services',
  services: [
    {
      title: 'ETP Design & Engineering',
      text: 'Customized ETP design based on effluent characteristics and discharge norms.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
      span: 'featured',
    },
    {
      title: 'ETP Installation & Erection',
      text: 'Mechanical, civil, piping, and electrical installation of ETP systems.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      span: 'wide',
    },
    {
      title: 'Commissioning & Trial Runs',
      text: 'Start-up, stabilization, and performance testing of ETP operations.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      span: 'featured',
    },
    {
      title: 'Upgradation & Expansion',
      text: 'Capacity enhancement and technology upgradation of existing ETPs.',
      image: 'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
      span: 'normal',
    },
    {
      title: 'O&M Support',
      text: 'Operation, maintenance, and optimization support for long-term performance.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
      span: 'normal',
    },
    {
      title: 'Compliance Assistance',
      text: 'Support for pollution control approvals, audits, and reporting.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      span: 'normal',
    },
  ],
  stats: [
    { num: 6, suffix: '', label: 'ETP Services' },
    { num: 4, suffix: '', label: 'Treatment stages' },
    { num: 2, suffix: '', label: 'CPCB · SPCB' },
  ],
  cta: {
    title: 'Need an Efficient & Compliant ETP?',
    text: 'Partner with Nayara Industries for reliable Effluent Treatment Plant design, installation, and commissioning services.',
    btn: 'Contact Us',
    bg: 'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
  },
};

const GREENFIELD_PAGE = {
  breadcrumb: 'Greenfield Projects (Plant Commissioning)',
  hero: {
    title: 'Greenfield Projects (Plant Commissioning)',
    intro: 'End-to-end execution support for new chemical and industrial plants — from concept planning to commercial production.',
    bg: 'https://nayaragroup.com/wp-content/uploads/2026/01/greenfield-news.jpg',
  },
  intro: {
    eyebrow: 'Greenfield Projects',
    title: 'End-to-End Greenfield Project Support',
    text: 'Nayara Industries delivers comprehensive Greenfield Project and Plant Commissioning services for chemical, pharmaceutical, and industrial units.',
    image: 'https://nayaragroup.com/wp-content/uploads/2025/12/environmental-pollution-factory-exterior.jpg',
  },
  whatIs: {
    title: 'What Is a Greenfield Project?',
    text: 'A Greenfield Project involves setting up a manufacturing facility from the ground up, covering planning, engineering, installation, commissioning, and operational stabilization.',
    image: 'https://nayaragroup.com/wp-content/uploads/2026/01/greenfield-news.jpg',
    features: [
      'Plant layout & capacity planning',
      'Equipment & utility installation',
      'Safety and compliance systems',
      'Trial production & handover',
    ],
  },
  servicesTitle: 'Our Greenfield Project Services',
  services: [
    {
      title: 'Project Planning & Feasibility',
      text: 'CAPEX estimation, process selection, timelines, and risk assessment.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      span: 'featured',
    },
    {
      title: 'Statutory & Regulatory Support',
      text: 'Pollution control, factory licensing, fire safety, and approvals.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9db5811f6?auto=format&fit=crop&w=800&q=80',
      span: 'wide',
    },
    {
      title: 'Plant Layout & Engineering',
      text: 'PFD, P&ID, safety zoning, and expansion planning.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
      span: 'featured',
    },
    {
      title: 'Mechanical & Utility Installation',
      text: 'Reactors, tanks, piping, boilers, chillers, and utilities.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      span: 'normal',
    },
    {
      title: 'Pre-Commissioning',
      text: 'Line flushing, pressure testing, dry runs, and audits.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
      span: 'normal',
    },
    {
      title: 'Trial Runs & Commissioning',
      text: 'Process optimization, validation, and stabilization.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      span: 'normal',
    },
  ],
  stats: [
    { num: 6, suffix: '', label: 'Project services' },
    { num: 4, suffix: '', label: 'Project stages' },
    { num: 3, suffix: '', label: 'Industrial sectors' },
  ],
  cta: {
    title: 'Planning a New Manufacturing Plant?',
    text: 'Partner with Nayara Industries for reliable Greenfield Project development and plant commissioning services.',
    btn: 'Contact Us',
    bg: 'https://nayaragroup.com/wp-content/uploads/2026/01/greenfield-news.jpg',
  },
};

const PROCESS_DEVELOPMENT_PAGE = {
  breadcrumb: 'Process Development & Technology Transfer',
  hero: {
    title: 'Process Development & Technology Transfer',
    intro: 'Structured development, scale-up, and seamless transfer of manufacturing processes from laboratory to commercial production.',
    bg: 'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
  },
  intro: {
    eyebrow: 'Process Development',
    title: 'From Concept to Commercialization',
    text: 'Nayara Industries supports structured process development and technology transfer ensuring reproducibility, compliance, and smooth commercial adoption.',
    image: 'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
  },
  whatIs: {
    title: 'Process Development',
    text: 'We develop and optimize manufacturing processes focusing on yield, safety, scalability, and cost efficiency.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9db5811f6?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Route selection & optimization',
      'Lab & pilot scale development',
      'Process safety assessment',
      'Scale-up strategy',
    ],
  },
  technologyTransfer: {
    title: 'Technology Transfer',
    text: 'Seamless transfer of technology from R&D to commercial manufacturing with structured documentation and on-site support.',
    image: 'https://nayaragroup.com/wp-content/uploads/2025/12/environmental-pollution-factory-exterior.jpg',
    features: [
      'Technology transfer packages (TTP)',
      'SOPs & batch documentation',
      'Equipment & capacity verification',
      'Training & commissioning support',
    ],
  },
  stats: [
    { num: 4, suffix: '', label: 'Dev capabilities' },
    { num: 4, suffix: '', label: 'Transfer services' },
    { num: 2, suffix: '', label: 'Lab · Commercial' },
  ],
  cta: {
    title: 'Need Process Development or Technology Transfer?',
    text: 'Partner with Nayara Industries for reliable, scalable, and compliant process development solutions.',
    btn: 'Contact Us',
    bg: 'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
  },
};

const CONSULTANCY_PAGE = {
  breadcrumb: 'Professional Industrial Consultancy',
  hero: {
    title: 'Professional Industrial Consultancy',
    intro: 'Nayara Industries offers end-to-end consultancy services supporting project planning, process optimization, regulatory compliance, cost reduction, and operational excellence. Our advisory approach combines technical expertise with practical industry experience.',
    bg: 'https://nayaragroup.com/wp-content/uploads/2026/01/Consultancy-ServiceS-scaled.jpg',
  },
  intro: {
    eyebrow: 'Consultancy',
    title: 'Professional Industrial Consultancy',
    text: 'Strategic, technical, and regulatory consultancy for chemical, pharmaceutical, industrial, and infrastructure projects.',
    image: 'https://nayaragroup.com/wp-content/uploads/2026/01/Consultancy-ServiceS-scaled.jpg',
  },
  servicesTitle: 'Our Consultancy Expertise',
  services: [
    {
      title: 'Project Feasibility & DPR',
      text: 'Techno-economic feasibility studies, DPR preparation, and investment analysis.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      span: 'featured',
    },
    {
      title: 'Process & Technology Advisory',
      text: 'Process selection, optimization, scale-up, and technology transfer support.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9db5811f6?auto=format&fit=crop&w=800&q=80',
      span: 'wide',
    },
    {
      title: 'Regulatory & Statutory Consultancy',
      text: 'Guidance for pollution control, factory licensing, safety, and compliance.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
      span: 'featured',
    },
    {
      title: 'Plant Layout & Engineering Review',
      text: 'Review of layouts, utilities, material flow, and safety compliance.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      span: 'normal',
    },
    {
      title: 'Operational Excellence',
      text: 'Debottlenecking, yield improvement, cost optimization, and productivity enhancement.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      span: 'normal',
    },
    {
      title: 'Risk & Safety Consulting',
      text: 'HAZOP, SOP development, safety audits, and risk mitigation planning.',
      image: 'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
      span: 'normal',
    },
  ],
  approach: {
    title: 'Our Consulting Approach',
    features: [
      'Client-specific assessment and requirement analysis',
      'Data-driven recommendations and technical validation',
      'Practical, implementable solutions',
      'Compliance-focused execution support',
      'Long-term value creation',
    ],
  },
  stats: [
    { num: 6, suffix: '', label: 'Consultancy areas' },
    { num: 5, suffix: '', label: 'Approach pillars' },
    { num: 4, suffix: '', label: 'Industry sectors' },
  ],
  cta: {
    title: 'Need Expert Industrial Consultancy?',
    text: 'Partner with Nayara Industries for reliable, practical, and results-driven consultancy services.',
    btn: 'Contact Us',
    bg: 'https://nayaragroup.com/wp-content/uploads/2026/01/Consultancy-ServiceS-scaled.jpg',
  },
};

function getBasePath(depth) {
  return depth === 0 ? './' : '../'.repeat(depth);
}

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');
}

function cleanCmsContent(raw, slug) {
  const curated = PAGE_CONTENT[slug];
  if (curated) return curated;

  if (!raw) return '<p>Please contact us for detailed information about this service.</p>';

  let text = stripHtml(raw)
    .replace(/<div[^>]*>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<span[^>]*>/gi, '')
    .replace(/<\/span>/gi, '')
    .replace(/<a[^>]*>/gi, '')
    .replace(/<\/a>/gi, '')
    .replace(/<img[^>]*>/gi, '')
    .replace(/<[^>]+>/g, '\n');

  const lines = text.split('\n')
    .map(l => l.replace(/\s+/g, ' ').trim())
    .filter(l => l.length > 25)
    .filter(l => !l.match(/^Products\s*\d/))
    .filter(l => !l.includes('NAYARA INDUSTRIES >'))
    .filter(l => !l.match(/^CONTACT US$/i))
    .filter(l => !l.match(/^0\s*\+$/))
    .filter(l => !l.startsWith(':root'));

  const seen = new Set();
  const blocks = [];
  lines.forEach(line => {
    if (seen.has(line)) return;
    seen.add(line);
    if (line.length < 60 && line === line.toUpperCase() && !line.includes('.')) {
      blocks.push(`<h2>${line}</h2>`);
    } else if (line.endsWith('?') && line.length < 80) {
      blocks.push(`<h3>${line}</h3>`);
    } else {
      blocks.push(`<p>${line}</p>`);
    }
  });

  return blocks.slice(0, 20).join('\n') || '<p>Please contact us for detailed information.</p>';
}

const PAGE_CONTENT = {
  'about-us': `
    <p>Learn about Nayara Industries, a chemical manufacturing and trading company in GIDC Ankleshwar specializing in solvents, intermediates, and industrial chemicals with strict QC systems.</p>
    <p><strong>NAYARA INDUSTRIES</strong> is an emerging chemical manufacturing and trading company based in <strong>GIDC Ankleshwar</strong>, one of India's largest chemical industrial zones. We specialize in the production, sourcing, and distribution of high-quality industrial chemicals used across pharmaceuticals, textiles, agriculture, water treatment, dyes, intermediates, and specialty chemical sectors.</p>
    <p>Built on the principles of quality, compliance, safety, and continuous improvement, our organization is committed to serving domestic and international clients with reliable chemical solutions.</p>
    <h3>WHO WE ARE?</h3>
    <p>NAYARA INDUSTRIES is a chemical manufacturing and distribution company committed to delivering dependable and high-quality chemical products for industrial use. With a strong foundation in process expertise, supply chain management, and regulatory compliance, we serve industries that demand reliability, purity, and consistency.</p>
    <p>We operate from <strong>GIDC Ankleshwar</strong>, giving us privileged access to India's most mature chemical ecosystem and logistics infrastructure.</p>
    <h2>Vision Mission Core Values</h2>
    <p>To become a leading, trusted, and innovation-driven chemical manufacturer delivering sustainable solutions to industries across India and global markets.</p>
    <ul>
      <li>Deliver world-class quality at competitive pricing.</li>
      <li>Expand product capabilities through R&D and process innovation.</li>
      <li>Maintain long-term customer relationships built on trust.</li>
      <li>Ensure safe, compliant, and eco-friendly operations.</li>
      <li>Achieve excellence through continuous improvement.</li>
    </ul>
    <p><strong>Integrity · Quality · Commitment · Safety · Innovation · Sustainability</strong></p>
    <p>Our values guide decisions and operations — ensuring trust, safety, and environmental responsibility while pursuing innovation.</p>
  `,
  'industries-we-serve': `
    <p>Nayara Industries serves a diverse range of industrial sectors with high-quality chemical products and reliable supply chain solutions from GIDC Ankleshwar.</p>
    <h3>Industries We Serve</h3>
    <ul>
      <li>Pharmaceutical & API Manufacturing</li>
      <li>Textile & Dyeing Industries</li>
      <li>Water Treatment & Municipal Utilities</li>
      <li>Agriculture & Agrochemicals</li>
      <li>Paints, Coatings & Resins</li>
      <li>Detergent & Cleaning Products</li>
      <li>Construction Chemicals</li>
      <li>Laboratory & Research Institutions</li>
      <li>Export & International Trade</li>
    </ul>
  `,
  'quality-safety': `
    <p>At Nayara Industries, quality and safety are foundational to every operation. Our comprehensive quality management systems ensure consistent product purity and regulatory compliance.</p>
    <h3>Quality Assurance</h3>
    <p>Advanced QC laboratory with HPLC testing, batch-wise quality certificates, and strict adherence to industry standards for all products.</p>
    <h3>Safety & Compliance</h3>
    <p>Full MSDS/TDS documentation, safe handling protocols, and compliance with environmental and chemical safety regulations.</p>
  `,
  'careers': `
    <p>Join Nayara Industries and build your career with a growing chemical manufacturing and trading company in GIDC Ankleshwar. We offer opportunities for professional growth in a dynamic industrial environment.</p>
    <h3>Why Work With Us</h3>
    <ul>
      <li>Professional growth in India's largest chemical hub</li>
      <li>Exposure to diverse industrial chemical sectors</li>
      <li>Safe and compliant work environment</li>
      <li>Competitive compensation and benefits</li>
    </ul>
  `,
  'contact-us': `
    <p>Looking for a reliable chemical manufacturing and trading partner? Connect with Nayara Industries for quotations, product specifications, MSDS/TDS documentation, or custom sourcing requirements.</p>
  `,
  'beverages-mineral-water': `
    <p>End-to-end design, installation, and commissioning of mineral water, packaged drinking water, and beverage manufacturing plants.</p>
    <h3>Complete Beverage & Mineral Water Solutions</h3>
    <p>Nayara Industries provides turnkey solutions for mineral water and beverage manufacturing plants, covering plant layout, water treatment, bottling lines, and statutory compliance in accordance with BIS, FSSAI, and IS standards.</p>
    <h3>What Is a Mineral Water & Beverage Plant?</h3>
    <p>A mineral water and beverage plant processes raw water through advanced purification systems and packages it into bottles, jars, or pouches under hygienic and controlled conditions.</p>
    <ul>
      <li>Raw water treatment & purification</li>
      <li>RO, UV, Ozonation systems</li>
      <li>Automated bottling & packaging</li>
      <li>Quality testing & compliance</li>
    </ul>
    <h3>Our Services</h3>
    <ul>
      <li><strong>Plant Design & Layout</strong> — Customized plant layout optimized for hygiene, flow, and capacity.</li>
      <li><strong>Water Treatment Systems</strong> — RO, softener, sand filter, carbon filter, UV & ozonation systems.</li>
      <li><strong>Bottling & Packaging Lines</strong> — Automatic & semi-automatic bottling, jar filling, and labeling lines.</li>
      <li><strong>Commissioning & Trial Runs</strong> — System startup, quality validation, and production stabilization.</li>
      <li><strong>Quality & Lab Setup</strong> — Support for in-house testing labs and quality control systems.</li>
      <li><strong>Compliance Support</strong> — BIS, FSSAI, IS approvals and documentation assistance.</li>
    </ul>
  `,
  'etp-solutions': `
    <p>Design, engineering, installation, and commissioning of industrial Effluent Treatment Plants for regulatory compliance and sustainable operations.</p>
    <h3>Comprehensive ETP Solutions</h3>
    <p>Nayara Industries provides end-to-end Effluent Treatment Plant (ETP) solutions for chemical, pharmaceutical, textile, and industrial manufacturing units. Our systems are designed to meet CPCB / SPCB norms while ensuring operational reliability and cost efficiency.</p>
    <h3>What Is an Effluent Treatment Plant?</h3>
    <p>An Effluent Treatment Plant (ETP) is a system designed to treat industrial wastewater before discharge or reuse. It removes contaminants through physical, chemical, and biological treatment processes.</p>
    <ul>
      <li>Primary, secondary & tertiary treatment</li>
      <li>Reduction of BOD, COD, TDS & TSS</li>
      <li>Regulatory compliance</li>
      <li>Water reuse & sustainability</li>
    </ul>
    <h3>Our ETP Services</h3>
    <ul>
      <li><strong>ETP Design & Engineering</strong> — Customized ETP design based on effluent characteristics and discharge norms.</li>
      <li><strong>ETP Installation & Erection</strong> — Mechanical, civil, piping, and electrical installation of ETP systems.</li>
      <li><strong>Commissioning & Trial Runs</strong> — Start-up, stabilization, and performance testing of ETP operations.</li>
      <li><strong>Upgradation & Expansion</strong> — Capacity enhancement and technology upgradation of existing ETPs.</li>
      <li><strong>O&M Support</strong> — Operation, maintenance, and optimization support for long-term performance.</li>
      <li><strong>Compliance Assistance</strong> — Support for pollution control approvals, audits, and reporting.</li>
    </ul>
  `,
  'greenfield-projects': `
    <p>End-to-end execution support for new chemical and industrial plants — from concept planning to commercial production.</p>
    <h3>End-to-End Greenfield Project Support</h3>
    <p>Nayara Industries delivers comprehensive Greenfield Project and Plant Commissioning services for chemical, pharmaceutical, and industrial units.</p>
    <h3>What Is a Greenfield Project?</h3>
    <p>A Greenfield Project involves setting up a manufacturing facility from the ground up, covering planning, engineering, installation, commissioning, and operational stabilization.</p>
    <ul>
      <li>Plant layout & capacity planning</li>
      <li>Equipment & utility installation</li>
      <li>Safety and compliance systems</li>
      <li>Trial production & handover</li>
    </ul>
    <h3>Our Greenfield Project Services</h3>
    <ul>
      <li><strong>Project Planning & Feasibility</strong> — CAPEX estimation, process selection, timelines, and risk assessment.</li>
      <li><strong>Statutory & Regulatory Support</strong> — Pollution control, factory licensing, fire safety, and approvals.</li>
      <li><strong>Plant Layout & Engineering</strong> — PFD, P&ID, safety zoning, and expansion planning.</li>
      <li><strong>Mechanical & Utility Installation</strong> — Reactors, tanks, piping, boilers, chillers, and utilities.</li>
      <li><strong>Pre-Commissioning</strong> — Line flushing, pressure testing, dry runs, and audits.</li>
      <li><strong>Trial Runs & Commissioning</strong> — Process optimization, validation, and stabilization.</li>
    </ul>
  `,
  'process-development': `
    <p>Structured development, scale-up, and seamless transfer of manufacturing processes from laboratory to commercial production.</p>
    <h3>From Concept to Commercialization</h3>
    <p>Nayara Industries supports structured process development and technology transfer ensuring reproducibility, compliance, and smooth commercial adoption.</p>
    <h3>Process Development</h3>
    <p>We develop and optimize manufacturing processes focusing on yield, safety, scalability, and cost efficiency.</p>
    <ul>
      <li>Route selection & optimization</li>
      <li>Lab & pilot scale development</li>
      <li>Process safety assessment</li>
      <li>Scale-up strategy</li>
    </ul>
    <h3>Technology Transfer</h3>
    <p>Seamless transfer of technology from R&D to commercial manufacturing with structured documentation and on-site support.</p>
    <ul>
      <li>Technology transfer packages (TTP)</li>
      <li>SOPs & batch documentation</li>
      <li>Equipment & capacity verification</li>
      <li>Training & commissioning support</li>
    </ul>
  `,
  'consultancy': `
    <p>Strategic, technical, and regulatory consultancy for chemical, pharmaceutical, industrial, and infrastructure projects.</p>
    <h3>Professional Industrial Consultancy</h3>
    <p>Nayara Industries offers end-to-end consultancy services supporting project planning, process optimization, regulatory compliance, cost reduction, and operational excellence. Our advisory approach combines technical expertise with practical industry experience.</p>
    <h3>Our Consultancy Expertise</h3>
    <ul>
      <li><strong>Project Feasibility & DPR</strong> — Techno-economic feasibility studies, DPR preparation, and investment analysis.</li>
      <li><strong>Process & Technology Advisory</strong> — Process selection, optimization, scale-up, and technology transfer support.</li>
      <li><strong>Regulatory & Statutory Consultancy</strong> — Guidance for pollution control, factory licensing, safety, and compliance.</li>
      <li><strong>Plant Layout & Engineering Review</strong> — Review of layouts, utilities, material flow, and safety compliance.</li>
      <li><strong>Operational Excellence</strong> — Debottlenecking, yield improvement, cost optimization, and productivity enhancement.</li>
      <li><strong>Risk & Safety Consulting</strong> — HAZOP, SOP development, safety audits, and risk mitigation planning.</li>
    </ul>
    <h3>Our Consulting Approach</h3>
    <ul>
      <li>Client-specific assessment and requirement analysis</li>
      <li>Data-driven recommendations and technical validation</li>
      <li>Practical, implementable solutions</li>
      <li>Compliance-focused execution support</li>
      <li>Long-term value creation</li>
    </ul>
  `,
};

const PAGE_IMAGES = {
  'about-us': 'https://nayaragroup.com/wp-content/uploads/2025/12/environmental-pollution-factory-exterior.jpg',
  'contact-us': 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=80',
  'product': 'https://nayaragroup.com/wp-content/uploads/2025/12/Acrylic-Solvent.webp',
  'careers': 'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
  'quality-safety': 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1600&q=80',
  'industries-we-serve': 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80',
  'other-services': 'https://nayaragroup.com/wp-content/uploads/2026/01/Consultancy-ServiceS-scaled.jpg',
  /* Product categories — unique working banner images */
  'solvents': 'https://nayaragroup.com/wp-content/uploads/2025/12/Acrylic-Solvent.webp',
  'acids-alkalies': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80',
  'intermediates': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
  'pharma-raw-materials': 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1600&q=80',
  'textile-chemicals': 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80',
  'water-treatment-chemicals': 'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
  'agro-chemicals': 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80',
  'dyes-dye-intermediates': 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80',
  'laboratory-chemicals': 'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
  'detergent-chemicals': 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=1600&q=80',
  'industrial-salts': 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1600&q=80',
  'custom-formulated-products': 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1600&q=80',
  'beverages-mineral-water': 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1600&q=80',
  'etp-solutions': 'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
  'greenfield-projects': 'https://nayaragroup.com/wp-content/uploads/2026/01/greenfield-news.jpg',
  'process-development': 'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
  'consultancy': 'https://nayaragroup.com/wp-content/uploads/2026/01/Consultancy-ServiceS-scaled.jpg',
  default: 'https://nayaragroup.com/wp-content/uploads/2025/12/environmental-pollution-factory-exterior.jpg',
};

const PAGE_LEADS = {
  product: 'Quality-assured industrial chemicals across solvents, acids, intermediates, and specialty categories.',
  solvents: 'High-purity solvents for coatings, formulations, pharma, and industrial process applications.',
  'acids-alkalies': 'Industrial acids and alkalies for metal treatment, neutralization, and process chemistry.',
  intermediates: 'Reliable chemical intermediates supporting synthesis and manufacturing workflows.',
  'pharma-raw-materials': 'Pharma-grade raw materials and excipients for API and formulation requirements.',
  'textile-chemicals': 'Textile auxiliaries that improve wetting, dyeing, finishing, and fabric performance.',
  'water-treatment-chemicals': 'Coagulants, oxidants, and treatment chemicals for industrial water systems.',
  'agro-chemicals': 'Specialty agro and construction chemicals for field and industrial applications.',
  'dyes-dye-intermediates': 'Dyes and dye intermediates for textile, printing, and colour chemistry needs.',
  'laboratory-chemicals': 'LR-grade reagents, indicators, buffers, and laboratory chemical supplies.',
  'detergent-chemicals': 'Surfactants and additives for detergent and cleaning product formulations.',
  'industrial-salts': 'Process-grade industrial salts for manufacturing, treatment, and chemical use.',
  'custom-formulated-products': 'Custom blends and specialty formulations tailored to your process needs.',
};

const PAGE_BANNER_GALLERY = {
  product: [
    'https://nayaragroup.com/wp-content/uploads/2025/12/Acrylic-Solvent.webp',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Industrial-Acid.webp',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Pharma-Intermediate.webp',
  ],
  solvents: [
    'https://nayaragroup.com/wp-content/uploads/2025/12/Acrylic-Solvent.webp',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80',
  ],
  'acids-alkalies': [
    'https://nayaragroup.com/wp-content/uploads/2025/12/Industrial-Acid.webp',
    'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
  ],
  intermediates: [
    'https://nayaragroup.com/wp-content/uploads/2025/12/Pharma-Intermediate.webp',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80',
  ],
  'pharma-raw-materials': [
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Pharma-Intermediate.webp',
    'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
  ],
  'textile-chemicals': [
    'https://nayaragroup.com/wp-content/uploads/2025/12/Textile-Chemical.webp',
    'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
  ],
  'water-treatment-chemicals': [
    'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment.webp',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  ],
  'agro-chemicals': [
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Industrial-Acid.webp',
  ],
  'dyes-dye-intermediates': [
    'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Textile-Chemical.webp',
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
  ],
  'laboratory-chemicals': [
    'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80',
  ],
  'detergent-chemicals': [
    'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=900&q=80',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Industrial-Acid.webp',
  ],
  'industrial-salts': [
    'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Industrial-Acid.webp',
  ],
  'custom-formulated-products': [
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Pharma-Intermediate.webp',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
  ],
  'quality-safety': [
    'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80',
    'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  ],
  'other-services': [
    'https://nayaragroup.com/wp-content/uploads/2026/01/Consultancy-ServiceS-scaled.jpg',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
    'https://nayaragroup.com/wp-content/uploads/2026/01/greenfield-news.jpg',
  ],
  'contact-us': [
    'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=900&q=80',
    'https://nayaragroup.com/wp-content/uploads/2025/12/environmental-pollution-factory-exterior.jpg',
    'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80',
  ],
  'about-us': [
    'https://nayaragroup.com/wp-content/uploads/2025/12/environmental-pollution-factory-exterior.jpg',
    'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
  ],
  'careers': [
    'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  ],
  'industries-we-serve': [
    'https://nayaragroup.com/wp-content/uploads/2025/12/Textile-Chemical.webp',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg',
    'https://nayaragroup.com/wp-content/uploads/2025/12/Pharma-Intermediate.webp',
  ],
};

function getPageImage(slug) {
  return PAGE_IMAGES[slug] || PAGE_IMAGES.default;
}

function getPageLayout(slug) {
  const layouts = ['page-a', 'page-b', 'page-c'];
  return layouts[slug.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % layouts.length];
}

function getPremiumCategoryIntro(content, slug, title) {
  const img = getPageImage(slug);
  return `
  <section class="pc-intro">
    <div class="pc-intro__stage">
      <figure class="pc-intro__media">
        <img src="${img}" alt="${title}" loading="lazy" decoding="async">
      </figure>
      <article class="pc-intro__glass">
        <div class="pc-intro__copy sp-cms cms-content cms-content-premium">${content}</div>
      </article>
    </div>
  </section>`;
}

function getContentSection(content, slug, title) {
  const img = getPageImage(slug);
  const layout = getPageLayout(slug);

  if (layout === 'page-b') {
    return `
  <section class="sp-zone sp-zone--mesh">
    <div class="sp-zone-inner">
      <div class="sp-bento sp-bento--page">
        <article class="sp-tile sp-tile--stat card-3d gs-scale">
          <div class="sp-tile-inner">
            <p class="sp-stat-label">Products</p>
            <p class="sp-stat-num"><span data-counter="120" data-suffix="+">0</span></p>
          </div>
        </article>
        <article class="sp-tile sp-tile--image card-3d gs-reveal img-reveal">
          <div class="sp-tile-inner"><img src="${img}" alt="${title}" loading="lazy" decoding="async"></div>
        </article>
        <article class="sp-tile sp-tile--stat card-3d gs-scale">
          <div class="sp-tile-inner">
            <p class="sp-stat-label">Categories</p>
            <p class="sp-stat-num"><span data-counter="20" data-suffix="+">0</span></p>
          </div>
        </article>
        <article class="sp-tile card-3d gs-reveal">
          <div class="sp-tile-inner sp-cms cms-content cms-content-premium">${content}</div>
        </article>
      </div>
    </div>
  </section>`;
  }

  if (layout === 'page-c') {
    return `
  <section class="sp-zone" style="background:var(--sp-bg-2,#F4F6F9)">
    <div class="sp-zone-inner">
      <div class="sp-section-head gs-blur mb-12">
        <span class="sp-section-eyebrow">${title}</span>
        <h2 class="sp-section-title">${title}</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div class="lg:col-span-5 gs-reveal-left">
          <div class="sp-tile sp-tile--image card-3d sticky top-32">
            <div class="sp-tile-inner"><img src="${img}" alt="${title}" loading="lazy" decoding="async"></div>
          </div>
        </div>
        <div class="lg:col-span-7 sp-tile card-3d gs-reveal">
          <div class="sp-tile-inner sp-cms cms-content cms-content-premium">${content}</div>
        </div>
      </div>
    </div>
  </section>`;
  }

  return `
  <section class="sp-zone sp-zone--mesh">
    <div class="sp-zone-inner">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center mb-12">
        <div class="gs-reveal-left lg:-mr-12 relative z-10">
          <div class="sp-tile sp-tile--image card-3d">
            <div class="sp-tile-inner"><img src="${img}" alt="${title}" loading="lazy" decoding="async"></div>
          </div>
        </div>
        <div class="sp-tile card-3d gs-reveal lg:translate-x-8 relative z-20">
          <div class="sp-tile-inner sp-cms cms-content cms-content-premium">${content}</div>
        </div>
      </div>
    </div>
  </section>`;
}

function getHead(title, description, basePath, canonical, options = {}) {
  const extraCss = (options.extraCss || []).map((href) =>
    `<link rel="stylesheet" href="${basePath}${href}">`
  ).join('\n  ');
  const bodyClass = options.bodyClass || 'overflow-x-hidden';

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} – NAYARA INDUSTRIES</title>
  <meta name="description" content="${description.replace(/"/g, '&quot;').substring(0, 160)}">
  <link rel="canonical" href="https://nayaragroup.com/${canonical}">
  <link rel="icon" href="https://nayaragroup.com/wp-content/uploads/2025/12/cropped-1-011-32x32.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://api.fontshare.com" crossorigin>
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${basePath}assets/css/style.css?v=3">
  <link rel="stylesheet" href="${basePath}assets/css/liquid-glass.css?v=12">
  <link rel="stylesheet" href="${basePath}assets/css/nayara-fortune.css?v=3">
  <link rel="stylesheet" href="${basePath}assets/css/spatial-ui.css?v=3">
  <link rel="stylesheet" href="${basePath}assets/css/editorial-bento.css?v=3">
  <link rel="stylesheet" href="${basePath}assets/css/enterprise-corporate.css?v=3">
  <link rel="stylesheet" href="${basePath}assets/css/luxury-enterprise.css?v=4">
  <link rel="stylesheet" href="${basePath}assets/css/luxury-images.css?v=5">
  <link rel="stylesheet" href="${basePath}assets/css/premium-international.css?v=10">
  <link rel="stylesheet" href="${basePath}assets/css/visual-premium.css?v=8">
  ${extraCss}
  <link rel="stylesheet" href="${basePath}assets/css/site-teal-bg.css?v=12">
  <link rel="stylesheet" href="${basePath}assets/css/site-pages.css?v=1">
</head>
<body class="${bodyClass}">`;
}

const SITE_LOGO = 'https://nayaragroup.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-30-at-12.23.01-PM.jpeg';

const INDUSTRIES_CARDS = [
  { title: 'Pharmaceuticals', desc: 'High-purity solvents, intermediates, and chemical raw materials for API manufacturing.', tags: ['API', 'Solvents'], icon: 'pharma' },
  { title: 'Agrochemicals', desc: 'Intermediates and additives for crop-protection formulations.', tags: ['Intermediates', 'Crop Care'], icon: 'leaf' },
  { title: 'Textile & Dyes', desc: 'Dyeing, bleaching, printing, and finishing chemicals.', tags: ['Dyeing', 'Finishing'], icon: 'textile' },
  { title: 'Water Treatment', desc: 'Coagulants, scale inhibitors, and biocides.', tags: ['Coagulants', 'Biocides'], icon: 'water' },
  { title: 'Paints & Coatings', desc: 'Solvents and additives for coating applications.', tags: ['Solvents', 'Coatings'], icon: 'paint' },
  { title: 'Plastic & Rubber', desc: 'Stabilizers and processing aids.', tags: ['Modifiers', 'Stabilizers'], icon: 'rubber' },
  { title: 'Detergent & Cleaning Products', desc: 'Nayara Industries serves a diverse range of industrial sectors with high-quality chemical products and reliable supply chain solutions from GIDC Ankleshwar.', tags: ['Detergent', 'Cleaning'], icon: 'clean' },
  { title: 'Construction Chemicals', desc: 'Nayara Industries serves a diverse range of industrial sectors with high-quality chemical products and reliable supply chain solutions from GIDC Ankleshwar.', tags: ['Construction', 'Industrial'], icon: 'build' },
  { title: 'Laboratory & Research Institutions', desc: 'Nayara Industries serves a diverse range of industrial sectors with high-quality chemical products and reliable supply chain solutions from GIDC Ankleshwar.', tags: ['Lab', 'Research'], icon: 'lab' },
  { title: 'Export & International Trade', desc: 'Nayara Industries serves a diverse range of industrial sectors with high-quality chemical products and reliable supply chain solutions from GIDC Ankleshwar.', tags: ['Export', 'Global'], icon: 'export' },
];

const ABOUT_EXCELLENCE = [
  'Strong manufacturing processes',
  'Reliable trading network',
  'On-time delivery',
  'Advanced QC laboratory',
  'Skilled and trained workforce',
  'Ethical and responsible business practices',
];

function getIndustryIcon(type) {
  const icons = {
    pharma: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
    leaf: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
    textile: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>',
    water: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3c-4 4-8 7-8 11a8 8 0 1016 0c0-4-4-7-8-11z"/></svg>',
    paint: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>',
    rubber: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
    clean: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
    build: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    lab: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>',
    export: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  };
  return icons[type] || icons.pharma;
}

function getEnterpriseBanner({ title, eyebrow, lead, basePath, breadcrumb, slug }) {
  const crumbs = breadcrumb.map((c, i) => {
    if (i === breadcrumb.length - 1) return `<span class="ph-banner__crumb-current">${c.label}</span>`;
    return `<a href="${basePath}${c.href}">${c.label}</a><span class="ph-banner__crumb-sep">/</span>`;
  }).join('');

  const heroImage = getPageImage(slug || 'about-us');

  return `
  <section class="ph-banner ph-banner--bg">
    <div class="ph-banner__media" style="background-image:url('${heroImage}')" role="img" aria-label="${title}"></div>
    <div class="ph-banner__veil" aria-hidden="true"></div>
    <div class="ph-banner__inner ph-banner__inner--overlay">
      <div class="ph-banner__copy">
        <nav class="ph-banner__crumb" aria-label="Breadcrumb">
          <a href="${basePath}">Home</a>
          <span class="ph-banner__crumb-sep">/</span>
          ${crumbs}
        </nav>
        <p class="ph-banner__eyebrow">${eyebrow}</p>
        <h1 class="ph-banner__title">${title}</h1>
        ${lead ? `<p class="ph-banner__lead">${lead}</p>` : ''}
        <a href="${basePath}contact-us/" class="ph-banner__cta">Contact Us</a>
      </div>
    </div>
  </section>`;
}

function getIppStatsSection() {
  return `
  <section class="ipp-stats">
    <div class="ipp-stats__grid">
      <div class="ipp-stat gs-reveal">
        <p class="ipp-stat__label">Products</p>
        <p class="ipp-stat__num"><span data-counter="120" data-suffix="+">0</span></p>
      </div>
      <div class="ipp-stat gs-reveal">
        <p class="ipp-stat__label">Categories</p>
        <p class="ipp-stat__num"><span data-counter="20" data-suffix="+">0</span></p>
      </div>
      <div class="ipp-stat gs-reveal">
        <p class="ipp-stat__label">I.W.S</p>
        <p class="ipp-stat__num"><span data-counter="20" data-suffix="+">0</span></p>
      </div>
    </div>
  </section>`;
}

function getPremiumAboutPage(basePath, content) {
  const img = getPageImage('about-us');
  const introContent = content.split('<h2>Vision Mission Core Values</h2>')[0].trim();
  const excellence = ABOUT_EXCELLENCE.map((s) => `
      <div class="ipp-excellence__item gs-reveal">
        <span class="ipp-excellence__icon"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></span>
        <span class="ipp-excellence__text">${s}</span>
      </div>`).join('');

  return `
  ${getIppStatsSection()}
  <section class="ipp-about">
    <div class="ipp-about__inner">
      <div class="ipp-about__image gs-reveal-left">
        <img src="${img}" alt="About Nayara Industries" loading="lazy" decoding="async">
      </div>
      <div class="ipp-about__content cms-content cms-content-premium gs-reveal-right">${introContent}</div>
    </div>
  </section>
  <div class="ipp-vm-grid">
    <article class="ipp-vm-card ipp-vm-card--vision gs-reveal">
      <span class="ipp-vm-card__tag">Vision</span>
      <h2 class="ipp-vm-card__title">Vision Mission Core Values</h2>
      <p>To become a leading, trusted, and innovation-driven chemical manufacturer delivering sustainable solutions to industries across India and global markets.</p>
      <p><strong>Integrity · Quality · Commitment · Safety · Innovation · Sustainability</strong></p>
      <p>Our values guide decisions and operations — ensuring trust, safety, and environmental responsibility while pursuing innovation.</p>
    </article>
    <article class="ipp-vm-card ipp-vm-card--mission gs-reveal">
      <span class="ipp-vm-card__tag">Mission</span>
      <h2 class="ipp-vm-card__title">Our Mission</h2>
      <ul>
        <li>Deliver world-class quality at competitive pricing.</li>
        <li>Expand product capabilities through R&amp;D and process innovation.</li>
        <li>Maintain long-term customer relationships built on trust.</li>
        <li>Ensure safe, compliant, and eco-friendly operations.</li>
        <li>Achieve excellence through continuous improvement.</li>
      </ul>
    </article>
  </div>
  <section class="ipp-excellence">
    <div class="ipp-excellence__head gs-reveal">
      <span class="ipp-excellence__eyebrow">Excellence</span>
      <h2 class="ipp-excellence__title">Company Excellence</h2>
    </div>
    <div class="ipp-excellence__grid">${excellence}</div>
  </section>`;
}

function getPremiumIndustriesPage() {
  const intro = 'Nayara Industries serves a diverse range of industrial sectors with high-quality chemical products and reliable supply chain solutions from GIDC Ankleshwar.';
  const cards = INDUSTRIES_CARDS.map((c) => `
      <article class="ipp-ind-card gs-reveal">
        <div class="ipp-ind-card__head">
          <span class="ipp-ind-card__icon">${getIndustryIcon(c.icon)}</span>
          <h3 class="ipp-ind-card__title">${c.title}</h3>
        </div>
        <p class="ipp-ind-card__desc">${c.desc}</p>
        <div class="ipp-ind-card__tags">
          ${c.tags.map((t) => `<span class="ipp-ind-card__tag">${t}</span>`).join('')}
        </div>
      </article>`).join('');

  return `
  <section class="ipp-industries">
    <div class="ipp-industries__head gs-reveal">
      <h2 class="ipp-industries__title">Industries We Serve</h2>
      <p class="ipp-industries__intro">${intro}</p>
    </div>
    <div class="ipp-industries__grid">${cards}</div>
  </section>`;
}

const CAREERS_WHY = [
  { title: 'Career Growth', desc: 'We promote internal talent and support long-term development.', icon: 'growth', accent: '#0EA5E9' },
  { title: 'Safe Work Environment', desc: 'We follow strict PPE, SOP, and safety compliance at every level.', icon: 'safety', accent: '#10B981' },
  { title: 'Transparent Culture', desc: 'We believe in teamwork, honesty, and ethical industrial practices.', icon: 'culture', accent: '#8B5CF6' },
  { title: 'Modern Infrastructure', desc: 'Access to advanced reactors, QC labs, and automated systems.', icon: 'infra', accent: '#F59E0B' },
];

const CAREERS_JOBS = [
  {
    title: 'Production Supervisor',
    desc: 'Oversee production operations, ensure batch quality, safety compliance, and team coordination.',
    meta: ['Experience: 2–5 years', 'Chemical / Industrial background preferred', 'Location: GIDC Ankleshwar'],
    slug: 'Production',
  },
  {
    title: 'Quality Control Chemist',
    desc: 'Perform QC testing, maintain lab records, ensure product stability, and support documentation.',
    meta: ['Experience: 1–4 years', 'Knowledge of COA / MSDS / Titration', 'Location: Ankleshwar'],
    slug: 'Quality Control',
  },
  {
    title: 'Business Development Executive',
    desc: 'Develop new clients, manage relationships, support trading operations, and meet sales targets.',
    meta: ['Experience: 0–3 years', 'Chemical trading knowledge a plus', 'Location: Gujarat'],
    slug: 'Business Development Executive',
  },
];

const CAREERS_POSITIONS = [
  'Production Supervisor',
  'Quality Control Chemist',
  'Business Development Executive',
  'IT',
  'HR',
  'Marketing',
  'Logistics',
  'Finance',
  'Production',
  'Quality Control',
  'Mechanical',
  'Electrical',
  'Instrumentation',
  'Packing & Operations',
  'Administrative / Accounts',
  'R&D',
  'Formulation',
  'Utility',
  'Other',
];

function getCareerIcon(type) {
  const icons = {
    growth: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>',
    safety: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    culture: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    infra: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
  };
  return icons[type] || icons.growth;
}

function getPremiumCareersPage(basePath) {
  const whyCards = CAREERS_WHY.map((c) => `
      <article class="ipp-cr-why-card gs-reveal" style="--cr-accent:${c.accent}">
        <span class="ipp-cr-why-card__icon">${getCareerIcon(c.icon)}</span>
        <h3 class="ipp-cr-why-card__title">${c.title}</h3>
        <p class="ipp-cr-why-card__desc">${c.desc}</p>
      </article>`).join('');

  const jobCards = CAREERS_JOBS.map((j) => `
      <article class="ipp-cr-job-card gs-reveal">
        <h3 class="ipp-cr-job-card__title">${j.title}</h3>
        <p class="ipp-cr-job-card__desc">${j.desc}</p>
        <ul class="ipp-cr-job-card__meta">
          ${j.meta.map((m) => `<li>${m}</li>`).join('')}
        </ul>
        <a href="#apply" class="ipp-cr-job-card__btn magnetic-btn" data-position="${j.slug}">Apply Now</a>
      </article>`).join('');

  const positionOptions = CAREERS_POSITIONS.map((p) => `<option value="${p}">${p}</option>`).join('');

  return `
  <section class="ipp-cr-why">
    <div class="ipp-cr-why__inner">
      <header class="ipp-cr-why__head gs-reveal">
        <span class="ipp-cr-why__eyebrow">Why Join Us</span>
        <h2 class="ipp-cr-why__title">Why Work With Us?</h2>
        <p class="ipp-cr-why__lead">A workplace built on integrity, innovation, and continuous growth.</p>
      </header>
      <div class="ipp-cr-why__grid">${whyCards}</div>
    </div>
  </section>

  <section class="ipp-cr-jobs">
    <div class="ipp-cr-jobs__inner">
      <header class="ipp-cr-jobs__head gs-reveal">
        <span class="ipp-cr-jobs__eyebrow">Open Roles</span>
        <h2 class="ipp-cr-jobs__title">Current Job Openings</h2>
        <p class="ipp-cr-jobs__lead">Explore opportunities to be part of our growing industrial team.</p>
      </header>
      <div class="ipp-cr-jobs__grid">${jobCards}</div>
    </div>
  </section>

  <section class="ipp-cr-speculative gs-reveal">
    <div class="ipp-cr-speculative__inner">
      <h2 class="ipp-cr-speculative__title">Didn't Find a Suitable Role?</h2>
      <p class="ipp-cr-speculative__text">We are always looking for talented and motivated individuals to join our growing team.</p>
      <p class="ipp-cr-speculative__text"><strong>Share your resume with us and we will reach out when suitable opportunities arise.</strong></p>
      <a href="#apply" class="ipp-cr-speculative__link magnetic-btn">Send Your Resume</a>
    </div>
  </section>

  <section class="ipp-cr-apply" id="apply">
    <div class="ipp-cr-apply__inner">
      <div class="ipp-cr-apply__copy gs-reveal-left">
        <span class="ipp-cr-apply__eyebrow">How to Apply</span>
        <h2 class="ipp-cr-apply__title">Send Your Resume Now</h2>
        <div class="ipp-cr-life">
          <h3 class="ipp-cr-life__title">Life at Nayara Industries</h3>
          <p>At Nayara Industries, you will work in a professional environment where teamwork, accountability, and respect are core values. We encourage every employee to share ideas, take responsibility, and contribute toward operational excellence.</p>
          <p>Safety, quality, and continuous improvement guide everything we do.</p>
          <p>Build your career with Nayara Industries — a company committed to growth, safety, and innovation.</p>
          <p>Apply today and be part of our journey.</p>
        </div>
      </div>
      <div class="ipp-cr-form-wrap gs-reveal-right">
        <div class="ipp-cr-form-card">
          <h2 class="ipp-cr-form-card__title">Apply for a Position</h2>
          <p class="ipp-cr-form-card__sub">Please fill the form below and attach your resume. Our HR team will contact you shortly.</p>
          <form class="ipp-cr-form space-y-5" action="/api/careers" method="post" enctype="multipart/form-data" data-form="careers">
            <div>
              <label class="ipp-cr-form__label">Your Full Name *</label>
              <input type="text" name="name" placeholder="Enter your name" class="premium-input ipp-cr-form__input" required>
            </div>
            <div>
              <label class="ipp-cr-form__label">Email Address *</label>
              <input type="email" name="email" placeholder="Your Email (required)" class="premium-input ipp-cr-form__input" required>
            </div>
            <div>
              <label class="ipp-cr-form__label">Mobile Number *</label>
              <input type="tel" name="phone" placeholder="Enter your mobile number" class="premium-input ipp-cr-form__input" required>
            </div>
            <div>
              <label class="ipp-cr-form__label">Position Applying For *</label>
              <select name="position" class="premium-input ipp-cr-form__input ipp-cr-form__select" required>
                <option value="">Select a position</option>
                ${positionOptions}
              </select>
            </div>
            <div>
              <label class="ipp-cr-form__label">Message / Cover Note *</label>
              <textarea name="message" placeholder="Tell us briefly about your experience" class="premium-textarea ipp-cr-form__input" rows="4" required></textarea>
            </div>
            <div>
              <label class="ipp-cr-form__label">Upload Your Resume (PDF, DOC, DOCX) *</label>
              <input type="file" name="resume" class="premium-input ipp-cr-form__file" accept=".pdf,.doc,.docx" required>
            </div>
            <button type="submit" class="ipp-cr-form__submit magnetic-btn">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}

function getPageHero(title, breadcrumb, basePath, slug) {
  const heroImage = getPageImage(slug);
  const lead = PAGE_LEADS[slug] || '';
  const showCta = Boolean(CATEGORY_PRODUCTS[slug] || slug === 'product');
  const crumbs = breadcrumb.map((c, i) => {
    if (i === breadcrumb.length - 1) return `<span class="ph-banner__crumb-current">${c.label}</span>`;
    return `<a href="${basePath}${c.href}">${c.label}</a><span class="ph-banner__crumb-sep">/</span>`;
  }).join('');

  return `
  <section class="ph-banner ph-banner--bg">
    <div class="ph-banner__media" style="background-image:url('${heroImage}')" role="img" aria-label="${title}"></div>
    <div class="ph-banner__veil" aria-hidden="true"></div>
    <div class="ph-banner__inner ph-banner__inner--overlay">
      <div class="ph-banner__copy">
        <nav class="ph-banner__crumb" aria-label="Breadcrumb">
          <a href="${basePath}">Home</a>
          <span class="ph-banner__crumb-sep">/</span>
          ${crumbs}
        </nav>
        <p class="ph-banner__eyebrow">Nayara Industries</p>
        <h1 class="ph-banner__title">${title}</h1>
        ${lead ? `<p class="ph-banner__lead">${lead}</p>` : ''}
        ${showCta ? `<a href="${basePath}contact-us/" class="ph-banner__cta">Request Quote</a>` : ''}
      </div>
    </div>
  </section>`;
}

function getOtherServicesHub(basePath) {
  const cards = OTHER_SERVICES.map((s, i) => `
    <a href="${basePath}${s.href}" class="eb-prod card-3d gs-reveal group" style="text-decoration:none;color:inherit">
      <div class="eb-prod-inner" style="padding:0">
        <div class="relative overflow-hidden" style="height:180px">
          <img src="${s.image}" alt="${s.label}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;transition:transform 0.6s ease">
        </div>
        <div style="padding:1.5rem">
          <h3 class="eb-cell-title">${s.label}</h3>
          <p class="eb-cell-text">${s.excerpt}</p>
          <span class="sp-link mt-3 inline-flex items-center gap-1">Explore <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>
        </div>
      </div>
    </a>`).join('');

  return `
  <section class="eb-zone eb-zone--mesh eb-zone--blueprint">
    <div class="eb-inner">
      <header class="eb-head eb-head--center gs-reveal">
        <span class="sp-section-eyebrow">Beyond Chemicals</span>
        <h2 class="sp-section-title">Other Services</h2>
        <p class="sp-feature-text mt-4 max-w-2xl mx-auto">Nayara Industries delivers turnkey engineering, consultancy, and plant solutions for chemical, pharmaceutical, and industrial projects across India.</p>
      </header>
      <div class="eb-products-grid">
        ${cards}
      </div>
    </div>
  </section>`;
}

function getPremiumServiceLandingPage(p, basePath, opts = {}) {
  const {
    introContentFirst = false,
    showTimeline = true,
    showWhy = true,
    showServices = true,
    ctaButtonText = 'Contact Us',
    introEyebrow = 'Introduction',
  } = opts;

  const svcIcons = {
    'Plant Design & Layout': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    'Water Treatment Systems': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c-4 4-8 7-8 11a8 8 0 1016 0c0-4-4-7-8-11z"/></svg>',
    'Bottling & Packaging Lines': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>',
    'Commissioning & Trial Runs': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    'Quality & Lab Setup': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
    'Compliance Support': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    'ETP Design & Engineering': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>',
    'ETP Installation & Erection': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    'Upgradation & Expansion': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>',
    'O&M Support': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    'Compliance Assistance': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    'Project Planning & Feasibility': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>',
    'Statutory & Regulatory Support': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    'Plant Layout & Engineering': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    'Mechanical & Utility Installation': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    'Pre-Commissioning': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    'Trial Runs & Commissioning': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
    'Project Feasibility & DPR': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    'Process & Technology Advisory': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
    'Regulatory & Statutory Consultancy': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    'Plant Layout & Engineering Review': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    'Operational Excellence': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>',
    'Risk & Safety Consulting': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>',
  };

  const statsHtml = p.stats.map((s, i) => `
    <div class="bwm-float-stat gs-reveal card-3d" style="transition-delay:${i * 0.08}s" data-mouse-parallax="${8 + i * 4}">
      <p class="bwm-float-stat-num"><span data-counter="${s.num}" data-suffix="${s.suffix}">0</span></p>
      <p class="bwm-float-stat-label">${s.label}</p>
    </div>`).join('');

  const featureIcons = [
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c-4 4-8 7-8 11a8 8 0 1016 0c0-4-4-7-8-11z"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>',
  ];

  const featuresHtml = (p.whatIs?.features || []).map((f, i) => `
    <article class="bwm-feature-card card-3d gs-reveal">
      <div class="bwm-feature-icon">${featureIcons[i] || ''}</div>
      <p class="bwm-feature-text">${f}</p>
    </article>`).join('');

  const approachFeatureIcons = [
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
  ];

  const approachHtml = p.approach ? (() => {
    const cardsHtml = p.approach.features.map((f, i) => `
    <article class="bwm-feature-card bwm-approach-card card-3d gs-reveal">
      <div class="bwm-feature-icon">${approachFeatureIcons[i] || ''}</div>
      <p class="bwm-feature-text">${f}</p>
    </article>`).join('');
    return `
  <section class="bwm-zone bwm-zone--blueprint bwm-approach">
    <div class="bwm-inner">
      <header class="bwm-head bwm-head--center gs-reveal">
        <span class="sp-section-eyebrow">Methodology</span>
        <h2 class="bwm-section-title">${p.approach.title}</h2>
      </header>
      <div class="bwm-approach-grid">${cardsHtml}</div>
    </div>
  </section>`;
  })() : '';

  const servicesHtml = (p.services || []).map((s) => `
    <article class="bwm-svc-tile bwm-svc-tile--${s.span} card-3d gs-reveal">
      <div class="bwm-svc-img"><img src="${s.image}" alt="${s.title}" loading="lazy" decoding="async"></div>
      <div class="bwm-svc-body">
        <div class="bwm-svc-icon">${svcIcons[s.title] || ''}</div>
        <h3 class="bwm-svc-title">${s.title}</h3>
        <p class="bwm-svc-text">${s.text}</p>
        <span class="bwm-svc-arrow" aria-hidden="true"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>
      </div>
    </article>`).join('');

  const introCopy = `
        <div class="bwm-intro-copy gs-reveal-${introContentFirst ? 'left' : 'right'}">
          <div class="bwm-glass-card card-3d">
            <span class="sp-section-eyebrow">${introEyebrow}</span>
            <h2 class="bwm-section-title">${p.intro.title}</h2>
            <p class="bwm-section-text">${p.intro.text}</p>
          </div>
        </div>`;

  const introVisual = `
        <div class="bwm-intro-visual gs-reveal-${introContentFirst ? 'right' : 'left'} img-reveal">
          <div class="bwm-img-frame card-3d"><img src="${p.intro.image}" alt="${p.intro.title}" loading="lazy" decoding="async"></div>
          <span class="bwm-float-deco bwm-float-deco--1" aria-hidden="true"></span>
          <span class="bwm-float-deco bwm-float-deco--2" aria-hidden="true"></span>
        </div>`;

  const introGrid = introContentFirst
    ? `<div class="bwm-intro-grid bwm-intro-grid--content-first">${introCopy}${introVisual}</div>`
    : `<div class="bwm-intro-grid">${introVisual}${introCopy}</div>`;

  const timelineHtml = (p.timeline || []).map((step, i) => `
    <div class="bwm-timeline-step gs-reveal">
      <div class="bwm-timeline-dot">${i + 1}</div>
      <p class="bwm-timeline-label">${step}</p>
    </div>`).join('');

  const whyHtml = (p.why || []).map((w) => `
    <article class="bwm-why-card card-3d gs-reveal">
      <h3 class="bwm-why-title">${w.label}</h3>
      <p class="bwm-why-text">${w.sub}</p>
    </article>`).join('');

  const ttFeatureIcons = [
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  ];

  const technologyTransferHtml = p.technologyTransfer ? (() => {
    const tt = p.technologyTransfer;
    const ttCardsHtml = tt.features.map((f, i) => `
    <article class="bwm-tt-card card-3d gs-reveal">
      <div class="bwm-feature-icon">${ttFeatureIcons[i] || ''}</div>
      <p class="bwm-feature-text">${f}</p>
    </article>`).join('');
    return `
  <section class="bwm-zone bwm-zone--mesh bwm-tt">
    <div class="bwm-inner">
      <header class="bwm-head gs-reveal">
        <h2 class="bwm-section-title">${tt.title}</h2>
        <p class="bwm-section-text max-w-3xl">${tt.text}</p>
      </header>
      <div class="bwm-tt-split">
        <div class="bwm-tt-visual gs-reveal-left card-3d img-reveal">
          <div class="bwm-img-frame bwm-img-frame--tall"><img src="${tt.image}" alt="${tt.title}" loading="lazy" decoding="async"></div>
          <span class="bwm-float-deco bwm-float-deco--1" aria-hidden="true"></span>
        </div>
        <div class="bwm-tt-cards">${ttCardsHtml}</div>
      </div>
    </div>
  </section>`;
  })() : '';

  const ctaBg = p.cta.bg || p.hero.bg;

  return `
  <section class="bwm-hero" data-bwm-hero>
    <div class="bwm-hero-bg" style="background-image:url('${p.hero.bg}')"></div>
    <div class="bwm-hero-overlay"></div>
    <div class="bwm-hero-rays" aria-hidden="true"></div>
    <div class="bwm-hero-drops" aria-hidden="true">
      <span class="bwm-drop"></span><span class="bwm-drop"></span><span class="bwm-drop"></span>
      <span class="bwm-drop"></span><span class="bwm-drop"></span>
    </div>
    <div class="bwm-hero-inner">
      <div class="bwm-hero-glass gs-blur card-3d gs-reveal" data-mouse-parallax="10">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <a href="${basePath}">Home</a>
          <span class="page-hero-crumb-sep">/</span>
          <span class="page-hero-crumb-current">${p.breadcrumb}</span>
        </nav>
        <span class="bwm-hero-eyebrow">Nayara Industries</span>
        <h1 class="bwm-hero-title">${p.hero.title}</h1>
        <p class="bwm-hero-lead">${p.hero.intro}</p>
        <a href="${basePath}contact-us/" class="sp-btn sp-btn--primary magnetic-btn bwm-hero-cta">Contact Us</a>
      </div>
      <div class="bwm-hero-stats">${statsHtml}</div>
    </div>
    <div class="bwm-hero-accent"></div>
  </section>

  <section class="bwm-zone bwm-zone--mesh bwm-intro">
    <div class="bwm-inner">
      ${introGrid}
    </div>
  </section>

${p.whatIs ? `
  <section class="bwm-zone bwm-zone--blueprint bwm-what">
    <div class="bwm-inner">
      <header class="bwm-head gs-reveal">
        <h2 class="bwm-section-title">${p.whatIs.title}</h2>
        <p class="bwm-section-text max-w-3xl">${p.whatIs.text}</p>
      </header>
      <div class="bwm-what-bento">
        <div class="bwm-what-visual gs-reveal-left card-3d">
          <div class="bwm-img-frame bwm-img-frame--tall"><img src="${p.whatIs.image}" alt="${p.whatIs.title}" loading="lazy" decoding="async"></div>
          <div class="bwm-flow-diagram" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div class="bwm-what-cards">${featuresHtml}</div>
      </div>
    </div>
  </section>` : ''}

${showServices && p.services ? `
  <section class="bwm-zone bwm-zone--mesh bwm-services">
    <div class="bwm-inner">
      <header class="bwm-head bwm-head--center gs-blur">
        <span class="sp-section-eyebrow">Capabilities</span>
        <h2 class="bwm-section-title">${p.servicesTitle}</h2>
      </header>
      <div class="bwm-svc-bento">${servicesHtml}</div>
    </div>
  </section>` : ''}
${technologyTransferHtml}
${approachHtml}
${showTimeline ? `
  <section class="bwm-zone bwm-zone--industrial bwm-timeline">
    <div class="bwm-inner">
      <header class="bwm-head bwm-head--center gs-reveal">
        <span class="sp-section-eyebrow">Process</span>
      </header>
      <div class="bwm-timeline-track gs-reveal">${timelineHtml}</div>
    </div>
  </section>` : ''}
${showWhy ? `
  <section class="bwm-zone bwm-zone--mesh bwm-why">
    <div class="bwm-inner">
      <header class="bwm-head gs-reveal">
        <span class="sp-section-eyebrow">Excellence</span>
        <h2 class="bwm-section-title">${p.whyTitle}</h2>
      </header>
      <div class="bwm-why-grid">${whyHtml}</div>
    </div>
  </section>` : ''}

  <section class="bwm-zone bwm-cta" data-bwm-cta>
    <div class="bwm-cta-bg" style="background-image:url('${ctaBg}')"></div>
    <div class="bwm-cta-particles" aria-hidden="true">
      <span class="bwm-drop"></span><span class="bwm-drop"></span><span class="bwm-drop"></span>
    </div>
    <div class="bwm-inner relative">
      <div class="bwm-cta-glass gs-reveal card-3d">
        <div class="bwm-cta-accent-line"></div>
        <h2 class="bwm-cta-title">${p.cta.title}</h2>
        <p class="bwm-cta-text">${p.cta.text}</p>
        <a href="${basePath}contact-us/" class="sp-btn sp-btn--primary magnetic-btn bwm-cta-btn">${ctaButtonText}</a>
      </div>
    </div>
  </section>`;
}

function getPremiumBeveragesPage(basePath) {
  const p = BEVERAGES_PAGE;
  const whatImg = 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80';
  const gallery = [
    { src: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80', alt: 'Packaged drinking water bottles' },
    { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80', alt: 'Colorful beverage glasses' },
    { src: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80', alt: 'Fresh orange juice pour' },
    { src: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?auto=format&fit=crop&w=900&q=80', alt: 'Fresh fruit juice beverages' },
  ];

  const bullets = (p.whatIs.features || []).map((f) => `<li>${f}</li>`).join('');

  const serviceCards = (p.services || []).map((s, i) => `
    <article class="bwm-v2-svc bwm-v2-reveal" style="--i:${i}">
      <div class="bwm-v2-svc__media">
        <img src="${s.image}" alt="${s.title}" loading="lazy" decoding="async">
        <span class="bwm-v2-svc__glow" aria-hidden="true"></span>
      </div>
      <div class="bwm-v2-svc__body">
        <h3 class="bwm-v2-svc__title">${s.title}</h3>
        <p class="bwm-v2-svc__text">${s.text}</p>
      </div>
    </article>`).join('');

  const galleryCards = gallery.map((g, i) => `
    <figure class="bwm-v2-gallery__item bwm-v2-reveal" style="--i:${i}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy" decoding="async">
    </figure>`).join('');

  return `
  <section class="bwm-v2-hero">
    <div class="bwm-v2-hero__frame">
      <div class="bwm-v2-hero__bg" style="background-image:url('${p.hero.bg}')"></div>
      <div class="bwm-v2-hero__veil"></div>
      <div class="bwm-v2-hero__content bwm-v2-reveal" style="--i:0">
        <nav class="bwm-v2-breadcrumb" aria-label="Breadcrumb">
          <a href="${basePath}">Home</a>
          <span>/</span>
          <span>${p.breadcrumb}</span>
        </nav>
        <h1 class="bwm-v2-hero__title">${p.hero.title}</h1>
        <p class="bwm-v2-hero__lead">${p.hero.intro}</p>
        <a href="${basePath}contact-us/" class="bwm-v2-btn bwm-v2-btn--glass">Contact Us</a>
      </div>
    </div>
  </section>

  <section class="bwm-v2-zone bwm-v2-intro">
    <div class="bwm-v2-inner bwm-v2-reveal" style="--i:0">
      <h2 class="bwm-v2-heading">${p.intro.title}</h2>
      <p class="bwm-v2-text">${p.intro.text}</p>
    </div>
  </section>

  <section class="bwm-v2-zone bwm-v2-what">
    <div class="bwm-v2-inner bwm-v2-what__grid">
      <div class="bwm-v2-what__copy bwm-v2-reveal" style="--i:0">
        <h2 class="bwm-v2-heading">${p.whatIs.title}</h2>
        <p class="bwm-v2-text">${p.whatIs.text}</p>
        <ul class="bwm-v2-list">${bullets}</ul>
      </div>
      <div class="bwm-v2-what__visual bwm-v2-reveal" style="--i:1">
        <img src="${whatImg}" alt="Infused mineral water bottles" loading="lazy" decoding="async">
      </div>
    </div>
  </section>

  <section class="bwm-v2-zone bwm-v2-services">
    <div class="bwm-v2-inner">
      <h2 class="bwm-v2-heading bwm-v2-reveal">${p.servicesTitle}</h2>
      <div class="bwm-v2-svc-grid">${serviceCards}</div>
    </div>
  </section>

  <section class="bwm-v2-zone bwm-v2-gallery">
    <div class="bwm-v2-inner">
      <h2 class="bwm-v2-heading bwm-v2-reveal">Plant &amp; Packaging Insights</h2>
      <p class="bwm-v2-text bwm-v2-gallery__lead bwm-v2-reveal" style="--i:1">A closer look at water, bottling, and facility environments that shape modern beverage plants.</p>
      <div class="bwm-v2-gallery__grid">${galleryCards}</div>
    </div>
  </section>

  <section class="bwm-v2-zone bwm-v2-cta">
    <div class="bwm-v2-inner">
      <div class="bwm-v2-cta__panel bwm-v2-reveal">
        <h2 class="bwm-v2-heading">${p.cta.title}</h2>
        <p class="bwm-v2-text">${p.cta.text}</p>
        <a href="${basePath}contact-us/" class="bwm-v2-btn bwm-v2-btn--soft">Contact Us</a>
      </div>
    </div>
  </section>`;
}

function getPremiumEtpPage(basePath) {
  const p = ETP_PAGE;
  const gallery = [
    { src: 'https://nayaragroup.com/wp-content/uploads/2025/12/Water-Treatment-scaled.jpg', alt: 'Industrial effluent treatment facility' },
    { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80', alt: 'ETP clarifier tanks aerial view' },
    { src: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80', alt: 'Industrial plant infrastructure' },
    { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80', alt: 'Engineering and plant operations' },
  ];

  const bullets = (p.whatIs.features || []).map((f) => `<li>${f}</li>`).join('');

  const serviceCards = (p.services || []).map((s, i) => `
    <article class="etp-v2-svc etp-v2-reveal" style="--i:${i}">
      ${s.image ? `<div class="etp-v2-svc__media"><img src="${s.image}" alt="${s.title}" loading="lazy" decoding="async"><span class="etp-v2-svc__glow" aria-hidden="true"></span></div>` : ''}
      <div class="etp-v2-svc__body">
        <span class="etp-v2-svc__index" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="etp-v2-svc__title">${s.title}</h3>
        <p class="etp-v2-svc__text">${s.text}</p>
      </div>
    </article>`).join('');

  const galleryCards = gallery.map((g, i) => `
    <figure class="etp-v2-gallery__item etp-v2-reveal" style="--i:${i}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy" decoding="async">
    </figure>`).join('');

  return `
  <section class="etp-v2-hero">
    <div class="etp-v2-hero__frame">
      <div class="etp-v2-hero__bg" style="background-image:url('${p.hero.bg}')"></div>
      <div class="etp-v2-hero__veil"></div>
      <div class="etp-v2-hero__content etp-v2-reveal" style="--i:0">
        <nav class="etp-v2-breadcrumb" aria-label="Breadcrumb">
          <a href="${basePath}">Home</a>
          <span>/</span>
          <span>${p.breadcrumb}</span>
        </nav>
        <h1 class="etp-v2-hero__title">${p.hero.title}</h1>
        <p class="etp-v2-hero__lead">${p.hero.intro}</p>
        <a href="${basePath}contact-us/" class="etp-v2-btn etp-v2-btn--glass">${p.cta.btn || 'Contact Us'}</a>
      </div>
    </div>
  </section>

  <section class="etp-v2-zone etp-v2-intro">
    <div class="etp-v2-inner etp-v2-reveal" style="--i:0">
      <h2 class="etp-v2-heading">${p.intro.title}</h2>
      <p class="etp-v2-text">${p.intro.text}</p>
    </div>
  </section>

  <section class="etp-v2-zone etp-v2-what">
    <div class="etp-v2-inner etp-v2-what__grid">
      <div class="etp-v2-what__copy etp-v2-reveal" style="--i:0">
        <h2 class="etp-v2-heading">${p.whatIs.title}</h2>
        <p class="etp-v2-text">${p.whatIs.text}</p>
        <ul class="etp-v2-list">${bullets}</ul>
      </div>
      <div class="etp-v2-what__visual etp-v2-reveal" style="--i:1">
        <img src="${p.whatIs.image}" alt="Effluent treatment plant aerial view" loading="lazy" decoding="async">
      </div>
    </div>
  </section>

  <section class="etp-v2-zone etp-v2-services">
    <div class="etp-v2-inner">
      <h2 class="etp-v2-heading etp-v2-reveal">${p.servicesTitle}</h2>
      <div class="etp-v2-svc-grid">${serviceCards}</div>
    </div>
  </section>

  <section class="etp-v2-zone etp-v2-gallery">
    <div class="etp-v2-inner">
      <h2 class="etp-v2-heading etp-v2-reveal">Treatment Plant Insights</h2>
      <p class="etp-v2-text etp-v2-gallery__lead etp-v2-reveal" style="--i:1">Facilities and process environments that define reliable industrial effluent treatment.</p>
      <div class="etp-v2-gallery__grid">${galleryCards}</div>
    </div>
  </section>

  <section class="etp-v2-zone etp-v2-cta">
    <div class="etp-v2-inner">
      <div class="etp-v2-cta__panel etp-v2-reveal">
        <h2 class="etp-v2-heading">${p.cta.title}</h2>
        <p class="etp-v2-text">${p.cta.text}</p>
        <a href="${basePath}contact-us/" class="etp-v2-btn etp-v2-btn--soft">${p.cta.btn || 'Contact Us'}</a>
      </div>
    </div>
  </section>`;
}

function getServicePremiumV2Page(p, basePath, options = {}) {
  const {
    showServices = true,
    gallery = null,
    galleryTitle = 'Project Insights',
    galleryLead = 'A closer look at the environments and systems that shape industrial project delivery.',
    extraSections = '',
  } = options;

  const ctaBtn = (p.cta && p.cta.btn) || 'Contact Us';
  const bullets = ((p.whatIs && p.whatIs.features) || []).map((f) => `<li>${f}</li>`).join('');

  const serviceCards = ((p.services || [])).map((s, i) => `
    <article class="svc-v2-svc svc-v2-reveal" style="--i:${i}">
      ${s.image ? `<div class="svc-v2-svc__media"><img src="${s.image}" alt="${s.title}" loading="lazy" decoding="async"><span class="svc-v2-svc__glow" aria-hidden="true"></span></div>` : ''}
      <div class="svc-v2-svc__body">
        <span class="svc-v2-svc__index" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="svc-v2-svc__title">${s.title}</h3>
        <p class="svc-v2-svc__text">${s.text}</p>
      </div>
    </article>`).join('');

  const galleryItems = (gallery || [
    { src: p.hero.bg, alt: p.hero.title },
    { src: (p.intro && p.intro.image) || p.hero.bg, alt: (p.intro && p.intro.title) || p.hero.title },
    { src: (p.whatIs && p.whatIs.image) || p.hero.bg, alt: (p.whatIs && p.whatIs.title) || p.hero.title },
    { src: (p.cta && p.cta.bg) || p.hero.bg, alt: 'Nayara Industries facility' },
  ]).map((g, i) => `
    <figure class="svc-v2-gallery__item svc-v2-reveal" style="--i:${i}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy" decoding="async">
    </figure>`).join('');

  const whatHtml = p.whatIs ? `
  <section class="svc-v2-zone svc-v2-what">
    <div class="svc-v2-inner svc-v2-what__grid">
      <div class="svc-v2-what__copy svc-v2-reveal" style="--i:0">
        <h2 class="svc-v2-heading">${p.whatIs.title}</h2>
        <p class="svc-v2-text">${p.whatIs.text}</p>
        ${bullets ? `<ul class="svc-v2-list">${bullets}</ul>` : ''}
      </div>
      <div class="svc-v2-what__visual svc-v2-reveal" style="--i:1">
        <img src="${p.whatIs.image}" alt="${p.whatIs.title}" loading="lazy" decoding="async">
      </div>
    </div>
  </section>` : '';

  const servicesHtml = showServices && p.services && p.services.length ? `
  <section class="svc-v2-zone svc-v2-services">
    <div class="svc-v2-inner">
      <h2 class="svc-v2-heading svc-v2-reveal">${p.servicesTitle || 'Our Services'}</h2>
      <div class="svc-v2-svc-grid">${serviceCards}</div>
    </div>
  </section>` : '';

  return `
  <section class="svc-v2-hero">
    <div class="svc-v2-hero__frame">
      <div class="svc-v2-hero__bg" style="background-image:url('${p.hero.bg}')"></div>
      <div class="svc-v2-hero__veil"></div>
      <div class="svc-v2-hero__content svc-v2-reveal" style="--i:0">
        <nav class="svc-v2-breadcrumb" aria-label="Breadcrumb">
          <a href="${basePath}">Home</a>
          <span>/</span>
          <span>${p.breadcrumb}</span>
        </nav>
        <h1 class="svc-v2-hero__title">${p.hero.title}</h1>
        <p class="svc-v2-hero__lead">${p.hero.intro}</p>
        <a href="${basePath}contact-us/" class="svc-v2-btn svc-v2-btn--glass">${ctaBtn}</a>
      </div>
    </div>
  </section>

  <section class="svc-v2-zone svc-v2-intro">
    <div class="svc-v2-inner svc-v2-reveal" style="--i:0">
      <h2 class="svc-v2-heading">${p.intro.title}</h2>
      <p class="svc-v2-text">${p.intro.text}</p>
    </div>
  </section>

  ${whatHtml}
  ${servicesHtml}
  ${extraSections}

  <section class="svc-v2-zone svc-v2-gallery">
    <div class="svc-v2-inner">
      <h2 class="svc-v2-heading svc-v2-reveal">${galleryTitle}</h2>
      <p class="svc-v2-text svc-v2-gallery__lead svc-v2-reveal" style="--i:1">${galleryLead}</p>
      <div class="svc-v2-gallery__grid">${galleryItems}</div>
    </div>
  </section>

  <section class="svc-v2-zone svc-v2-cta">
    <div class="svc-v2-inner">
      <div class="svc-v2-cta__panel svc-v2-reveal">
        <h2 class="svc-v2-heading">${p.cta.title}</h2>
        <p class="svc-v2-text">${p.cta.text}</p>
        <a href="${basePath}contact-us/" class="svc-v2-btn svc-v2-btn--soft">${ctaBtn}</a>
      </div>
    </div>
  </section>`;
}

function getPremiumGreenfieldPage(basePath) {
  return getServicePremiumV2Page(GREENFIELD_PAGE, basePath, {
    galleryTitle: 'Plant Commissioning Insights',
    galleryLead: 'From layout planning to trial production — environments that define greenfield execution.',
  });
}

function getPremiumProcessDevelopmentPage(basePath) {
  const tt = PROCESS_DEVELOPMENT_PAGE.technologyTransfer;
  const ttImages = [
    'https://images.unsplash.com/photo-1532187863486-abf9db5811f6?auto=format&fit=crop&w=800&q=80',
    'https://nayaragroup.com/wp-content/uploads/2026/01/lab-technician-dressed-protective-suit-as-safety-precaution-looking-test-tube-scaled-1.jpg',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    'https://nayaragroup.com/wp-content/uploads/2025/12/environmental-pollution-factory-exterior.jpg',
  ];
  const ttCards = (tt.features || []).map((f, i) => `
    <article class="svc-v2-svc svc-v2-reveal" style="--i:${i}">
      <div class="svc-v2-svc__media"><img src="${ttImages[i % ttImages.length]}" alt="${f}" loading="lazy" decoding="async"><span class="svc-v2-svc__glow" aria-hidden="true"></span></div>
      <div class="svc-v2-svc__body">
        <span class="svc-v2-svc__index" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="svc-v2-svc__title">${f}</h3>
        <p class="svc-v2-svc__text">Structured support for reliable transfer into commercial manufacturing.</p>
      </div>
    </article>`).join('');

  const extraSections = `
  <section class="svc-v2-zone svc-v2-what">
    <div class="svc-v2-inner svc-v2-what__grid">
      <div class="svc-v2-what__copy svc-v2-reveal" style="--i:0">
        <h2 class="svc-v2-heading">${tt.title}</h2>
        <p class="svc-v2-text">${tt.text}</p>
      </div>
      <div class="svc-v2-what__visual svc-v2-reveal" style="--i:1">
        <img src="${tt.image}" alt="${tt.title}" loading="lazy" decoding="async">
      </div>
    </div>
  </section>
  <section class="svc-v2-zone svc-v2-services">
    <div class="svc-v2-inner">
      <h2 class="svc-v2-heading svc-v2-reveal">Technology Transfer Capabilities</h2>
      <div class="svc-v2-svc-grid">${ttCards}</div>
    </div>
  </section>`;

  return getServicePremiumV2Page(PROCESS_DEVELOPMENT_PAGE, basePath, {
    showServices: false,
    extraSections,
    galleryTitle: 'Lab to Plant Insights',
    galleryLead: 'Development and transfer environments that connect R&D with commercial production.',
  });
}

function getPremiumConsultancyPage(basePath) {
  const approach = CONSULTANCY_PAGE.approach;
  const approachImages = [
    'https://nayaragroup.com/wp-content/uploads/2026/01/Consultancy-ServiceS-scaled.jpg',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1532187863486-abf9db5811f6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  ];
  const approachCards = ((approach && approach.features) || []).map((f, i) => `
    <article class="svc-v2-svc svc-v2-reveal" style="--i:${i}">
      <div class="svc-v2-svc__media"><img src="${approachImages[i % approachImages.length]}" alt="${f}" loading="lazy" decoding="async"><span class="svc-v2-svc__glow" aria-hidden="true"></span></div>
      <div class="svc-v2-svc__body">
        <span class="svc-v2-svc__index" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="svc-v2-svc__title">${f}</h3>
        <p class="svc-v2-svc__text">Practical advisory support aligned to industrial project goals.</p>
      </div>
    </article>`).join('');

  const extraSections = approach ? `
  <section class="svc-v2-zone svc-v2-services">
    <div class="svc-v2-inner">
      <h2 class="svc-v2-heading svc-v2-reveal">${approach.title}</h2>
      <div class="svc-v2-svc-grid">${approachCards}</div>
    </div>
  </section>` : '';

  return getServicePremiumV2Page(CONSULTANCY_PAGE, basePath, {
    showServices: true,
    extraSections,
    galleryTitle: 'Consultancy Insights',
    galleryLead: 'Advisory contexts across planning, compliance, engineering, and operational excellence.',
  });
}

function getPremiumBeveragesPageLegacy(basePath) {
  const p = BEVERAGES_PAGE;
  const svcIcons = {
    'Plant Design & Layout': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    'Water Treatment Systems': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c-4 4-8 7-8 11a8 8 0 1016 0c0-4-4-7-8-11z"/></svg>',
    'Bottling & Packaging Lines': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>',
    'Commissioning & Trial Runs': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    'Quality & Lab Setup': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
    'Compliance Support': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
  };

  const statsHtml = p.stats.map((s, i) => `
    <div class="bwm-float-stat gs-reveal card-3d" style="transition-delay:${i * 0.08}s" data-mouse-parallax="${8 + i * 4}">
      <p class="bwm-float-stat-num"><span data-counter="${s.num}" data-suffix="${s.suffix}">0</span></p>
      <p class="bwm-float-stat-label">${s.label}</p>
    </div>`).join('');

  const featureIcons = [
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c-4 4-8 7-8 11a8 8 0 1016 0c0-4-4-7-8-11z"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  ];

  const featuresHtml = p.whatIs.features.map((f, i) => `
    <article class="bwm-feature-card card-3d gs-reveal">
      <div class="bwm-feature-icon">${featureIcons[i] || ''}</div>
      <p class="bwm-feature-text">${f}</p>
    </article>`).join('');

  const servicesHtml = p.services.map((s) => `
    <article class="bwm-svc-tile bwm-svc-tile--${s.span} card-3d gs-reveal">
      <div class="bwm-svc-img"><img src="${s.image}" alt="${s.title}" loading="lazy" decoding="async"></div>
      <div class="bwm-svc-body">
        <div class="bwm-svc-icon">${svcIcons[s.title] || ''}</div>
        <h3 class="bwm-svc-title">${s.title}</h3>
        <p class="bwm-svc-text">${s.text}</p>
      </div>
    </article>`).join('');

  const timelineHtml = p.timeline.map((step, i) => `
    <div class="bwm-timeline-step gs-reveal">
      <div class="bwm-timeline-dot">${i + 1}</div>
      <p class="bwm-timeline-label">${step}</p>
    </div>`).join('');

  const whyHtml = p.why.map((w) => `
    <article class="bwm-why-card card-3d gs-reveal">
      <h3 class="bwm-why-title">${w.label}</h3>
      <p class="bwm-why-text">${w.sub}</p>
    </article>`).join('');

  return `
  <section class="bwm-hero" data-bwm-hero>
    <div class="bwm-hero-bg" style="background-image:url('${p.hero.bg}')"></div>
    <div class="bwm-hero-overlay"></div>
    <div class="bwm-hero-rays" aria-hidden="true"></div>
    <div class="bwm-hero-drops" aria-hidden="true">
      <span class="bwm-drop"></span><span class="bwm-drop"></span><span class="bwm-drop"></span>
      <span class="bwm-drop"></span><span class="bwm-drop"></span>
    </div>
    <div class="bwm-hero-inner">
      <div class="bwm-hero-glass gs-blur card-3d gs-reveal" data-mouse-parallax="10">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <a href="${basePath}">Home</a>
          <span class="page-hero-crumb-sep">/</span>
          <span class="page-hero-crumb-current">${p.breadcrumb}</span>
        </nav>
        <span class="bwm-hero-eyebrow">Nayara Industries</span>
        <h1 class="bwm-hero-title">${p.hero.title}</h1>
        <p class="bwm-hero-lead">${p.hero.intro}</p>
        <a href="${basePath}contact-us/" class="sp-btn sp-btn--primary magnetic-btn bwm-hero-cta">Contact Us</a>
      </div>
      <div class="bwm-hero-stats">${statsHtml}</div>
    </div>
    <div class="bwm-hero-accent"></div>
  </section>

  <section class="bwm-zone bwm-zone--mesh bwm-intro">
    <div class="bwm-inner">
      <div class="bwm-intro-grid">
        <div class="bwm-intro-visual gs-reveal-left img-reveal">
          <div class="bwm-img-frame card-3d"><img src="${p.intro.image}" alt="${p.intro.title}" loading="lazy" decoding="async"></div>
        </div>
        <div class="bwm-intro-copy gs-reveal-right">
          <div class="bwm-glass-card card-3d">
            <span class="sp-section-eyebrow">Introduction</span>
            <h2 class="bwm-section-title">${p.intro.title}</h2>
            <p class="bwm-section-text">${p.intro.text}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bwm-zone bwm-zone--blueprint bwm-what">
    <div class="bwm-inner">
      <header class="bwm-head gs-reveal">
        <h2 class="bwm-section-title">${p.whatIs.title}</h2>
        <p class="bwm-section-text max-w-3xl">${p.whatIs.text}</p>
      </header>
      <div class="bwm-what-bento">
        <div class="bwm-what-visual gs-reveal-left card-3d">
          <div class="bwm-img-frame bwm-img-frame--tall"><img src="${p.whatIs.image}" alt="${p.whatIs.title}" loading="lazy" decoding="async"></div>
          <div class="bwm-flow-diagram" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div class="bwm-what-cards">${featuresHtml}</div>
      </div>
    </div>
  </section>

  <section class="bwm-zone bwm-zone--mesh bwm-services">
    <div class="bwm-inner">
      <header class="bwm-head bwm-head--center gs-blur">
        <span class="sp-section-eyebrow">Capabilities</span>
        <h2 class="bwm-section-title">${p.servicesTitle}</h2>
      </header>
      <div class="bwm-svc-bento">${servicesHtml}</div>
    </div>
  </section>

  <section class="bwm-zone bwm-zone--industrial bwm-timeline">
    <div class="bwm-inner">
      <header class="bwm-head bwm-head--center gs-reveal">
        <span class="sp-section-eyebrow">Process</span>
      </header>
      <div class="bwm-timeline-track gs-reveal">${timelineHtml}</div>
    </div>
  </section>

  <section class="bwm-zone bwm-zone--mesh bwm-why">
    <div class="bwm-inner">
      <header class="bwm-head gs-reveal">
        <span class="sp-section-eyebrow">Excellence</span>
        <h2 class="bwm-section-title">${p.whyTitle}</h2>
      </header>
      <div class="bwm-why-grid">${whyHtml}</div>
    </div>
  </section>

  <section class="bwm-zone bwm-cta">
    <div class="bwm-cta-bg"></div>
    <div class="bwm-inner relative">
      <div class="bwm-cta-glass gs-reveal card-3d">
        <div class="bwm-cta-accent-line"></div>
        <h2 class="bwm-cta-title">${p.cta.title}</h2>
        <p class="bwm-cta-text">${p.cta.text}</p>
        <a href="${basePath}contact-us/" class="sp-btn sp-btn--primary magnetic-btn bwm-cta-btn">Contact Us</a>
      </div>
    </div>
  </section>`;
}

function getPremiumContactSection(basePath) {
  const c = CONTACT_PAGE;
  const icons = {
    location: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    email: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    hr: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    phone: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
  };

  const cardsHtml = c.cards.map((card) => {
    let body = '';
    if (card.type === 'location') {
      body = `<p class="eb-connect-card-text">${card.address}</p>`;
    } else if (card.type === 'email') {
      body = `<p class="eb-connect-card-sub">${card.subtitle}</p>${card.emails.map((e) => `<a href="mailto:${e}" class="eb-connect-link">${e}</a>`).join('')}`;
    } else if (card.type === 'hr') {
      body = `<p class="eb-connect-card-sub">${card.subtitle}</p><a href="mailto:${card.email}" class="eb-connect-link">${card.email}</a>`;
    } else if (card.type === 'phone') {
      body = `<p class="eb-connect-card-text">Mobile: <a href="tel:+918511163373" class="eb-connect-link inline">+91 85111 63373</a></p><p class="eb-connect-card-text">WhatsApp: <a href="https://wa.me/918511163373" class="eb-connect-link inline" target="_blank" rel="noopener noreferrer">+91 85111 63373</a></p>`;
    }
    return `
    <article class="eb-connect-card eb-connect-card--${card.type} card-3d gs-reveal">
      <span class="eb-connect-icon-ring" aria-hidden="true"></span>
      <div class="eb-connect-card-inner">
        <div class="eb-connect-icon">${icons[card.type]}</div>
        <h3 class="eb-connect-card-title">${card.title}</h3>
        ${body}
      </div>
    </article>`;
  }).join('');

  const f = c.formLabels;
  const headlineParts = c.headline.split('NAYARA GROUP');
  const headlineHtml = headlineParts.length > 1
    ? `${headlineParts[0]}<span class="eb-connect-accent">NAYARA GROUP</span>${headlineParts[1] || ''}`
    : c.headline;

  return `
  <section class="eb-zone eb-connect-zone eb-zone--mesh eb-zone--blueprint">
    <div class="eb-inner">
      <header class="eb-connect-head gs-reveal">
        <h2 class="eb-connect-headline">${headlineHtml}</h2>
        <p class="eb-connect-tagline">${c.tagline}</p>
      </header>
      <div class="eb-connect-layout">
        <div class="eb-connect-bento gs-reveal-left">
          ${cardsHtml}
        </div>
        <div class="eb-connect-form eb-form-glass card-3d gs-reveal-right">
          <form action="/api/contact" method="post" class="space-y-5" data-form="contact">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="form-group">
                <input type="text" id="name" name="name" placeholder=" " class="premium-input peer" required>
                <label for="name">${f.name}</label>
              </div>
              <div class="form-group">
                <input type="email" id="email" name="email" placeholder=" " class="premium-input peer" required>
                <label for="email">${f.email}</label>
              </div>
            </div>
            <div class="form-group">
              <input type="text" id="subject" name="subject" placeholder=" " class="premium-input peer">
              <label for="subject">${f.subject}</label>
            </div>
            <div class="form-group">
              <textarea id="message" name="message" placeholder=" " class="premium-textarea peer" rows="5"></textarea>
              <label for="message">${f.message}</label>
            </div>
            <button type="submit" class="sp-btn sp-btn--primary magnetic-btn">${f.submit}</button>
          </form>
        </div>
      </div>
      <div class="eb-connect-map eb-map-wrap gs-reveal">
        <iframe src="${c.mapEmbed}" loading="lazy" allowfullscreen title="Nayara Industries Location"></iframe>
      </div>
    </div>
  </section>`;
}

function getContactForm(basePath) {
  return `
  <section class="sp-zone sp-zone--mesh">
    <div class="sp-zone-inner">
      <div class="sp-contact">
        <div class="sp-contact-copy gs-reveal-left">
          <span class="sp-section-eyebrow">Get in touch</span>
          <h2 class="sp-section-title mb-4">Send us a message</h2>
          <p class="sp-feature-text">Connect with our team for quotations, specifications, and custom sourcing.</p>
        </div>
        <div class="sp-contact-form-wrap gs-reveal-right card-3d">
          <form action="/api/contact" method="post" class="space-y-5" data-form="contact">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="form-group">
                <input type="text" id="name" name="name" placeholder=" " class="premium-input peer" required>
                <label for="name">Your name</label>
              </div>
              <div class="form-group">
                <input type="email" id="email" name="email" placeholder=" " class="premium-input peer" required>
                <label for="email">Your email</label>
              </div>
            </div>
            <div class="form-group">
              <input type="text" id="subject" name="subject" placeholder=" " class="premium-input peer">
              <label for="subject">Subject</label>
            </div>
            <div class="form-group">
              <textarea id="message" name="message" placeholder=" " class="premium-textarea peer" rows="5"></textarea>
              <label for="message">Your message (optional)</label>
            </div>
            <button type="submit" class="sp-btn sp-btn--primary magnetic-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}

function getCtaSection(basePath) {
  return `
  <section class="sp-zone pc-cta relative overflow-hidden">
    <div class="sp-zone-inner relative">
      <div class="sp-contact pc-cta__inner">
        <div class="sp-contact-copy gs-reveal-left">
          <span class="sp-section-eyebrow">Partner with us</span>
          <h2 class="sp-section-title mb-4">Ready to Partner With Us?</h2>
          <p class="sp-feature-text max-w-lg">Connect with Nayara Industries for quotations, product specifications, MSDS/TDS documentation, or custom sourcing requirements.</p>
        </div>
        <div class="sp-contact-form-wrap pc-cta__action gs-reveal-right flex items-center justify-center">
          <a href="${basePath}contact-us/" class="sp-btn sp-btn--primary magnetic-btn text-lg px-10 py-5">Get a Quotation</a>
        </div>
      </div>
    </div>
  </section>`;
}

function getStatsSection() {
  return `
  <section class="sp-zone" style="padding-top:3rem;padding-bottom:3rem">
    <div class="sp-zone-inner">
      <div class="sp-bento" style="grid-template-columns:repeat(3,1fr)">
        <article class="sp-tile sp-tile--stat card-3d gs-scale text-center">
          <div class="sp-tile-inner">
            <p class="sp-stat-label">Products</p>
            <p class="sp-stat-num"><span data-counter="120" data-suffix="+">0</span></p>
          </div>
        </article>
        <article class="sp-tile sp-tile--stat card-3d gs-scale text-center">
          <div class="sp-tile-inner">
            <p class="sp-stat-label">Categories</p>
            <p class="sp-stat-num"><span data-counter="20" data-suffix="+">0</span></p>
          </div>
        </article>
        <article class="sp-tile sp-tile--stat card-3d gs-scale text-center">
          <div class="sp-tile-inner">
            <p class="sp-stat-label">I.W.S</p>
            <p class="sp-stat-num"><span data-counter="20" data-suffix="+">0</span></p>
          </div>
        </article>
      </div>
    </div>
  </section>`;
}

const CATEGORY_PRODUCTS = {
  'solvents': { label: 'Solvents', tone: 0, items: ['Acetone', 'Bromin', 'Toluene', 'Isopropyl Alcohol (IPA)', 'Ethylene Glycol', 'Ethyl Acetate', 'Butanol', 'Acetic Acid', 'Methylene Chloride (MDC)', 'KBR', 'HBR', 'NABR', 'KCL', 'Pyridine'] },
  'acids-alkalies': { label: 'Acids & Alkalies', tone: 1, items: ['Sulfuric Acid', 'Phosphoric Acid', 'Boric Acid', 'Hydrochloric Acid', 'Nitric Acid', 'Caustic Soda Flakes', 'Caustic Potash', 'Citric Acid', 'Acetic Acid', 'Sulfamic Acid', 'Ammonium Sulphate', 'Sodium Lauryl Sulphate Powder', 'Di-Calcium Phosphate', 'Magnesium Oxide', 'Soda Ash', 'Potassium Carbonate'] },
  'intermediates': { label: 'Intermediates', tone: 2, items: ['MCA (Mono Chloro Acetic Acid)', 'Chlorinated Paraffin', 'Sodium Acetate', 'Sodium Formate', 'DMF', 'DMAc', 'Sodium Mono Chloro Acetate (SMCA)', 'Thiophanate Methyl (TPM)', 'Pymetrozine (PMT)', 'Chloraniliprole (CTPR)', 'Tebuconazole'] },
  'pharma-raw-materials': { label: 'Pharma Raw Materials', tone: 3, items: ['API Bulk Drugs', 'Lactose', 'Magnesium Stearate', 'Talc Powder', 'MCC (Microcrystalline Cellulose)'] },
  'textile-chemicals': { label: 'Textile Chemicals', tone: 4, items: ['Softeners', 'Dye Fixing Agents', 'Wetting Agents', 'Detergents', 'Scouring Agents', 'Enzymes'] },
  'water-treatment-chemicals': { label: 'Water Treatment Chemicals', tone: 5, items: ['Alum', 'Hydrogen Peroxide', 'Poly-Aluminum Chloride', 'Feric Aluminium Sulphate', 'Sodium Chloride', 'Ferrous Chloride', 'Ferric Chloride', 'Polyelectrolyte', 'Chlorine Powder', 'Sodium Hypochlorite', 'Activated Carbon', 'Antiscalants'] },
  'agro-chemicals': { label: 'Agro / Specialty Chemicals', tone: 0, items: ['Superplasticizers', 'Waterproofing Chemicals', 'Tile Adhesives', 'Epoxy Resin', 'Grouts'] },
  'dyes-dye-intermediates': { label: 'Dyes & Dye Intermediates', tone: 1, items: ['Reactive Dyes', 'Acid Dyes', 'Direct Dyes', 'Vat Dyes', 'Pigments', 'Naphthalene Intermediates'] },
  'laboratory-chemicals': { label: 'Laboratory Chemicals', tone: 2, items: ['Laboratory Acids', 'LR Grade Solvents', 'Indicators', 'Reagents', 'Buffer Solutions'] },
  'detergent-chemicals': { label: 'Detergent Chemicals', tone: 3, items: ['STPP', 'SLES Needles', 'SLES Paste', 'Acid Thickener', 'Turkish Red Oil', 'Creosote Oil', 'Alfox 200', 'Castor Oil'] },
  'industrial-salts': { label: 'Industrial Salts', tone: 4, items: ['Calcium Chloride Prills', 'Calcium Chloride Powder', 'Calcium Chloride Lumps', 'Aluminum Chloride', 'Potassium Chloride', 'Sodium Carbonate', 'Sodium Bi-Carbonate', 'Sodium Sulphate', 'Sodium Nitrate', 'Potassium Nitrate'] },
};

function getCategoryProductsSection(slug, basePath) {
  const cat = CATEGORY_PRODUCTS[slug];
  if (!cat) return '';

  const cards = cat.items.map((name) => `
    <article class="pc-card">
      <h3 class="pc-card__title">${name}</h3>
      <a href="${basePath}contact-us/" class="pc-card__btn">Enquire</a>
    </article>`).join('');

  return `
  <section class="pc-products" data-tone="${cat.tone}" id="category-products">
    <div class="pc-products__inner">
      <header class="pc-products__head">
        <span class="pc-products__bar" aria-hidden="true"></span>
        <div>
          <h2 class="pc-products__title">${cat.label}</h2>
          <p class="pc-products__count">${cat.items.length} products available</p>
        </div>
      </header>
      <div class="pc-products__grid">
        ${cards}
      </div>
    </div>
  </section>`;
}

function getProductGrid(basePath) {
  const categories = [
    { name: 'Solvents', href: 'solvents/', slug: 'solvents' },
    { name: 'Acids & Alkalies', href: 'acids-alkalies/', slug: 'acids-alkalies' },
    { name: 'Intermediates', href: 'intermediates/', slug: 'intermediates' },
    { name: 'Pharma Raw Materials', href: 'pharma-raw-materials/', slug: 'pharma-raw-materials' },
    { name: 'Textile Chemicals', href: 'textile-chemicals/', slug: 'textile-chemicals' },
    { name: 'Water Treatment', href: 'water-treatment-chemicals/', slug: 'water-treatment-chemicals' },
    { name: 'Agro Chemicals', href: 'agro-chemicals/', slug: 'agro-chemicals' },
    { name: 'Dyes & Intermediates', href: 'dyes-dye-intermediates/', slug: 'dyes-dye-intermediates' },
    { name: 'Laboratory Chemicals', href: 'laboratory-chemicals/', slug: 'laboratory-chemicals' },
    { name: 'Detergent Chemicals', href: 'detergent-chemicals/', slug: 'detergent-chemicals' },
    { name: 'Industrial Salts', href: 'industrial-salts/', slug: 'industrial-salts' },
  ];

  return `
  <section class="sp-zone pc-catalog">
    <div class="sp-zone-inner">
      <div class="sp-section-head gs-blur mb-12">
        <span class="sp-section-eyebrow">Catalogue</span>
        <h2 class="sp-section-title">Our Product Categories</h2>
      </div>
      <div class="sp-bento sp-bento--catalog pc-catalog__grid">
        ${categories.map((c) => `
        <a href="${basePath}${c.href}" class="sp-tile card-3d gs-reveal group pc-catalog__card">
          <div class="sp-tile-inner">
            <div class="sp-product-visual pc-catalog__visual"><img src="${getPageImage(c.slug)}" alt="${c.name}" loading="lazy" decoding="async"></div>
            <h3 class="sp-product-name">${c.name}</h3>
            <span class="sp-link">Explore <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </section>`;
}

function generatePage(slug, data) {
  if (SKIP_SLUGS.includes(slug)) return;

  const title = data.title.replace(/&#8211;|&amp;/g, m => m === '&#8211;' ? '–' : '&');
  const description = (data.excerpt || title).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().substring(0, 160);
  const content = cleanCmsContent(data.content, slug);
  const basePath = '../';
  const dir = path.join(__dirname, slug);
  fs.mkdirSync(dir, { recursive: true });

  let mainContent = '';
  const breadcrumb = [{ label: title, href: '' }];

  if (slug === 'contact-us') {
    mainContent = getPremiumContactSection(basePath);
  } else if (slug === 'consultancy') {
    mainContent = getPremiumConsultancyPage(basePath);
  } else if (slug === 'beverages-mineral-water') {
    mainContent = getPremiumBeveragesPage(basePath);
  } else if (slug === 'etp-solutions') {
    mainContent = getPremiumEtpPage(basePath);
  } else if (slug === 'greenfield-projects') {
    mainContent = getPremiumGreenfieldPage(basePath);
  } else if (slug === 'process-development') {
    mainContent = getPremiumProcessDevelopmentPage(basePath);
  } else if (slug === 'product') {
    mainContent = getStatsSection() + getProductGrid(basePath);
  } else if (slug === 'about-us') {
    mainContent = getPremiumAboutPage(basePath, content);
  } else if (slug === 'industries-we-serve') {
    mainContent = getPremiumIndustriesPage();
  } else if (slug === 'careers') {
    mainContent = getPremiumCareersPage(basePath);
  } else if (slug === 'other-services') {
    mainContent = getOtherServicesHub(basePath);
  } else if (CATEGORY_PRODUCTS[slug]) {
    mainContent = getPremiumCategoryIntro(content || `<p>${description}</p>`, slug, title)
      + getCategoryProductsSection(slug, basePath);
  } else {
    mainContent = getContentSection(content || `<p>${description}</p>`, slug, title);
  }

  const isBeveragesPage = slug === 'beverages-mineral-water';
  const isEtpPage = slug === 'etp-solutions';
  const isSharedServicePremium = slug === 'greenfield-projects' || slug === 'process-development' || slug === 'consultancy';
  const isOtherServicesHub = slug === 'other-services';
  const isServiceLanding = isBeveragesPage || isEtpPage || isSharedServicePremium;
  const isOtherServicesFamily = isServiceLanding || isOtherServicesHub;
  const isPremiumInner = slug === 'about-us' || slug === 'industries-we-serve' || slug === 'careers';
  const isProductCategory = Boolean(CATEGORY_PRODUCTS[slug]);
  const pageLayout = getPageLayout(slug);
  const svc3dCss = 'assets/css/service-3d-premium.css?v=2';
  const headOpts = isBeveragesPage
    ? { extraCss: ['assets/css/beverages-premium.css?v=11', svc3dCss], bodyClass: `overflow-x-hidden bwm-page page-${slug}` }
    : isEtpPage
      ? { extraCss: ['assets/css/etp-premium.css?v=5', svc3dCss], bodyClass: `overflow-x-hidden bwm-page page-${slug}` }
      : isSharedServicePremium
        ? { extraCss: ['assets/css/service-premium.css?v=4', svc3dCss], bodyClass: `overflow-x-hidden bwm-page page-${slug}` }
        : isOtherServicesHub
          ? { extraCss: [svc3dCss], bodyClass: `overflow-x-hidden page-${slug} ${pageLayout}` }
        : isPremiumInner
          ? { extraCss: ['assets/css/inner-pages-premium.css?v=8', ...(slug === 'careers' ? [svc3dCss] : [])], bodyClass: `overflow-x-hidden page-${slug} ${pageLayout}` }
          : isProductCategory
            ? { extraCss: ['assets/css/product-category.css?v=6'], bodyClass: `overflow-x-hidden page-${slug} ${pageLayout}` }
            : slug === 'product'
              ? { extraCss: ['assets/css/product-category.css?v=6'], bodyClass: `overflow-x-hidden page-${slug} ${pageLayout}` }
              : { bodyClass: `overflow-x-hidden page-${slug} ${pageLayout}` };

  const aboutLead = 'Learn about Nayara Industries, a chemical manufacturing and trading company in GIDC Ankleshwar specializing in solvents, intermediates, and industrial chemicals with strict QC systems.';
  const industriesLead = 'Nayara Industries provides chemical solutions for pharmaceuticals, agrochemicals, textiles, dyes, paints, water treatment, rubber, and specialty applications.';
  const premiumEyebrow = slug === 'about-us' ? 'About Us' : slug === 'industries-we-serve' ? 'Industries We Serve' : 'Careers at Nayara Industries';
  const premiumLead = slug === 'about-us' ? aboutLead : slug === 'industries-we-serve' ? industriesLead : '';

  const html = `${getHead(title, description, basePath, slug + '/', headOpts)}
  <div id="page-loader"><div class="relative flex items-center justify-center"><div class="loader-ring"></div><div class="loader-ring-spin"></div><span class="text-white font-heading font-bold text-xl tracking-[0.3em]">NI</span></div></div>
  <div id="header-container" data-base="${basePath}"></div>
  <main>
    ${isServiceLanding ? '' : isPremiumInner
      ? getEnterpriseBanner({
          title,
          eyebrow: premiumEyebrow,
          lead: premiumLead,
          basePath,
          breadcrumb,
          slug,
        })
      : getPageHero(title, breadcrumb, basePath, slug)}
    ${mainContent}
    ${slug !== 'contact-us' && slug !== 'careers' && !isServiceLanding ? getCtaSection(basePath) : ''}
  </main>
  <div id="footer-container" data-base="${basePath}"></div>
  <script src="${basePath}assets/js/data.js"></script>
  <script src="${basePath}assets/js/components.js?v=7"></script>
  <script src="https://cdn.jsdelivr.net/npm/lenis@1.1.18/dist/lenis.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="${basePath}assets/js/main.js"></script>
  <script src="${basePath}assets/js/premium.js"></script>
  <script src="${basePath}assets/js/forms.js"></script>
  ${isBeveragesPage ? `<script src="${basePath}assets/js/beverages-premium.js?v=3"></script>` : ''}
  ${isEtpPage ? `<script src="${basePath}assets/js/etp-premium.js?v=1"></script>` : ''}
  ${isSharedServicePremium ? `<script src="${basePath}assets/js/service-premium.js?v=1"></script>` : ''}
  ${isOtherServicesFamily || slug === 'careers' ? `<script src="${basePath}assets/js/service-3d-premium.js?v=2"></script>` : ''}
</body>
</html>`;

  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log('Generated:', slug + '/index.html');
}

Object.entries(pagesData).forEach(([slug, data]) => {
  generatePage(slug, data);
});

console.log('Done! Generated', Object.keys(pagesData).filter(s => !SKIP_SLUGS.includes(s)).length, 'pages');
