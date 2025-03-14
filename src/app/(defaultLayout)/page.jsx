import React from "react";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Award1 from "../Components/Award/Award1";
import About1 from "../Components/About/About1";
import Services1 from "../Components/Services/Services1";
import HomeFaq1 from "../Components/Faq/HomeFaq1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import Blog1 from "../Components/Blog/Blog1";
import Cta1 from "../Components/Cta/Cta1";
import HowWork2 from "../Components/HowWork/HowWork2";

const Home = () => {
  return (
    <div>
      <HeroBanner1
        bgImg="/assets/img/bg/hero1-bg.png"
        subTitle="Web Development & Digital Marketing"
        title="Boost Your Business at <span class='after'>70% Less </span> than US Rates"
        content="We provide expert software development solutions. we deliver impactful web & software solutions swiftly and affordably with our expert overseas team. For exceptional quality at competitive rates, contact us today"
        btnName="Contact Us Now"
        btnUrl="/contact"
        image1="/assets/home/hero-image-bg.png"
        image2="/assets/home/hero-image.png"
        shapeImage1="/assets/img/hero/hero1-image3.png"
        shapeiamge2="/assets/img/hero/hero1-image4.png"
      ></HeroBanner1>
      <Award1></Award1>
      <About1
        image1="/assets/img/about/about1-img1.png"
        image2="/assets/img/about/about1-img2.png"
        supIcon="/assets/img/icons/about1-shape-icon.png"
        supTitle="24/7 Support"
        supCon="TechXen Technology & It Solution"
        subTitle="Why peoples choose us?"
        Title="Zynex solutions will be your trusted Digital Partner"
        content="TechXen pioneering force in the realm of technology and IT solutions, dedicated to revolutionising the way businesses thrive in the digital age. Our approach is rooted in collaboration, transparency, and a relentless pursuit of excellence. We believe that by staying ahead of the curve and embracing change, we can help our clients stay ahead of  competition."
        featurelist={[
          "Dramatically re-engineer value added IT system.",
          "Highlight any unique selling points or differentiators.",
          "Incorporate visuals such as team photos shots.",
        ]}
        btnName="Connect With Us"
        btnUrl="/contact"
      ></About1>
      <Services1></Services1>
      {/* <Choose1></Choose1> */}
      <HowWork2></HowWork2>
      {/* <Project1></Project1> */}
      <Testimonial1></Testimonial1>
      <Blog1></Blog1>
      <HomeFaq1></HomeFaq1>
      <Cta1
        description="Take the first step towards achieving your business goals by contacting us today. Schedule a consultation with one of our experts to discuss your objectives "
      />
    </div>
  );
};

export default Home;
