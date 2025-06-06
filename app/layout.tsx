import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>محمد عرب دقنيش - DSH</title>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        {/* شريط التنقل يختلف حسب المسار */}
        {children}
      </body>
    </html>
  );
}
