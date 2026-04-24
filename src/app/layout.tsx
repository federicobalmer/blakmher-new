import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blakmher | Black Home Decor",
  description:
    "Premium black home decor for kitchens, bathrooms, bedrooms and living spaces."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
