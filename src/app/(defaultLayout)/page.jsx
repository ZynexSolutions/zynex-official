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
        btnName="Contact Us"
        btnUrl="/contact"
        image1="/assets/home/hero-image-bg.png"
        image2="/assets/home/hero-image.png"
        shapeImage1="/images/hero1.png"
        shapeiamge2="/images/shape2.png"
      ></HeroBanner1>
      <Award1></Award1>
      <About1
        image1="/assets/img/about/about1-img1.png"
        image2="/assets/img/about/about1-img2.png"
        supIcon="/assets/img/icons/about1-shape-icon.png"
        supTitle="24/7 Support"
        supCon="Launch Your Product With Zynex"
        subTitle="Why peoples choose us?"
        Title="Zynex solutions will be your trusted Digital Partner"
        // content="TechXen pioneering force in the realm of technology and IT solutions, dedicated to revolutionising the way businesses thrive in the digital age. Our approach is rooted in collaboration, transparency, and a relentless pursuit of excellence. We believe that by staying ahead of the curve and embracing change, we can help our clients stay ahead of  competition."
        content="Zynex solutions specializes in creating robust and secure web development solutions, gen AI applications, dynamic digital marketing strategies and scalable e-commerce applications. Our expert developers, AI engineers and digital marketers collaborate to deliver tailored online solutions designed to maximize you business efficient, visibility and profitablity. "
        featurelist={[
          "Generative AI Applications for Increased Efficiency",
          "Strategic Digital Marketing Boosting Online Visibility",
          "E-Commerce Stores Designed for Maximum Sales",
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
      <Cta1 description="Take the first step towards achieving your business goals by contacting us today. Schedule a consultation with one of our experts to discuss your objectives " />
    </div>
  );
};

export default Home;
