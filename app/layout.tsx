import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MediFlow — Modern Clinic Management & Patient Engagement Platform",
  description:
    "Better care starts with better technology. Streamline clinic scheduling, paperless patient intake, and administrative workflows in a unified, accessible platform.",
  keywords: ["clinic management", "patient engagement", "digital intake", "healthcare technology", "appointment scheduling"],
  openGraph: {
    title: "MediFlow — Digital Clinic Operations & Patient Engagement",
    description: "Streamline appointment workflows and enhance patient communication with modern healthcare SaaS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FCFDFD] text-slate-900 antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
