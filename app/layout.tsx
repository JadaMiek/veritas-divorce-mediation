import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";
  const base = new URL(`${protocol}://${host}`);
  const title = "Veritas Mediation | True Resolution for Your Next Chapter";
  const description = "Marriage and divorce mediation that creates clear, respectful paths forward in Morris County, New Jersey.";

  return {
    metadataBase: base,
    title,
    description,
    icons: { icon: "/veritas-co-logo.jpg", shortcut: "/veritas-co-logo.jpg" },
    openGraph: { title, description, images: [{ url: new URL("/og.png", base).toString(), width: 1792, height: 896, alt: "Veritas Mediation" }] },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og.png", base).toString()] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
