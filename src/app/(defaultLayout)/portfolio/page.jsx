import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta1 from "@/app/Components/Cta/Cta1";
import MarqueeText from "@/app/Components/MarqueeText/MarqueeText";
import Vision1 from "@/app/Components/Mission/Vission1";
import Service6 from "@/app/Components/Services/Service6";
import SectionTitle3 from "@/app/Components/Common/SectionTitle3";
import BlogCustom from "@/app/Components/Blog/BlogCustom";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Our Portfolio"></BreadCumb>
      <MarqueeText></MarqueeText>

      {/* <Service6></Service6> */}
      <Vision1
        visionImage1="/assets/img/custom/case-study-11.png"
        visionImage2="/assets/img/custom/case-study-12.png"
        visionImage3="/assets/img/custom/case-study-13.png"
        spanImage="/assets/img/icons/span1.png"
        visionTitle="A Modern E-Commerce Storefront for Lepaa Products"
        visionDescription="We've created a minimalistic and modern online storefront for lepaa products. The website's design is made to bring out the aesthetics of the Natural and Herbal products that lepaa offers."
        icon1="/assets/img/icons/about-solution-iocn1.png"
        title1="Modern and Reliable Tech Stack"
        description1="The website is built with modern technologies like<br/> Next Js and Tailwind Css, allowing for serving from <br/>the edge, pushing the site's performance to the max."
        icon2="/assets/img/icons/about-solution-iocn2.png"
        title2="Integrated Secure Payment Gateway"
        description2="Along with all the modern features, the website is <br/>integrated with a secure payment gateway, allowing <br/>for secure transactions."
        quoteLink="/contact"
        spanText="Case Study 1"
      />
      {/* <Vision1
        visionImage1="/images/portfolio/strategytrader/image1.png"
        visionImage2="/images/portfolio/strategytrader/image2.png"
        visionImage3="/images/portfolio/strategytrader/image3.png"
        spanImage="/assets/img/icons/span1.png"
        visionTitle="A Modern E-Commerce Storefront for Lepaa Products"
        visionDescription="We've created a minimalistic and modern online storefront for lepaa products. The website's design is made to bring out the aesthetics of the Natural and Herbal products that lepaa offers."
        icon1="/assets/img/icons/about-solution-iocn1.png"
        title1="Modern and Reliable Tech Stack"
        description1="The website is built with modern technologies like<br/> Next Js and Tailwind Css, allowing for serving from <br/>the edge, pushing the site's performance to the max."
        icon2="/assets/img/icons/about-solution-iocn2.png"
        title2="Integrated Secure Payment Gateway"
        description2="Along with all the modern features, the website is <br/>integrated with a secure payment gateway, allowing <br/>for secure transactions."
        quoteLink="/contact"
        spanText="Case Study 2"
        contentLeft={true}
      /> */}
      <BlogCustom></BlogCustom>
      <Cta1></Cta1>
    </div>
  );
};

export default page;
