import CTASection from "../components/home/CTASection";
import FAQSection from "../components/home/FAQSection";
import FeatureDoctor from "../components/home/FeatureDoctor";
import Hero from "../components/home/Hero";
import Reviews from "../components/home/Reviews";
import Specialties from "../components/home/Specialties";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";



export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Stats/>
      <FeatureDoctor/>
      <Specialties/>
      <WhyChooseUs/>
      <Reviews/>
      <FAQSection/>
      <CTASection/>
    </div>
  );
}
