import { Arsenal } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

const inter = Arsenal({
  subsets: ["latin"],
  weight: ["400", "700"],
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
        <div className="mt-24 sm:mt-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
