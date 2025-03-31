import Blog from "./blog";
import BlogDetailsLeft1 from "./blogdetails";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta1 from "@/app/Components/Cta/Cta1";
import MarqueeText from "@/app/Components/MarqueeText/MarqueeText";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Tech Insights"></BreadCumb>
      <MarqueeText></MarqueeText>
      <BlogDetailsLeft1></BlogDetailsLeft1>
      <Blog></Blog>
      <Cta1></Cta1>
    </div>
  );
};

export default page;
