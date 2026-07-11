import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
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
  metadataBase: new URL("https://ssctypinghub.in"),

  title: "SSC Typing Hub | Free SSC CGL, CHSL & MTS Typing Test Practice",

  description:
    "SSC Typing Hub offers free SSC CGL, CHSL, MTS and other government exam typing tests with real exam simulation, speed analysis, accuracy tracking and detailed performance reports.",

  verification: {
    google: "XKiXyhVn9fWDxtaBVz14SgQwn6XLstEmp9Yrf9IggiI",
  },
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
        {children}
      </body>
    </html>
  );
}