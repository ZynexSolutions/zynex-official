import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import ProjectDetailsLeft1 from '@/app/Components/ProjectDetails/ProjectDetailsLeft1';
import Service7 from '@/app/Components/Services/Service7';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Project Details Left"></BreadCumb>
            <MarqueeText></MarqueeText>
            <ProjectDetailsLeft1
                mainHeading='A Modern Online Storefront for Lepaa Products'
                mainDescription="We&apos;ve created a minimalistic and modern online storefront for lepaa products. The website&apos;s design is made to bring out the aesthetics of the Natural and Herbal products that lepaa offers."

            />
            {/* <Service7></Service7> */}
            <Cta1></Cta1>
        </div>
    );
};

export default page;