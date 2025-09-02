import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Herr_Von_Muellerhoff,
  Monsieur_La_Doulaise,
  Noto_Serif_HK,
} from "next/font/google";
import "./globals.css";
import "../styles/shared.css";
import "@/components/InvitationCard/InvitationCard.css";
import "@/components/InvitationCard/FirstTimeHint.css";
import "@/components/LoadingCard/LoadingCard.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const herrVonMuellerhoff = Herr_Von_Muellerhoff({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-herr-von-muellerhoff",
});

const monsieurLaDoulaise = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-monsieur-la-doulaise",
});

const notoSerifHK = Noto_Serif_HK({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noto-serif-hk",
});

export const metadata: Metadata = {
  title: "Wen's the birthday party?",
  description: "Party time!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${herrVonMuellerhoff.variable} ${monsieurLaDoulaise.variable} ${notoSerifHK.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
