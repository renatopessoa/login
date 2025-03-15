
import Login from "@/pages/Login";
import { Poppins } from "next/font/google";


const geistSans = Poppins({
  variable: "--poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
        
      >
        
        {children}
      </body>
    </html>
  );
}
