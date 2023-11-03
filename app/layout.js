import "./globals.css";
import localFont from "next/font/local";
// import globalMetadata from './globalMetadata';

// export const metadata = globalMetadata;

const yekan = localFont({
  src: [
    // import "../public/font/YekanBakh-Thin.ttf"
    // import "../public/font/YekanBakh-Medium.ttf"
    // import "../public/font/YekanBakh-Light.ttf"
    // import "../public/font/YekanBakh-Heavy.ttf"
    // import "../public/font/YekanBakh-Bold.ttf"
    // import "../public/font/YekanBakh-Fat.ttf"
    {
      path: "../public/font/YekanBakh-Regular.ttf",
      // path: "../public/font/YekanBakhFaNum-Regular.ttf",
      // path: "../public/font/YekanBakhFaNum-Light.ttf",
      weight: "400",
    },
  ],
  variable: "--font-yekan",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekan.variable}`}>{children}</body>
    </html>
  );
}