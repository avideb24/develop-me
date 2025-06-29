import Footer from "@/components/layout/footer";
import "../styles/globals.css";
import HeroSection from "@/components/page-comp/home/hero-sec";

export const metadata = {
  title: "Develop Me",
  description: "Your site description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-light dark:bg-dark text-dark dark:text-light text-sm md:text-base font-normal">
         <HeroSection />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
