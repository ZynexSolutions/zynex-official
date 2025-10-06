import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta1 from "@/app/Components/Cta/Cta1";
import MarqueeText from "@/app/Components/MarqueeText/MarqueeText";
import Vision1 from "@/app/Components/Mission/Vission1";
import Service6 from "@/app/Components/Services/Service6";
import SectionTitle3 from "@/app/Components/Common/SectionTitle3";
import BlogCustom from "@/app/Components/Blog/BlogCustom";
import Blog3 from "@/app/Components/Blog/Blog3";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Our Portfolio"></BreadCumb>
      <MarqueeText></MarqueeText>

      {/* <Service6></Service6> */}
      <Vision1
        visionImage1="/images/portfolio/hopkins/1.png"
        visionImage2="/images/portfolio/hopkins/2.png"
        visionImage3="/images/portfolio/hopkins/3.png"
        spanImage="/assets/img/icons/span1.png"
        visionTitle="An AI-Powered Culinary App for Johns Hopkins University"
        visionDescription="We developed a smart culinary management platform for Johns Hopkins University to streamline meal planning and improve the dining experience. The solution allowed students to pre-order meals effortlessly while helping chefs manage menu planning, ingredient use, and supply forecasting — all powered by AI."
        icon1="/assets/img/icons/about-solution-iocn1.png"
        title1="AI-Driven Meal Planning System"
        description1="The platform uses AI to analyze student preferences and dining trends, allowing chefs to prepare meals efficiently and reduce food waste. It enhanced overall coordination between students and kitchen operations."
        icon2="/assets/img/icons/about-solution-iocn2.png"
        title2="Smart Supply Chain and Zero-Cost Deployment"
        description2="To support Johns Hopkins’ mission, Zynex built and deployed the entire system free of cost. The AI-powered backend optimized the culinary supply chain, ensuring smooth operations and resource management."
        quoteLink="/contact"
        spanText="Case Study 1"
      />
      <Vision1
        visionImage1="/images/portfolio/mayo/1.png"
        visionImage2="/images/portfolio/mayo/2.png"
        visionImage3="/images/portfolio/mayo/3.png"
        spanImage="/assets/img/icons/span1.png"
        visionTitle="AI-Powered Oncology Platform for Mayo Clinic"
        visionDescription="Partnering with Zynex Solutions transformed Mayo Clinic’s oncology operations. Our AI-driven platform enhanced early cancer detection, streamlined treatment planning, and improved overall patient outcomes through intelligent data analysis."
        icon1="/assets/img/icons/about-solution-iocn1.png"
        title1="Precision Detection and Diagnosis"
        description1="The system utilized advanced machine learning models to detect cancer patterns at early stages, helping doctors make faster and more accurate diagnostic decisions."
        icon2="/assets/img/icons/about-solution-iocn2.png"
        title2="Optimized Treatment Planning and Outcomes"
        description2="By analyzing patient history and clinical data, the platform supported oncologists in creating personalized treatment plans, resulting in higher efficiency and improved recovery rates"
        quoteLink="/contact"
        spanText="Case Study 2"
        contentLeft={true}
      />
      <Vision1
        visionImage1="/images/portfolio/plasma/1.png"
        visionImage2="/images/portfolio/plasma/2.png"
        visionImage3="/images/portfolio/plasma/3.png"
        spanImage="/assets/img/icons/span1.png"
        visionTitle="Smart Contract Integration for Plasma Blockchain"
        visionDescription="Zynex Solutions collaborated with Plasma to develop smart contracts that securely attest stablecoins on the Plasma blockchain. The integration enhanced reliability, transparency, and transaction efficiency across their ecosystem."
        icon1="/assets/img/icons/about-solution-iocn1.png"
        title1="Secure Stablecoin Attestation"
        description1="Our team designed and deployed smart contracts that verify and record stablecoin transactions on-chain, ensuring authenticity and preventing tampering."
        icon2="/assets/img/icons/about-solution-iocn2.png"
        title2="Enhanced Blockchain Performance and Trust"
        description2="By optimizing Plasma’s blockchain infrastructure, the solution improved processing speed, reduced validation errors, and strengthened user trust in decentralized financial operations."
        quoteLink="/contact"
        spanText="Case Study 3"
      />
      <Vision1
        visionImage1="/images/portfolio/hogist/1.png"
        visionImage2="/images/portfolio/hogist/2.png"
        visionImage3="/images/portfolio/hogist/3.png"
        spanImage="/assets/img/icons/span1.png"
        visionTitle="Elevated Hogist’s Customer Service with Gen AI"
        visionDescription="Enhanced Hogist’s customer service by automating processes with Gen AI, driving process efficiency and customer satisfaction."
        icon1="/assets/img/icons/about-solution-iocn1.png"
        title1="AI-Powered Process Automation"
        description1="Implemented Gen AI solutions to automate repetitive workflows, ensuring faster responses and higher efficiency in customer service operations."
        icon2="/assets/img/icons/about-solution-iocn2.png"
        title2="Improved Customer Experience"
        description2="Leveraged AI-driven insights to provide more personalized support, resulting in greater customer satisfaction and loyalty."
        quoteLink="/contact"
        spanText="Case Study 4"
        contentLeft={true}
      />
      <Vision1
        visionImage1="/images/portfolio/lepa/1.png"
        visionImage2="/images/portfolio/lepa/2.png"
        visionImage3="/images/portfolio/lepa/3.png"
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
        spanText="Case Study 5"
      />
      {/* <Blog3></Blog3> */}
      {/* <BlogCustom></BlogCustom> */}
      <Cta1></Cta1>
    </div>
  );
};

export default page;
