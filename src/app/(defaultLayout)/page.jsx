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
import Brand1 from "../Components/Brand/Brand1";
import LogoDisplay1 from "../Components/Logo/LogoDisplay1";

const branddata = [
  {
    img: "/assets/img/logo/caltech.png",
  },
  {
    img: "/assets/img/logo/consensys.png",
  },
  {
    img: "/assets/img/logo/johnhopkins.png",
  },
  {
    img: "/assets/img/logo/mayoclinic.png",
  },
  {
    img: "/assets/img/logo/minnesota.png",
  },
  {
    img: "/assets/img/logo/plasma.png",
  }
]

const partnerimagedata = [
  {
    img: "/assets/img/logo/partners/anthropic.png",
  },
  {
    img: "/assets/img/logo/partners/crewai.png",
  },
  {
    img: "/assets/img/logo/partners/elevenlabs.png",
  },
  {
    img: "/assets/img/logo/partners/langchain.png",
  },
  {
    img: "/assets/img/logo/partners/openai.png",
  },
  {
    img: "/assets/img/logo/partners/alibaba.png",
  },
  {
    img: "/assets/img/logo/partners/aws.png",
  },
  {
    img: "/assets/img/logo/partners/fal.png",
  },
  {
    img: "/assets/img/logo/partners/gemini.png",
  },
  {
    img: "/assets/img/logo/partners/n8n.png",
  },
]


const Home = () => {
  return (
    <div>
      <HeroBanner1
        bgImg="/assets/img/bg/hero1-bg.png"
        subTitle="Empowering Business with AI"
        title="Boost Your Business with AI at <span class='after'>70% Less </span> than US Rates"
        content="We provide expert AI solutions for your business needs. we deliver impactful software solutions swiftly and affordably with our expert overseas team. For exceptional quality at competitive rates, contact us today"
        btnName="Connect With Us"
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
        content="Zynex solutions specializes in creating robust and secure web development solutions, gen AI applications, dynamic digital marketing strategies and scalable e-commerce applications. Our expert developers, AI engineers and digital marketers collaborate to deliver tailored online solutions designed to maximize your business efficient, visibility and profitablity. "
        featurelist={[
          "Generative AI Applications for Increased Efficiency",
          "Blockchain Solutions Enhancing Security & Transparency",
          "Comprehensive Softwares Driving Business Growth",
        ]}
        btnName="Connect With Us"
        btnUrl="/contact"
      ></About1>
      <LogoDisplay1 branddata={partnerimagedata} title="Powered by The Most Trusted AI Partners" />
      <Services1></Services1>
      {/* <Choose1></Choose1> */}
      <HowWork2></HowWork2>
      {/* <Project1></Project1> */}
      <Brand1
        branddata={branddata}
        title="Trusted by leading organizations and institutions"
      />
      <Testimonial1></Testimonial1>
      <Blog1></Blog1>
      <HomeFaq1></HomeFaq1>
      <Cta1 description="Take the first step towards achieving your business goals by contacting us today. Schedule a consultation with one of our experts to discuss your objectives " />
    </div>
  );
};

export default Home;
