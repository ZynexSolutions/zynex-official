import Link from "next/link";
import SectionTitle3 from "../Common/SectionTitle3";
import Image from "next/image";

export const blogData = [
  {
    imgSrc: "/assets/img/blog/blog6-img1.png",
    tag: "The IT Corner",
    date: "May,27,2024",
    title: "Elevated Hogist Customer Service with a Cutting-Edge AI Chatbot",
    content:
      "We've delivered a state of the art AI chatbot which allows hogist to handle multiple customers and collect meaninful insights to ...",
    link: "/blog/blog-details",
  },
  {
    imgSrc: "/assets/img/blog/blog6-img2.png",
    tag: "The IT Corner",
    date: "May,27,2024",
    title: "Developed a Intelligent Horoscope AI with Agentic AI",
    content:
      "We've developed Agentic AI powered horoscopre AI chatbot. Our intelligent solution delivers consistent results and we've used ...",
    link: "/blog/blog-details",
  },
  {
    imgSrc: "/assets/img/blog/blog6-img3.png",
    tag: "The IT Corner",
    date: "May,27,2024",
    title:
      "Crafted a Sophisticated E-Learning App for Madras Defence Academy",
    content:
      "We've developed an e-learning app for Madras Defence Academy, which helped them educate students, build a community and increase...",
    link: "/blog/blog-details",
  },

  {
    imgSrc: "/assets/img/blog/blog6-img2.png",
    tag: "The IT Corner",
    date: "May,27,2024",
    title: "Secured 300 Leads in Under 2 Weeks for Silver Castle Unified Pvt. Ltd.",
    content:
      "Each lead costed only 5 Rs. We've helped Silver Castle Unified generate leads with high Retun on Ad Spend, achieving this milestone...",
    link: "/blog/blog-details",
  },
  {
    imgSrc: "/assets/img/blog/blog6-img3.png",
    tag: "The IT Corner",
    date: "May,27,2024",
    title:
      "Empowering Strategy Trader with a Personalized Course Selling Platform",
    content:
      "We've Partnered with Strategy Trader to build a robust, user-friendly course selling platform tailored to their unique trading expertise...",
    link: "/blog/blog-details",
  }
];

const BlogCustom = () => {
  return (
    <div className="blog7 sp" style={{ paddingTop: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto text-center">
            <div className="heading7">
              <SectionTitle3
                SubTitle="Our Preivous Work"
                Title="Explore Our <span>Success Stories</span>"
              // content="Whether you are looking to enhance productivity, improve efficiency, or stay ahead of technological advancements, we've got you covered."
              ></SectionTitle3>
            </div>
          </div>
        </div>
        {/* First Row of Blogs */}
        <div className="row">
          {blogData.slice(0, 3).map((blog, index) => (

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in-up"
              data-aos-duration={700 + index * 200}
              key={`first-${index}`}
            >
              <div className="blog-box">
                <div className="image image-anime">
                  <Image
                    src={blog.imgSrc}
                    alt="img"
                    width={416}
                    height={304}
                  />
                </div>
                <div className="tags-area">
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/tag6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    {blog.tag}
                  </a>
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/date6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />{" "}
                    {blog.date}
                  </a>
                </div>
                <div className="heading7">
                  <h4>
                    <Link href={blog.link}>{blog.title}</Link>
                  </h4>
                  <p>{blog.content}</p>
                  <Link href={blog.link} className="learn">
                    Learn More{" "}
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row of Blogs with inline style for margin-top */}
        <div className="row" style={{ marginTop: "20px" }}>
          {blogData.slice(3).map((blog, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in-up"
              data-aos-duration={700 + index * 200}
              key={`second-${index}`}
            >
              <div className="blog-box">
                <div className="image image-anime">
                  <Image
                    src={blog.imgSrc}
                    alt="img"
                    width={416}
                    height={304}
                  />
                </div>
                <div className="tags-area">
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/tag6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    {blog.tag}
                  </a>
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/date6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />{" "}
                    {blog.date}
                  </a>
                </div>
                <div className="heading7">
                  <h4>
                    <Link href={blog.link}>{blog.title}</Link>
                  </h4>
                  <p>{blog.content}</p>
                  <Link href={blog.link} className="learn">
                    Learn More{" "}
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCustom;