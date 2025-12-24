import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const defaultSEO = {
  title: "Le.kB — Club Santé & Bien-être à Château-Thierry",
  description: "Le.kB, club santé et bien-être à Château-Thierry (02). Kinésithérapie, ostéopathie, naturopathie, réflexologie. Un lieu dédié au corps, à l'esprit et à l'équilibre.",
  keywords: "Le.kB, club santé, bien-être, Château-Thierry, kinésithérapie, ostéopathie, naturopathie, réflexologie, hypnothérapie, Aisne, Picardie",
  image: "https://lekb.club/og-image.jpg",
  url: "https://lekb.club",
  type: "website",
};

export const SEO = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, content: string, attribute: string = "content") => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (element) {
        element.setAttribute(attribute, content);
      } else {
        element = document.createElement("meta");
        const [attr, value] = selector.replace(/[\[\]"']/g, "").split("=");
        if (attr.startsWith("property")) {
          element.setAttribute("property", value);
        } else if (attr.startsWith("name")) {
          element.setAttribute("name", value);
        }
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonicalLink) {
      canonicalLink.href = url;
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      canonicalLink.href = url;
      document.head.appendChild(canonicalLink);
    }

    // Update meta tags
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="keywords"]', keywords);

    // Open Graph
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:image"]', image);
    updateMetaTag('meta[property="og:url"]', url);
    updateMetaTag('meta[property="og:type"]', type);

    // Twitter Card
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', image);

  }, [title, description, keywords, image, url, type]);

  return null;
};
