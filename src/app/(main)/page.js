import FeatureDoctor from "../components/home/FeatureDoctor";
import Hero from "../components/home/Hero";
import Specialties from "../components/home/Specialties";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Tesimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";



export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Stats/>
      <FeatureDoctor/>
      <Specialties/>
      <WhyChooseUs/>
      <Testimonials/>
    </div>
  );
}
