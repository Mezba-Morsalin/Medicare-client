import Hero from "../components/home/Hero";
import Specialties from "../components/home/Specialties";
import Testimonials from "../components/home/Tesimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";



export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Specialties/>
      <WhyChooseUs/>
      <Testimonials/>
    </div>
  );
}
