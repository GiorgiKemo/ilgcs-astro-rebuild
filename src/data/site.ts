const uploads = "https://ilgcs.com/wp-content/uploads";

export const site = {
  name: "IL General Construction Services",
  shortName: "ILGCS",
  url: "https://ilgcs.com",
  phone: "(630) 742-1010",
  phoneHref: "tel:6307421010",
  email: "info@ilgcs.com",
  address: "600 Morse Ave, Unit A Schaumburg, IL 60193",
  streetAddress: "600 Morse Ave, Unit A",
  locality: "Schaumburg",
  region: "IL",
  postalCode: "60193",
  mapUrl: "https://maps.app.goo.gl/DeG3HxKmaCGJe7776",
  logo: `${uploads}/2024/02/sitelogo.webp`,
  icon: `${uploads}/2024/02/cropped-ilgcs-logo-1-192x192.png`,
  reviewUrl: "https://www.google.com/search?q=IL+General+Construction+Services+reviews",
  social: {
    facebook: "https://www.facebook.com/ilgcs"
  }
};

export const navItems = [
  { label: "Bath", href: "/bath/" },
  { label: "Options", href: "/bath/#options" },
  { label: "Colors", href: "/bath/#colors" },
  { label: "Reviews", href: "/bath/#reviews" },
  { label: "Contact", href: "/bath/#contact" }
];

export const bathAssets = {
  hero: `${uploads}/2025/12/arctic-ice.a1ddca7d.jpg`,
  heroAlt: "Bright white walk-in shower wall panel finish",
  gift: `${uploads}/2024/11/Gift-PNG-File-e1730860744226.webp`,
  promo: `${uploads}/2024/11/123123-e1730860967666.webp`,
  videos: {
    tubToShower: `${uploads}/2025/12/tub-to-shower3.mp4`,
    showerReplacement: `${uploads}/2025/12/shower-replacement.mp4`
  },
  covers: {
    tubToShower: `${uploads}/2025/12/tub-to-shower3-cover.webp`,
    showerDoors: `${uploads}/2025/12/slidingDoors2-cover.webp`,
    showerSeat: `${uploads}/2025/12/seats2-cover.webp`,
    floor: `${uploads}/2025/12/floor-3-cover.webp`,
    fixtures: `${uploads}/2025/12/fixtures-2-cover.webp`,
    grabBars: `${uploads}/2025/12/grab-bar-cover.webp`,
    easyClean: `${uploads}/2025/12/easyToClean-2-cover.webp`
  }
};

export const proofPoints = [
  { value: "1-DAY", label: "Installation" },
  { value: "100%", label: "US-Made" },
  { value: "12-month", label: "Labor Warranty" }
];

export const estimateSteps = [
  {
    name: "bathroom_location",
    title: "Where is the bathroom located?",
    type: "radio",
    options: ["Ground floor", "Upstairs", "Basement", "Other"]
  },
  {
    name: "project_type",
    title: "Describe your project",
    type: "radio",
    options: ["Tub-to-shower conversion", "Shower replacement", "Other"]
  },
  {
    name: "same_location",
    title: "Will the shower stay in the same place?",
    type: "radio",
    options: ["Yes", "No", "Not sure"]
  },
  {
    name: "condition",
    title: "What is the condition of your shower floor and walls?",
    type: "radio",
    options: ["Good", "Some damage", "Very damaged", "Not sure"]
  },
  {
    name: "features",
    title: "Which shower features matter most to you?",
    type: "checkbox",
    options: ["Easy entry", "Grab bars", "Shower seat", "Other"]
  },
  {
    name: "doors",
    title: "Would you prefer glass doors or a curtain rod?",
    type: "radio",
    options: ["Glass doors", "Curtain rod"]
  },
  {
    name: "ownership",
    title: "Do you own or rent your home?",
    type: "radio",
    options: ["Own", "Rent"]
  },
  {
    name: "planning_stage",
    title: "Where are you in the planning process?",
    type: "radio",
    options: ["Ready to install", "Just getting a price"]
  }
];

export const installationOptions = [
  {
    title: "Tub-To-Shower Conversion",
    description:
      "Tub-to-shower conversions are perfect for homeowners who want a safer, more convenient bathing option. We can complete a project like this in just one day.",
    mediaType: "video",
    src: bathAssets.videos.tubToShower,
    poster: bathAssets.covers.tubToShower
  },
  {
    title: "Shower Replacement",
    description:
      "Update your shower system with a low or no-threshold basin, easy-to-clean walls, an attractive showerhead, and accessories including grab bars, shelving, and shower chairs.",
    mediaType: "video",
    src: bathAssets.videos.showerReplacement,
    poster: bathAssets.covers.tubToShower
  }
];

export const featureOptions = [
  {
    title: "Shower Doors",
    description:
      "Frameless glass shower doors combine smooth glass with hardware and accents in your choice of finishes.",
    image: bathAssets.covers.showerDoors
  },
  {
    title: "Shower Seat",
    description:
      "A sturdy shower seat or chair provides a secure place to relax while you bathe and makes the bathroom safer.",
    image: bathAssets.covers.showerSeat
  },
  {
    title: "Slip-Resistant Shower Floor",
    description:
      "Walk-in shower pans are designed for better slip resistance and help prevent water from escaping the shower.",
    image: bathAssets.covers.floor
  },
  {
    title: "Fixtures & Walls",
    description:
      "Premium fixtures and shower walls come in a variety of colors, patterns, and combinations.",
    image: bathAssets.covers.fixtures
  },
  {
    title: "Grab Bars",
    description:
      "Grab bars help prevent falls and give users more independence when moving around the shower.",
    image: bathAssets.covers.grabBars
  },
  {
    title: "Easy To Clean",
    description:
      "Non-porous surfaces resist mold, mildew, and cracks, so cleaning is simple with a quick wipe-down.",
    image: bathAssets.covers.easyClean
  }
];

export const colors = [
  { name: "Arctic Ice", image: `${uploads}/2025/12/arctic-ice.a1ddca7d.jpg` },
  { name: "White", image: `${uploads}/2025/12/white.7a56a80f.jpg` },
  { name: "Biscuit", image: `${uploads}/2025/12/biscuit.11b6ce98.jpg` },
  { name: "Almond", image: `${uploads}/2025/12/almond.968be17b.jpg` },
  { name: "Gray", image: `${uploads}/2025/12/gray.cf80e10c.jpg` },
  { name: "Sandbar", image: `${uploads}/2025/12/sandbar.bdab2f6f.jpg` },
  { name: "Sierra Sand", image: `${uploads}/2025/12/sierra-sand.e5d89f09.jpg` },
  { name: "Carbon Ash", image: `${uploads}/2025/12/carbon-ash.6d19e0ff.jpg` },
  { name: "Napoli Marble", image: `${uploads}/2025/12/napoli-marble.f96471a1.jpg` },
  { name: "Santorini White", image: `${uploads}/2025/12/santorini-white.d143429f.jpg` },
  { name: "White Travertine", image: `${uploads}/2025/12/white-travertine.0f2ff4a0.jpg` },
  { name: "Canyon Rock", image: `${uploads}/2025/12/canyon-rock.c8bb8464.jpg` }
];

export const patterns = [
  { name: "3x6 Subway", image: `${uploads}/2025/12/3x6-subway.2db6bc5b.jpg` },
  { name: "6 Hexagonal", image: `${uploads}/2025/12/6-hexagonal.6f036f7a.jpg` },
  { name: "8x8 Diamond", image: `${uploads}/2025/12/8x8-diamond.cecfb738.jpg` },
  { name: "12x12 Marazzi", image: `${uploads}/2025/12/12x12-marazzi.d0cdf69d.jpg` },
  { name: "12x24 Roman Block", image: `${uploads}/2025/12/12x24-roman-block.ddccfc3a.jpg` },
  { name: "Basket Weave", image: `${uploads}/2025/12/basket-weave.b3229e1a.jpg` },
  { name: "6x24 Fairfield", image: `${uploads}/2025/12/6x24-fairfield.5d9d749f.jpg` },
  { name: "Horizon Beige", image: `${uploads}/2025/12/horizon-beige.f00589ac.jpg` }
];

export const problemSolutions = [
  {
    title: "Replace an outdated tub",
    description:
      "Swap a hard-to-clean tub for a cleaner, modern walk-in shower that better fits daily life.",
    image: `${uploads}/2025/12/solutionReview-2.a51d7ca6.jpg`
  },
  {
    title: "Make entry safer",
    description:
      "Low-threshold bases, grab bars, and seats help make showering safer and more comfortable.",
    image: `${uploads}/2025/12/solutionReview-3.021c96d3.jpg`
  },
  {
    title: "Get rid of grout and rust",
    description:
      "Non-porous wall systems reduce mold, mildew, rusty door tracks, and time-consuming scrubbing.",
    image: `${uploads}/2025/12/solutionReview-4.f9ff5cf6.jpg`
  },
  {
    title: "Improve resale appeal",
    description:
      "A clean, bright bathroom can help the whole home feel newer and more marketable.",
    image: `${uploads}/2025/12/solutionReview-2.a51d7ca6.jpg`
  }
];

export const reviews = [
  {
    name: "Vasko Godumov",
    text:
      "Deyan and his crew custom-built beautiful cabinets and shelving and also constructed a brand new bathroom in my basement. The craftsmanship was excellent throughout both projects."
  },
  {
    name: "Andrew Maxa",
    text:
      "I contacted Deyan to have a bathroom exhaust fan replaced. His crew arrived exactly when he said they would, worked tidy and efficiently, and did the job incredibly well."
  },
  {
    name: "Donna English",
    text:
      "Excellent work, great customer service, and an experienced team. I was impressed by the quality of work and the time it took them to finish."
  }
];

export const faqs = [
  {
    question: "How fast can a walk-in shower be installed?",
    answer:
      "Many shower replacement and tub-to-shower projects can be completed in one day after the design, measurements, and materials are confirmed."
  },
  {
    question: "Do you offer estimates for bathroom remodeling near me?",
    answer:
      "Yes. ILGCS serves Schaumburg and surrounding northwest Chicago suburbs with bathroom remodel estimates, walk-in showers, and tub-to-shower conversions."
  },
  {
    question: "Can the lead forms connect to a CRM later?",
    answer:
      "Yes. The forms are intentionally isolated so submissions can be sent through Netlify, Formspree, Zapier, Make, or a CRM webhook when the CRM is selected."
  },
  {
    question: "Can you create landing pages for ads?",
    answer:
      "Yes. The site includes static ad landing page templates that can be duplicated for Google Ads and Facebook Ads campaigns."
  }
];

export const towns = [
  { name: "Schaumburg", slug: "schaumburg-il" },
  { name: "Arlington Heights", slug: "arlington-heights-il" },
  { name: "Hoffman Estates", slug: "hoffman-estates-il" },
  { name: "Palatine", slug: "palatine-il" },
  { name: "Rolling Meadows", slug: "rolling-meadows-il" },
  { name: "Elk Grove Village", slug: "elk-grove-village-il" },
  { name: "Roselle", slug: "roselle-il" },
  { name: "Mount Prospect", slug: "mount-prospect-il" },
  { name: "Barrington", slug: "barrington-il" },
  { name: "Naperville", slug: "naperville-il" }
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  image: site.logo,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.locality,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: "US"
  },
  areaServed: towns.map((town) => `${town.name}, IL`)
};

export function serviceSchema(serviceName: string, town?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: town ? `${serviceName} in ${town}, IL` : serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
      address: localBusinessSchema.address
    },
    areaServed: town ? `${town}, IL` : towns.map((item) => `${item.name}, IL`),
    serviceType: serviceName
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
