import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import Vision1 from '@/app/Components/Mission/Vission1';
import Service6 from '@/app/Components/Services/Service6';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Our Services"></BreadCumb>
            <MarqueeText></MarqueeText>
            {/* <Service6></Service6> */}
            <Vision1
                visionImage1= "/assets/img/about/visiton-img1.png"
                visionImage2 = "/assets/img/about/visiton-img2.png"
                visionImage3 = "/assets/img/about/visiton-img3.png"
                spanImage = "/assets/img/icons/span1.png"
                visionTitle = "Driving Innovation: Our Vision at TechXen"
                visionDescription = "At TechXen, our vision is to be the leading force driving digital transformation and innovation worldwide. We envision a future where businesses of all sizes have the tools and expertise they need to thrive in an increasingly digital world."
                icon1 = "/assets/img/icons/about-solution-iocn1.png"
                title1 = "Network Infrastructure Solutions"
                description1 = "Build a reliable and secure network infrastructure that <br/> supports your business operations enables seamless"
                icon2 = "/assets/img/icons/about-solution-iocn2.png"
                title2 = "Managed It Services"
                description2 = "Focus on your core business activities while we take <br/> care of your IT needs with our managed IT services."
                quoteLink = "/contact"
                spanText = "Case Study 1"
            />
            <Cta1></Cta1>            
        </div>
    );
};

export default page;
