import { Helmet } from "react-helmet-async";

const siteUrl = "https://trendycakesandpastries.com";
const siteName = "Trendy Cakes & Pastries";
const defaultImage = `${siteUrl}/newhero.webp`;
const phoneNumber = "+233243685403";

const baseBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "@id": `${siteUrl}/#bakery`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.webp`,
  image: defaultImage,
  telephone: phoneNumber,
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: "Magdalene Asomaning",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ablekuma, Point 5",
    addressCountry: "GH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 5.6338234,
    longitude: -0.3268158,
  },
  sameAs: [
    "https://www.instagram.com/trendycakesandpastries",
    "https://www.tiktok.com/@trendy_cakes_pastries",
    "https://wa.me/233243685403",
  ],
  servesCuisine: ["Cakes", "Pastries", "Doughnuts", "Fruit juices", "Sobolo"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Birthday cakes, wedding cakes and custom event cakes",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cake making, sugar craft and pastries training",
      },
    },
  ],
};

const pageSchema = ({ title, description, path }) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}${path}#webpage`,
  url: `${siteUrl}${path}`,
  name: title,
  description,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
  },
  about: {
    "@id": `${siteUrl}/#bakery`,
  },
});

const breadcrumbSchema = ({ title, path }) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/`,
    },
    ...(path === "/"
      ? []
      : [
          {
            "@type": "ListItem",
            position: 2,
            name: title.replace(` | ${siteName}`, ""),
            item: `${siteUrl}${path}`,
          },
        ]),
  ],
});

export default function SEO({
  title,
  description,
  path = "/",
  image = defaultImage,
  type = "website",
  schema = [],
}) {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const schemas = [
    baseBusinessSchema,
    pageSchema({ title, description, path: canonicalPath }),
    breadcrumbSchema({ title, path: canonicalPath }),
    ...schema,
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_GH" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
}
