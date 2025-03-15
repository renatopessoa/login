import Login from "@/pages/Login";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Poppins({
  variable: "--poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Login/Signup Form",
  description: "Login and registration form with toggle effect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
