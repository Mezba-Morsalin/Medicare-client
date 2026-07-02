import Testimonials from "./Tesimonials";


const Reviews = async () => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/home/reviews`,
    {
      cache: "no-store",
    }
  );

  const result = await res.json();

  console.log(result);

  return <Testimonials reviews={result.data} />;
};

export default Reviews;