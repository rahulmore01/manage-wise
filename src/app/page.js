import Image from "next/image";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Explore from "@/components/explore/Explore";
import Integration from "@/components/integration/Integration";
import Faq from "@/components/faq/Faq";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Explore />
      <Integration />
      <Faq />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}
