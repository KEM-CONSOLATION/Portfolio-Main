import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export default function SEO({
  title = "Consolation Lotachi Kem | FrontEnd Engineer Portfolio",
  description = "Portfolio of Consolation Lotachi Kem, a skilled FrontEnd Engineer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords = [],
  image = "/Assets/Pic3.JPG",
  url = "https://techieconso.vercel.app",
  type = "website",
  author = "Consolation Lotachi Kem",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOProps) {
  const siteTitle = "Consolation Lotachi Kem Portfolio";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  
  const defaultKeywords = [
    "Consolation Lotachi Kem",
    "FrontEnd Engineer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript Developer",
    "Web Development",
    "UI/UX Implementation",
    "JavaScript Developer",
    "CSS Developer",
    "HTML Developer",
    "Responsive Web Design",
    "Modern Web Applications",
    "Portfolio Website",
    "Software Engineer",
    "Web Developer",
  ];
  
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@techieconso" />
      <meta name="twitter:site" content="@techieconso" />
      
      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Head>
  );
}
