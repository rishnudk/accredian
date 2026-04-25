import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://enterprise.accredian.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1D4ED8",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Accredian Enterprise — Next-Gen Corporate Training & Upskilling",
    template: "%s | Accredian Enterprise",
  },
  description:
    "Cultivate high-performance teams with Accredian's tailored enterprise training in Data Science, AI, Product Management & more. 10K+ professionals trained, 200+ sessions delivered.",
  keywords: [
    "corporate training",
    "enterprise upskilling",
    "data science training",
    "AI training for enterprises",
    "product management courses",
    "Accredian",
    "professional development",
    "team training solutions",
  ],
  authors: [{ name: "Accredian", url: siteUrl }],
  creator: "Accredian — FullStack Education Pvt Ltd",
  publisher: "Accredian",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Accredian Enterprise",
    title: "Accredian Enterprise — Next-Gen Corporate Training & Upskilling",
    description:
      "Cultivate high-performance teams with tailored enterprise training programs in Data Science, AI, Product Management & more.",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Accredian Enterprise Training Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise — Next-Gen Corporate Training",
    description:
      "Tailored enterprise training in Data Science, AI & Product Management. 10K+ professionals trained.",
    images: ["/hero.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD structured data for Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Accredian",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description:
    "Accredian provides next-gen enterprise training and upskilling solutions for organizations worldwide.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "enterprise@accredian.com",
    contactType: "sales",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
