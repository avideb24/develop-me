import "./globals.css";

export const metadata = {
  title: "PortFolio",
  description: "Your site description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-light dark:bg-dark text-dark dark:text-light pb-10 md:pb-0 text-sm md:text-base">
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
