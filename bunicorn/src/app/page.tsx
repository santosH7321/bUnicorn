import FivePage from "@/components/FivePage";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import HeroSection from "@/components/HeroSection";
import ThirdSection from "@/components/ThirdSection";
import SecondPage from "@/components/secondPage";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SecondPage />
      <ThirdSection />
      <FourthSection />
      <FivePage />
      <Footer />
    </div>
  );
}
