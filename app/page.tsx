import Navbar from "@/components/website/layout/Navbar";
import Hero from "@/components/website/home/Hero";
import Categories from "@/components/website/home/Categories";
import HeroStatsBar from "@/components/website/home/HeroStatsBar";
import TrustBar from "@/components/website/home/TrustBar";
import Stats from "@/components/website/home/Stats";
import Features from "@/components/website/home/Features";
import HowItWorks from "@/components/website/home/HowItWorks";
import DashboardPreview from "@/components/website/home/DashboardPreview";
import Testimonials from "@/components/website/home/Testimonials";
import FAQ from "@/components/website/home/FAQ";
import WhyChooseUs from "@/components/website/home/WhyChooseUs";
import CTA from "@/components/website/home/CTA";
import Footer from "@/components/website/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
        <HeroStatsBar />
      <TrustBar />
      <Stats />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Testimonials />
      <FAQ />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  );
}