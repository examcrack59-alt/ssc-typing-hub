import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Script from "next/script";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ssctypinghub.in"),
  title: {
    default: "SSC Typing Hub | Free SSC CGL, CHSL & MTS Typing Test Practice",
    template: "%s | SSC Typing Hub",
  },

  description:
    "SSC Typing Hub offers free SSC CGL, CHSL, MTS and other government exam typing tests with real exam simulation, speed analysis, accuracy tracking and detailed performance reports.",

  applicationName: "SSC Typing Hub",

  keywords: [
    "SSC Typing Hub",
    "SSC Typing Test",
    "SSC CGL Typing Test",
    "SSC CHSL Typing Test",
    "SSC MTS Typing Test",
    "Typing Practice",
    "Typing Speed Test",
    "Government Exam Typing",
    "Free Typing Test",
    "Typing Accuracy",
  ],

  authors: [
    {
      name: "SSC Typing Hub",
    },
  ],

  creator: "SSC Typing Hub",
  publisher: "SSC Typing Hub",

  alternates: {
  canonical: "https://www.ssctypinghub.in",
},

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  verification: {
    google: "XKiXyhVn9fWDxtaBVz14SgQwn6XLstEmp9Yrf9IggiI",
  },

 openGraph: {
  type: "website",
  locale: "en_IN",
  url: "https://www.ssctypinghub.in",
  siteName: "SSC Typing Hub",
    title: "SSC Typing Hub | Free SSC CGL, CHSL & MTS Typing Test Practice",

    description:
      "SSC Typing Hub offers free SSC CGL, CHSL, MTS and other government exam typing tests with real exam simulation, speed analysis, accuracy tracking and detailed performance reports.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SSC Typing Hub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SSC Typing Hub | Free SSC CGL, CHSL & MTS Typing Test Practice",

    description:
      "SSC Typing Hub offers free SSC CGL, CHSL, MTS and other government exam typing tests with real exam simulation, speed analysis, accuracy tracking and detailed performance reports.",

    images: ["/og-image.png"],
  },

  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${poppins.variable}
        h-full
        antialiased
      `}
    >
      <body
        className="
          min-h-full
          flex
          flex-col
          font-[family:var(--font-poppins)]
        "
      >
        <GoogleAnalytics />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7314349353988329"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}