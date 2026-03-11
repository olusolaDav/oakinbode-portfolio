import type { Metadata } from "next"
import { seoData } from "@/data/personal"

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string,
  type: "website" | "article" | "profile" = "website",
): Metadata {
  const metaTitle = title ? `${title} | ${seoData.title}` : seoData.title
  const metaDescription = description || seoData.description
  const metaImage = image || seoData.image || "/images/og-image.png"
  const metaUrl = url ? `${seoData.siteUrl}${url}` : seoData.siteUrl

  return {
    title: {
      default: metaTitle,
      template: `%s | ${seoData.author}`,
    },
    description: metaDescription,
    keywords: seoData.keywords,
    authors: [{ name: seoData.author, url: seoData.siteUrl }],
    creator: seoData.author,
    publisher: seoData.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoData.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: type,
      locale: "en_US",
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: `${seoData.author} - Portfolio`,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
          type: "image/jpeg",
        },
        {
          url: metaImage,
          width: 800,
          height: 600,
          alt: metaTitle,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@olusola_dav",
      site: "@olusola_dav",
    },
    verification: {
      google: "your-google-verification-code", // Add your Google Search Console verification code
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
    category: "Technology",
    classification: "Portfolio Website",
    referrer: "origin-when-cross-origin",
    colorScheme: "dark light",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
      { media: "(prefers-color-scheme: dark)", color: "#0891b2" },
    ],
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#06b6d4" }],
    },
    manifest: "/manifest.json",
    other: {
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "apple-mobile-web-app-title": seoData.author,
      "application-name": seoData.author,
      "msapplication-TileColor": "#06b6d4",
      "msapplication-config": "/browserconfig.xml",
    },
  }
}
