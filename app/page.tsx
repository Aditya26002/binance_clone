import Footer from "./components/footer/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <div className=" dark:bg-gray-900 dark:text-white bg-white text-black">
        <Navbar />

        <div className="px-4 lg:px-20 xl:px-32">
          <HeroSection />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
