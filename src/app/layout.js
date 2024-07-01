import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Festival Lençóis Jazz & Blues",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
