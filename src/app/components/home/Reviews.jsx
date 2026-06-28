import Testimonials from "./Tesimonials";

const Reviews = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/all/reviews`,
    {
      cache: "no-store",
    }
  );

  const result = await res.json();

  console.log(result); // server terminal এ দেখবে

  return <Testimonials reviews={result.data} />;
};

export default Reviews;