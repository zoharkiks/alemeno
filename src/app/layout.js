
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReduxWrapper from "@/components/ReduxWrapper";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ["latin"] });

export const metadata = {
  title: "Alemeno",
  description: "Internship Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxWrapper>

        <body className={montserrat.className}>
          <Navbar />
          {children}
          <Toaster />

        </body>
      </ReduxWrapper>
    </html>
  );
}
